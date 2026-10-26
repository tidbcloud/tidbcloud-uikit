import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true
})

/** @type {import('next').NextConfig} */
export default withNextra({
  reactStrictMode: true,
  transpilePackages: ['lodash-es', 'ahooks']
})
