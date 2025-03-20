import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAtom02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.115 15.358q-.405.459-.851.906c-4.296 4.295-9.678 5.878-12.021 3.535-1.607-1.606-1.368-4.641.325-7.775M6.89 8.725q.422-.48.888-.947C12.074 3.482 17.456 1.9 19.8 4.243c1.608 1.607 1.367 4.645-.33 7.781m-3.206-4.246c4.296 4.296 5.88 9.678 3.536 12.021s-7.725.76-12.02-3.535c-4.297-4.296-5.88-9.678-3.536-12.021s7.725-.76 12.02 3.535M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
      className={[props.className, 'tiui-icon', 'Atom02'].join(' ')}
    />
  )
})
Atom02.displayName = 'IconAtom02'
export default Atom02
