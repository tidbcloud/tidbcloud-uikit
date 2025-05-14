import { Group, GroupProps } from '../../primitive/index.js'
import { clsx, mergeSxList } from '../../utils/index.js'

export interface PageShellBaseHeaderProps extends GroupProps {
  /**
   * Determines whether the header should be sticky
   * Default: false
   */
  sticky?: boolean
  /**
   * Left section of header
   */
  leftSection?: React.ReactNode
  /**
   * Right section of header
   */
  rightSection?: React.ReactNode
}

export const PageShellBaseHeader = ({
  sticky,
  leftSection,
  rightSection,
  children,
  ...restProps
}: PageShellBaseHeaderProps) => {
  return (
    <Group
      wrap="nowrap"
      justify="space-between"
      gap={0}
      {...restProps}
      {...(sticky ? { 'data-sticky': sticky } : {})}
      className={clsx(restProps.className, 'tiui-page-shell-header')}
      sx={mergeSxList([
        {
          paddingLeft: 24,
          paddingRight: 24,
          height: 64,
          '&[data-sticky=true]': {
            position: 'sticky',
            zIndex: 1,
            top: 0,
            left: 0
          }
        },
        restProps.sx
      ])}
    >
      {leftSection}
      <Group wrap="nowrap" sx={{ flex: 1, marginRight: 16 }}>
        {children}
      </Group>
      {rightSection}
    </Group>
  )
}
