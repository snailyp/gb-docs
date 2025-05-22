export default {
  title: "Gemini Balance",
  description: "Gemini Balance 指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/introduction' } // 示例导航
    ],

    sidebar: [
      {
        text: '使用指南',
        items: [
          {text: '项目介绍', link: '/guide/introduction' },
          {text: '环境变量', link: '/guide/environment' },
          {text: 'huggingface部署', link: '/guide/setup-hf' },
          {text: 'clawcloud部署sqlite版本', link: '/guide/setup-clawcloud-sqlite' },
          {text: 'render和clawcloud部署', link: '/guide/setup-render' },
          {text: 'render和clawcloud更新', link: '/guide/update-render' },
          // {text: '使用说明', link: '/guide/usage' },
          {text: '常见问题', link: '/guide/faq' },
          {text: '特别感谢', link: '/guide/acknowledgements' },
          {text: '支持我', link: '/guide/supportme' },
          {text: '联系我', link: '/guide/contactme' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/snailyp/gemini-balance' } // 替换成你的仓库链接
    ]
  }
}