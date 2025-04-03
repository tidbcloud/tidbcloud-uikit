import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAlignTopArrow02 = (props, ref) => {
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
        d="M13.3332 9.33333V4C13.3332 3.37874 13.3332 3.06812 13.2317 2.82309C13.0964 2.49638 12.8368 2.23682 12.5101 2.10149C12.2651 2 11.9544 2 11.3332 2C10.7119 2 10.4013 2 10.1563 2.10149C9.82956 2.23682 9.56999 2.49638 9.43466 2.82309C9.33317 3.06812 9.33317 3.37874 9.33317 4V9.33333C9.33317 9.95459 9.33317 10.2652 9.43466 10.5102C9.56999 10.8369 9.82956 11.0965 10.1563 11.2318C10.4013 11.3333 10.7119 11.3333 11.3332 11.3333C11.9544 11.3333 12.2651 11.3333 12.5101 11.2318C12.8368 11.0965 13.0964 10.8369 13.2317 10.5102C13.3332 10.2652 13.3332 9.95459 13.3332 9.33333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAlignTopArrow02)
const AlignTopArrow02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'AlignTopArrow02', props.className].join(' ')}
    />
  )
})
AlignTopArrow02.displayName = 'IconAlignTopArrow02'
export default AlignTopArrow02
