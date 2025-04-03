import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMusicNotePlus = (props, ref) => {
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
        d="M9.66683 12.0001V3.726C9.66683 3.15452 9.66683 2.86878 9.78719 2.6967C9.89229 2.54643 10.0546 2.44608 10.2361 2.41928C10.4438 2.38859 10.6994 2.51637 11.2105 2.77195L13.6668 4.0001M9.66683 12.0001C9.66683 13.1047 8.7714 14.0001 7.66683 14.0001C6.56226 14.0001 5.66683 13.1047 5.66683 12.0001C5.66683 10.8955 6.56226 10.0001 7.66683 10.0001C8.7714 10.0001 9.66683 10.8955 9.66683 12.0001ZM4.3335 6.66677V2.66677M2.3335 4.66677H6.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'MusicNotePlus', props.className].join(' ')}
    />
  )
})
MusicNotePlus.displayName = 'IconMusicNotePlus'
export default MusicNotePlus
