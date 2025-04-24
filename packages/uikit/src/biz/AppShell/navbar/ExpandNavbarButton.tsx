import { IconLayoutLeft } from '../../../icons/index.js'
import { ActionIcon } from '../../../primitive/index.js'

interface ExpandNavbarButtonProps {
  onClick: () => void
}

export const ExpandNavbarButton = ({ onClick }: ExpandNavbarButtonProps) => (
  <ActionIcon
    variant="default"
    aria-label="navbar expand button"
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: 16,
      left: 24,
      zIndex: 15
    }}
  >
    <IconLayoutLeft size={20} />
  </ActionIcon>
)
