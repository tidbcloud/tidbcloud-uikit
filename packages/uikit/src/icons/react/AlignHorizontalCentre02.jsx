import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignHorizontalCentre02 = (props, ref) => {
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
        d="M10.6667 6.66675C11.2879 6.66675 11.5986 6.66675 11.8436 6.56525C12.1703 6.42993 12.4298 6.17036 12.5652 5.84366C12.6667 5.59863 12.6667 5.288 12.6667 4.66675C12.6667 4.04549 12.6667 3.73487 12.5652 3.48984C12.4298 3.16313 12.1703 2.90357 11.8436 2.76824C11.5986 2.66675 11.2879 2.66675 10.6667 2.66675L5.33333 2.66675C4.71208 2.66675 4.40145 2.66675 4.15642 2.76824C3.82972 2.90357 3.57015 3.16313 3.43483 3.48984C3.33333 3.73486 3.33333 4.04549 3.33333 4.66675C3.33333 5.288 3.33333 5.59863 3.43483 5.84366C3.57015 6.17036 3.82972 6.42993 4.15642 6.56525C4.40145 6.66675 4.71208 6.66675 5.33333 6.66675L10.6667 6.66675Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M12 13.3334C12.6213 13.3334 12.9319 13.3334 13.1769 13.2319C13.5036 13.0966 13.7632 12.837 13.8985 12.5103C14 12.2653 14 11.9547 14 11.3334C14 10.7122 14 10.4015 13.8985 10.1565C13.7632 9.8298 13.5036 9.57023 13.1769 9.43491C12.9319 9.33341 12.6213 9.33341 12 9.33341H4C3.37874 9.33341 3.06812 9.33341 2.82309 9.43491C2.49638 9.57023 2.23682 9.8298 2.10149 10.1565C2 10.4015 2 10.7122 2 11.3334C2 11.9547 2 12.2653 2.10149 12.5103C2.23682 12.837 2.49638 13.0966 2.82309 13.2319C3.06812 13.3334 3.37874 13.3334 4 13.3334L12 13.3334Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignHorizontalCentre02)
const AlignHorizontalCentre02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'AlignHorizontalCentre02', props.className].join(' ')}
    />
  )
})
AlignHorizontalCentre02.displayName = 'IconAlignHorizontalCentre02'
export default AlignHorizontalCentre02
