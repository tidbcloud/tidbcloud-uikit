import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconParagraphSpacing = (props, ref) => {
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
        d="M14 6.6665H8.66667M14 3.99984H8.66667M14 9.33317H8.66667M14 11.9998H8.66667M4 13.3332L4 2.6665M4 13.3332L2 11.3332M4 13.3332L6 11.3332M4 2.6665L2 4.6665M4 2.6665L6 4.6665"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconParagraphSpacing)
const ParagraphSpacing = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ParagraphSpacing', props.className].join(' ')}
    />
  )
})
ParagraphSpacing.displayName = 'IconParagraphSpacing'
export default ParagraphSpacing
