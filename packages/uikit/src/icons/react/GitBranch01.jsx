import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGitBranch01 = (props, ref) => {
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
        d="M2 2V8.8C2 9.92011 2 10.4802 2.21799 10.908C2.40973 11.2843 2.71569 11.5903 3.09202 11.782C3.51984 12 4.0799 12 5.2 12H10M10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12ZM2 5.33333L10 5.33333M10 5.33333C10 6.4379 10.8954 7.33333 12 7.33333C13.1046 7.33333 14 6.4379 14 5.33333C14 4.22876 13.1046 3.33333 12 3.33333C10.8954 3.33333 10 4.22876 10 5.33333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGitBranch01)
const GitBranch01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'GitBranch01', props.className].join(' ')}
    />
  )
})
GitBranch01.displayName = 'IconGitBranch01'
export default GitBranch01
