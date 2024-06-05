import dynamic from 'next/dynamic'

const IconsPreview = dynamic(() => import('@components/IconsPreview'), { ssr: false })
const Home = dynamic(() => import('@components/Home'), { ssr: false })
const SQLEditor = dynamic(() => import('@components/SQLEditor'), { ssr: false })
const CloudUI = dynamic(() => import('@components/CloudUI'), { ssr: false })

export function IconsPreviewPage() {
  return <IconsPreview />
}

export function HomePage() {
  return <Home />
}

export function SQLEditorPage() {
  return <SQLEditor />
}

export function CloudUIPage() {
  return <CloudUI />
}
