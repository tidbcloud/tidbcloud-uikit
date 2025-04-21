import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUsbFlashDrive = (props, ref) => {
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
        d="M12.0001 5.99992V2.39992C12.0001 2.02655 12.0001 1.83987 11.9274 1.69726C11.8635 1.57182 11.7615 1.46983 11.6361 1.40591C11.4935 1.33325 11.3068 1.33325 10.9334 1.33325H5.06675C4.69338 1.33325 4.5067 1.33325 4.36409 1.40591C4.23865 1.46983 4.13666 1.57182 4.07274 1.69726C4.00008 1.83987 4.00008 2.02655 4.00008 2.39992V5.99992M6.66675 3.99992V3.33325M9.33341 3.99992V3.33325M5.86675 14.6666H10.1334C11.2535 14.6666 11.8136 14.6666 12.2414 14.4486C12.6177 14.2569 12.9237 13.9509 13.1154 13.5746C13.3334 13.1467 13.3334 12.5867 13.3334 11.4666V8.13325C13.3334 7.38652 13.3334 7.01315 13.1881 6.72793C13.0603 6.47705 12.8563 6.27307 12.6054 6.14524C12.3202 5.99992 11.9468 5.99992 11.2001 5.99992H4.80008C4.05334 5.99992 3.67998 5.99992 3.39476 6.14524C3.14388 6.27307 2.9399 6.47705 2.81207 6.72793C2.66675 7.01315 2.66675 7.38652 2.66675 8.13325V11.4666C2.66675 12.5867 2.66675 13.1467 2.88473 13.5746C3.07648 13.9509 3.38244 14.2569 3.75877 14.4486C4.18659 14.6666 4.74664 14.6666 5.86675 14.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUsbFlashDrive)
const UsbFlashDrive = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'UsbFlashDrive', props.className].join(' ')}
    />
  )
})
UsbFlashDrive.displayName = 'IconUsbFlashDrive'
export default UsbFlashDrive
