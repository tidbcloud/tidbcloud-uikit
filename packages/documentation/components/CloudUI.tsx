import Link from 'next/link'

import { Button } from '@/components/ui/button'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8HyWdCsmg0x
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function () {
  return (
    <main className="flex-1">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Cloud UI
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                <b>Cloud UI</b> is the component library for TiDB Cloud. It is based on Mantine and includes many
                business-specific customizations, providing better support for Dark Mode. Additionally, it has
                accumulated a large number of business components specifically for the Cloud Database Console.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <img
            src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/tidb-cloud.png"
            width="1270"
            height="300"
            alt="Hero"
            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
          />
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Beautifully Designed Components</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our library offers a wide range of high-quality, customizable components that are easy to integrate into
                your React applications.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Button"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Buttons</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Highly customizable buttons with a variety of styles and sizes.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Card"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Cards</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Versatile card components for displaying content and information.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Modal"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Modals</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Customizable modal components for displaying important information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="installation" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Installation</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Started in Minutes</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Installing Acme React Components is quick and easy. Follow the steps below to get started.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-2xl space-y-4">
            <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-bold">Step 1: Install the package</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Use your preferred package manager to install the Acme React Components library.
              </p>
              <div className="mt-4">
                <pre className="rounded-md bg-gray-100 p-4 text-sm dark:bg-gray-800">
                  <code>npm install @acme/react-components</code>
                </pre>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-bold">Step 2: Import the components</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Import the components you need from the library and start using them in your application.
              </p>
              <div className="mt-4">
                <pre className="rounded-md bg-gray-100 p-4 text-sm dark:bg-gray-800">
                  <code>import Button from '@acme/react-components';</code>
                </pre>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-bold">Step 3: Customize and use</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Customize the components to fit your design and start building amazing user interfaces.
              </p>
              <div className="mt-4">
                <pre className="rounded-md bg-gray-100 p-4 text-sm dark:bg-gray-800">
                  <code>
                    <Button variant="primary">Click me</Button>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="documentation" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Documentation
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Documentation</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our detailed documentation will help you get up and running with Acme React Components in no time.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Getting Started"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Getting Started</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn how to install and set up Acme React Components in your project.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Component Docs"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Component Docs</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore the available components and learn how to use them.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Theming"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Theming</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Learn how to customize the look and feel of Acme React Components.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-" />
        </div>
      </section>
    </main>
  )
}
