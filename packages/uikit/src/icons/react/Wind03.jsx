import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWind03 = (props, ref) => {
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
        d="M11.1761 4.33333C11.5423 3.92417 12.0745 3.66667 12.6668 3.66667C13.7714 3.66667 14.6668 4.5621 14.6668 5.66667C14.6668 6.77124 13.7714 7.66667 12.6668 7.66667H8.66683M4.50943 2.66667C4.87564 2.2575 5.40783 2 6.00016 2C7.10473 2 8.00016 2.89543 8.00016 4C8.00016 5.10457 7.10473 6 6.00016 6H1.3335M7.17609 13.3333C7.54231 13.7425 8.0745 14 8.66683 14C9.7714 14 10.6668 13.1046 10.6668 12C10.6668 10.8954 9.7714 10 8.66683 10H1.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWind03)
const Wind03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Wind03', props.className].join(' ')}
    />
  )
})
Wind03.displayName = 'IconWind03'
export default Wind03
