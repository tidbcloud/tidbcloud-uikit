import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTableList = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9.5h18m-18 5h18M7.8 4.5h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 6.78 21 6.62 21 8.3v7.4c0 1.68 0 1.52-.327 2.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 17.22 3 17.38 3 15.7V8.3c0-1.68 0-1.52.327-2.162a3 3 0 0 1 1.311-1.311C5.28 4.5 6.12 4.5 7.8 4.5"
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
      className={[props.className, 'tiui-icon', 'TableList'].join(' ')}
    />
  )
})
TableList.displayName = 'IconTableList'
export default TableList
