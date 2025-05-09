import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSunset = (props, ref) => {
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
        d="M2.66659 12.0002H1.33325M4.20933 8.20957L3.26652 7.26676M11.7904 8.20957L12.7333 7.26676M14.6666 12.0002H13.3333M4.66659 12.0002C4.66659 10.1592 6.15897 8.66683 7.99992 8.66683C9.84087 8.66683 11.3333 10.1592 11.3333 12.0002M14.6666 14.6668H1.33325M10.6666 3.3335L7.99992 6.00016M7.99992 6.00016L5.33325 3.3335M7.99992 6.00016V1.3335"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSunset)
const Sunset = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Sunset', props.className].join(' ')}
    />
  )
})
Sunset.displayName = 'IconSunset'
export default Sunset
