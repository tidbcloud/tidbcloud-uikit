import type { DocsThemeConfig } from 'nextra-theme-docs'

const logo = (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#111111" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.9292 7.97763C18.1109 6.56497 16.8732 5.43667 15.3846 4.74642C13.896 4.05616 12.2289 3.83752 10.6104 4.12026C8.99195 4.403 7.50075 5.17339 6.33994 6.32648C5.17913 7.47958 4.40515 8.95932 4.12342 10.5642C2.84881 10.8585 1.72789 11.6071 0.973965 12.6675C0.220036 13.7279 -0.11427 15.0259 0.0346614 16.3147C0.183593 17.6035 0.805368 18.7931 1.78166 19.657C2.75796 20.5209 4.02063 20.9989 5.32938 21C5.50988 20.9998 5.69025 20.9907 5.86982 20.9727H16.7941C16.9727 20.9867 17.1521 21 17.3346 21C18.9633 20.9999 20.5357 20.4087 21.7547 19.3381C22.9738 18.2675 23.7552 16.7915 23.9514 15.1889C24.1477 13.5863 23.7451 11.9679 22.8199 10.6393C21.8946 9.31077 20.5106 8.36394 18.9292 7.97763ZM11.9897 10.4957V17.6141L9.92522 16.4344V11.6778L7.8601 12.8601V10.4971L11.9897 8.13364L14.054 9.31433L11.9897 10.4957ZM16.1388 15.2469L14.0658 16.4328V11.6902L16.1388 10.5027V15.2469Z"
        fill="inherit"
      />
    </svg>
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
