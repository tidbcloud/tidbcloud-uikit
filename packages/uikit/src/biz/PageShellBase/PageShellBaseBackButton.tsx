import { IconChevronLeft } from '../../icons/index.js'
import { ActionIcon, type ActionIconProps } from '../../primitive/index.js'
import { clsx } from '../../utils/index.js'

export interface PageShellBaseBackButtonProps extends ActionIconProps {
  onClick?: () => void
}

export const PageShellBaseBackButton = ({ className, onClick, ...rest }: PageShellBaseBackButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      history.back()
    }
  }

  return (
    <ActionIcon
      variant="default"
      onClick={handleClick}
      aria-label="Navigate Back"
      {...rest}
      className={clsx(className, 'tiui-page-shell-back-button')}
    >
      <IconChevronLeft size={20} />
    </ActionIcon>
  )
}
