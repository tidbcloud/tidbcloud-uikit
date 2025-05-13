import { Box, BoxComponentProps } from '../../primitive/index.js'
import { clsx } from '../../utils/index.js'

export interface PageShellBaseRootProps extends React.PropsWithChildren<BoxComponentProps> {}

export const PageShellBaseRoot = (props: PageShellBaseRootProps) => {
  return <Box {...props} className={clsx(props.className, 'tiui-page-shell-root')} />
}
