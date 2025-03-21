import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFingerprint01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M6.91822 3.38565C8.40742 2.50524 10.1447 2 12 2C17.5228 2 22 6.47715 22 12C22 12.0331 21.9998 12.0662 21.9995 12.0993M3.38114 6.92585C2.50352 8.41335 2 10.1479 2 12C2 16.6596 5.18693 20.5748 9.5 21.685M20.7076 16.9206C19.3872 19.2522 17.1574 21.001 14.5 21.685M14.0893 6.37378C13.4387 6.13207 12.7348 6 12 6C8.68629 6 6 8.68629 6 12C6 12.7387 6.13351 13.4463 6.37772 14.0999M17.6251 9.90767C17.8675 10.5591 18 11.2641 18 12C18 15.3137 15.3137 18 12 18C11.2701 18 10.5707 17.8697 9.92373 17.631M12 10V14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFingerprint01)
const Fingerprint01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Fingerprint01'].join(' ')}
    />
  )
})
Fingerprint01.displayName = 'IconFingerprint01'
export default Fingerprint01
