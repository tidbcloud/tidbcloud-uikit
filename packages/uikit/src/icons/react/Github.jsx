import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGithub = (props, ref) => {
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
        d="M10.6663 14.6845V12.7712C10.6913 12.4533 10.6484 12.1337 10.5404 11.8337C10.4323 11.5337 10.2616 11.2601 10.0397 11.0312C12.133 10.7978 14.333 10.0045 14.333 6.36451C14.3328 5.43373 13.9748 4.53864 13.333 3.86451C13.6369 3.05018 13.6154 2.15007 13.273 1.35118C13.273 1.35118 12.4863 1.11784 10.6663 2.33784C9.13835 1.92372 7.52767 1.92372 5.99967 2.33784C4.17967 1.11784 3.39301 1.35118 3.39301 1.35118C3.05059 2.15007 3.0291 3.05018 3.33301 3.86451C2.68643 4.54364 2.32802 5.44682 2.33301 6.38451C2.33301 9.99784 4.53301 10.7912 6.62634 11.0512C6.40701 11.2778 6.23785 11.5481 6.12988 11.8445C6.02191 12.1408 5.97755 12.4566 5.99967 12.7712V14.6845M1.33301 11.3511C2.33301 13.3511 3.99967 13.9999 5.99967 13.3511"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGithub)
const Github = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Github', props.className].join(' ')}
    />
  )
})
Github.displayName = 'IconGithub'
export default Github
