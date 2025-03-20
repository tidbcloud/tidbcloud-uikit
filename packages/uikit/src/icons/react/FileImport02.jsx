import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileImport02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
        d="M9.498 2.27V6.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.11-.494.11-1.054.11h-4.13M12.497 22h-4.2c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.327-.642-.327-1.482-.327-3.162V8l6-6h5.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162V10m1.362 7.2-3-3m0 0-3 3m3-3V22"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileImport02)
const FileImport02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'FileImport02'].join(' ')}
    />
  )
})
FileImport02.displayName = 'IconFileImport02'
export default FileImport02
