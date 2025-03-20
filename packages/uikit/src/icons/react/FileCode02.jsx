import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileCode02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 18.5c0 .464 0 .697.026.892a3 3 0 0 0 2.582 2.582c.195.026.428.026.892.026h7.7c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V9.988c0-.734 0-1.1-.083-1.446a3 3 0 0 0-.36-.867c-.185-.303-.444-.562-.963-1.08l-3.188-3.19c-.519-.518-.778-.777-1.081-.963a3 3 0 0 0-.867-.36C14.112 2 13.745 2 13.012 2H8.5c-.464 0-.697 0-.892.026a3 3 0 0 0-2.582 2.582C5 4.803 5 5.036 5 5.5m4 9 2.5-2.5L9 9.5m-4 0L2.5 12 5 14.5"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileCode02)
const FileCode02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'FileCode02'].join(' ')}
    />
  )
})
FileCode02.displayName = 'IconFileCode02'
export default FileCode02
