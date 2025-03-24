import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSeeShort = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M20 12.5H3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="inherit" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSeeShort)
const SeeShort = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SeeShort', props.className].join(' ')}
    />
  )
})
SeeShort.displayName = 'IconSeeShort'
export default SeeShort
