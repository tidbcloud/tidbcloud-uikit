import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChevronDownFill = (props, ref) => {
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
        d="M5.17452 8.4C5.47239 8.01113 6.1465 8.00017 6.52274 8.0002H11.9063L17.1876 8C17.637 8 18.282 8.0003 18.6567 8.22065C19.0322 8.44147 19.023 8.81418 18.9785 9.03055C18.9549 9.14528 18.8875 9.24361 18.8071 9.32883L12.9048 15.5874C12.8968 15.5958 12.889 15.6039 12.8804 15.6117C12.8083 15.6777 12.429 16 11.9063 16C11.4018 16 11.0309 15.6997 10.9408 15.6195C10.9263 15.6067 10.9142 15.594 10.9013 15.5796C10.5545 15.1943 5.40417 9.4713 5.17452 9.20001C4.93686 8.91926 4.94685 8.69722 5.17452 8.4Z"
        fill="currentColor"
        strokeWidth="inherit"
        stroke="currentColor"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChevronDownFill)
const ChevronDownFill = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ChevronDownFill'].join(' ')}
    />
  )
})
ChevronDownFill.displayName = 'IconChevronDownFill'
export default ChevronDownFill
