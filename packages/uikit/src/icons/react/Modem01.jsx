import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconModem01 = (props, ref) => {
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
        d="M10.8285 3.17147C12.3906 4.73357 12.3906 7.26623 10.8285 8.82832M5.17164 8.82832C3.60954 7.26623 3.60954 4.73357 5.17164 3.17147M3.23894 10.6666C0.682473 8.05951 0.698117 3.87364 3.28587 1.28589M12.7143 1.28589C15.302 3.87364 15.3177 8.05951 12.7612 10.6666M8.00007 10.6666V5.99992M3.3334 14.6666H12.6667C13.288 14.6666 13.5986 14.6666 13.8436 14.5651C14.1703 14.4298 14.4299 14.1702 14.5652 13.8435C14.6667 13.5985 14.6667 13.2878 14.6667 12.6666C14.6667 12.0453 14.6667 11.7347 14.5652 11.4897C14.4299 11.163 14.1703 10.9034 13.8436 10.7681C13.5986 10.6666 13.288 10.6666 12.6667 10.6666H3.3334C2.71214 10.6666 2.40152 10.6666 2.15649 10.7681C1.82978 10.9034 1.57022 11.163 1.43489 11.4897C1.3334 11.7347 1.3334 12.0453 1.3334 12.6666C1.3334 13.2878 1.3334 13.5985 1.43489 13.8435C1.57022 14.1702 1.82978 14.4298 2.15649 14.5651C2.40152 14.6666 2.71214 14.6666 3.3334 14.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconModem01)
const Modem01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Modem01', props.className].join(' ')}
    />
  )
})
Modem01.displayName = 'IconModem01'
export default Modem01
