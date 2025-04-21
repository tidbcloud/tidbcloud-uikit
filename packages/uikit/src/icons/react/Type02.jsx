import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconType02 = (props, ref) => {
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
        d="M2.66675 4.6665C2.66675 4.04525 2.66675 3.73462 2.76824 3.48959C2.90357 3.16289 3.16313 2.90332 3.48984 2.768C3.73486 2.6665 4.04549 2.6665 4.66675 2.6665H11.3334C11.9547 2.6665 12.2653 2.6665 12.5103 2.768C12.837 2.90332 13.0966 3.16289 13.2319 3.48959C13.3334 3.73462 13.3334 4.04525 13.3334 4.6665M5.33341 13.3332H10.6667M6.83341 2.6665V13.3332M9.16675 2.6665V13.3332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconType02)
const Type02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Type02', props.className].join(' ')}
    />
  )
})
Type02.displayName = 'IconType02'
export default Type02
