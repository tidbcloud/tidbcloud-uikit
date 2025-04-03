import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconReflect02 = (props, ref) => {
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
        d="M8.00016 2V4M8.00016 7V9M8.00016 12V14M14.6668 8H10.3335M10.3335 8L13.0002 10.6667M10.3335 8L13.0002 5.33333M1.3335 8H5.66683M5.66683 8L3.00016 10.6667M5.66683 8L3.00016 5.33333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconReflect02)
const Reflect02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Reflect02', props.className].join(' ')}
    />
  )
})
Reflect02.displayName = 'IconReflect02'
export default Reflect02
