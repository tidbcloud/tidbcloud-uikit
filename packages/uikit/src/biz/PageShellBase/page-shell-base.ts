import { PageShellBaseBackButton, type PageShellBaseBackButtonProps } from './PageShellBaseBackButton.js'
import { PageShellBaseBody, type PageShellBaseBodyProps } from './PageShellBaseBody.js'
import { PageShellBaseHeader, type PageShellBaseHeaderProps } from './PageShellBaseHeader.js'
import { PageShellBaseRoot, type PageShellBaseRootProps } from './PageShellBaseRoot.js'
import { PageShellBaseTitle, type PageShellBaseTitleProps } from './PageShellBaseTitle.js'

const Root = PageShellBaseRoot
const Header = PageShellBaseHeader
const Title = PageShellBaseTitle
const Body = PageShellBaseBody
const BackButton = PageShellBaseBackButton

export const PageShellBase = {
  Root,
  Header,
  Title,
  Body,
  BackButton
}

export { PageShellBaseRoot, PageShellBaseHeader, PageShellBaseTitle, PageShellBaseBody, PageShellBaseBackButton }

export type {
  PageShellBaseHeaderProps,
  PageShellBaseRootProps,
  PageShellBaseTitleProps,
  PageShellBaseBodyProps,
  PageShellBaseBackButtonProps
}
