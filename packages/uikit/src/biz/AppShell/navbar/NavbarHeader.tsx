import { IconLayoutLeft } from '../../../icons/index.js'
import { Group, ActionIcon } from '../../../primitive/index.js'

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
      <ActionIcon variant="white" bg="transparent" onClick={handleLogoClick} sx={{ marginLeft: 4 }} aria-label="Logo">
        {logo}
      </ActionIcon>
      {/* Fold button */}
      <ActionIcon variant="white" bg="transparent" aria-label="Navbar fold button">
        <IconLayoutLeft size={20} />
      </ActionIcon>
    </Group>
  )
}
