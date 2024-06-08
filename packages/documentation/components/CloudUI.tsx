/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R87ZJeFaF4p
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Acme Components
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A comprehensive library of beautifully designed React components that you can copy and paste into your
                  apps.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  View Documentation
                </Link>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/tidb-cloud.png"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Components</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore a selection of our most popular and versatile components.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square p-4 dark:bg-gray-800">
                  <BoxIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Button</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Highly customizable buttons with built-in accessibility features.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square p-4 dark:bg-gray-800">
                  <CreditCardIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Card</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Versatile card component with header, content, and footer sections.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square p-4 dark:bg-gray-800">
                  <ChevronDownIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Dropdown</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Accessible and customizable dropdown menu component.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square p-4 dark:bg-gray-800">
                  <FileInputIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Input</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Stylish and accessible input fields with built-in validation.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square p-4 dark:bg-gray-800">
                  <NotebookTabsIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Tabs</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Accessible and customizable tab navigation component.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square p-4 dark:bg-gray-800">
                  <PopcornIcon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">Popover</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lightweight and customizable popover component.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Component Categories</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Browse our extensive library of components organized by category.
              </p>
            </div>
            <div className="grid gap-4">
              <Link
                href="#"
                className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                prefetch={false}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
                    <LayoutTemplateIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Layout</span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                prefetch={false}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
                    <NavigationIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Navigation</span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                prefetch={false}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
                    <ShapesIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Form</span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                prefetch={false}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
                    <DatabaseIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Data</span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:bg-gray-950 dark:hover:bg-gray-800 dark:focus:bg-gray-800"
                prefetch={false}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
                    <ReplyIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Feedback</span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </Link>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

function BoxIcon(props) {
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
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}

function FileInputIcon(props) {
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
      <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M2 15h10" />
      <path d="m9 18 3-3-3-3" />
    </svg>
  )
}

function LayoutTemplateIcon(props) {
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
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="9" height="7" x="3" y="14" rx="1" />
      <rect width="5" height="7" x="16" y="14" rx="1" />
    </svg>
  )
}

function MountainIcon(props) {
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

function NavigationIcon(props) {
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
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  )
}

function NotebookTabsIcon(props) {
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
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M15 2v20" />
      <path d="M15 7h5" />
      <path d="M15 12h5" />
      <path d="M15 17h5" />
    </svg>
  )
}

function PopcornIcon(props) {
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
      <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" />
      <path d="M10 22 9 8" />
      <path d="m14 22 1-14" />
      <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />
    </svg>
  )
}

function ReplyIcon(props) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  )
}

function ShapesIcon(props) {
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
      <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <circle cx="17.5" cy="17.5" r="3.5" />
    </svg>
  )
}
