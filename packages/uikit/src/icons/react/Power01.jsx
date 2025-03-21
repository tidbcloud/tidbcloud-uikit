import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPower01 = (props, ref) => {
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
        d="M12.0001 2V12M18.3601 6.64C19.6185 7.89879 20.4754 9.50244 20.8224 11.2482C21.1694 12.9939 20.991 14.8034 20.3098 16.4478C19.6285 18.0921 18.4749 19.4976 16.9949 20.4864C15.515 21.4752 13.775 22.0029 11.9951 22.0029C10.2152 22.0029 8.47527 21.4752 6.99529 20.4864C5.51532 19.4976 4.36176 18.0921 3.68049 16.4478C2.99921 14.8034 2.82081 12.9939 3.16784 11.2482C3.51487 9.50244 4.37174 7.89879 5.63012 6.64"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPower01)
const Power01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Power01'].join(' ')}
    />
  )
})
Power01.displayName = 'IconPower01'
export default Power01
