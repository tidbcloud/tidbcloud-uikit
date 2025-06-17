import { IconLayoutLeft } from '../../../icons/index.js'
import { Group, ActionIcon, GroupProps, Stack } from '../../../primitive/index.js'
import { clsx } from '../../../utils/index.js'

interface NavbarHeaderProps extends GroupProps {
  logo: React.ReactNode
  onLogoClick?: () => void
  onToggleCollapse?: () => void
}

export const NavbarHeader = ({ logo, onLogoClick, onToggleCollapse, ...restProps }: NavbarHeaderProps) => {
  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick()
    } else {
      history.pushState({}, '', '/')
    }
  }

  return (
    <Group
      justify="space-between"
      sx={{ height: 64 }}
      {...restProps}
      className={clsx(restProps.className, 'tiui-app-shell-navbar-header')}
    >
      <Stack
        justify="center"
        onClick={handleLogoClick}
        sx={{
          padding: 4,
          cursor: 'pointer'
        }}
        aria-label="Logo"
      >
        {logo}
      </Stack>
      {/* Collapse button */}
      <ActionIcon
        className="tiui-app-shell-navbar-collapse-button"
        variant="white"
        bg="transparent"
        onClick={onToggleCollapse}
        aria-label="Collapse navbar"
      >
        <IconLayoutLeft size={20} />
      </ActionIcon>
    </Group>
  )
}
