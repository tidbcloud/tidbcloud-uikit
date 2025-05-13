import { PageShellBaseBody, type PageShellBaseBodyProps } from './PageShellBaseBody.js'
import { PageShellBaseHeader, type PageShellBaseHeaderProps } from './PageShellBaseHeader.js'
import { PageShellBaseRoot, type PageShellBaseRootProps } from './PageShellBaseRoot.js'
import { PageShellBaseTitle, type PageShellBaseTitleProps } from './PageShellBaseTitle.js'

const Root = PageShellBaseRoot
const Header = PageShellBaseHeader
const Title = PageShellBaseTitle
const Body = PageShellBaseBody

export const PageShellBase = {
  Root,
  Header,
  Title,
  Body
}

export { PageShellBaseRoot, PageShellBaseHeader, PageShellBaseTitle, PageShellBaseBody }

export type { PageShellBaseHeaderProps, PageShellBaseRootProps, PageShellBaseTitleProps, PageShellBaseBodyProps }
