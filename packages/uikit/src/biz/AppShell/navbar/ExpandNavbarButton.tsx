import { IconLayoutLeft } from '../../../icons/index.js'
import { Button } from '../../../primitive/index.js'

interface ExpandNavbarButtonProps {
  logo: React.ReactNode
  onClick: () => void
}

export const ExpandNavbarButton = ({ logo, onClick }: ExpandNavbarButtonProps) => (
  <Button
    className="tiui-app-shell-navbar-expand-button"
    variant="default"
    size="sm"
    leftSection={logo}
    onClick={onClick}
    style={{
      '--button-justify': 'space-between'
    }}
    styles={{
      root: {
        position: 'absolute',
        top: 16,
        left: 24,
        zIndex: 15,
        width: 64,
        paddingLeft: 8,
        paddingRight: 8
      },
      section: {
        '&[data-position=left]': {
          marginRight: 0,
          width: 20,
          height: 20
        }
      }
    }}
    aria-label="Expand navbar"
  >
    <IconLayoutLeft size={20} />
  </Button>
)
