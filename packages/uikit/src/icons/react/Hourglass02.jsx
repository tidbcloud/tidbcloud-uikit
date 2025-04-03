import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHourglass02 = (props, ref) => {
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
        d="M12.1085 1.3335H3.89179C3.58345 1.3335 3.3335 1.58345 3.3335 1.89179C3.3335 3.66862 4.03934 5.37267 5.29574 6.62908L6.10853 7.44187C6.18925 7.52258 6.22961 7.56294 6.2585 7.60169C6.43475 7.83811 6.43475 8.16222 6.2585 8.39863C6.22961 8.43739 6.18925 8.47774 6.10854 8.55846L5.29574 9.37125C4.03934 10.6277 3.3335 12.3317 3.3335 14.1085C3.3335 14.4169 3.58345 14.6668 3.89179 14.6668H12.1085C12.4169 14.6668 12.6668 14.4169 12.6668 14.1085C12.6668 12.3317 11.961 10.6277 10.7046 9.37125L9.89179 8.55846C9.81108 8.47774 9.77072 8.43739 9.74183 8.39863C9.56558 8.16222 9.56558 7.83811 9.74183 7.60169C9.77072 7.56294 9.81108 7.52258 9.89179 7.44187L10.7046 6.62908C11.961 5.37267 12.6668 3.66862 12.6668 1.89179C12.6668 1.58345 12.4169 1.3335 12.1085 1.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHourglass02)
const Hourglass02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Hourglass02', props.className].join(' ')}
    />
  )
})
Hourglass02.displayName = 'IconHourglass02'
export default Hourglass02
