import { Box, BoxProps, ElementProps } from '../../../primitive/index.js'
import { mergeSxList } from '../../../utils/index.js'

interface NavbarProps extends BoxProps, ElementProps<'nav'> {
  /** Determines whether the navbar should have a border */
  withBorder?: boolean

  /** The `z-index` of the navbar */
  zIndex?: React.CSSProperties['zIndex']

  /** Determines whether the navbar should be hidden */
  hidden?: boolean
}

const DEFAULT_NAVBAR_Z_INDEX = 10

export const Navbar = ({ withBorder, zIndex, hidden = false, mod, sx, ...rest }: NavbarProps) => {
  return (
    <Box
      mod={[{ 'navbar-hidden': hidden }]}
      sx={{
        height: '100%',
        position: 'relative',
        width: `var(--app-shell-navbar-width)`,
        transition: 'width 200ms ease',
        '&:where([data-navbar-hidden])': {
          width: 0
        }
      }}
    >
      <Box
        component="nav"
        mod={[{ 'with-border': withBorder }, mod]}
        sx={mergeSxList([
          (theme) => ({
            display: 'flex',
            flexDirection: 'column',
            zIndex: zIndex ?? DEFAULT_NAVBAR_Z_INDEX,
            height: '100%',
            width: `var(--app-shell-navbar-width)`,
            backgroundColor: theme.colors.carbon[2],
            transition: 'transform 200ms ease',
            transform: hidden ? 'translateX(-100%)' : 'none',
            '&:where([data-with-border])': {
              borderRight: `1px solid ${theme.colors.carbon[3]}`
            }
          }),
          sx
        ])}
        {...rest}
      />
    </Box>
  )
}
