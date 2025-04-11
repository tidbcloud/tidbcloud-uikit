import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTag01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M5.3335 5.3335H5.34016M1.3335 3.46683L1.3335 6.44984C1.3335 6.77596 1.3335 6.93902 1.37034 7.09247C1.403 7.22852 1.45687 7.35858 1.52998 7.47787C1.61243 7.61243 1.72773 7.72773 1.95833 7.95833L7.07075 13.0708C7.86279 13.8628 8.2588 14.2588 8.71546 14.4072C9.11715 14.5377 9.54984 14.5377 9.95153 14.4072C10.4082 14.2588 10.8042 13.8628 11.5962 13.0708L13.0708 11.5962C13.8628 10.8042 14.2588 10.4082 14.4072 9.95153C14.5377 9.54984 14.5377 9.11715 14.4072 8.71546C14.2588 8.2588 13.8628 7.86279 13.0708 7.07075L7.95833 1.95833C7.72773 1.72773 7.61243 1.61243 7.47787 1.52998C7.35858 1.45687 7.22852 1.403 7.09247 1.37034C6.93902 1.3335 6.77596 1.3335 6.44984 1.3335L3.46683 1.3335C2.72009 1.3335 2.34672 1.3335 2.06151 1.47882C1.81063 1.60665 1.60665 1.81063 1.47882 2.06151C1.3335 2.34672 1.3335 2.72009 1.3335 3.46683ZM5.66683 5.3335C5.66683 5.51759 5.51759 5.66683 5.3335 5.66683C5.1494 5.66683 5.00016 5.51759 5.00016 5.3335C5.00016 5.1494 5.1494 5.00016 5.3335 5.00016C5.51759 5.00016 5.66683 5.1494 5.66683 5.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTag01)
const Tag01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Tag01', props.className].join(' ')}
    />
  )
})
Tag01.displayName = 'IconTag01'
export default Tag01
