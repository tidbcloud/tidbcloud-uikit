import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDiamond02 = (props, ref) => {
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
        d="M3.33358 14.6668H12.6669M1.66691 5.3335H14.3336M6.66691 1.3335L5.33358 5.3335L8.00024 12.3335L10.6669 5.3335L9.33358 1.3335M8.39488 12.2327L14.3546 5.67703C14.4653 5.55526 14.5207 5.49437 14.5427 5.42504C14.5622 5.36395 14.5636 5.29855 14.5468 5.23668C14.5277 5.16647 14.475 5.10326 14.3697 4.97684L11.4935 1.5254C11.4347 1.45486 11.4053 1.41959 11.3693 1.39423C11.3374 1.37177 11.3017 1.35508 11.2641 1.34494C11.2215 1.3335 11.1756 1.3335 11.0838 1.3335H4.91671C4.82489 1.3335 4.77898 1.3335 4.73643 1.34494C4.69874 1.35508 4.66312 1.37177 4.63119 1.39423C4.59517 1.41959 4.56577 1.45486 4.50699 1.5254L1.63079 4.97683C1.52544 5.10326 1.47276 5.16647 1.45371 5.23668C1.43692 5.29855 1.43833 5.36395 1.45777 5.42504C1.47983 5.49437 1.53518 5.55525 1.64588 5.67703L7.60561 12.2327C7.74242 12.3832 7.81082 12.4585 7.89122 12.4863C7.96185 12.5107 8.03864 12.5107 8.10926 12.4863C8.18966 12.4585 8.25807 12.3832 8.39488 12.2327Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDiamond02)
const Diamond02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Diamond02', props.className].join(' ')}
    />
  )
})
Diamond02.displayName = 'IconDiamond02'
export default Diamond02
