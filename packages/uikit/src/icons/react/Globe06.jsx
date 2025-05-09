import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe06 = (props, ref) => {
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
        d="M1.79118 10.4302L3.06331 9.69586C3.13221 9.65608 3.21307 9.64226 3.29128 9.6569L5.79428 10.1253C5.99998 10.1638 6.18986 10.0055 6.18893 9.79622L6.17918 7.60313C6.17892 7.54354 6.19463 7.48498 6.22468 7.43353L7.48784 5.27097C7.55358 5.15842 7.54768 5.01788 7.47276 4.91123L5.34596 1.88395M12.6668 3.23953C9.00015 5.00019 11 7.33352 11.6668 7.66686C12.9182 8.29244 14.6584 8.33349 14.6584 8.33349C14.6639 8.22306 14.6667 8.11194 14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 8.00001 1.3335C4.31811 1.3335 1.33334 4.31826 1.33334 8.00016C1.33334 11.6821 4.31811 14.6668 8.00001 14.6668C8.11179 14.6668 8.22292 14.6641 8.33334 14.6586M11.1719 14.6267L9.06068 9.06083L14.6265 11.172L12.1584 12.1586L11.1719 14.6267Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlobe06)
const Globe06 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Globe06', props.className].join(' ')}
    />
  )
})
Globe06.displayName = 'IconGlobe06'
export default Globe06
