import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileImport02 = (props, ref) => {
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
        d="M6.33215 1.513V4.26669C6.33215 4.64006 6.33215 4.82675 6.25949 4.96935C6.19558 5.0948 6.09359 5.19678 5.96815 5.2607C5.82554 5.33336 5.63886 5.33336 5.26549 5.33336H2.5118M8.33219 14.6666H5.53215C4.41205 14.6666 3.852 14.6666 3.42417 14.4487C3.04785 14.2569 2.74189 13.951 2.55014 13.5746C2.33216 13.1468 2.33216 12.5868 2.33216 11.4666V5.33331L6.33215 1.33331H9.79882C10.9189 1.33331 11.479 1.33331 11.9068 1.5513C12.2831 1.74305 12.5891 2.04901 12.7808 2.42533C12.9988 2.85316 12.9988 3.41321 12.9988 4.53331V6.66665M13.9069 11.4666L11.9069 9.46665M11.9069 9.46665L9.90687 11.4666M11.9069 9.46665L11.9069 11.4666V14.6666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
      className={['tiui-icon', 'FileImport02', props.className].join(' ')}
    />
  )
})
FileImport02.displayName = 'IconFileImport02'
export default FileImport02
