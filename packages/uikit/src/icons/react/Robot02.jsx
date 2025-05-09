import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRobot02 = (props, ref) => {
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
        d="M7.99992 2.66665C8.36811 2.66665 8.66659 2.36817 8.66659 1.99998C8.66659 1.63179 8.36811 1.33331 7.99992 1.33331C7.63173 1.33331 7.33325 1.63179 7.33325 1.99998C7.33325 2.36817 7.63173 2.66665 7.99992 2.66665ZM7.99992 2.66665V3.99998M2.66659 8.99998V8.66665C2.66659 6.45751 4.45745 4.66665 6.66659 4.66665H9.33325C11.5424 4.66665 13.3333 6.45751 13.3333 8.66665V8.99998H13.9999C14.3681 8.99998 14.6666 9.29846 14.6666 9.66665V11C14.6666 11.3682 14.3681 11.6666 13.9999 11.6666H13.3333V12.5333C13.3333 12.9751 12.9751 13.3333 12.5333 13.3333H3.46659C3.02476 13.3333 2.66659 12.9751 2.66659 12.5333V11.6666H1.99992C1.63173 11.6666 1.33325 11.3682 1.33325 11V9.66665C1.33325 9.29846 1.63173 8.99998 1.99992 8.99998H2.66659ZM6.66659 9.66665C6.66659 10.2189 6.21887 10.6666 5.66659 10.6666C5.1143 10.6666 4.66659 10.2189 4.66659 9.66665C4.66659 9.11436 5.1143 8.66665 5.66659 8.66665C6.21887 8.66665 6.66659 9.11436 6.66659 9.66665ZM11.3333 9.66665C11.3333 10.2189 10.8855 10.6666 10.3333 10.6666C9.78097 10.6666 9.33325 10.2189 9.33325 9.66665C9.33325 9.11436 9.78097 8.66665 10.3333 8.66665C10.8855 8.66665 11.3333 9.11436 11.3333 9.66665Z"
        stroke="currentColor"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRobot02)
const Robot02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Robot02', props.className].join(' ')}
    />
  )
})
Robot02.displayName = 'IconRobot02'
export default Robot02
