import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHeadphones02 = (props, ref) => {
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
        d="M14.6666 11.3333V8.66667C14.6666 4.98477 11.6818 2 7.99992 2C4.31802 2 1.33325 4.98477 1.33325 8.66667V11.3333M4.99992 14C4.07944 14 3.33325 13.2538 3.33325 12.3333V10.3333C3.33325 9.41286 4.07944 8.66667 4.99992 8.66667C5.92039 8.66667 6.66659 9.41286 6.66659 10.3333V12.3333C6.66659 13.2538 5.92039 14 4.99992 14ZM10.9999 14C10.0794 14 9.33325 13.2538 9.33325 12.3333V10.3333C9.33325 9.41286 10.0794 8.66667 10.9999 8.66667C11.9204 8.66667 12.6666 9.41286 12.6666 10.3333V12.3333C12.6666 13.2538 11.9204 14 10.9999 14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHeadphones02)
const Headphones02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Headphones02', props.className].join(' ')}
    />
  )
})
Headphones02.displayName = 'IconHeadphones02'
export default Headphones02
