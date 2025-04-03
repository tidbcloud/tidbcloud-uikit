import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSlashOctagon = (props, ref) => {
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
        d="M3.28683 3.28665L12.7135 12.7133M1.3335 5.68181V10.3182C1.3335 10.4812 1.3335 10.5627 1.35192 10.6395C1.36825 10.7075 1.39518 10.7725 1.43174 10.8322C1.47296 10.8994 1.53061 10.9571 1.64592 11.0724L4.92774 14.3542C5.04304 14.4695 5.1007 14.5272 5.16797 14.5684C5.22762 14.605 5.29265 14.6319 5.36067 14.6482C5.4374 14.6666 5.51893 14.6666 5.68199 14.6666H10.3183C10.4814 14.6666 10.5629 14.6666 10.6397 14.6482C10.7077 14.6319 10.7727 14.605 10.8324 14.5684C10.8996 14.5272 10.9573 14.4695 11.0726 14.3542L14.3544 11.0724C14.4697 10.9571 14.5274 10.8994 14.5686 10.8322C14.6051 10.7725 14.6321 10.7075 14.6484 10.6395C14.6668 10.5627 14.6668 10.4812 14.6668 10.3182V5.68181C14.6668 5.51875 14.6668 5.43722 14.6484 5.36049C14.6321 5.29247 14.6051 5.22744 14.5686 5.16779C14.5274 5.10051 14.4697 5.04286 14.3544 4.92756L11.0726 1.64573C10.9573 1.53043 10.8996 1.47278 10.8324 1.43155C10.7727 1.395 10.7077 1.36806 10.6397 1.35173C10.5629 1.33331 10.4814 1.33331 10.3183 1.33331H5.68199C5.51893 1.33331 5.4374 1.33331 5.36067 1.35173C5.29265 1.36806 5.22762 1.395 5.16797 1.43155C5.1007 1.47278 5.04304 1.53043 4.92774 1.64573L1.64592 4.92756C1.53061 5.04286 1.47296 5.10051 1.43174 5.16779C1.39518 5.22744 1.36825 5.29247 1.35192 5.36049C1.3335 5.43722 1.3335 5.51875 1.3335 5.68181Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSlashOctagon)
const SlashOctagon = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SlashOctagon', props.className].join(' ')}
    />
  )
})
SlashOctagon.displayName = 'IconSlashOctagon'
export default SlashOctagon
