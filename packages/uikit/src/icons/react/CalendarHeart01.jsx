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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8H3M16 2V5M8 2V5M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22ZM11.9973 12.3306C11.1975 11.4216 9.8639 11.1771 8.86188 12.0094C7.85986 12.8418 7.71879 14.2335 8.50568 15.2179C9.077 15.9327 10.6593 17.3397 11.4833 18.0569C11.662 18.2124 11.7513 18.2902 11.856 18.321C11.9466 18.3477 12.0479 18.3477 12.1386 18.321C12.2432 18.2902 12.3325 18.2124 12.5112 18.0569C13.3353 17.3397 14.9175 15.9327 15.4888 15.2179C16.2757 14.2335 16.1519 12.8331 15.1326 12.0094C14.1134 11.1858 12.797 11.4216 11.9973 12.3306Z"
        strokeWidth="inherit"
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
