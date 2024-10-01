export const LOCALES_FR = {
    "SETTINGS_EXTENSIONS": {
        0: "Extensions:",
        1: "Enter the file extensions that should be registered with the vault and with which the application should start registering (taking into account): input must be separated by semicolons (';')."
    },
    "SETTINGS_MOBILE_SPECIFIC": {
        0: "Mobile-specific:",
        1: "Both this module's extensions and default specific extensions (if mobile settings are not set up) will be used on mobile devices if this mode is enabled."
    },
    "SETTINGS_MD_OVERRIDE": {
        0: "Enable markdown override:",
        1: "If enabled, on plugin's initialization, disables markdown from OBSIDIAN's registry."
    },
    "SETTINGS_HARD_DELETE": {
        0: "Hard-delete registry",
        1: "On click, causes full hot-deletion of entire registry of extensions, every extension which Obsidian could read will be deleted. Use with caution or for debug."
    },
    "SETTINGS_HARD_LOAD": {
        0: "Hard-load plugin's registry",
        1: "On click, causes imitation of enabling plugin, meaning, reloading registries which are defined and set up within plugin's settings."
    },
    "SETTINGS_FORCED_EXTENSIONS": {
        0: "Forced-view extensions:",
        1: "Entered extensions, would be tried to be initialized through codemirror setup of editors enabling extension's view in OBSIDIAN app.",
        2: "This functionality is in semi-demo because of OBSIDIAN's API unsupport for such features, it is more unstable on mobile devices."
    },
    "SETTINGS_ONLOAD_REGISTRY": {
        0: "On-load extension registry:",
        1: "If enabled, plugin will now registry every file's extension (this setting: last part of extensions sequence) when OBSIDIAN catches event of new file appearing in vault.",
        "info": "This mode is interchangeable (that is, disabled) when an unsafe on-load registry is enabled."
    },
    "SETTINGS_ONLOAD_UNSAFE": {
        0: "On-load unsafe extension registry:",
        1: "If enabled, plugin will now registry every file's extension (this setting: every part of extensions sequence) when OBSIDIAN catches event of new file appearing in vault.",
        "info": "This mode is interchangeable (that is, disabled) when a normal on-load registry is enabled."
    },
    "SETTINGS_WARNING_MSG": {
        0: "ATTENTION: this setting can cause a “spam attack” with extensions in the OBSIDIAN extension registry and damage some files due to the editing format of the application itself, be careful when using this functionality."
    },
    "SETTINGS_IGNORE_MODE": {
        0: "Ignore mode:",
        1: "If enabled, plugin now would ignore specified type extensions by user input and files by regular expressions."
    },
    "SETTINGS_IGNORE_EXTENSIONS": {
        0: "Ignore extensions:",
        1: "Enter the file extensions that should be ignored by plugin before add to registry by on-load registry."
    },
    "SETTINGS_IGNORE_FILES": {
        0: "Ignore files (regular expressions):",
        1: "Enter the file masks (regular expressions) by which files should be ignored by plugin."
    },
    "SETTINGS_IGNORE_MSG": {
        0: "This settings works only for on-load registry functionality: meaning that ignoring extensions and files only works with only that functionality when the files are added to the vault."
    },
    "SETTINGS_GROUP_EXTENSIONS": {
        0: "Grouped extensions:",
        1: "Enter by specified syntax extensions which you want to treat as other custom extensions (groups are separated by (';') semicolons while values are separated by (',') commas)."
    },
    "SETTINGS_GROUP_MSG": {
        0: "Keep in mind, this setting is unstable due entire infrastructure of plugin and OBSIDIAN's API, it is recommended to turn off every other setting and clear them if possible before using this module: you can setup every other module just in this block."
    },
    "SETTINGS_BAREFILES": {
        0: "Barefiles on-load registry:",
        1: "If enabled, plugin will try to register files without extensions (so-called bare files): for files with only extension (so-called dot files) use on-load extension registry."
    },
    "MODALS_INCLUDE_REGISTRY": {
        0: "Include in extensions registry:",
        1: "If enabled, generated file's extension would be inserted in extensions array."
    }
};