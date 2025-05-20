import { IconLayoutLeft } from '../../../icons/index.js'
import { ActionIcon } from '../../../primitive/index.js'

interface ExpandNavbarButtonProps {
  onClick: () => void
}

export const ExpandNavbarButton = ({ onClick }: ExpandNavbarButtonProps) => (
  <ActionIcon
    className="tiui-app-shell-navbar-expand-button"
    variant="default"
    size={32}
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: 16,
      left: 24,
      zIndex: 15
    }}
    aria-label="Expand navbar"
  >
    <IconLayoutLeft size={20} />
  </ActionIcon>
)
