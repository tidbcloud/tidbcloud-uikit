import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBrush01 = (props, ref) => {
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
        d="M5.9999 7.48127L8.51842 9.99979M5.31648 13.983C4.40526 14.8943 2.66659 14.6665 1.33325 14.6665C2.01665 13.3331 1.10543 11.5944 2.01665 10.6832C2.92788 9.77198 4.40526 9.77198 5.31648 10.6832C6.22771 11.5944 6.22771 13.0718 5.31648 13.983ZM7.94765 10.6162L14.0391 4.03748C14.5756 3.45804 14.5583 2.55818 13.9999 1.99979C13.4415 1.44139 12.5416 1.42409 11.9622 1.96062L5.38348 8.05202C5.04352 8.36679 4.87354 8.52418 4.7744 8.69204C4.53668 9.09455 4.52711 9.59215 4.74919 10.0035C4.8418 10.175 5.00561 10.3388 5.33322 10.6665C5.66082 10.9941 5.82463 11.1579 5.99617 11.2505C6.40752 11.4726 6.90513 11.463 7.30764 11.2253C7.47549 11.1261 7.63288 10.9562 7.94765 10.6162Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBrush01)
const Brush01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Brush01', props.className].join(' ')}
    />
  )
})
Brush01.displayName = 'IconBrush01'
export default Brush01
