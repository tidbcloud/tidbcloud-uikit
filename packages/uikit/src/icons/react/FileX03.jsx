import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileX03 = (props, ref) => {
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
        d="M9.33329 1.51294V4.26663C9.33329 4.64 9.33329 4.82669 9.40595 4.96929C9.46987 5.09473 9.57186 5.19672 9.6973 5.26064C9.83991 5.3333 10.0266 5.3333 10.4 5.3333H13.1537M6.33329 7.99992L9.66663 11.3333M9.66663 7.99992L6.33329 11.3333M9.33329 1.33325H5.86663C4.74652 1.33325 4.18647 1.33325 3.75864 1.55124C3.38232 1.74299 3.07636 2.04895 2.88461 2.42527C2.66663 2.85309 2.66663 3.41315 2.66663 4.53325V11.4666C2.66663 12.5867 2.66663 13.1467 2.88461 13.5746C3.07636 13.9509 3.38232 14.2569 3.75864 14.4486C4.18647 14.6666 4.74652 14.6666 5.86663 14.6666H10.1333C11.2534 14.6666 11.8134 14.6666 12.2413 14.4486C12.6176 14.2569 12.9236 13.9509 13.1153 13.5746C13.3333 13.1467 13.3333 12.5867 13.3333 11.4666V5.33325L9.33329 1.33325Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileX03)
const FileX03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileX03', props.className].join(' ')}
    />
  )
})
FileX03.displayName = 'IconFileX03'
export default FileX03
