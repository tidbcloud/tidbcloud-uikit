import { Box } from '../../../primitive/index.js'

export const ExpandNavbarButtonPlaceholder = () => {
  return (
    <Box
      display="inline-block"
      style={{
        '--button-width': '32px',
        '--placeholder-max-width': 'calc(var(--app-shell-navbar-collapsed, 0) * (var(--button-width) + 16px))'
      }}
      sx={{
        height: 'var(--button-width)',
        minWidth: 0,
        maxWidth: 'var(--placeholder-max-width)',
        width: 'calc(var(--placeholder-max-width) - (100vw - var(--app-shell-page-max-width, 100vw)) * 0.5)',
        flexShrink: 0
      }}
      aria-hidden="true"
    />
  )
}
