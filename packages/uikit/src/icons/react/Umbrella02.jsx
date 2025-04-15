import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUmbrella02 = (props, ref) => {
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
        d="M4.66683 12.9335C4.66683 13.8908 5.41302 14.6668 6.3335 14.6668C7.25397 14.6668 8.00016 13.8908 8.00016 12.9335V7.3335M8.00016 7.3335C6.92671 7.3335 5.3335 8.00016 5.3335 8.00016C5.3335 8.00016 4.40695 7.3335 3.3335 7.3335C2.26005 7.3335 1.3335 8.00016 1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016C14.6668 8.00016 13.7403 7.3335 12.6668 7.3335C11.5934 7.3335 10.6668 8.00016 10.6668 8.00016C10.6668 8.00016 9.07361 7.3335 8.00016 7.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUmbrella02)
const Umbrella02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Umbrella02', props.className].join(' ')}
    />
  )
})
Umbrella02.displayName = 'IconUmbrella02'
export default Umbrella02
