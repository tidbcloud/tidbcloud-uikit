import { BoxProps, ElementProps, Group } from '../../../primitive/index.js'
import { mergeSxList } from '../../../utils/index.js'

interface AppShellMainProps extends BoxProps, ElementProps<'div'> {}

export const AppShellMain = ({ sx, ...rest }: AppShellMainProps) => {
  return (
    <Group
      gap={0}
      wrap="nowrap"
      align="stretch"
      sx={mergeSxList([
        {
          height: '100%',
          minHeight: 0,
          overflow: 'hidden',
          '&:where([data-height-flex])': {
            flex: 1
          }
        },
        sx
      ])}
      {...rest}
    />
  )
}
