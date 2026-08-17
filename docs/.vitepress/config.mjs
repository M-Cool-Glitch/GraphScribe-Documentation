import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GraphScribe',
  description: 'Turn Unreal Engine Blueprints into readable docs and AI-ready graphs',
  base: '/GraphScribe-Docs/',
  appearance: 'force-dark',
  head: [
    ['link', { rel: 'icon', href: '/GraphScribe-Docs/EditorIcon.svg', type: 'image/svg+xml' }]
  ],
  themeConfig: {
    logo: '/EditorIcon.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/what-is-graphscribe' },
      { text: 'Reference', link: '/reference/supported-assets' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'What is GraphScribe?', link: '/guide/what-is-graphscribe' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Quick Start', link: '/guide/quick-start' }
        ]
      },
      {
        text: 'Exporting',
        items: [
          { text: 'Ways to Export', link: '/guide/exporting' },
          { text: 'Project Settings', link: '/guide/settings' }
        ]
      },
      {
        text: 'Output Formats',
        items: [
          { text: 'Choosing a Format', link: '/guide/formats' },
          { text: 'Markdown', link: '/guide/markdown-output' },
          { text: 'Graphify (AI Graphs)', link: '/guide/graphify-output' },
          { text: 'Mermaid', link: '/guide/mermaid-output' },
          { text: 'JSON', link: '/guide/json-output' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Supported Assets', link: '/reference/supported-assets' },
          { text: 'Schema & Stability', link: '/reference/schema' },
          { text: 'Diagnostics Codes', link: '/reference/diagnostics' },
          { text: 'Changelog', link: '/reference/changelog' }
        ]
      }
    ],
    socialLinks: [],
    footer: {
      message: 'GraphScribe Documentation',
      copyright: 'Copyright © CoolGlitch'
    }
  }
})
