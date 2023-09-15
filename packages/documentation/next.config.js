const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose'
  },
  transpilePackages: ['@tidbcloud/uikit', 'lodash-es']
})
