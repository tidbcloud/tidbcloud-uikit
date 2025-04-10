import { IconLayoutLeft } from '../../../icons/index.js'
import { Group, ActionIcon, Box } from '../../../primitive/index.js'

interface NavbarHeaderProps {
  logo: React.ReactNode
  onLogoClick?: () => void
}

export const NavbarHeader = ({ logo, onLogoClick }: NavbarHeaderProps) => {
  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick()
    } else {
      history.pushState({}, '', '/')
    }
  }

  return (
    <Group justify="space-between" sx={{ height: 40 }}>
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
      {/* Fold button */}
      <ActionIcon variant="white" bg="transparent" aria-label="Navbar fold button">
        <IconLayoutLeft size={20} />
      </ActionIcon>
    </Group>
  )
}
