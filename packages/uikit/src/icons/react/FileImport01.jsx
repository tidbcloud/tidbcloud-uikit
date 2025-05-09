import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileImport01 = (props, ref) => {
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
        d="M6.66659 1.513V4.26669C6.66659 4.64006 6.66659 4.82675 6.59392 4.96935C6.53001 5.0948 6.42802 5.19678 6.30258 5.2607C6.15997 5.33336 5.97329 5.33336 5.59992 5.33336H2.84623M9.99992 9.99998L7.99992 7.99998M7.99992 7.99998L5.99992 9.99998M7.99992 7.99998L7.99992 9.99998V12M6.66659 1.33331H10.1333C11.2534 1.33331 11.8134 1.33331 12.2412 1.5513C12.6176 1.74305 12.9235 2.04901 13.1153 2.42533C13.3333 2.85316 13.3333 3.41321 13.3333 4.53331V11.4666C13.3333 12.5868 13.3333 13.1468 13.1153 13.5746C12.9235 13.951 12.6176 14.2569 12.2412 14.4487C11.8134 14.6666 11.2534 14.6666 10.1333 14.6666H5.86659C4.74648 14.6666 4.18643 14.6666 3.7586 14.4487C3.38228 14.2569 3.07632 13.951 2.88457 13.5746C2.66659 13.1468 2.66659 12.5868 2.66659 11.4666V5.33331L6.66659 1.33331Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileImport01)
const FileImport01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileImport01', props.className].join(' ')}
    />
  )
})
FileImport01.displayName = 'IconFileImport01'
export default FileImport01
