import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRss01 = (props, ref) => {
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
        d="M2.66675 7.33341C4.25805 7.33341 5.78417 7.96556 6.90939 9.09077C8.03461 10.216 8.66675 11.7421 8.66675 13.3334M2.66675 2.66675C5.49572 2.66675 8.20883 3.79055 10.2092 5.79094C12.2096 7.79133 13.3334 10.5044 13.3334 13.3334M4.00008 12.6667C4.00008 13.0349 3.7016 13.3334 3.33341 13.3334C2.96522 13.3334 2.66675 13.0349 2.66675 12.6667C2.66675 12.2986 2.96522 12.0001 3.33341 12.0001C3.7016 12.0001 4.00008 12.2986 4.00008 12.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRss01)
const Rss01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Rss01', props.className].join(' ')}
    />
  )
})
Rss01.displayName = 'IconRss01'
export default Rss01
