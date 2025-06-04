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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M10.6666 7.99992C10.6666 9.47268 9.47273 10.6666 7.99997 10.6666C6.52721 10.6666 5.3333 9.47268 5.3333 7.99992M10.6666 7.99992C10.6666 6.52716 9.47273 5.33325 7.99997 5.33325C6.52721 5.33325 5.3333 6.52716 5.3333 7.99992M10.6666 7.99992H14.6666M5.3333 7.99992H1.33344"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
