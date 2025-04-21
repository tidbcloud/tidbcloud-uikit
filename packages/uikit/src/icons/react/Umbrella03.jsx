import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUmbrella03 = (props, ref) => {
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
        d="M4.16659 14.6393L7.99992 7.99981M11.3333 2.22631C8.4578 0.566164 4.85968 1.29156 2.83059 3.78844C2.63254 4.03214 2.53351 4.15399 2.50471 4.32858C2.48179 4.46749 2.51574 4.65158 2.58671 4.77317C2.6759 4.92599 2.834 5.01726 3.15018 5.19981L12.8497 10.7998C13.1658 10.9824 13.3239 11.0736 13.5009 11.0745C13.6417 11.0751 13.8181 11.0125 13.9269 10.9232C14.0637 10.8109 14.1197 10.6643 14.2317 10.3709C15.3796 7.36522 14.2087 3.88645 11.3333 2.22631ZM11.3333 2.22631C10.0578 1.48993 7.53147 3.47786 5.69052 6.66648M11.3333 2.22631C12.6087 2.96269 12.1503 6.14453 10.3093 9.33314M14.6666 14.6665H1.33325"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUmbrella03)
const Umbrella03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Umbrella03', props.className].join(' ')}
    />
  )
})
Umbrella03.displayName = 'IconUmbrella03'
export default Umbrella03
