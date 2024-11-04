import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  search: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

/** @type {import('next').NextConfig} */
export default withNextra({
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose'
  },
  transpilePackages: ['lodash-es', 'ahooks']
})
