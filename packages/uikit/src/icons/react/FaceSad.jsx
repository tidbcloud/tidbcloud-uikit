import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFaceSad = (props, ref) => {
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
        d="M10.6668 10.6666C10.6668 10.6666 9.66683 9.33325 8.00016 9.33325C6.3335 9.33325 5.3335 10.6666 5.3335 10.6666M11.3335 6.15992C11.0702 6.48325 10.7102 6.66658 10.3335 6.66658C9.95683 6.66658 9.60683 6.48325 9.3335 6.15992M6.66683 6.15992C6.4035 6.48325 6.0435 6.66658 5.66683 6.66658C5.29016 6.66658 4.94016 6.48325 4.66683 6.15992M14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFaceSad)
const FaceSad = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FaceSad', props.className].join(' ')}
    />
  )
})
FaceSad.displayName = 'IconFaceSad'
export default FaceSad
