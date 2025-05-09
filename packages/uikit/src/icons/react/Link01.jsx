import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLink01 = (props, ref) => {
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
        d="M8.4717 12.2425L7.52889 13.1853C6.22714 14.4871 4.11659 14.4871 2.81484 13.1853C1.51309 11.8836 1.51309 9.77305 2.81484 8.4713L3.75765 7.52849M12.2429 8.4713L13.1857 7.52849C14.4875 6.22674 14.4875 4.11619 13.1857 2.81445C11.884 1.5127 9.77344 1.5127 8.4717 2.81445L7.52889 3.75725M5.66696 10.3332L10.3336 5.66655"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLink01)
const Link01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Link01', props.className].join(' ')}
    />
  )
})
Link01.displayName = 'IconLink01'
export default Link01
