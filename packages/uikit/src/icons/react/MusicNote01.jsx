import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMusicNote01 = (props, ref) => {
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
        d="M6 11.9999V4.23683C6 3.91581 6 3.75529 6.0584 3.62511C6.10988 3.51035 6.19278 3.4125 6.29751 3.34285C6.41632 3.26384 6.57465 3.23745 6.89131 3.18468L12.758 2.2069C13.1853 2.13568 13.3989 2.10007 13.5655 2.16192C13.7116 2.21619 13.8341 2.31995 13.9116 2.45516C14 2.60924 14 2.82584 14 3.25905V10.6666M6 11.9999C6 13.1045 5.10457 13.9999 4 13.9999C2.89543 13.9999 2 13.1045 2 11.9999C2 10.8953 2.89543 9.99989 4 9.99989C5.10457 9.99989 6 10.8953 6 11.9999ZM14 10.6666C14 11.7711 13.1046 12.6666 12 12.6666C10.8954 12.6666 10 11.7711 10 10.6666C10 9.56199 10.8954 8.66656 12 8.66656C13.1046 8.66656 14 9.56199 14 10.6666Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMusicNote01)
const MusicNote01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'MusicNote01', props.className].join(' ')}
    />
  )
})
MusicNote01.displayName = 'IconMusicNote01'
export default MusicNote01
