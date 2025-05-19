import { Stack } from '../../../primitive/index.js'

export const AppShellRoot = ({ children }: React.PropsWithChildren) => {
  return (
    <Stack className="tiui-app-shell-root" gap={0} sx={{ height: '100vh', overflow: 'hidden' }}>
      {children}
    </Stack>
  )
}
