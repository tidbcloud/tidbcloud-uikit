import Link from 'next/link'
import React from 'react'

// Simple Icons as components to avoid dependency issues
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

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </svg>
)

const DatabaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
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

const PaletteIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Grid & Gradient */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-30" />

        <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            v2.0 is now available
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up [animation-delay:100ms]">
            Build <span className="text-gradient">Cloud-Native</span> <br className="hidden md:block" />
            Interfaces with Speed
          </h1>

          <p className="max-w-[800px] text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up [animation-delay:200ms]">
            The definitive UI library for TiDB Cloud. A comprehensive suite of components, icons, and tools designed to
            build modern, consistent, and powerful data applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:300ms]">
            <Link
              href="/docs"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-blue-500/20 transition-all hover:bg-primary/90 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="https://github.com/tidbcloud/tidbcloud-uikit"
              target="_blank"
              className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 text-base font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid (Bento) */}
      <section className="w-full py-12 md:py-24 bg-muted/30 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Everything you need</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              From basic primitives to complex business logic, TiUI has you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1: Cloud UI (Large) */}
            <div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-t border-l border-white/50 dark:border-white/10">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <LayersIcon className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <LayersIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Cloud UI Components</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  A rich set of React components based on Mantine, customized for enterprise-grade data applications.
                  Includes advanced tables, forms, and layout primitives.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">Mantine Based</span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">TypeScript</span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">Accessible</span>
                </div>
              </div>
            </div>

            {/* Card 2: SQL Editor */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-t border-l border-white/50 dark:border-white/10">
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <DatabaseIcon className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                  <CodeIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">SQL Editor</h3>
                <p className="text-muted-foreground mb-4">
                  A powerful, embeddable SQL editor with syntax highlighting, autocomplete, and themes.
                </p>
                <Link
                  href="/sql-editor"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                >
                  Learn more <ArrowRightIcon className="ml-1 w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Card 3: Theming */}
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-t border-l border-white/50 dark:border-white/10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-pink-100 dark:bg-pink-900/50 flex items-center justify-center mb-6 text-pink-600 dark:text-pink-400">
                  <PaletteIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Theming System</h3>
                <p className="text-muted-foreground">
                  Built-in dark mode support and flexible theme customization to match your brand identity.
                </p>
              </div>
            </div>

            {/* Card 4: Icons & Assets */}
            <div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-t border-l border-white/50 dark:border-white/10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl font-bold mb-2">Comprehensive Icon Set</h3>
                <p className="text-muted-foreground mb-6">
                  A complete collection of icons designed specifically for TiDB Cloud interfaces. Consistent, scalable,
                  and easy to use.
                </p>
                <Link
                  href="/icons"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-6 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80"
                >
                  Browse Icons
                </Link>
              </div>
              <div className="flex-1 grid grid-cols-4 gap-4 opacity-50 group-hover:opacity-80 transition-opacity">
                {/* Decorative Icon Grid */}
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-lg bg-muted flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-foreground/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
