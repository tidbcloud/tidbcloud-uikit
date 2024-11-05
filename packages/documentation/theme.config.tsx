import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const logo = (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <img src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/favicon3.png" width="25px" />
    <b>TiUI</b>
  </div>
)

const config: DocsThemeConfig = {
  logo,
  head() {
    const { frontMatter } = useConfig()
    return (
      <>
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/favicon3.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={frontMatter.title || 'TiUI - TiDB Cloud UI Library'} />
        <meta
          property="og:description"
          content="TiUI is the UI library for TiDB Cloud, which includes Cloud UI, SQL editor, icons. It enhances development efficiency and unifies UI style and interaction experience."
        />
      </>
    )
  },
  project: {
    link: 'https://github.com/tidbcloud/tidbcloud-uikit'
  },
  docsRepositoryBase: 'https://github.com/tidbcloud/tidbcloud-uikit/tree/master/packages/documentation',
  toc: {
    backToTop: true
  },
  footer: {
    content: <span>TiUI - TiDB Cloud</span>
  },
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1
  }
}

export default config
