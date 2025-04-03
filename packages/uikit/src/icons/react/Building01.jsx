import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding01 = (props, ref) => {
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
        d="M10 14V10.4C10 10.0266 10 9.83995 9.92734 9.69734C9.86342 9.5719 9.76144 9.46991 9.63599 9.406C9.49339 9.33333 9.3067 9.33333 8.93333 9.33333H7.06667C6.6933 9.33333 6.50661 9.33333 6.36401 9.406C6.23856 9.46991 6.13658 9.5719 6.07266 9.69734C6 9.83995 6 10.0266 6 10.4V14M12.6667 14V4.13333C12.6667 3.3866 12.6667 3.01323 12.5213 2.72801C12.3935 2.47713 12.1895 2.27316 11.9387 2.14532C11.6534 2 11.2801 2 10.5333 2H5.46667C4.71993 2 4.34656 2 4.06135 2.14532C3.81046 2.27316 3.60649 2.47713 3.47866 2.72801C3.33333 3.01323 3.33333 3.3866 3.33333 4.13333V14M14 14H2M6.33333 5.33333H6.34M9.66667 5.33333H9.67333M6.66667 5.33333C6.66667 5.51743 6.51743 5.66667 6.33333 5.66667C6.14924 5.66667 6 5.51743 6 5.33333C6 5.14924 6.14924 5 6.33333 5C6.51743 5 6.66667 5.14924 6.66667 5.33333ZM10 5.33333C10 5.51743 9.85076 5.66667 9.66667 5.66667C9.48257 5.66667 9.33333 5.51743 9.33333 5.33333C9.33333 5.14924 9.48257 5 9.66667 5C9.85076 5 10 5.14924 10 5.33333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding01)
const Building01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Building01', props.className].join(' ')}
    />
  )
})
Building01.displayName = 'IconBuilding01'
export default Building01
