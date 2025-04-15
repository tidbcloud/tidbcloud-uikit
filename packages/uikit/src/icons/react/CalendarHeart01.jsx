import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCalendarHeart01 = (props, ref) => {
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
        d="M14 5.3335H2M10.6667 1.3335V3.3335M5.33333 1.3335V3.3335M5.2 14.6668H10.8C11.9201 14.6668 12.4802 14.6668 12.908 14.4488C13.2843 14.2571 13.5903 13.9511 13.782 13.5748C14 13.147 14 12.5869 14 11.4668V5.86683C14 4.74672 14 4.18667 13.782 3.75885C13.5903 3.38252 13.2843 3.07656 12.908 2.88482C12.4802 2.66683 11.9201 2.66683 10.8 2.66683H5.2C4.0799 2.66683 3.51984 2.66683 3.09202 2.88482C2.71569 3.07656 2.40973 3.38252 2.21799 3.75885C2 4.18667 2 4.74672 2 5.86683V11.4668C2 12.5869 2 13.147 2.21799 13.5748C2.40973 13.9511 2.71569 14.2571 3.09202 14.4488C3.51984 14.6668 4.0799 14.6668 5.2 14.6668ZM7.99817 8.22056C7.46501 7.61456 6.57593 7.45155 5.90792 8.00646C5.23991 8.56137 5.14586 9.48916 5.67045 10.1455C6.05133 10.622 7.10618 11.5599 7.65555 12.0381C7.77465 12.1418 7.8342 12.1936 7.90398 12.2142C7.96442 12.232 8.03192 12.232 8.09237 12.2142C8.16215 12.1936 8.2217 12.1418 8.34079 12.0381C8.89017 11.5599 9.94502 10.622 10.3259 10.1455C10.8505 9.48916 10.7679 8.55554 10.0884 8.00646C9.40893 7.45739 8.53133 7.61456 7.99817 8.22056Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'CalendarHeart01', props.className].join(' ')}
    />
  )
})
CalendarHeart01.displayName = 'IconCalendarHeart01'
export default CalendarHeart01
