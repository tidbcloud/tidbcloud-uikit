import { mergeSxList } from '../../../utils/index.js'

import { NavItemBase, NavItemBaseProps } from './NavItemBase.js'

export type SubNavItemBaseProps = Omit<NavItemBaseProps, 'leftSection' | 'defaultOpened'>

/**
 * Base component for sub navigation items
 * Handles only the styling aspects, no routing logic
 */
export const SubNavItemBase = (props: SubNavItemBaseProps) => {
  return (
    <NavItemBase
      {...props}
      sx={mergeSxList([
        {
          '&:not(:last-child)': {
            marginBottom: 8
          }
        },
        props.sx
      ])}
    />
  )
}
