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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M7.05711 8.94273C6.53641 8.42203 6.53641 7.57781 7.05711 7.05711C7.57781 6.53641 8.42203 6.53641 8.94273 7.05711C9.46343 7.57781 9.46343 8.42203 8.94273 8.94273M5.17149 10.8283C3.60939 9.26625 3.60939 6.73359 5.17149 5.17149C6.73359 3.60939 9.26625 3.60939 10.8283 5.17149C12.3904 6.73359 12.3904 9.26625 10.8283 10.8283M3.28587 12.714C0.682378 10.1105 0.682378 5.88937 3.28587 3.28587C5.88937 0.682378 10.1105 0.682378 12.714 3.28587C15.3175 5.88937 15.3175 10.1105 12.714 12.714"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
