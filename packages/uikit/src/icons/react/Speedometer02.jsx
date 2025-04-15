import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSpeedometer02 = (props, ref) => {
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
        d="M14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004M14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337M14.6668 8.00004H13.0002M1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337M1.3335 8.00004H3.00016M8.00016 1.33337V3.00004M12.7191 3.33337L9.0001 7.00004M12.7191 12.719L12.5832 12.5831C12.122 12.1219 11.8914 11.8912 11.6223 11.7263C11.3837 11.5801 11.1235 11.4724 10.8514 11.4071C10.5445 11.3334 10.2184 11.3334 9.56617 11.3334L6.43413 11.3334C5.78189 11.3334 5.45577 11.3334 5.14888 11.4071C4.87678 11.4724 4.61666 11.5802 4.37807 11.7264C4.10896 11.8913 3.87836 12.1219 3.41716 12.5831L3.28125 12.719M3.28125 3.33337L4.43888 4.49101M9.3335 8.00004C9.3335 8.73642 8.73654 9.33337 8.00016 9.33337C7.26378 9.33337 6.66683 8.73642 6.66683 8.00004C6.66683 7.26366 7.26378 6.66671 8.00016 6.66671C8.73654 6.66671 9.3335 7.26366 9.3335 8.00004Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSpeedometer02)
const Speedometer02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Speedometer02', props.className].join(' ')}
    />
  )
})
Speedometer02.displayName = 'IconSpeedometer02'
export default Speedometer02
