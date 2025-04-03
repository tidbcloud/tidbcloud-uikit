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
      ref={ref}
      {...props}
    >
      <path
        d="M12.0003 5.99992V2.39992C12.0003 2.02655 12.0003 1.83987 11.9277 1.69726C11.8637 1.57182 11.7618 1.46983 11.6363 1.40591C11.4937 1.33325 11.307 1.33325 10.9337 1.33325H5.06699C4.69362 1.33325 4.50694 1.33325 4.36433 1.40591C4.23889 1.46983 4.1369 1.57182 4.07299 1.69726C4.00033 1.83987 4.00033 2.02655 4.00033 2.39992V5.99992M6.66699 3.99992V3.33325M9.33366 3.99992V3.33325M5.86699 14.6666H10.1337C11.2538 14.6666 11.8138 14.6666 12.2416 14.4486C12.618 14.2569 12.9239 13.9509 13.1157 13.5746C13.3337 13.1467 13.3337 12.5867 13.3337 11.4666V8.13325C13.3337 7.38652 13.3337 7.01315 13.1883 6.72793C13.0605 6.47705 12.8565 6.27307 12.6056 6.14524C12.3204 5.99992 11.9471 5.99992 11.2003 5.99992H4.80033C4.05359 5.99992 3.68022 5.99992 3.395 6.14524C3.14412 6.27307 2.94015 6.47705 2.81232 6.72793C2.66699 7.01315 2.66699 7.38652 2.66699 8.13325V11.4666C2.66699 12.5867 2.66699 13.1467 2.88498 13.5746C3.07673 13.9509 3.38269 14.2569 3.75901 14.4486C4.18683 14.6666 4.74689 14.6666 5.86699 14.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
