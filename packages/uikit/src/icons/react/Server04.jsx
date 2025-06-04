import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconServer04 = (props, ref) => {
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
        d="M14.6666 7.00008L14.3504 4.46984C14.2263 3.47743 14.1643 2.98121 13.9307 2.60728C13.725 2.27783 13.4277 2.01542 13.0753 1.85211C12.6753 1.66675 12.1752 1.66675 11.1751 1.66675H4.82488C3.82474 1.66675 3.32467 1.66675 2.92466 1.85211C2.57223 2.01542 2.27498 2.27783 2.06922 2.60728C1.83567 2.98121 1.77365 3.47742 1.64959 4.46984L1.33331 7.00008M3.66665 9.66675H12.3333M3.66665 9.66675C2.37798 9.66675 1.33331 8.62208 1.33331 7.33341C1.33331 6.04475 2.37798 5.00008 3.66665 5.00008H12.3333C13.622 5.00008 14.6666 6.04475 14.6666 7.33341C14.6666 8.62208 13.622 9.66675 12.3333 9.66675M3.66665 9.66675C2.37798 9.66675 1.33331 10.7114 1.33331 12.0001C1.33331 13.2887 2.37798 14.3334 3.66665 14.3334H12.3333C13.622 14.3334 14.6666 13.2887 14.6666 12.0001C14.6666 10.7114 13.622 9.66675 12.3333 9.66675M3.99998 7.33341H4.00665M3.99998 12.0001H4.00665M7.99998 7.33341H12M7.99998 12.0001H12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconServer04)
const Server04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Server04', props.className].join(' ')}
    />
  )
})
Server04.displayName = 'IconServer04'
export default Server04
