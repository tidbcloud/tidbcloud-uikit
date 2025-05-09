import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDistributeSpacingHorizontal = (props, ref) => {
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
        d="M14 14V2M2 14V2M6 5.33333V10.6667C6 11.2879 6 11.5985 6.10149 11.8436C6.23682 12.1703 6.49638 12.4298 6.82309 12.5652C7.06812 12.6667 7.37874 12.6667 8 12.6667C8.62126 12.6667 8.93188 12.6667 9.17691 12.5652C9.50362 12.4298 9.76318 12.1703 9.89851 11.8436C10 11.5985 10 11.2879 10 10.6667V5.33333C10 4.71208 10 4.40145 9.89851 4.15642C9.76318 3.82972 9.50362 3.57015 9.17691 3.43483C8.93188 3.33333 8.62126 3.33333 8 3.33333C7.37875 3.33333 7.06812 3.33333 6.82309 3.43483C6.49638 3.57015 6.23682 3.82972 6.10149 4.15642C6 4.40145 6 4.71208 6 5.33333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDistributeSpacingHorizontal)
const DistributeSpacingHorizontal = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'DistributeSpacingHorizontal', props.className].join(' ')}
    />
  )
})
DistributeSpacingHorizontal.displayName = 'IconDistributeSpacingHorizontal'
export default DistributeSpacingHorizontal
