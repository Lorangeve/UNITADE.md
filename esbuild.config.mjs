import esbuild from "esbuild";
import { sassPlugin } from 'esbuild-sass-plugin'
import process from "process";
import builtins from "builtin-modules";
import glsl from "esbuild-plugin-glsl";

const banner =
    `/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/
`;

const prod = (process.argv[2] === "production");

const context = await esbuild.context({
    banner: {
        js: banner,
    },
    entryPoints: ["source/main.ts"],
    plugins: [
        sassPlugin(),
        glsl({
            minify: true,
        }),
        {
            name: 'worker-plugin',
            setup(build) {
                build.onResolve({ filter: /\.worker$/ }, args => {
                    return { path: args.path, namespace: 'worker' };
                });

                build.onLoad({ filter: /.*/, namespace: 'worker' }, async (args) => {
                    return {
                        contents: `export default function WorkerWrapper() { return new Worker(new URL("${args.path}", import.meta.url)) }`,
                        loader: 'js',
                    };
                });
            },
        },
    ],
    bundle: true,
    external: [
        "obsidian",
        "electron",
        "@codemirror/autocomplete",
        "@codemirror/collab",
        "@codemirror/commands",
        "@codemirror/language",
        "@codemirror/lint",
        "@codemirror/search",
        "@codemirror/state",
        "@codemirror/view",
        "@lezer/common",
        "@lezer/highlight",
        "@lezer/lr",
        ...builtins],
    format: "cjs",
    target: "es6",
    logLevel: "info",
    sourcemap: prod ? false : "inline",
    treeShaking: true,
    outfile: "out/main.js",
    loader: {
        '.ttf': 'base64',
    },
});

if (prod) {
    await context.rebuild();
    process.exit(0);
} else {
    await context.watch();
}
