import { Typography, TypographyProps } from '../../primitive/index.js'
import { clsx, mergeSxList } from '../../utils/index.js'

export interface PageShellBaseTitleProps extends React.PropsWithChildren<TypographyProps> {}

export const PageShellBaseTitle = (props: PageShellBaseTitleProps) => {
  return (
    <Typography
      variant="headline-lg"
      component="div"
      fw={300}
      {...props}
      className={clsx(props.className, 'tiui-page-shell-title')}
      sx={mergeSxList([{ flex: 1 }, props?.sx])}
    />
  )
}
