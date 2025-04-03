import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLink03 = (props, ref) => {
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
        d="M6.6668 8.66673C6.9531 9.04948 7.31837 9.36618 7.73783 9.59535C8.1573 9.82452 8.62114 9.9608 9.0979 9.99495C9.57466 10.0291 10.0532 9.9603 10.501 9.79325C10.9489 9.62619 11.3555 9.36477 11.6935 9.02673L13.6935 7.02673C14.3007 6.39805 14.6366 5.55604 14.629 4.68205C14.6215 3.80807 14.2709 2.97202 13.6529 2.354C13.0348 1.73597 12.1988 1.38541 11.3248 1.37781C10.4508 1.37022 9.60881 1.7062 8.98013 2.31339L7.83347 3.45339M9.33347 7.33339C9.04716 6.95064 8.68189 6.63394 8.26243 6.40477C7.84297 6.17559 7.37913 6.03931 6.90237 6.00517C6.4256 5.97102 5.94708 6.03981 5.49924 6.20687C5.0514 6.37393 4.64472 6.63534 4.3068 6.97339L2.3068 8.97339C1.69961 9.60207 1.36363 10.4441 1.37122 11.3181C1.37881 12.1921 1.72938 13.0281 2.3474 13.6461C2.96543 14.2641 3.80147 14.6147 4.67546 14.6223C5.54945 14.6299 6.39146 14.2939 7.02013 13.6867L8.16013 12.5467"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLink03)
const Link03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Link03', props.className].join(' ')}
    />
  )
})
Link03.displayName = 'IconLink03'
export default Link03
