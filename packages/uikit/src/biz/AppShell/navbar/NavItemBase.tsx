import { HoverCard, NavLink, NavLinkProps } from '../../../primitive/index.js'

// Base NavItem properties
export interface NavItemBaseProps
  extends Pick<
    NavLinkProps,
    | 'label'
    | 'leftSection'
    | 'rightSection'
    | 'active'
    | 'defaultOpened'
    | 'disabled'
    | 'onClick'
    | 'mod'
    | 'sx'
    | 'styles'
    | 'style'
    | 'children'
  > {
  /**
   * Tooltip content
   */
  tooltip?: React.ReactNode
}

/**
 * NavItemBase is a pure UI component for navigation items
 * with no routing or navigation structure knowledge
 */
export const NavItemBase = ({ tooltip, ...restProps }: NavItemBaseProps) => {
  const navlink = <NavLink {...restProps} noWrap childrenOffset="xl" />

  if (tooltip) {
    return (
      <HoverCard shadow="md" width={300} withArrow withinPortal>
        <HoverCard.Target>
          <span>{navlink}</span>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <span>{tooltip}</span>
        </HoverCard.Dropdown>
      </HoverCard>
    )
  }

  return navlink
}
