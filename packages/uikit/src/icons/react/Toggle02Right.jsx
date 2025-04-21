import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconToggle02Right = (props, ref) => {
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
        d="M9.33299 10.6666H3.99998C2.52722 10.6666 1.33331 9.47272 1.33331 7.99996C1.33331 6.5272 2.52722 5.33329 3.99998 5.33329H9.33299M14.6663 7.99996C14.6663 9.84091 13.1739 11.3333 11.333 11.3333C9.49204 11.3333 7.99965 9.84091 7.99965 7.99996C7.99965 6.15901 9.49204 4.66663 11.333 4.66663C13.1739 4.66663 14.6663 6.15901 14.6663 7.99996Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconToggle02Right)
const Toggle02Right = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Toggle02Right', props.className].join(' ')}
    />
  )
})
Toggle02Right.displayName = 'IconToggle02Right'
export default Toggle02Right
