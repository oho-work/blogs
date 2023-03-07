import {defineUserConfig} from 'vuepress'
import {hopeTheme} from "vuepress-theme-hope"
import {mdEnhancePlugin} from "vuepress-plugin-md-enhance"

export default defineUserConfig({
    // 这是后续将文档部署到 github 的免费服务器上是的路径，一般就填写项目的名称，如我这个项目的名称就叫 docs
    base: '/blogs/',
    // 语言
    lang: 'zh-CN',
    // 网站title
    title: 'IT学习笔记',
    // 描述
    description: '这是OHO的个人学习笔记博客网站',
    // 这是往 index.html 文件的头部添加的内容，我这里添加了网站的图标，也就是存放在 public 中的 icon 图片
    head: [
        [
            'link', {rel: 'icon', href: '/blogs/icon.png'}
        ]
    ],
    // 这里使用的是vuepress-theme-hope主题
    theme: hopeTheme({
        // 这是侧边栏标题的图标
        logo: '/icon.png',
        // iconAssets: "fontawesome",
        // 顶部导航栏
        navbar: [
            {
                text: "Index",
                link: "/readme.md"
            },
            {
                text: "Python",
                children: [
                    {
                        text: "爬虫",
                        link: "/Python/Spider/readme.md"
                    },
                    {
                        text: "后端",
                        link: "/Python/Server/readme.md"
                    }
                ]
            },
            {
                text: "Golang",
                children: [
                    {
                        text: "后端",
                        link: "/Golang/Server/readme.md"
                    }
                ]
            },
            {
                text: "Linux",
                // link: "/readme.md"
            },
            {
                text: "Database",
                children: [
                    {
                        text: "Mongodb",
                        link: "/Database/Mongodb/readme.md"
                    },
                    {
                        text: "Mysql",
                        link: "/Database/Mysql/readme.md"
                    },
                    {
                        text: "Redis",
                        link: "/Database/Redis/readme.md"
                    }
                ]
            },
            {
                text: "DevOps",
                // link: "/readme.md"
            },
            {
                text: "Resource",
                link: "/Resource/readme.md"
            },
        ],
        // 侧边栏
        sidebar: {
            '/Resource/': [
                {
                    text: '资源文章',
                    collapsible: true,
                    children: ['JetBrains']
                }
            ]
        },
    }),
    plugins: [
        mdEnhancePlugin({
            tabs: true, // 开启选项卡
            container: true, // 开启自定义容器
            codetabs: true, // 开启代码分组
            align: true, // 段落对齐方式
        })
    ]
})