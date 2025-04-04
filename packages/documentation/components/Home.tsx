/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8HyWdCsmg0x
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'
import { JSX, SVGProps } from 'react'

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] overflow-hidden">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80" /> */}
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source
              src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/video/3129671-uhd_3840_2160_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary-foreground px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">TiUI</h1>
            <p className="max-w-[900px] text-lg md:text-2xl mb-8 text-white">
              Unleash the power of our open-source FE infrastructure, by TiDB Cloud FE Team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/docs"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/tidbcloud/tidbcloud-uikit"
                target="_blank"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] mb-2">
                  Welcome to TiUI!
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  <b>TiUI</b> is the UI library and FE efficiency tools for TiDB Cloud, which includes Cloud UI, SQL
                  editor, icons and RAP API Platform. It enhances our development efficiency and unifies UI style and
                  interaction experience.
                </p>
              </div>
            </div>
            <img
              src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/tidb-cloud.png"
              width="1270"
              height="300"
              alt="Hero"
              className="mx-auto overflow-hidden rounded-t-xl object-cover"
            />
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Cloud UI Components
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Beautifully Designed Components</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our library offers a wide range of high-quality, customizable components that are easy to integrate
                  into your React applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <img
                  src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/pro-table-2.png"
                  width="550"
                  height="310"
                  alt="Button"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Cloud UI Primitive & Business</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <b>Cloud UI</b> is the component library for TiDB Cloud. It is based on Mantine and includes many
                    business-specific customizations, providing better support for Dark Mode. Additionally, it has
                    accumulated a large number of business components.
                  </p>
                </div>
                <Link
                  href="/cloud-ui"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
              <div className="grid gap-4">
                <img
                  src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/icons-2.png"
                  width="550"
                  height="310"
                  alt="Card"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Cloud UI Icons</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A set of <b>icons</b> designed by the TiDB Cloud design team for the cloud database web console,
                    meeting most of the needs of a complex console. Very suitable to console apps. We are continously
                    adding new icons. Feel free to use it.
                  </p>
                </div>
                <Link
                  href="/icons"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
              <div className="grid gap-4">
                <img
                  src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/sql-editor.png"
                  width="550"
                  height="310"
                  alt="Modal"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Ti SQL Editor</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <b>Ti SQL Editor</b> is an SQL Editor wrapped around CodeMirror, significantly enhancing usability.
                    It includes numerous improvements for common features such as syntax error handling, Chinese
                    language processing, and interactive pop-ups. within TiDB Cloud.
                  </p>
                </div>
                <Link
                  href="/sql-editor"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 sm:py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl lg:text-5xl">
                  RAP API Management Portal
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  An automation、visualization and documentation API management platform, a 20k stars open-sourced
                  project. Generating TypeScript code automatically, providing a friendly UI for API management, and
                  supporting mock data generation.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://doc.rapapi.cn"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    target="_blank"
                    prefetch={false}
                  >
                    Documentation
                  </Link>
                  <Link
                    href="https://rapapi.cn"
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Visit RAP
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 -z-10 animate-spin-slow">
                  <div>
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
