import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe011 = (props, ref) => {
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
        d="M1.33334 8.00016H14.6667M1.33334 8.00016C1.33334 11.6821 4.3181 14.6668 8 14.6668M1.33334 8.00016C1.33334 4.31826 4.3181 1.3335 8 1.3335M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8 14.6668M14.6667 8.00016C14.6667 4.31826 11.6819 1.3335 8 1.3335M8 1.3335C9.66752 3.15906 10.6152 5.52819 10.6667 8.00016C10.6152 10.4721 9.66752 12.8413 8 14.6668M8 1.3335C6.33248 3.15906 5.38483 5.52819 5.33334 8.00016C5.38483 10.4721 6.33248 12.8413 8 14.6668"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlobe011)
const Globe011 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Globe011', props.className].join(' ')}
    />
  )
})
Globe011.displayName = 'IconGlobe011'
export default Globe011
