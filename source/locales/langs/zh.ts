/*
 * MIT License
 *
 * Copyright (c) 2023-2024 Falcion
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * Any code and/or API associated with OBSIDIAN behaves as stated in their distribution policy.
 */

/**
 * JSON for translation of
 * `zh: "简体中文"`
 */
export const LOCALES_ZH = {
    "UNITADE_SETTINGS_COMMON": {
        0: "UNITADE的设置：",
        1: "错误：",
        2: "高级区块",
        3: "代码编辑器区块",
        4: "附加选项",
    },
    "SETTINGS_EXTENSIONS": {
        0: "扩展：",
        1: "输入应注册到保险库中的文件扩展名，以及应该从中开始注册应用程序的文件扩展名（考虑到）：输入必须用“大于号”（'>'）分隔。",
        2: "在此区块中输入扩展名时要小心，它可能开始“垃圾邮件”错误和通知：为了避免此问题，您可以在设置的附加选项区块中打开消除错误功能。",
    },
    "SETTINGS_MOBILE_SPECIFIC": {
        0: "移动设备特定：",
        1: "如果启用此模式，将在移动设备上使用此模块的扩展名和默认特定扩展名（如果未设置移动设备设置）。",
    },
    "SETTINGS_MD_OVERRIDE": {
        0: "启用Markdown覆盖：",
        1: "如果启用，插件初始化时将禁用OBSIDIAN注册表中的Markdown。",
    },
    "SETTINGS_HARD_DELETE": {
        0: "硬删除注册表",
        1: "点击后，将完全热删除所有扩展注册表，Obsidian可以读取的每个扩展都将被删除。请谨慎使用或进行调试。",
    },
    "SETTINGS_HARD_LOAD": {
        0: "硬加载插件注册表",
        1: "点击后，模拟启用插件，即重新加载在插件设置中定义和设置的注册表。",
    },
    "SETTINGS_FORCED_EXTENSIONS": {
        0: "强制查看扩展：",
        1: "输入的扩展名将尝试通过编辑器的codemirror设置初始化以在OBSIDIAN应用程序中启用扩展的视图。",
        2: "由于OBSIDIAN的API不支持此功能，此功能处于半演示状态，在移动设备上更不稳定。",
    },
    "SETTINGS_ONLOAD_REGISTRY": {
        0: "加载时扩展注册表：",
        1: "如果启用，插件将现在注册每个文件的扩展名（此设置：扩展名序列的最后部分），当OBSIDIAN捕捉到新文件出现在保险库中时。",
        2: "当启用不安全的加载时注册表时，此模式是可互换的（即禁用）。",
    },
    "SETTINGS_ONLOAD_UNSAFE": {
        0: "加载不安全的扩展注册表：",
        1: "如果启用，插件将现在注册每个文件的扩展名（此设置：扩展名序列的每个部分），当OBSIDIAN捕捉到新文件出现在保险库中时。",
        2: "当启用正常的加载时注册表时，此模式是可互换的（即禁用）。",
    },
    "SETTINGS_WARNING_MSG": {
        0: "注意：此设置可能导致OBSIDIAN扩展注册表中的扩展发起“垃圾邮件攻击”，并由于应用程序本身的编辑格式而损坏一些文件，使用此功能时要小心。",
    },
    "SETTINGS_IGNORE_MODE": {
        0: "忽略模式：",
        1: "如果启用，插件现在将通过用户输入忽略指定类型的扩展和通过正则表达式忽略文件。",
    },
    "SETTINGS_IGNORE_EXTENSIONS": {
        0: "忽略扩展名：",
        1: "输入应在加载时注册表之前被插件忽略的文件扩展名。",
    },
    "SETTINGS_IGNORE_FILES": {
        0: "忽略文件（正则表达式）：",
        1: "输入应该被插件忽略的文件的文件掩码（正则表达式）。",
    },
    "SETTINGS_IGNORE_MSG": {
        0: "此设置仅适用于加载时注册表功能：这意味着仅当文件被添加到保险库时，忽略扩展名和文件才会起作用。",
    },
    "SETTINGS_GROUP_EXTENSIONS": {
        0: "分组的扩展名：",
        1: "按指定的语法输入要视为其他自定义扩展名的扩展名（组由（';'）分号分隔，而值由（'>'）符号分隔）。",
        2: "查看插件的文档以获取视图列表，更多信息，请参阅wiki。",
    },
    "SETTINGS_GROUP_MSG": {
        0: "请注意，由于整个插件和OBSIDIAN的API架构不稳定，建议在使用此模块之前关闭每个其他设置并尽可能清除它们：您可以仅在此区块中设置每个其他模块。",
    },
    "SETTINGS_BAREFILES": {
        0: "加载时的裸文件注册表：",
        1: "如果启用，插件将尝试注册没有扩展名的文件（所谓的裸文件）：对于仅具有扩展名的文件（所谓的点文件），请使用加载时扩展注册表。",
        2: "此设置注册空扩展名，可以在扩展设置区块中手动完成。",
    },
    "MODALS_INCLUDE_REGISTRY": {
        0: "包括在扩展注册表中：",
        1: "如果启用，生成的文件的扩展名将被插入扩展名数组中。",
    },
    "SETTINGS_FORCE_UNLOAD": {
        0: "强制卸载",
        1: "点击后，导致模拟禁用插件，即重新加载保险库中扩展的注册表以默认模式。",
    },
    "SETTINGS_RELOAD_REGISTRIES": {
        0: "重新加载注册表",
        1: "重新加载视图和注册表扩展，提供新的设置和数据给应用程序，并保持体验与配置的最新状态。",
    },
    "SETTINGS_DEBUG_MODE": {
        0: "调试模式：",
        1: "此模式在应用程序的控制台中开始输出您执行的操作。",
        2: "如果您不是开发人员或不熟悉控制台，请勿使用此模式。",
    },
    "SETTINGS_SILENCE_ERRORS": {
        0: "消除错误：",
        1: "此模式消除每个错误并禁用通知：在错误“垃圾邮件”情况下可能有所帮助。",
    },
    "MODAL_EDIT_EXTENSION": {
        0: "编辑扩展名",
    },
    "MODAL_CREATE_WITH_EXTENSION": {
        0: "使用扩展名创建",
    },
    "MODAL_EDIT_MULTIPLE": {
        0: "编辑多个扩展名",
        1: "重命名多个文件",
    },
    "SETTINGS_COMPATIBILITY": {
        0: "兼容性模块：",
        1: "如果打开，插件在启动时会尝试解析过去版本的配置到具有旧数据的新配置：可能不稳定，默认情况下关闭。",
    },
    "SETTINGS_COMPATIBILITY_BUTTON": {
        0: "使配置兼容",
        1: "点击后，插件将尝试使配置与其新功能和配置迭代兼容。",
    },
    "BUTTON_WIKI": {
        0: "打开插件的wiki",
        1: "点击后，将重定向到项目的GitHub wiki页面，其中包含有关整个插件的文档。",
        2: "这将将您重定向到外部链接。需要互联网访问。",
        3: "打开wiki",
    },
    "MODAL_INCLUDE_IN_REGISTRY": {
        0: "包括在扩展注册表中：",
        1: "如果启用，生成的文件的扩展名将被插入扩展名数组中。",
    },
    "ERROR_REGISTRY_EXTENSION": {
        0: "无法将扩展名：{0} 注册为 {1}。\n它已经注册。",
        1: "无法将扩展名：{0} 注册为 {1}。\n{2}",
        2: "无法注销扩展名：{0}。",
        3: "注册扩展名时出错：",
    },
    "ERROR_COMMON_MESSAGE": {
        0: "来自UNITADE插件的错误：",
    },
    "SETTINGS_CASE_INSENSITIVE": {
        0: "大小写不敏感模式：",
        1: "如果启用，插件将注册扩展名的每个大写和小写变体，以提供类似Windows的扩展体验。",
        2: "UNIX系统上不稳定。",
        3: "注意：此模式可能会在您有太多扩展名和/或大量扩展名时“无限”崩溃您的保险库，请在使用此模式时格外小心！",
    },
    "MODAL_EDIT_FENCE": {
        0: "编辑代码围栏",
    },
    "SETTINGS_CODE_EDITOR": {
        0: "启用代码编辑器模块：",
        1: "此模式将启用代码编辑器功能，例如语法高亮，智能感应等。",
        2: "可能会导致延迟和其他问题。",
        3: "代码编辑器的字体设置：",
    },
    "CODE_EDITOR_USE_DEFAULT": {
        0: "使用默认扩展：",
        1: "如果禁用，代码编辑器模块将需要输入自己的扩展名，否则，它将使用配置中的“简单”扩展名。",
        2: "此块也可以由分组的扩展名替换。",
        3: "请注意，这些扩展名必须从每个其他扩展名中排除，否则可能会出现呈现错误，请使用指定的功能来“克隆”扩展名。",
    },
    "CODE_EDITOR_FOLDING": {
        0: "启用折叠：",
        1: "一项功能，允许您隐藏（折叠）代码的部分以提高可读性。",
    },
    "CODE_EDITOR_LINE_NUMBERS": {
        0: "行数：",
        1: "在编辑器中显示行号的功能。",
    },
    "CODE_EDITOR_WORD_WRAPPING": {
        0: "自动换行：",
        1: "功能允许文本在超出编辑器宽度时自动换行到下一行。",
    },
    "CODE_EDITOR_MINIMAPPING": {
        0: "启用缩略图：",
        1: "提供整篇文档的缩略图视图的功能。",
    },
    "CODE_EDITOR_SEMANTIC_VALIDATION": {
        0: "启用语义验证：",
        1: "此过程检查代码是否存在逻辑错误以及变量、函数和其他元素的正确使用。语义验证考虑到代码的上下文和含义。",
    },
    "CODE_EDITOR_SYNTAX_VALIDATION": {
        0: "启用语法验证：",
        1: "此过程检查代码是否存在与其结构和语法相关的错误。它分析代码是否遵循编程语言的规则。",
    },
    "CODE_EDITOR_EDIT_THEME": {
        0: "编辑器主题：",
        1: "为代码编辑器选择特定主题，视觉上影响语法高亮。",
    },
    "CODE_EDITOR_FONT_SIZE": {
        0: "字体大小：",
    },
    "CODE_EDITOR_FONT_FAMILY": {
        0: "字体系列：",
        1: "在此处输入现有的字体系列和字体本身：输入格式与任何代码编辑器中相同。",
    },
    "CODE_EDITOR_FONT_LIGATURES": {
        0: "字体连字：",
        1: "如果您的字体支持连字，您可以打开它们。",
        2: "如果字体不支持连字，这将不起作用。",
    },
    "MODAL_INCLUDE_IN_CODE_EDITOR": {
        0: "包括在代码编辑器模块中：",
        1: "如果启用，创建的文件将被视为代码编辑器模块而不仅仅是默认的vanilla扩展名作为Markdown系统。",
        2: "如果两种模式都启用，可能会引起不稳定的行为。",
        3: "如果文件同时使用代码编辑器模块和默认扩展名作为Markdown系统，可能会导致呈现系统的不稳定行为，如果您的文件是一个特殊案例，请同时使用两种模式。",
        4: "如果代码编辑器模块使用默认扩展名数组（具有“使用默认扩展名”的设置），扩展名将被插入默认扩展名数组中，否则将被插入代码编辑器扩展名数组中。",
    },
};
