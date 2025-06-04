import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconToggle02Left = (props, ref) => {
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
        d="M6.66697 10.6666H12C13.4727 10.6666 14.6666 9.47272 14.6666 7.99996C14.6666 6.5272 13.4727 5.33329 12 5.33329H6.66697M7.99998 7.99996C7.99998 9.84091 6.5076 11.3333 4.66665 11.3333C2.8257 11.3333 1.33331 9.84091 1.33331 7.99996C1.33331 6.15901 2.8257 4.66663 4.66665 4.66663C6.5076 4.66663 7.99998 6.15901 7.99998 7.99996Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconToggle02Left)
const Toggle02Left = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Toggle02Left', props.className].join(' ')}
    />
  )
})
Toggle02Left.displayName = 'IconToggle02Left'
export default Toggle02Left
