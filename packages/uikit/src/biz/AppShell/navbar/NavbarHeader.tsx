import { IconLayoutLeft } from '../../../icons/index.js'
import { Group, ActionIcon, Box, GroupProps } from '../../../primitive/index.js'
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
      <Box
        onClick={handleLogoClick}
        sx={{
          width: 32,
          height: 28,
          paddingLeft: 4,
          cursor: 'pointer'
        }}
        aria-label="Logo"
      >
        {logo}
      </Box>
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
