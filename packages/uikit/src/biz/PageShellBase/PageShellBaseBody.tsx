import { Box, type BoxComponentProps } from '../../primitive/index.js'
import { mergeSxList, clsx } from '../../utils/index.js'

export interface PageShellBaseBodyProps extends React.PropsWithChildren<BoxComponentProps> {}

export const PageShellBaseBody = (props: PageShellBaseBodyProps) => {
  return (
    <Box
      {...props}
      className={clsx(props.className, 'tiui-page-shell-body')}
      sx={mergeSxList([
        {
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: 16,
          paddingTop: 16
        },
        props.sx
      ])}
    />
  )
}
