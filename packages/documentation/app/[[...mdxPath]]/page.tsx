import { useMDXComponents as getMDXComponents } from '@mdx-components'
import { generateStaticParamsFor, importPage } from 'nextra/pages'

type PageProps = { params: Promise<{ mdxPath?: string[] }> }

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata({ params }: PageProps) {
  const { mdxPath } = await params
  const { metadata } = await importPage(mdxPath)
  return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page({ params }: PageProps) {
  const { mdxPath } = await params
  const { default: Content, toc, metadata, sourceCode } = await importPage(mdxPath)

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <Content params={await params} />
    </Wrapper>
  )
}
