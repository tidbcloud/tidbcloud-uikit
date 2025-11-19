import Link from 'next/link'
import React from 'react'

// Icons
const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const ZapIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

export default function SQLEditor() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none opacity-50" />

        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950/30 px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-300 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2 animate-pulse"></span>
                Powered by CodeMirror
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Ti SQL <br />
                <span className="text-gradient from-purple-600 to-pink-500">Editor</span>
              </h1>

              <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
                An enhanced SQL editor component with syntax highlighting, error handling, and intelligent autocomplete.
                Designed for the modern data cloud.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/docs/sql-editor-getting-started"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-purple-500/20 transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View Documentation
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto lg:ml-auto animate-fade-in-up [animation-delay:200ms]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 glass-card p-2">
                <img
                  src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/sql-editor.png"
                  alt="SQL Editor Hero"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-12 md:py-24 bg-muted/30 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Simple on the surface, powerful underneath.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Easy to use',
                desc: 'Simplified API designed for quick integration and minimal configuration.',
                icon: ZapIcon,
                color: 'text-yellow-500',
                bg: 'bg-yellow-100 dark:bg-yellow-900/20'
              },
              {
                title: 'Open Source',
                desc: 'Fully open source and community driven. Contribute on GitHub.',
                icon: CodeIcon,
                color: 'text-blue-500',
                bg: 'bg-blue-100 dark:bg-blue-900/20'
              },
              {
                title: 'Grammar Check',
                desc: 'Real-time syntax validation and error reporting for SQL queries.',
                icon: CheckIcon,
                color: 'text-green-500',
                bg: 'bg-green-100 dark:bg-green-900/20'
              },
              {
                title: 'Language Support',
                desc: 'Enhanced support for internationalization, including Chinese language processing.',
                icon: GlobeIcon,
                color: 'text-purple-500',
                bg: 'bg-purple-100 dark:bg-purple-900/20'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-t border-l border-white/50 dark:border-white/10"
              >
                <div className={`h-12 w-12 rounded-2xl ${item.bg} flex items-center justify-center mb-6 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
