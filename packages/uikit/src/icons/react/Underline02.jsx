import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUnderline02 = (props, ref) => {
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
        d="M12.6667 2.6665V6.6665C12.6667 9.24383 10.5773 11.3332 8 11.3332C5.42267 11.3332 3.33333 9.24383 3.33333 6.6665V2.6665M5.66667 2.6665V6.6665C5.66667 8.81437 7.11771 10.6233 9.09299 11.1665M2.66667 13.9998H13.3333M2 2.6665L7 2.6665M11.3333 2.6665L14 2.6665"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUnderline02)
const Underline02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Underline02', props.className].join(' ')}
    />
  )
})
Underline02.displayName = 'IconUnderline02'
export default Underline02
