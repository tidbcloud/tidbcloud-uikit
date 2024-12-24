import { ReactNode } from 'react'

import { IconChevronLeft } from '../../icons/index.js'
import { ActionIcon, Box, BoxProps, Group, GroupProps, Typography } from '../../primitive/index.js'
import { clsx, mergeSxList } from '../../utils/index.js'

export interface PageHeaderProps extends GroupProps {
  /**
   * Determines whether the header should be sticky
   * Default: false
   */
  sticky?: boolean
  leftSection?: React.ReactNode
  rightSection?: React.ReactNode
}

export const PageHeader = ({ sticky, leftSection, rightSection, children, ...restProps }: PageHeaderProps) => {
  const rightExisted = !!rightSection

  return (
    <Group
      wrap="nowrap"
      justify="space-between"
      gap="xl"
      h={56}
      px={24}
      {...restProps}
      sx={mergeSxList([
        sticky
          ? (theme) => ({
              position: 'sticky',
              zIndex: 1,
              top: 0,
              left: 0,
              background: theme.other.white
            })
          : undefined,
        restProps.sx
      ])}
    >
      <Group wrap="nowrap">
        {leftSection}
        <Typography variant="title-lg" sx={{ flex: 1 }}>
          {children}
        </Typography>
      </Group>
      {rightExisted && (
        <Group gap={0} wrap="nowrap">
          {rightSection}
        </Group>
      )}
    </Group>
  )
}

/**
 * From https://github.com/tidbcloud/dbaas-ui/blob/427559c99458ccd2e8b0d6c77ed44baa603d5ef7/src/dbaas/layouts/v4/page/PageShell.tsx#L7
 */
export interface PageShellProps {
  /**
   * @deprecated
   * Use wrapperProps.className instead
   */
  className?: string
  /**
   * @deprecated
   * Use headerProps.className instead
   */
  headerClassName?: string
  /**
   * @deprecated
   * Use bodyProps.className instead
   */
  bodyClassName?: string
  /**
   * @deprecated
   * Use headerProps.sticky instead
   *
   * Determines whether the header should be sticky
   * Default: false
   */
  headerSticky?: boolean
  /**
   * @deprecated
   * Use headerProps.rightSection instead
   */
  headerRightSection?: React.ReactNode
  /**
   * @deprecated
   * Use headerProps.withBack and headerProps.onBackClick instead
   */
  headerBack?: boolean | (() => void)
  title?: React.ReactNode
  /**
   * A `div` wrapper goes around header and body
   * Default: false
   */
  wrapped?: boolean
  wrapperProps?: BoxProps & { component?: any }
  headerProps?: GroupProps & {
    /**
     * Determines whether the header should be sticky,
     * Default: false
     */
    sticky?: boolean
    /**
     * Right section of header
     */
    rightSection?: React.ReactNode
    /**
     * Determines whether the back icon should be rendered
     */
    withBack?: boolean
    /**
     * Called when the back icon is clicked
     */
    onBackClick?: () => void
  }
  bodyProps?: BoxProps & { component?: any }
  children?: ReactNode
}

export const PageShell = ({
  className,
  headerClassName,
  bodyClassName,
  headerSticky,
  headerRightSection,
  headerBack,
  title,
  wrapped = false,
  wrapperProps = {},
  headerProps: { withBack, onBackClick, ...headerProps } = {},
  bodyProps = {},
  children
}: PageShellProps) => {
  const headerVisible = !!title || !!headerRightSection
  const leftSection = (!!withBack || !!headerBack) && (
    <ActionIcon
      aria-label="Navigate Back"
      variant="default"
      onClick={() => {
        if (onBackClick) {
          onBackClick()
        } else if (typeof headerBack === 'function') {
          headerBack()
        } else {
          history.back()
        }
      }}
    >
      <IconChevronLeft size={20} />
    </ActionIcon>
  )

  const page = (
    <>
      {headerVisible && (
        <PageHeader
          className={headerClassName}
          sticky={headerSticky}
          leftSection={leftSection}
          rightSection={headerRightSection}
          {...headerProps}
        >
          {title}
        </PageHeader>
      )}
      <Box
        {...bodyProps}
        className={clsx(bodyClassName, bodyProps?.className, 'pageshell-body')}
        sx={mergeSxList([
          {
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 16,
            paddingTop: headerVisible ? 0 : 16
          },
          bodyProps?.sx
        ])}
      >
        {children}
      </Box>
    </>
  )

  if (wrapped) {
    return (
      <Box {...wrapperProps} className={clsx(className, wrapperProps?.className, 'pageshell-wrapper')}>
        {page}
      </Box>
    )
  }

  return page
}
