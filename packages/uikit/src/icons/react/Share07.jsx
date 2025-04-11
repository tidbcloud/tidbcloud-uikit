import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShare07 = (props, ref) => {
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
        d="M5.72667 9.00665L10.28 11.66M10.2733 4.33998L5.72667 6.99331M14 3.33331C14 4.43788 13.1046 5.33331 12 5.33331C10.8954 5.33331 10 4.43788 10 3.33331C10 2.22874 10.8954 1.33331 12 1.33331C13.1046 1.33331 14 2.22874 14 3.33331ZM6 7.99998C6 9.10455 5.10457 9.99998 4 9.99998C2.89543 9.99998 2 9.10455 2 7.99998C2 6.89541 2.89543 5.99998 4 5.99998C5.10457 5.99998 6 6.89541 6 7.99998ZM14 12.6666C14 13.7712 13.1046 14.6666 12 14.6666C10.8954 14.6666 10 13.7712 10 12.6666C10 11.5621 10.8954 10.6666 12 10.6666C13.1046 10.6666 14 11.5621 14 12.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShare07)
const Share07 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Share07', props.className].join(' ')}
    />
  )
})
Share07.displayName = 'IconShare07'
export default Share07
