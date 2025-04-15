import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPercent03 = (props, ref) => {
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
        d="M6.00016 6.00004H6.00683M10.0002 10H10.0068M10.6668 5.33337L5.3335 10.6667M6.3335 6.00004C6.3335 6.18414 6.18426 6.33337 6.00016 6.33337C5.81607 6.33337 5.66683 6.18414 5.66683 6.00004C5.66683 5.81595 5.81607 5.66671 6.00016 5.66671C6.18426 5.66671 6.3335 5.81595 6.3335 6.00004ZM10.3335 10C10.3335 10.1841 10.1843 10.3334 10.0002 10.3334C9.81607 10.3334 9.66683 10.1841 9.66683 10C9.66683 9.81595 9.81607 9.66671 10.0002 9.66671C10.1843 9.66671 10.3335 9.81595 10.3335 10ZM14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337C11.6821 1.33337 14.6668 4.31814 14.6668 8.00004Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPercent03)
const Percent03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Percent03', props.className].join(' ')}
    />
  )
})
Percent03.displayName = 'IconPercent03'
export default Percent03
