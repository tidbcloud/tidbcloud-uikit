import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMusicNotePlus = (props, ref) => {
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
        d="M14.5 18V5.58888C14.5 4.73166 14.5 4.30306 14.6805 4.04492C14.8382 3.81952 15.0817 3.669 15.3538 3.6288C15.6655 3.58276 16.0488 3.77444 16.8155 4.1578L20.5 6.00003M14.5 18C14.5 19.6569 13.1569 21 11.5 21C9.84315 21 8.5 19.6569 8.5 18C8.5 16.3432 9.84315 15 11.5 15C13.1569 15 14.5 16.3432 14.5 18ZM6.5 10V4.00003M3.5 7.00003H9.5"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMusicNotePlus)
const MusicNotePlus = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'MusicNotePlus'].join(' ')}
    />
  )
})
MusicNotePlus.displayName = 'IconMusicNotePlus'
export default MusicNotePlus
