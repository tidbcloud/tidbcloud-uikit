import dynamic from 'next/dynamic'

const IconsPreview = dynamic(() => import('@components/IconsPreview'), { ssr: false })
const HomePage = dynamic(() => import('@components/HomePage'), { ssr: false })

export function IconsPreviewPage() {
  return <IconsPreview />
}

export function Home() {
  return <HomePage />
}
