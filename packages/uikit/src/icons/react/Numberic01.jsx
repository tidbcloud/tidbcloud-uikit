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
      ref={ref}
      {...props}
    >
      <path
        d="M1.33301 4.97497L14.6663 4.97497M1.33301 10.9925L14.6663 10.9925M5.98974 1.33331L3.6726 14.6666M11.9157 1.33331L9.59853 14.6666"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
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
