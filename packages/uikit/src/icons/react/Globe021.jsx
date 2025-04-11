import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe021 = (props, ref) => {
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
        d="M8.00016 1.3335C9.66768 3.15906 10.6153 5.52819 10.6668 8.00016C10.6153 10.4721 9.66768 12.8413 8.00016 14.6668M8.00016 1.3335C6.33264 3.15906 5.38499 5.52819 5.3335 8.00016C5.38499 10.4721 6.33264 12.8413 8.00016 14.6668M8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668M8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668M1.66684 6.00016H14.3335M1.66683 10.0002H14.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlobe021)
const Globe021 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Globe021', props.className].join(' ')}
    />
  )
})
Globe021.displayName = 'IconGlobe021'
export default Globe021
