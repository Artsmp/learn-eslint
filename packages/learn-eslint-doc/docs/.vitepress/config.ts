import { DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  lang: "zh-CN",
  title: 'ESLint通关小册',
  description: 'Eslint 0-1',
  lastUpdated: true,
  base:"/learn-eslint/",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    siteTitle: "ESLint通关小册",
    logo: '/icon.svg',
    nav: [
      { text: 'Start', link: '/'},
      { text: 'AboutMe', link: 'https://github.com/sudongyuer' },  
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sudongyuer/learn-eslint' }
    ],
    editLink: {
      pattern: 'https://github.com/sudongyuer/learn-eslint/tree/master/packages/learn-eslint-doc/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdatedText:'最后更新',
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present sudongyuer'
    },
    sidebar: getSideBar()
  }
})


function getSideBar():DefaultTheme.Sidebar {
  return [
   {
    text: '入门',
    collapsible: true,
    items:[
      {
        text: '小册简介🍁',
        link: '/guide/小册简介'
      },
      {
        text: '初识Eslint',
        link: '/guide/初识Eslint'
      },
      {
        text: '初始化Eslint',
        link: '/guide/初始化Eslint'
      },
      {
        text: '你需要了解的ESlint配置文件',
        link: '/guide/你需要了解的ESlint配置文件'
      },
      {
        text: '配置文件',
        link: '/guide/配置文件'
      },
      {
        text: '配置语言选项',
        link: '/guide/配置语言选项'
      },
      {
        text: '配置规则',
        link: '/guide/配置规则'
      }
    ]
  },
  {
    text:"实战",
    collapsible: true,
    items:[
      {
        text: '限制节点模块的导入和eqeqeq',
        link: '/guide/限制节点模块的导入和eqeqeq'
      },
      {
        text: '理解抽象语法树AST',
        link: '/guide/理解抽象语法树AST'
      },
      {
        text: '创建一个自定义规则',
        link: '/guide/创建一个自定义规则'
      },
      {
        text: '找到项目中的TODO',
        link: '/guide/找到项目中的TODO'
      },
      {
        text: '在自定义规则中添加参数',
        link: '/guide/在自定义规则中添加参数'
      },
      {
        text: '修复自定义规则中的错误',
        link: '/guide/修复自定义规则中的错误'
      },
      {
        text: 'ESLintPlugin和ESlintConfig的区别',
        link: '/guide/ESLintPlugin和ESlintConfig的区别'
      },
      {
        text: '如何安装并使用ESLintPlugin',
        link: '/guide/如何安装并使用ESLintPlugin'
      },
      {
        text: '如何安装并使用ESLintConfig',
        link: '/guide/如何安装并使用ESLintConfig'
      },
      {
        text: '创建一个可共享的ESLint配置',
        link: '/guide/创建一个可共享的ESLint配置'
      },
      {
        text: '创建一个可共享的ESLint插件',
        link: '/guide/创建一个可共享的ESLint插件'
      },
      {
        text: '在自定义插件中添加rules',
        link: '/guide/在自定义插件中添加rules'
      },
      {
        text: '在React项目中使用ESLint',
        link: '/guide/在React项目中使用ESLint'
      },
      {
        text: '在编辑器中集成Eslint',
        link: '/guide/在编辑器中集成Eslint'
      }
    ]
  }
]
}
