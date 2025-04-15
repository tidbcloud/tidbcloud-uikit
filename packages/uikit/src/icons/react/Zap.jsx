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
      ref={ref}
      {...props}
    >
      <path
        d="M8.66674 1.33325L2.72904 8.45849C2.4965 8.73753 2.38023 8.87706 2.37846 8.99489C2.37691 9.09733 2.42256 9.19479 2.50224 9.25918C2.5939 9.33325 2.77552 9.33325 3.13876 9.33325H8.00007L7.3334 14.6666L13.2711 7.54135C13.5036 7.2623 13.6199 7.12278 13.6217 7.00494C13.6232 6.90251 13.5776 6.80505 13.4979 6.74066C13.4062 6.66659 13.2246 6.66659 12.8614 6.66659H8.00007L8.66674 1.33325Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
