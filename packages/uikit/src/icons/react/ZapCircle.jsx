import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconZapCircle = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 5.5L7.36159 12.2468C7.08236 12.6529 6.94275 12.856 6.95113 13.0248C6.95843 13.1718 7.03015 13.3082 7.14716 13.3975C7.28151 13.5 7.52794 13.5 8.02082 13.5H12V18.5L16.6384 11.7532C16.9176 11.3471 17.0573 11.144 17.0489 10.9752C17.0416 10.8282 16.9699 10.6918 16.8528 10.6025C16.7185 10.5 16.4721 10.5 15.9792 10.5H12V5.5Z"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconZapCircle)
const ZapCircle = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ZapCircle'].join(' ')}
    />
  )
})
ZapCircle.displayName = 'IconZapCircle'
export default ZapCircle
