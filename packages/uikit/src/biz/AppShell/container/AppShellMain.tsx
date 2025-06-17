import { BoxProps, ElementProps, Group } from '../../../primitive/index.js'
import { clsx, mergeSxList } from '../../../utils/index.js'

interface AppShellMainProps extends BoxProps, ElementProps<'div'> {}

export const AppShellMain = ({ className, sx, ...rest }: AppShellMainProps) => {
  return (
    <Group
      gap={0}
      wrap="nowrap"
      align="stretch"
      {...rest}
      className={clsx(className, 'tiui-app-shell-main')}
      sx={mergeSxList([
        {
          position: 'relative',
          height: '100%',
          minHeight: 0,
          overflow: 'hidden',
          '&:where([data-height-flex])': {
            flex: 1
          }
        },
        sx
      ])}
    />
  )
}
