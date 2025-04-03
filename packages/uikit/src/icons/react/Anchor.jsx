import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAnchor = (props, ref) => {
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
        d="M8.00016 5.33331C9.10473 5.33331 10.0002 4.43788 10.0002 3.33331C10.0002 2.22874 9.10473 1.33331 8.00016 1.33331C6.89559 1.33331 6.00016 2.22874 6.00016 3.33331C6.00016 4.43788 6.89559 5.33331 8.00016 5.33331ZM8.00016 5.33331V14.6666M8.00016 14.6666C6.23205 14.6666 4.53636 13.9643 3.28612 12.714C2.03588 11.4638 1.3335 9.76809 1.3335 7.99998H3.3335M8.00016 14.6666C9.76827 14.6666 11.464 13.9643 12.7142 12.714C13.9645 11.4638 14.6668 9.76809 14.6668 7.99998H12.6668"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAnchor)
const Anchor = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Anchor', props.className].join(' ')}
    />
  )
})
Anchor.displayName = 'IconAnchor'
export default Anchor
