import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconNumberic01 = (props, ref) => {
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
        d="M1.33325 4.975L14.6666 4.975M1.33325 10.9925L14.6666 10.9925M5.98998 1.33334L3.67284 14.6667M11.9159 1.33334L9.59877 14.6667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconNumberic01)
const Numberic01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Numberic01', props.className].join(' ')}
    />
  )
})
Numberic01.displayName = 'IconNumberic01'
export default Numberic01
