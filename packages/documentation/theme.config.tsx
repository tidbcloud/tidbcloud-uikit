import type { DocsThemeConfig } from 'nextra-theme-docs'

const logo = (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <b>TiUI</b>
  </div>
)

const config: DocsThemeConfig = {
  logo,
  project: {
    link: 'https://github.com/tidbcloud/tidbcloud-uikit'
  },
  docsRepositoryBase: 'https://github.com/tidbcloud/tidbcloud-uikit/tree/master/packages/documentation',
  toc: {
    backToTop: true
  },
  footer: {
    text: 'TiUI'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - TiUI'
    }
  }
}

export default config
