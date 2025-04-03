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
      ref={ref}
      {...props}
    >
      <path
        d="M9.33317 10.6666H4.00016C2.5274 10.6666 1.3335 9.47272 1.3335 7.99996C1.3335 6.5272 2.5274 5.33329 4.00016 5.33329H9.33317M14.6665 7.99996C14.6665 9.84091 13.1741 11.3333 11.3332 11.3333C9.49222 11.3333 7.99984 9.84091 7.99984 7.99996C7.99984 6.15901 9.49222 4.66663 11.3332 4.66663C13.1741 4.66663 14.6665 6.15901 14.6665 7.99996Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
