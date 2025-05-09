import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTableList = (props, ref) => {
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
        d="M2 6.33333H14M2 9.66667H14M5.2 3H10.8C11.9201 3 12.4802 3 12.908 3.21799C13.2843 3.40973 13.5903 3.71569 13.782 4.09202C14 4.51984 14 4.41323 14 5.53333V10.4667C14 11.5868 14 11.4802 13.782 11.908C13.5903 12.2843 13.2843 12.5903 12.908 12.782C12.4802 13 11.9201 13 10.8 13H5.2C4.07989 13 3.51984 13 3.09202 12.782C2.71569 12.5903 2.40973 12.2843 2.21799 11.908C2 11.4802 2 11.5868 2 10.4667V5.53333C2 4.41323 2 4.51984 2.21799 4.09202C2.40973 3.71569 2.71569 3.40973 3.09202 3.21799C3.51984 3 4.0799 3 5.2 3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTableList)
const TableList = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'TableList', props.className].join(' ')}
    />
  )
})
TableList.displayName = 'IconTableList'
export default TableList
