import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCalendarHeart01 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 8H3m13-6v3M8 2v3m-.2 17h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22m4.197-9.67c-.8-.908-2.133-1.153-3.135-.32-1.002.832-1.143 2.223-.356 3.208.571.715 2.153 2.122 2.977 2.839.179.155.268.233.373.264.09.027.192.027.283 0 .104-.03.194-.109.372-.264.824-.717 2.407-2.124 2.978-2.84a2.256 2.256 0 0 0-.356-3.208c-1.02-.823-2.336-.587-3.136.322"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCalendarHeart01)
const CalendarHeart01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CalendarHeart01'].join(' ')}
    />
  )
})
CalendarHeart01.displayName = 'IconCalendarHeart01'
export default CalendarHeart01
