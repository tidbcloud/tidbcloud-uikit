import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSend03 = (props, ref) => {
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
        d="M7.00028 7.99998H3.33362M3.27718 8.19432L1.72057 12.8441C1.59828 13.2094 1.53713 13.3921 1.58101 13.5045C1.61912 13.6022 1.70096 13.6763 1.80195 13.7044C1.91824 13.7369 2.09388 13.6579 2.44517 13.4998L13.5862 8.48634C13.929 8.33204 14.1005 8.2549 14.1535 8.14772C14.1995 8.05461 14.1995 7.94536 14.1535 7.85225C14.1005 7.74507 13.929 7.66792 13.5862 7.51363L2.44129 2.49846C2.09106 2.34086 1.91595 2.26206 1.79977 2.29439C1.69888 2.32246 1.61704 2.39632 1.57881 2.49381C1.53478 2.60608 1.59527 2.78833 1.71625 3.15283L3.27761 7.857C3.29839 7.91961 3.30878 7.95091 3.31288 7.98292C3.31652 8.01133 3.31649 8.04009 3.31277 8.06849C3.30859 8.10049 3.29812 8.13177 3.27718 8.19432Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSend03)
const Send03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Send03', props.className].join(' ')}
    />
  )
})
Send03.displayName = 'IconSend03'
export default Send03
