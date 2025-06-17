import { NavItemBase, NavItemBaseProps } from './NavItemBase.js'

export type FooterNavItemBaseProps = Omit<NavItemBaseProps, 'defaultOpened' | 'children'>

/**
 * Base component for footer navigation items
 * Handles only the styling aspects, no routing logic
 */
export const FooterNavItemBase = (props: FooterNavItemBaseProps) => {
  return <NavItemBase {...props} />
}
