import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSkipBack = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 19V5m11.4 1.08-5.838 4.67c-.534.428-.801.641-.898.9a1 1 0 0 0 0 .7c.097.259.364.472.898.9l5.839 4.67c.832.666 1.248.999 1.598 1a1 1 0 0 0 .783-.377c.218-.273.218-.806.218-1.872V7.329c0-1.066 0-1.599-.218-1.872a1 1 0 0 0-.783-.376c-.35 0-.766.333-1.598.999"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSkipBack)
const SkipBack = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'SkipBack'].join(' ')}
    />
  )
})
SkipBack.displayName = 'IconSkipBack'
export default SkipBack
