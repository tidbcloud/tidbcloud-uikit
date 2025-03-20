import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGitMerge = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 0a9 9 0 0 1-9-9m0 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v12"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGitMerge)
const GitMerge = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'GitMerge'].join(' ')}
    />
  )
})
GitMerge.displayName = 'IconGitMerge'
export default GitMerge
