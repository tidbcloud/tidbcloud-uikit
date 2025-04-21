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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M9.66659 12.0001V3.726C9.66659 3.15452 9.66659 2.86878 9.78695 2.6967C9.89205 2.54643 10.0544 2.44608 10.2358 2.41928C10.4436 2.38859 10.6991 2.51637 11.2103 2.77195L13.6666 4.0001M9.66659 12.0001C9.66659 13.1047 8.77115 14.0001 7.66659 14.0001C6.56202 14.0001 5.66659 13.1047 5.66659 12.0001C5.66659 10.8955 6.56202 10.0001 7.66659 10.0001C8.77115 10.0001 9.66659 10.8955 9.66659 12.0001ZM4.33325 6.66677V2.66677M2.33325 4.66677H6.33325"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
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
      className={['tiui-icon', 'MusicNotePlus', props.className].join(' ')}
    />
  )
})
MusicNotePlus.displayName = 'IconMusicNotePlus'
export default MusicNotePlus
