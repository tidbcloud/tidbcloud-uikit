import { Box, BoxProps, ElementProps } from '../../../primitive/index.js'
import { clsx, mergeSxList } from '../../../utils/index.js'

interface AppShellBodyProps extends BoxProps, ElementProps<'main'> {}

export const AppShellBody = ({ className, sx, ...rest }: AppShellBodyProps) => {
  return (
    <Box
      component="main"
      {...rest}
      className={clsx(className, 'tiui-app-shell-body')}
      sx={mergeSxList([
        (theme) => ({
          flex: 1,
          overflowX: 'auto',
          backgroundColor: theme.colors.carbon[1]
        }),
        sx
      ])}
    />
  )
}
