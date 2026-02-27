import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconExpandLine = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M18.7771 6.13727H0.75M18.7771 0.75H0.75M18.7786 11.5245H0.751465M18.7786 16.7793H0.751465"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconExpandLine)
const ExpandLine = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ExpandLine', props.className].join(' ')}
    />
  )
})
ExpandLine.displayName = 'IconExpandLine'
export default ExpandLine
