import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAtom02 = (props, ref) => {
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
        d="M11.4101 10.2386C11.2296 10.4427 11.0402 10.6442 10.8422 10.8422C7.97834 13.706 4.3904 14.7613 2.82831 13.1992C1.75737 12.1283 1.91664 10.1052 3.04548 8.01599M4.59295 5.81667C4.78076 5.60313 4.97832 5.39234 5.18533 5.18533C8.04917 2.32148 11.6371 1.26621 13.1992 2.82831C14.2709 3.89998 14.1107 5.92514 12.9797 8.01584M10.8422 5.18533C13.706 8.04917 14.7613 11.6371 13.1992 13.1992C11.6371 14.7613 8.04917 13.706 5.18533 10.8422C2.32148 7.97834 1.26621 4.3904 2.82831 2.82831C4.3904 1.26621 7.97834 2.32148 10.8422 5.18533ZM8.66655 7.99983C8.66655 8.36802 8.36807 8.6665 7.99988 8.6665C7.63169 8.6665 7.33321 8.36802 7.33321 7.99983C7.33321 7.63164 7.63169 7.33317 7.99988 7.33317C8.36807 7.33317 8.66655 7.63164 8.66655 7.99983Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAtom02)
const Atom02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Atom02', props.className].join(' ')}
    />
  )
})
Atom02.displayName = 'IconAtom02'
export default Atom02
