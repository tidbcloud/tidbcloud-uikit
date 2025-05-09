import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTextInput = (props, ref) => {
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
        d="M8.66659 4.66667H3.46659C2.71985 4.66667 2.34648 4.66667 2.06126 4.81199C1.81038 4.93982 1.60641 5.1438 1.47858 5.39468C1.33325 5.67989 1.33325 6.05326 1.33325 6.8V9.2C1.33325 9.94674 1.33325 10.3201 1.47858 10.6053C1.60641 10.8562 1.81038 11.0602 2.06126 11.188C2.34648 11.3333 2.71985 11.3333 3.46659 11.3333H8.66659M11.3333 4.66667H12.5333C13.28 4.66667 13.6534 4.66667 13.9386 4.81199C14.1895 4.93982 14.3934 5.1438 14.5213 5.39468C14.6666 5.67989 14.6666 6.05326 14.6666 6.8V9.2C14.6666 9.94674 14.6666 10.3201 14.5213 10.6053C14.3934 10.8562 14.1895 11.0602 13.9386 11.188C13.6534 11.3333 13.28 11.3333 12.5333 11.3333H11.3333M11.3333 14L11.3333 2M12.9999 2.00001L9.66659 2M12.9999 14L9.66659 14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTextInput)
const TextInput = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'TextInput', props.className].join(' ')}
    />
  )
})
TextInput.displayName = 'IconTextInput'
export default TextInput
