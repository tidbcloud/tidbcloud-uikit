import { Box, BoxProps, ElementProps, ScrollArea } from '../../../primitive/index.js'
import { mergeSxList } from '../../../utils/index.js'

interface NavbarSectionProps extends BoxProps, ElementProps<'div'> {
  /**
   * Determines whether the section should take all available space.
   * `false` by default
   */
  grow?: boolean

  /**
   * Determines whether the section should be scrollable.
   * `false` by default
   * It will be wrapped with `ScrollArea` if `true`
   */
  scrollable?: boolean
}

export const NavbarSection = ({ grow, scrollable, mod, sx, ...rest }: NavbarSectionProps) => {
  return (
    <Box
      component={scrollable ? ScrollArea : undefined}
      mod={[{ grow, scrollable }, mod]}
      sx={mergeSxList([
        {
          flexGrow: 0,
          '&:where([data-grow])': {
            flexGrow: 1
          }
        },
        sx
      ])}
      {...rest}
    />
  )
}
