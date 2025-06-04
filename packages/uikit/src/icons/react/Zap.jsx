import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconZap = (props, ref) => {
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
        d="M8.66668 1.33337L2.72898 8.45861C2.49644 8.73766 2.38017 8.87718 2.37839 8.99502C2.37685 9.09745 2.4225 9.19491 2.50218 9.2593C2.59384 9.33337 2.77546 9.33337 3.1387 9.33337H8.00001L7.33334 14.6667L13.271 7.54147C13.5036 7.26243 13.6198 7.1229 13.6216 7.00507C13.6232 6.90263 13.5775 6.80517 13.4978 6.74078C13.4062 6.66671 13.2246 6.66671 12.8613 6.66671H8.00001L8.66668 1.33337Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconZap)
const Zap = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Zap', props.className].join(' ')}
    />
  )
})
Zap.displayName = 'IconZap'
export default Zap
