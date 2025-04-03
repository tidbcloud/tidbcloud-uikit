import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGitCommit = (props, ref) => {
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
        d="M10.6667 8.00016C10.6667 9.47292 9.47279 10.6668 8.00003 10.6668C6.52727 10.6668 5.33337 9.47292 5.33337 8.00016M10.6667 8.00016C10.6667 6.5274 9.47279 5.3335 8.00003 5.3335C6.52727 5.3335 5.33337 6.5274 5.33337 8.00016M10.6667 8.00016H14.6667M5.33337 8.00016H1.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGitCommit)
const GitCommit = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'GitCommit', props.className].join(' ')}
    />
  )
})
GitCommit.displayName = 'IconGitCommit'
export default GitCommit
