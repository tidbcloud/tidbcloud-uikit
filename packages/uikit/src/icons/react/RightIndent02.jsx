import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRightIndent02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M12 9.24995H3M12 3.99995L3 3.99995M21 14.75H3M21 20H3M19.72 2.95995L15.8533 5.85995C15.5638 6.07707 15.4191 6.18563 15.3673 6.31872C15.322 6.43529 15.322 6.56462 15.3673 6.68119C15.4191 6.81427 15.5638 6.92283 15.8533 7.13995L19.72 10.04C20.132 10.3489 20.338 10.5034 20.5104 10.4998C20.6604 10.4967 20.8012 10.4264 20.8937 10.3082C21 10.1724 21 9.91493 21 9.39995V3.59995C21 3.08498 21 2.82749 20.8937 2.6917C20.8012 2.57354 20.6604 2.50318 20.5104 2.50006C20.338 2.49648 20.132 2.65097 19.72 2.95995Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRightIndent02)
const RightIndent02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'RightIndent02'].join(' ')}
    />
  )
})
RightIndent02.displayName = 'IconRightIndent02'
export default RightIndent02
