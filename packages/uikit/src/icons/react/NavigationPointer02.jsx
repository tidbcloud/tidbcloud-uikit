import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconNavigationPointer02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M5.03685 21.3253C4.45216 21.5826 4.15982 21.7112 3.98042 21.6547C3.8249 21.6057 3.70303 21.484 3.65387 21.3285C3.59717 21.1492 3.72545 20.8567 3.98203 20.2717L11.2634 3.6702C11.495 3.14212 11.6108 2.87808 11.7727 2.79727C11.9133 2.72708 12.0787 2.72708 12.2193 2.79727C12.3812 2.87808 12.497 3.14212 12.7287 3.6702L20.01 20.2717C20.2666 20.8567 20.3949 21.1492 20.3382 21.3285C20.289 21.484 20.1671 21.6057 20.0116 21.6547C19.8322 21.7112 19.5399 21.5826 18.9552 21.3253L12.3182 18.405C12.1995 18.3528 12.1402 18.3267 12.0785 18.3164C12.0239 18.3072 11.9681 18.3072 11.9135 18.3164C11.8519 18.3267 11.7925 18.3528 11.6738 18.405L5.03685 21.3253Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconNavigationPointer02)
const NavigationPointer02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'NavigationPointer02', props.className].join(' ')}
    />
  )
})
NavigationPointer02.displayName = 'IconNavigationPointer02'
export default NavigationPointer02
