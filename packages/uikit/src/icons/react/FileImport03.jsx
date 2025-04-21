import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileImport03 = (props, ref) => {
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
        d="M7.66675 1.33332H5.86675C4.74664 1.33332 4.18659 1.33332 3.75877 1.5513C3.38244 1.74305 3.07648 2.04901 2.88474 2.42533C2.66675 2.85316 2.66675 3.41321 2.66675 4.53332V11.4666C2.66675 12.5868 2.66675 13.1468 2.88474 13.5746C3.07648 13.951 3.38244 14.2569 3.75877 14.4487C4.18659 14.6666 4.74664 14.6666 5.86675 14.6666H10.1334C11.2535 14.6666 12.1469 14.6666 12.5747 14.4487C12.9511 14.2569 13.257 13.951 13.4488 13.5746C13.6667 13.1468 13.6667 12.5868 13.6667 11.4666V11M5.66675 8.66665H8.33341M5.66675 5.99998H8.33341M5.66675 11.3333H10.6667M10.0001 3.33331L12.0001 1.33331M12.0001 1.33331L14.0001 3.33331M12.0001 1.33331V8.33332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileImport03)
const FileImport03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileImport03', props.className].join(' ')}
    />
  )
})
FileImport03.displayName = 'IconFileImport03'
export default FileImport03
