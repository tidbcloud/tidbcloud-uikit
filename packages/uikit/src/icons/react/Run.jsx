import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRun = (props, ref) => {
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
        d="M4.46667 13.8504C4.01299 13.5951 4.0002 13.0173 4.00023 12.6948L4.00023 8.0803L4 3.55352C4 3.16831 4.00035 2.61545 4.25742 2.29425C4.53327 1.9496 5.01228 1.98301 5.253 2.02686C5.35168 2.04484 5.44194 2.09026 5.52438 2.14738L12.8532 7.22531C12.8622 7.23155 12.8709 7.23782 12.8795 7.24468C12.9545 7.30479 13.3333 7.63067 13.3333 8.08034C13.3333 8.51507 12.9793 8.8341 12.888 8.90914C12.8739 8.92069 12.8598 8.93056 12.8446 8.9406C12.4106 9.22758 5.71693 13.6533 5.40001 13.8504C5.07247 14.0541 4.81342 14.0456 4.46667 13.8504Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRun)
const Run = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Run', props.className].join(' ')}
    />
  )
})
Run.displayName = 'IconRun'
export default Run
