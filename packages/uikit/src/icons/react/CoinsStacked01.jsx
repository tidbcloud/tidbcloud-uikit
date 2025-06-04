import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoinsStacked01 = (props, ref) => {
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
        d="M8 11.3333C8 13.1743 9.49239 14.6667 11.3333 14.6667C13.1743 14.6667 14.6667 13.1743 14.6667 11.3333C14.6667 9.49238 13.1743 8 11.3333 8C9.49239 8 8 9.49238 8 11.3333ZM8 11.3333C8 10.5828 8.24806 9.89017 8.66667 9.33301V3.33333M8 11.3333C8 11.8836 8.13332 12.4027 8.36942 12.8601C7.80778 13.3345 6.51057 13.6667 5 13.6667C2.97496 13.6667 1.33334 13.0697 1.33334 12.3333V3.33333M8.66667 3.33333C8.66667 4.06971 7.02505 4.66667 5 4.66667C2.97496 4.66667 1.33334 4.06971 1.33334 3.33333M8.66667 3.33333C8.66667 2.59695 7.02505 2 5 2C2.97496 2 1.33334 2.59695 1.33334 3.33333M1.33334 9.33333C1.33334 10.0697 2.97496 10.6667 5 10.6667C6.45934 10.6667 7.71955 10.3567 8.30976 9.90785M8.66667 6.33333C8.66667 7.06971 7.02505 7.66667 5 7.66667C2.97496 7.66667 1.33334 7.06971 1.33334 6.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoinsStacked01)
const CoinsStacked01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CoinsStacked01', props.className].join(' ')}
    />
  )
})
CoinsStacked01.displayName = 'IconCoinsStacked01'
export default CoinsStacked01
