import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCheckCircle1 = (props, ref) => {
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
        d="M8.00032 0.666748C3.95023 0.666748 0.666992 3.94999 0.666992 8.00008C0.666992 12.0502 3.95023 15.3334 8.00032 15.3334C12.0504 15.3334 15.3337 12.0502 15.3337 8.00008C15.3337 3.94999 12.0504 0.666748 8.00032 0.666748ZM11.8583 6.26322L7.37186 10.7497C7.23202 10.8896 7.04873 10.9595 6.86546 10.9595C6.68219 10.9595 6.49891 10.8896 6.35907 10.7497L6.35867 10.7493L4.14233 8.53301C3.86266 8.25334 3.86264 7.79989 4.14233 7.52023C4.422 7.24056 4.87544 7.24054 5.15513 7.52023L6.86546 9.23055L10.8455 5.25045C11.1252 4.97078 11.5786 4.97076 11.8583 5.25045C12.138 5.53011 12.138 5.98355 11.8583 6.26322Z"
        fill="#383E40"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCheckCircle1)
const CheckCircle1 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CheckCircle1', props.className].join(' ')}
    />
  )
})
CheckCircle1.displayName = 'IconCheckCircle1'
export default CheckCircle1
