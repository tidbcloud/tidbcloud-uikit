import { IconChevronLeft } from '../../icons/index.js'
import { ActionIcon, Group } from '../../primitive/index.js'
import { mergeSxList } from '../../utils/index.js'
import {
  PageShellBaseRoot,
  PageShellBaseHeader,
  PageShellBaseTitle,
  PageShellBaseBody,
  type PageShellBaseRootProps,
  type PageShellBaseHeaderProps,
  type PageShellBaseBodyProps
} from '../PageShellBase/page-shell-base.js'

import { ExpandNavbarButtonPlaceholder } from './navbar/ExpandNavbarButtonPlaceholder.js'

const DEFAULT_PAGE_MAX_WIDTH = 1920

export interface AppPageShellProps {
  maxWidth?: string
  withHeader?: boolean
  title?: React.ReactNode
  children?: React.ReactNode
  wrapperProps?: PageShellBaseRootProps
  headerProps?: PageShellBaseHeaderProps & {
    /**
     * Determines whether the back button should be rendered
     */
    withBack?: boolean
    /**
     * Called when the back button is clicked
     */
    onBackClick?: () => void
  }
  bodyProps?: PageShellBaseBodyProps
}

export const AppPageShell = ({
  withHeader = true,
  headerProps,
  bodyProps,
  wrapperProps,
  maxWidth = `${DEFAULT_PAGE_MAX_WIDTH}px`,
  ...rest
}: AppPageShellProps) => {
  if (!withHeader) {
    return (
      <PageShellBaseRoot
        {...bodyProps}
        sx={mergeSxList([
          {
            '--app-shell-page-max-width': maxWidth
          },
          {
            height: '100%',
            maxWidth: `min(100%, ${maxWidth})`,
            margin: '0 auto',
            padding: 24
          },
          bodyProps?.sx
        ])}
      >
        {rest.children}
      </PageShellBaseRoot>
    )
  }

  return (
    <PageShellBaseRoot
      {...wrapperProps}
      sx={mergeSxList([
        {
          '--app-shell-page-max-width': maxWidth
        },
        (theme) => ({
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          maxWidth: `min(100%, ${maxWidth})`,
          margin: '0 auto',
          minWidth: `calc(${theme.breakpoints.md} - var(--app-shell-navbar-offset))`
        }),
        wrapperProps?.sx
      ])}
    >
      <PageShellBaseHeader
        {...headerProps}
        leftSection={
          <Group wrap="nowrap" gap={0}>
            <ExpandNavbarButtonPlaceholder />
            {headerProps?.withBack && (
              <ActionIcon
                variant="default"
                onClick={() => {
                  if (headerProps?.onBackClick) {
                    headerProps.onBackClick()
                  } else {
                    history.back()
                  }
                }}
                mr="md"
                aria-label="Navigate Back"
              >
                <IconChevronLeft size={20} />
              </ActionIcon>
            )}
          </Group>
        }
        sx={mergeSxList([
          (theme) => ({
            backgroundColor: theme.colors.carbon[1],
            flexShrink: 0
          }),
          headerProps?.sx
        ])}
      >
        <PageShellBaseTitle>{rest.title}</PageShellBaseTitle>
      </PageShellBaseHeader>
      <PageShellBaseBody
        {...bodyProps}
        sx={mergeSxList([
          {
            paddingTop: 0,
            paddingBottom: 64,
            flex: 1
          },
          bodyProps?.sx
        ])}
      >
        {rest.children}
      </PageShellBaseBody>
    </PageShellBaseRoot>
  )
}
