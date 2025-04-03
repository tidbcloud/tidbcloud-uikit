import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSignal03 = (props, ref) => {
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
        d="M7.05735 8.94273C6.53666 8.42203 6.53666 7.57781 7.05735 7.05711C7.57805 6.53641 8.42227 6.53641 8.94297 7.05711C9.46367 7.57781 9.46367 8.42203 8.94297 8.94273M5.17174 10.8283C3.60964 9.26625 3.60964 6.73359 5.17174 5.17149C6.73383 3.60939 9.26649 3.60939 10.8286 5.17149C12.3907 6.73359 12.3907 9.26625 10.8286 10.8283M3.28612 12.714C0.682622 10.1105 0.682622 5.88937 3.28612 3.28587C5.88961 0.682378 10.1107 0.682378 12.7142 3.28587C15.3177 5.88937 15.3177 10.1105 12.7142 12.714"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSignal03)
const Signal03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Signal03', props.className].join(' ')}
    />
  )
})
Signal03.displayName = 'IconSignal03'
export default Signal03
