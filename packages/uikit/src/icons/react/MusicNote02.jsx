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
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18V5.589c0-.857 0-1.286.18-1.544a1 1 0 0 1 .674-.416c.312-.046.695.145 1.462.529L18 6m-6 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
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
