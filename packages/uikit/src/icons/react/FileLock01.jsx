import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileLock01 = (props, ref) => {
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
        d="M13.3332 6.66659V4.53325C13.3332 3.41315 13.3332 2.85309 13.1152 2.42527C12.9234 2.04895 12.6175 1.74299 12.2412 1.55124C11.8133 1.33325 11.2533 1.33325 10.1332 1.33325H5.8665C4.7464 1.33325 4.18635 1.33325 3.75852 1.55124C3.3822 1.74299 3.07624 2.04895 2.88449 2.42527C2.6665 2.85309 2.6665 3.41315 2.6665 4.53325V11.4666C2.6665 12.5867 2.6665 13.1467 2.88449 13.5746C3.07624 13.9509 3.3822 14.2569 3.75852 14.4486C4.18635 14.6666 4.7464 14.6666 5.8665 14.6666H6.99984M12.8332 11.3333V10.1666C12.8332 9.52225 12.3108 8.99992 11.6665 8.99992C11.0222 8.99992 10.4998 9.52225 10.4998 10.1666V11.3333M10.3998 13.9999H12.9332C13.3065 13.9999 13.4932 13.9999 13.6358 13.9273C13.7613 13.8633 13.8633 13.7614 13.9272 13.6359C13.9998 13.4933 13.9998 13.3066 13.9998 12.9333V12.3999C13.9998 12.0266 13.9998 11.8399 13.9272 11.6973C13.8633 11.5718 13.7613 11.4698 13.6358 11.4059C13.4932 11.3333 13.3065 11.3333 12.9332 11.3333H10.3998C10.0265 11.3333 9.83978 11.3333 9.69718 11.4059C9.57173 11.4698 9.46975 11.5718 9.40583 11.6973C9.33317 11.8399 9.33317 12.0266 9.33317 12.3999V12.9333C9.33317 13.3066 9.33317 13.4933 9.40583 13.6359C9.46975 13.7614 9.57173 13.8633 9.69718 13.9273C9.83978 13.9999 10.0265 13.9999 10.3998 13.9999Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileLock01)
const FileLock01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileLock01', props.className].join(' ')}
    />
  )
})
FileLock01.displayName = 'IconFileLock01'
export default FileLock01
