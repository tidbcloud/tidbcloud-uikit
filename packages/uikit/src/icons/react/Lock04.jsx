import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLock04 = (props, ref) => {
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
        d="M4.73393 6.66667H4.66659V5.33333C4.66659 3.49238 6.15897 2 7.99992 2C9.84087 2 11.3333 3.49238 11.3333 5.33333V6.66667H11.2659M7.99992 9.33333V10.6667M12.6666 10C12.6666 12.5773 10.5772 14.6667 7.99992 14.6667C5.42259 14.6667 3.33325 12.5773 3.33325 10C3.33325 7.42267 5.42259 5.33333 7.99992 5.33333C10.5772 5.33333 12.6666 7.42267 12.6666 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLock04)
const Lock04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Lock04', props.className].join(' ')}
    />
  )
})
Lock04.displayName = 'IconLock04'
export default Lock04
