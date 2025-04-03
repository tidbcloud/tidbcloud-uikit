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
      ref={ref}
      {...props}
    >
      <path
        d="M3.99984 2.6665V13.3332M11.9998 2.6665V13.3332M6.33317 2.6665V13.3332M7.6665 2.6665H2.6665M11.9998 7.99984H6.33317M7.6665 13.3332H2.6665M13.3332 13.3332H10.6665M13.3332 2.6665H10.6665"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
