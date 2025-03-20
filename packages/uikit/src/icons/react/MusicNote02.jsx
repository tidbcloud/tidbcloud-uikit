import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMusicNote02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18V5.58888C12 4.73166 12 4.30306 12.1805 4.04492C12.3382 3.81952 12.5817 3.669 12.8538 3.6288C13.1655 3.58276 13.5488 3.77444 14.3155 4.1578L18 6.00003M12 18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3432 7.34315 15 9 15C10.6569 15 12 16.3432 12 18Z"
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
      className={[props.className, 'tiui-icon', 'MusicNote02'].join(' ')}
    />
  )
})
MusicNote02.displayName = 'IconMusicNote02'
export default MusicNote02
