import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDistributeSpacingVertical = (props, ref) => {
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
        d="M14 2H2M14 14H2M3.33333 8C3.33333 7.37874 3.33333 7.06812 3.43483 6.82309C3.57015 6.49638 3.82972 6.23682 4.15642 6.10149C4.40145 6 4.71208 6 5.33333 6L10.6667 6C11.2879 6 11.5986 6 11.8436 6.10149C12.1703 6.23682 12.4298 6.49639 12.5652 6.82309C12.6667 7.06812 12.6667 7.37874 12.6667 8C12.6667 8.62126 12.6667 8.93188 12.5652 9.17691C12.4298 9.50362 12.1703 9.76318 11.8436 9.89851C11.5985 10 11.2879 10 10.6667 10L5.33333 10C4.71208 10 4.40145 10 4.15642 9.89851C3.82972 9.76318 3.57015 9.50361 3.43483 9.17691C3.33333 8.93188 3.33333 8.62126 3.33333 8Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDistributeSpacingVertical)
const DistributeSpacingVertical = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'DistributeSpacingVertical', props.className].join(' ')}
    />
  )
})
DistributeSpacingVertical.displayName = 'IconDistributeSpacingVertical'
export default DistributeSpacingVertical
