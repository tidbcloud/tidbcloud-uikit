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
      ref={ref}
      {...props}
    >
      <path
        d="M3.14489 2.67354L3.14461 4.55888L5.03051 4.55916M3.26504 4.20791C3.40271 4.03602 3.55122 3.86995 3.71055 3.71061C6.0537 1.36746 9.85269 1.36746 12.1958 3.71061C14.539 6.05375 14.539 9.85274 12.1958 12.1959C9.85269 14.539 6.0537 14.539 3.71055 12.1959C2.37777 10.8631 1.80307 9.0593 1.98647 7.32031M8 4.66663L8 7.99996L10 9.33329"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
