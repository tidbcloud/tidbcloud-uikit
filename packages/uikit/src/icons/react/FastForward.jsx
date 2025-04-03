import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFastForward = (props, ref) => {
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
        d="M8.66683 10.9581C8.66683 11.7114 8.66683 12.0881 8.81901 12.2728C8.95121 12.4332 9.15069 12.5228 9.35843 12.515C9.59756 12.5061 9.87909 12.2558 10.4422 11.7553L13.7699 8.79729C14.0801 8.52157 14.2352 8.3837 14.2924 8.22091C14.3426 8.07795 14.3426 7.92216 14.2924 7.7792C14.2352 7.61641 14.0801 7.47855 13.7699 7.20282L10.4422 4.24479C9.87909 3.74429 9.59756 3.49404 9.35843 3.48509C9.15069 3.47731 8.95121 3.56689 8.81901 3.72732C8.66683 3.91199 8.66683 4.28867 8.66683 5.04202V10.9581Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.3335 10.9581C1.3335 11.7114 1.3335 12.0881 1.48567 12.2728C1.61788 12.4332 1.81736 12.5228 2.0251 12.515C2.26422 12.5061 2.54575 12.2558 3.10882 11.7553L6.4366 8.79729C6.7468 8.52157 6.90189 8.3837 6.95905 8.22091C7.00925 8.07795 7.00925 7.92216 6.95905 7.7792C6.90189 7.61641 6.7468 7.47855 6.4366 7.20282L3.10882 4.24479C2.54575 3.74429 2.26422 3.49404 2.0251 3.48509C1.81736 3.47731 1.61788 3.56689 1.48567 3.72732C1.3335 3.91199 1.3335 4.28867 1.3335 5.04202V10.9581Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFastForward)
const FastForward = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FastForward', props.className].join(' ')}
    />
  )
})
FastForward.displayName = 'IconFastForward'
export default FastForward
