import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTypes02 = (props, ref) => {
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
        d="M2.6665 4.6665C2.6665 4.04525 2.6665 3.73462 2.768 3.48959C2.90332 3.16289 3.16289 2.90332 3.48959 2.768C3.73462 2.6665 4.04525 2.6665 4.6665 2.6665H11.3332C11.9544 2.6665 12.2651 2.6665 12.5101 2.768C12.8368 2.90332 13.0964 3.16289 13.2317 3.48959C13.3332 3.73462 13.3332 4.04525 13.3332 4.6665M5.33317 13.3332H10.6665M6.83317 2.6665V13.3332M9.1665 2.6665V13.3332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTypes02)
const Types02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Types02'].join(' ')}
    />
  )
})
Types02.displayName = 'IconTypes02'
export default Types02
