import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMusicNote02 = (props, ref) => {
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
        d="M8 12.0001V3.726C8 3.15452 8 2.86878 8.12036 2.6967C8.22546 2.54643 8.38782 2.44608 8.56923 2.41928C8.77698 2.38859 9.03255 2.51637 9.54369 2.77195L12 4.0001M8 12.0001C8 13.1047 7.10457 14.0001 6 14.0001C4.89543 14.0001 4 13.1047 4 12.0001C4 10.8955 4.89543 10.0001 6 10.0001C7.10457 10.0001 8 10.8955 8 12.0001Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMusicNote02)
const MusicNote02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MusicNote02', props.className].join(' ')}
    />
  )
})
MusicNote02.displayName = 'IconMusicNote02'
export default MusicNote02
