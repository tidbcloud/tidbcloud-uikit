import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconColors = (props, ref) => {
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
        d="M8.00004 13.6483C8.70771 14.2817 9.64223 14.6668 10.6667 14.6668C12.8758 14.6668 14.6667 12.876 14.6667 10.6668C14.6667 8.82221 13.4181 7.26922 11.7199 6.80695M4.28016 6.80694C2.582 7.26921 1.33337 8.82221 1.33337 10.6668C1.33337 12.876 3.12424 14.6668 5.33337 14.6668C7.54251 14.6668 9.33337 12.876 9.33337 10.6668C9.33337 10.1465 9.23402 9.64937 9.05325 9.19339M12 5.3335C12 7.54264 10.2092 9.3335 8.00004 9.3335C5.7909 9.3335 4.00004 7.54264 4.00004 5.3335C4.00004 3.12436 5.7909 1.3335 8.00004 1.3335C10.2092 1.3335 12 3.12436 12 5.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconColors)
const Colors = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Colors', props.className].join(' ')}
    />
  )
})
Colors.displayName = 'IconColors'
export default Colors
