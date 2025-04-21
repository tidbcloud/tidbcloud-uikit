import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAtom01 = (props, ref) => {
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
        d="M7.99976 8.0001H8.00642M10.3568 10.3571C7.23259 13.4813 3.64465 14.9587 2.3429 13.6569C1.04116 12.3552 2.51854 8.76727 5.64273 5.64307C8.76693 2.51888 12.3549 1.04149 13.6566 2.34324C14.9584 3.64499 13.481 7.23292 10.3568 10.3571ZM10.3568 5.64295C13.4809 8.76715 14.9583 12.3551 13.6566 13.6568C12.3548 14.9586 8.7669 13.4812 5.64271 10.357C2.51851 7.2328 1.04113 3.64487 2.34288 2.34312C3.64462 1.04137 7.23256 2.51876 10.3568 5.64295ZM8.33309 8.0001C8.33309 8.18419 8.18385 8.33343 7.99976 8.33343C7.81566 8.33343 7.66642 8.18419 7.66642 8.0001C7.66642 7.816 7.81566 7.66676 7.99976 7.66676C8.18385 7.66676 8.33309 7.816 8.33309 8.0001Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAtom01)
const Atom01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Atom01', props.className].join(' ')}
    />
  )
})
Atom01.displayName = 'IconAtom01'
export default Atom01
