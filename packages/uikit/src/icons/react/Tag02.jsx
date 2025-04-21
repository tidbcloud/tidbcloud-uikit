import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTag02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M5.33331 5.3335H5.33998M3.04181 1.95833L1.95815 3.04199C1.72755 3.27259 1.61225 3.38789 1.52979 3.52245C1.45669 3.64175 1.40282 3.77181 1.37015 3.90785C1.33331 4.0613 1.33331 4.22436 1.33331 4.55048L1.33331 6.44984C1.33331 6.77596 1.33331 6.93902 1.37015 7.09247C1.40282 7.22852 1.45669 7.35858 1.52979 7.47788C1.61225 7.61243 1.72755 7.72773 1.95815 7.95833L7.07057 13.0708C7.8626 13.8628 8.25862 14.2588 8.71528 14.4072C9.11696 14.5377 9.54966 14.5377 9.95134 14.4072C10.408 14.2588 10.804 13.8628 11.5961 13.0707L13.0706 11.5962C13.8626 10.8042 14.2586 10.4082 14.407 9.95153C14.5375 9.54984 14.5375 9.11715 14.407 8.71546C14.2586 8.2588 13.8626 7.86279 13.0706 7.07075L7.95815 1.95834C7.72755 1.72773 7.61225 1.61243 7.47769 1.52998C7.35839 1.45687 7.22834 1.403 7.09229 1.37034C6.93884 1.3335 6.77578 1.3335 6.44966 1.3335L4.5503 1.3335C4.22418 1.3335 4.06112 1.3335 3.90767 1.37034C3.77162 1.403 3.64156 1.45687 3.52227 1.52998C3.38771 1.61243 3.27241 1.72773 3.04181 1.95833ZM5.66665 5.3335C5.66665 5.51759 5.51741 5.66683 5.33331 5.66683C5.14922 5.66683 4.99998 5.51759 4.99998 5.3335C4.99998 5.1494 5.14922 5.00016 5.33331 5.00016C5.51741 5.00016 5.66665 5.1494 5.66665 5.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTag02)
const Tag02 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={['tiui-icon', 'Tag02', props.className].join(' ')}
    />
  )
})
Tag02.displayName = 'IconTag02'
export default Tag02
