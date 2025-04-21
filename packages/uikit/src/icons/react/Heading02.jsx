import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHeading02 = (props, ref) => {
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
        d="M4.00008 2.6665V13.3332M12.0001 2.6665V13.3332M6.33341 2.6665V13.3332M7.66675 2.6665H2.66675M12.0001 7.99984H6.33341M7.66675 13.3332H2.66675M13.3334 13.3332H10.6667M13.3334 2.6665H10.6667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHeading02)
const Heading02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Heading02', props.className].join(' ')}
    />
  )
})
Heading02.displayName = 'IconHeading02'
export default Heading02
