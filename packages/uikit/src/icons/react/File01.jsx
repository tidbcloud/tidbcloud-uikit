import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFile01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M2.6665 4.53325C2.6665 3.41315 2.6665 2.85309 2.88449 2.42527C3.07624 2.04895 3.3822 1.74299 3.75852 1.55124C4.18635 1.33325 4.7464 1.33325 5.8665 1.33325H10.1332C11.2533 1.33325 11.8133 1.33325 12.2412 1.55124C12.6175 1.74299 12.9234 2.04895 13.1152 2.42527C13.3332 2.85309 13.3332 3.41315 13.3332 4.53325V11.4666C13.3332 12.5867 13.3332 13.1467 13.1152 13.5746C12.9234 13.9509 12.6175 14.2569 12.2412 14.4486C11.8133 14.6666 11.2533 14.6666 10.1332 14.6666H5.8665C4.7464 14.6666 4.18635 14.6666 3.75852 14.4486C3.3822 14.2569 3.07624 13.9509 2.88449 13.5746C2.6665 13.1467 2.6665 12.5867 2.6665 11.4666V4.53325Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFile01)
const File01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'File01', props.className].join(' ')}
    />
  )
})
File01.displayName = 'IconFile01'
export default File01
