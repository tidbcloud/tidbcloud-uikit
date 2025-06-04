import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCommit = (props, ref) => {
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
        d="M3.14489 2.6736L3.14461 4.55894L5.03051 4.55922M3.26504 4.20797C3.40271 4.03608 3.55122 3.87001 3.71055 3.71067C6.0537 1.36752 9.85269 1.36752 12.1958 3.71067C14.539 6.05381 14.539 9.8528 12.1958 12.1959C9.85269 14.5391 6.0537 14.5391 3.71055 12.1959C2.37777 10.8632 1.80307 9.05936 1.98647 7.32037M8 4.66669L8 8.00002L10 9.33335"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCommit)
const Commit = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Commit', props.className].join(' ')}
    />
  )
})
Commit.displayName = 'IconCommit'
export default Commit
