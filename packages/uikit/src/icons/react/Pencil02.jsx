import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPencil02 = (props, ref) => {
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
        d="M12.0002 1.3335L14.6668 4.00016M1.3335 14.6668L2.18443 11.5467C2.23995 11.3432 2.2677 11.2414 2.31032 11.1465C2.34815 11.0622 2.39464 10.9821 2.44904 10.9074C2.51031 10.8234 2.5849 10.7488 2.7341 10.5996L9.62304 3.71062C9.75505 3.57861 9.82105 3.51261 9.89716 3.48788C9.96411 3.46613 10.0362 3.46613 10.1032 3.48788C10.1793 3.51261 10.2453 3.57861 10.3773 3.71062L12.2897 5.62304C12.4217 5.75505 12.4877 5.82105 12.5124 5.89716C12.5342 5.9641 12.5342 6.03622 12.5124 6.10317C12.4877 6.17928 12.4217 6.24528 12.2897 6.37729L5.40077 13.2662C5.25157 13.4154 5.17697 13.49 5.09288 13.5513C5.01822 13.6057 4.93811 13.6522 4.85384 13.69C4.75893 13.7326 4.65715 13.7604 4.45359 13.8159L1.3335 14.6668Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPencil02)
const Pencil02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Pencil02', props.className].join(' ')}
    />
  )
})
Pencil02.displayName = 'IconPencil02'
export default Pencil02
