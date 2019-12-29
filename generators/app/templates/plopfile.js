// Plop的入口文件，需要导出一个函数
// 此函数接收一个plop对象，用于创建生成器任务
const BASIC_URL = "./src/pages/{{fileName}}/";
module.exports = plop => {
    // 创建一个生成器，第一个参数是生成器名称
    plop.setGenerator("component", {
        description: "",
        // 接收用户的命令行输入
        prompts: [{
            type: "input",
            name: "fileName",
            message: "please entry fileName",
            default: ""
        }],
        //执行的操作
        actions: [{
                type: "add",
                path: BASIC_URL + "entry.js",
                templateFile: "./plop-templates/entry.hbs"
            },
            {
                type: "add",
                path: BASIC_URL + "apis/index.js",
                templateFile: "./plop-templates/apis/index.hbs"
            },
            {
                type: "add",
                path: BASIC_URL + "router/index.js",
                templateFile: "./plop-templates/router/index.hbs"
            },
            {
                type: "add",
                path: BASIC_URL + "router/router.config.js",
                templateFile: "./plop-templates/router/router.config.hbs"
            },
            {
                type: "add",
                path: BASIC_URL + "router/router.utils.js",
                templateFile: "./plop-templates/router/router.utils.hbs"
            },
            {
                type: "add",
                path: BASIC_URL + "views/App.vue",
                templateFile: "./plop-templates/views/App.hbs"
            },
            {
                type: "add",
                path: BASIC_URL + "views/index/Index.vue",
                templateFile: "./plop-templates/views/index/Index.hbs"
            },
            {
                type: "add",
                path: BASIC_URL + "vuex/Index.vue",
                templateFile: "./plop-templates/vuex/Index.hbs"
            },
            {
                type: "add",
                path: BASIC_URL + "vuex/Mutations.vue",
                templateFile: "./plop-templates/vuex/Mutations.hbs"
            },
            {
                type: "add",
                path: BASIC_URL + "vuex/State.vue",
                templateFile: "./plop-templates/vuex/State.hbs"
            },
        ]
    });
};