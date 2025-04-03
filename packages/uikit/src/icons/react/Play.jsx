import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPlay = (props, ref) => {
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
        d="M3.3335 3.32642C3.3335 2.67898 3.3335 2.35526 3.46849 2.17681C3.58609 2.02135 3.76584 1.92515 3.96043 1.91353C4.18379 1.9002 4.45314 2.07977 4.99184 2.4389L12.0022 7.11248C12.4473 7.40923 12.6699 7.55761 12.7475 7.74462C12.8153 7.90813 12.8153 8.09188 12.7475 8.25538C12.6699 8.4424 12.4473 8.59077 12.0022 8.88752L4.99184 13.5611C4.45314 13.9202 4.18379 14.0998 3.96043 14.0865C3.76584 14.0749 3.58609 13.9787 3.46849 13.8232C3.3335 13.6447 3.3335 13.321 3.3335 12.6736V3.32642Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPlay)
const Play = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Play', props.className].join(' ')}
    />
  )
})
Play.displayName = 'IconPlay'
export default Play
