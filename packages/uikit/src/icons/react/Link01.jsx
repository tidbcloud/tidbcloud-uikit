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
      ref={ref}
      {...props}
    >
      <path
        d="M8.47154 12.2425L7.52874 13.1853C6.22699 14.4871 4.11644 14.4871 2.81469 13.1853C1.51294 11.8836 1.51294 9.77305 2.81469 8.4713L3.7575 7.52849M12.2428 8.4713L13.1856 7.52849C14.4873 6.22674 14.4873 4.11619 13.1856 2.81445C11.8838 1.5127 9.77329 1.5127 8.47154 2.81445L7.52874 3.75725M5.66681 10.3332L10.3335 5.66655"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
