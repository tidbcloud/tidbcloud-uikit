import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileImport04 = (props, ref) => {
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
        d="M13.3333 5.33331V4.99998C13.3333 3.87987 13.3333 2.85316 13.1153 2.42533C12.9235 2.04901 12.6176 1.74305 12.2412 1.5513C11.8134 1.33331 10.92 1.33331 9.79992 1.33331H5.53325C4.41315 1.33331 3.85309 1.33331 3.42527 1.5513C3.04895 1.74305 2.74299 2.04901 2.55124 2.42533C2.33325 2.85316 2.33325 3.41321 2.33325 4.53331V11.4666C2.33325 12.5868 2.33325 13.1468 2.55124 13.5746C2.74299 13.951 3.04895 14.2569 3.42527 14.4487C3.85309 14.6666 4.41315 14.6666 5.53325 14.6666H7.99992M8.33325 7.99998H5.33325M7.33325 10.6666H5.33325M10.3333 5.33331H5.33325M14.3333 10.6666L12.3333 8.66665M12.3333 8.66665L10.3333 10.6666M12.3333 8.66665V14.6666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileImport04)
const FileImport04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileImport04', props.className].join(' ')}
    />
  )
})
FileImport04.displayName = 'IconFileImport04'
export default FileImport04
