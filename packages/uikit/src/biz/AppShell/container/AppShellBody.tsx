import { Box, BoxProps, ElementProps } from '../../../primitive/index.js'
import { mergeSxList } from '../../../utils/index.js'

interface AppShellBodyProps extends BoxProps, ElementProps<'main'> {}

export const AppShellBody = ({ sx, ...rest }: AppShellBodyProps) => {
  return (
    <Box
      component="main"
      sx={mergeSxList([
        (theme) => ({
          flex: 1,
          overflowX: 'auto',
          backgroundColor: theme.colors.carbon[1]
        }),
        sx
      ])}
      {...rest}
    />
  )
}
