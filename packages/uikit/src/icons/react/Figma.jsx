import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFigma = (props, ref) => {
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
        d="M8.00016 1H5.66683C4.37817 1 3.3335 2.04467 3.3335 3.33333C3.3335 4.622 4.37817 5.66667 5.66683 5.66667M8.00016 1V5.66667M8.00016 1H10.3335C11.6222 1 12.6668 2.04467 12.6668 3.33333C12.6668 4.622 11.6222 5.66667 10.3335 5.66667M8.00016 5.66667H5.66683M8.00016 5.66667V10.3333M8.00016 5.66667H10.3335M5.66683 5.66667C4.37817 5.66667 3.3335 6.71134 3.3335 8C3.3335 9.28866 4.37817 10.3333 5.66683 10.3333M8.00016 10.3333H5.66683M8.00016 10.3333V12.6667C8.00016 13.9553 6.95549 15 5.66683 15C4.37817 15 3.3335 13.9553 3.3335 12.6667C3.3335 11.378 4.37817 10.3333 5.66683 10.3333M10.3335 5.66667C11.6222 5.66667 12.6668 6.71134 12.6668 8C12.6668 9.28866 11.6222 10.3333 10.3335 10.3333C9.04483 10.3333 8.00016 9.28866 8.00016 8C8.00016 6.71134 9.04483 5.66667 10.3335 5.66667Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFigma)
const Figma = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Figma', props.className].join(' ')}
    />
  )
})
Figma.displayName = 'IconFigma'
export default Figma
