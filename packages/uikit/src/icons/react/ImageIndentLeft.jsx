import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconImageIndentLeft = (props, ref) => {
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
        d="M14 6.1665H10M14 2.6665H2M14 9.83317H10M14 13.3332H2M3.06667 10.6665H6.26667C6.64004 10.6665 6.82672 10.6665 6.96933 10.5938C7.09477 10.5299 7.19676 10.4279 7.26067 10.3025C7.33333 10.1599 7.33333 9.9732 7.33333 9.59984V6.39984C7.33333 6.02647 7.33333 5.83978 7.26067 5.69718C7.19676 5.57174 7.09477 5.46975 6.96933 5.40583C6.82672 5.33317 6.64004 5.33317 6.26667 5.33317H3.06667C2.6933 5.33317 2.50661 5.33317 2.36401 5.40583C2.23856 5.46975 2.13658 5.57174 2.07266 5.69718C2 5.83978 2 6.02647 2 6.39984V9.59984C2 9.9732 2 10.1599 2.07266 10.3025C2.13658 10.4279 2.23856 10.5299 2.36401 10.5938C2.50661 10.6665 2.6933 10.6665 3.06667 10.6665Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconImageIndentLeft)
const ImageIndentLeft = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ImageIndentLeft', props.className].join(' ')}
    />
  )
})
ImageIndentLeft.displayName = 'IconImageIndentLeft'
export default ImageIndentLeft
