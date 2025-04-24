import { mergeSxList } from '../../utils/index.js'
import { PageShell, type PageShellProps } from '../PageShell/index.js'

export interface AppPageShellProps
  extends Pick<PageShellProps, 'title' | 'wrapperProps' | 'headerProps' | 'bodyProps' | 'children'> {
  withHeader?: boolean
}

export const AppPageShell = ({
  withHeader = true,
  headerProps,
  bodyProps,
  wrapperProps,
  ...rest
}: AppPageShellProps) => {
  if (!withHeader) {
    return (
      <PageShell
        bodyProps={{
          ...bodyProps,
          sx: mergeSxList([
            {
              height: '100%',
              maxWidth: `calc(1920px - var(--app-shell-navbar-width))`,
              margin: '0 auto'
            },
            bodyProps?.sx
          ])
        }}
        {...rest}
      />
    )
  }

  return (
    <PageShell
      wrapped
      wrapperProps={{
        ...wrapperProps,
        sx: mergeSxList([
          (theme) => ({
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            maxWidth: `calc(1920px - var(--app-shell-navbar-width))`,
            margin: '0 auto',
            minWidth: `calc(${theme.breakpoints.md} - var(--app-shell-navbar-width))`
          }),
          wrapperProps?.sx
        ])
      }}
      headerProps={{
        ...headerProps,
        sx: mergeSxList([
          {
            flexShrink: 0,
            paddingLeft: `calc(24px + var(--app-shell-page-header-offset, 0px))`
          },
          headerProps?.sx
        ])
      }}
      bodyProps={{
        ...bodyProps,
        sx: mergeSxList([
          {
            paddingTop: 16,
            paddingBottom: 64,
            flex: 1
          },
          bodyProps?.sx
        ])
      }}
      {...rest}
    />
  )
}
