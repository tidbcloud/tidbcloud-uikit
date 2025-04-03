import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignVerticalCenter02 = (props, ref) => {
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
        d="M6.6665 12V4C6.6665 3.37874 6.6665 3.06812 6.56501 2.82309C6.42968 2.49638 6.17012 2.23682 5.84342 2.10149C5.59839 2 5.28776 2 4.6665 2C4.04525 2 3.73462 2 3.48959 2.10149C3.16289 2.23682 2.90332 2.49638 2.768 2.82309C2.6665 3.06812 2.6665 3.37874 2.6665 4V12C2.6665 12.6213 2.6665 12.9319 2.768 13.1769C2.90332 13.5036 3.16289 13.7632 3.48959 13.8985C3.73462 14 4.04525 14 4.6665 14C5.28776 14 5.59839 14 5.84342 13.8985C6.17012 13.7632 6.42968 13.5036 6.56501 13.1769C6.6665 12.9319 6.6665 12.6213 6.6665 12Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3332 10.6667V5.33333C13.3332 4.71208 13.3332 4.40145 13.2317 4.15642C13.0964 3.82972 12.8368 3.57015 12.5101 3.43483C12.2651 3.33333 11.9544 3.33333 11.3332 3.33333C10.7119 3.33333 10.4013 3.33333 10.1563 3.43483C9.82956 3.57015 9.56999 3.82972 9.43466 4.15642C9.33317 4.40145 9.33317 4.71208 9.33317 5.33333V10.6667C9.33317 11.2879 9.33317 11.5986 9.43466 11.8436C9.56999 12.1703 9.82956 12.4298 10.1563 12.5652C10.4013 12.6667 10.7119 12.6667 11.3332 12.6667C11.9544 12.6667 12.2651 12.6667 12.5101 12.5652C12.8368 12.4298 13.0964 12.1703 13.2317 11.8436C13.3332 11.5986 13.3332 11.2879 13.3332 10.6667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignVerticalCenter02)
const AlignVerticalCenter02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'AlignVerticalCenter02', props.className].join(' ')}
    />
  )
})
AlignVerticalCenter02.displayName = 'IconAlignVerticalCenter02'
export default AlignVerticalCenter02
