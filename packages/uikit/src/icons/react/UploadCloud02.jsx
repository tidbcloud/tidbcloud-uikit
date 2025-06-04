import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUploadCloud02 = (props, ref) => {
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
        d="M5.33331 10.6667L7.99998 8M7.99998 8L10.6666 10.6667M7.99998 8V14M13.3333 11.1619C14.1476 10.4894 14.6666 9.47196 14.6666 8.33333C14.6666 6.30829 13.025 4.66667 11 4.66667C10.8543 4.66667 10.718 4.59066 10.6441 4.46516C9.77469 2.98989 8.1696 2 6.33331 2C3.57189 2 1.33331 4.23858 1.33331 7C1.33331 8.3774 1.89028 9.62472 2.79128 10.529"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUploadCloud02)
const UploadCloud02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UploadCloud02', props.className].join(' ')}
    />
  )
})
UploadCloud02.displayName = 'IconUploadCloud02'
export default UploadCloud02
