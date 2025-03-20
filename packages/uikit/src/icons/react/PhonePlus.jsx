import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPhonePlus = (props, ref) => {
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
        d="M17 11V3m-4 4h8m-10.773 6.863a14.6 14.6 0 0 1-2.847-4.01 2 2 0 0 1-.113-.266 1.05 1.05 0 0 1 .147-.862c.048-.067.105-.124.22-.238.35-.35.524-.524.638-.7a2 2 0 0 0 0-2.18c-.114-.176-.289-.351-.638-.7l-.195-.196c-.532-.531-.797-.797-1.083-.941a2 2 0 0 0-1.805 0c-.285.144-.551.41-1.083.941l-.157.158c-.53.53-.795.794-.997 1.154-.224.4-.386 1.02-.384 1.479 0 .413.081.695.241 1.26a19.04 19.04 0 0 0 4.874 8.283 19.04 19.04 0 0 0 8.283 4.874c.565.16.847.24 1.26.241a3.4 3.4 0 0 0 1.478-.384c.36-.203.625-.468 1.155-.997l.157-.158c.532-.531.797-.797.942-1.082a2 2 0 0 0 0-1.806c-.145-.285-.41-.55-.942-1.082l-.195-.195c-.35-.35-.524-.524-.7-.639a2 2 0 0 0-2.18 0c-.176.114-.35.29-.7.639-.115.114-.172.171-.239.22-.237.17-.581.228-.862.146a2 2 0 0 1-.266-.113 14.6 14.6 0 0 1-4.01-2.846"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPhonePlus)
const PhonePlus = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'PhonePlus'].join(' ')}
    />
  )
})
PhonePlus.displayName = 'IconPhonePlus'
export default PhonePlus
