import type { DocsThemeConfig } from 'nextra-theme-docs'

const logo = (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <b>TiUI</b>
  </div>
)

const config: DocsThemeConfig = {
  logo,
  head: (
    <>
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/favicon.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="TiUI - TiDB Cloud UI Library" />
      <meta
        property="og:description"
        content="TiUI is the UI library for TiDB Cloud, which includes Cloud UI, SQL editor, icons. It enhances development efficiency and unifies UI style and interaction experience."
      />
    </>
  ),
  project: {
    link: 'https://github.com/tidbcloud/tidbcloud-uikit'
  },
  docsRepositoryBase: 'https://github.com/tidbcloud/tidbcloud-uikit/tree/master/packages/documentation',
  toc: {
    backToTop: true
  },
  footer: {
    text: 'TiUI - TiDB Cloud'
  },
  darkMode: true,
  useNextSeoProps() {
    return {
      titleTemplate: '%s - TiUI'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}

export default config
