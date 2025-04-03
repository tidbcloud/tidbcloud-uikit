import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPerspective02 = (props, ref) => {
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
        d="M10.6667 3.33322L10.6667 12.6665M6.66667 2.66655L6.66667 13.3332M2 7.99988H14M2 3.99266L2 12.0071C2 12.9165 2 13.3711 2.18756 13.6863C2.35202 13.9626 2.6108 14.1702 2.91623 14.2708C3.26456 14.3855 3.70841 14.2869 4.59612 14.0896L12.3295 12.3711C12.9255 12.2387 13.2236 12.1724 13.446 12.0121C13.6423 11.8708 13.7964 11.6787 13.8918 11.4565C14 11.2045 14 10.8992 14 10.2886V5.71118C14 5.10056 14 4.79525 13.8918 4.5433C13.7964 4.32108 13.6423 4.12899 13.446 3.98762C13.2236 3.82734 12.9255 3.76111 12.3295 3.62865L4.59612 1.91013C3.70842 1.71286 3.26456 1.61423 2.91623 1.72896C2.6108 1.82955 2.35202 2.03714 2.18756 2.31347C2 2.62863 2 3.08331 2 3.99266Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPerspective02)
const Perspective02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Perspective02', props.className].join(' ')}
    />
  )
})
Perspective02.displayName = 'IconPerspective02'
export default Perspective02
