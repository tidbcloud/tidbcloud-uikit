import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCornerLeftUp = (props, ref) => {
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
        d="M14 13.3333H11.7333C9.49312 13.3333 8.37302 13.3333 7.51737 12.8973C6.76472 12.5138 6.1528 11.9019 5.76931 11.1493C5.33333 10.2936 5.33333 9.1735 5.33333 6.93329V2.66663M5.33333 2.66663L8.66667 5.99996M5.33333 2.66663L2 5.99996"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCornerLeftUp)
const CornerLeftUp = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CornerLeftUp', props.className].join(' ')}
    />
  )
})
CornerLeftUp.displayName = 'IconCornerLeftUp'
export default CornerLeftUp
