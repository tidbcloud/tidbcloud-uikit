import { IconLayoutLeft } from '../../../icons/index.js'
import { ActionIcon } from '../../../primitive/index.js'

interface ExpandNavbarButtonProps {
  onClick: () => void
}

export const ExpandNavbarButton = ({ onClick }: ExpandNavbarButtonProps) => (
  <ActionIcon
    variant="default"
    size={32}
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: 16,
      left: 24,
      zIndex: 15
    }}
    aria-label="navbar expand button"
  >
    <IconLayoutLeft size={20} />
  </ActionIcon>
)
