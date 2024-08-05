import Link from 'next/link'

export default function Component() {
  return (
    <div className="flex flex-col min-h-[90dvh]">
      <main className="flex-1">
        <section id="features" className="w-full py-3 md:py-6 lg:py-16">
          <div className="container space-y-12 px-4 md:px-12">
            <div className="flex flex-col items-center justify-center space-y-1 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Better Demos Preview</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Full version and sample version providing different levels of experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-4 sm:grid-cols-2 md:gap-12 lg:grid-cols-2">
              <div className="grid gap-4">
                <img
                  src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/elements/20240731-173155.jpeg"
                  width="550"
                  height="310"
                  alt="Button"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Full Version</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Fully functional application developed using Vercel and Next.js, allowing SQL execution and
                    management of multiple SQL files. By default, there are 3 databases available for use.
                  </p>
                </div>
                <Link
                  href="https://tisqleditor.vercel.app/playground"
                  target="_blank"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>

              <div className="grid gap-4">
                <img
                  src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/elements/20240731-173200.jpeg"
                  width="550"
                  height="310"
                  alt="Modal"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Sample Version</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A lightweight editor example that allows users to switch plugins to experience and explore different
                    functions. rovides editors with different plugins and complete plugins. Try it freely.
                  </p>
                </div>
                <Link
                  href="https://tisqleditor.vercel.app/examples?theme=oneDark&ex=all"
                  target="_blank"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
