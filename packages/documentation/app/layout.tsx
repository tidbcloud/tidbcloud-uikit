import { UIKitProvider } from '@components/UIKitProvider'
import type { Metadata } from 'next'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import type { ReactNode } from 'react'
import 'nextra-theme-docs/style.css'
import '../globals.css'
import '@tidbcloud/uikit/style.css'

const description =
  'TiUI is the UI library for TiDB Cloud, which includes Cloud UI, SQL editor, icons. It enhances development efficiency and unifies UI style and interaction experience.'

export const metadata: Metadata = {
  title: { default: 'TiUI - TiDB Cloud UI Library', template: '%s – TiUI' },
  description,
  icons: { icon: 'https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/favicon3.png' },
  openGraph: { siteName: 'TiUI', description }
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={
            <Navbar
              logo={
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <img
                    src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/favicon3.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                  <b>TiUI</b>
                </div>
              }
              projectLink="https://github.com/tidbcloud/tidbcloud-uikit"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/tidbcloud/tidbcloud-uikit/tree/v2/packages/documentation/content"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          copyPageButton={false}
          footer={
            <Footer>
              <p className="text-xs">© {new Date().getFullYear()} TiDB Cloud FE Team. All rights reserved.</p>
            </Footer>
          }
        >
          <UIKitProvider>{children}</UIKitProvider>
        </Layout>
      </body>
    </html>
  )
}
