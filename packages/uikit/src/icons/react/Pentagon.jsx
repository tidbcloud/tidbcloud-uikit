import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPentagon = (props, ref) => {
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
        d="M7.37369 1.9546C7.59887 1.79118 7.71147 1.70947 7.83454 1.67789C7.94322 1.65001 8.05718 1.65001 8.16586 1.67789C8.28894 1.70947 8.40153 1.79118 8.62672 1.9546L14.0391 5.88256C14.2647 6.04629 14.3775 6.12816 14.4457 6.23559C14.506 6.33045 14.5412 6.439 14.5483 6.55114C14.5563 6.67816 14.5132 6.8107 14.4269 7.07579L12.3601 13.4299C12.2739 13.6947 12.2309 13.827 12.1498 13.925C12.0782 14.0115 11.986 14.0785 11.8816 14.1198C11.7634 14.1666 11.6242 14.1666 11.3457 14.1666H4.65469C4.37625 14.1666 4.23703 14.1666 4.11881 14.1198C4.01443 14.0785 3.92217 14.0115 3.85059 13.925C3.76953 13.827 3.72646 13.6947 3.64033 13.4299L1.57347 7.07579C1.48724 6.8107 1.44413 6.67816 1.45211 6.55114C1.45916 6.439 1.49444 6.33045 1.55468 6.23559C1.6229 6.12816 1.7357 6.04629 1.96131 5.88256L7.37369 1.9546Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPentagon)
const Pentagon = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Pentagon', props.className].join(' ')}
    />
  )
})
Pentagon.displayName = 'IconPentagon'
export default Pentagon
