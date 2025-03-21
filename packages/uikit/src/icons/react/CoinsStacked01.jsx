import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoinsStacked01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M12 17C12 19.7614 14.2386 22 17 22C19.7614 22 22 19.7614 22 17C22 14.2386 19.7614 12 17 12C14.2386 12 12 14.2386 12 17ZM12 17C12 15.8742 12.3721 14.8353 13 13.9995V5M12 17C12 17.8254 12.2 18.604 12.5541 19.2901C11.7117 20.0018 9.76584 20.5 7.5 20.5C4.46243 20.5 2 19.6046 2 18.5V5M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M2 14C2 15.1046 4.46243 16 7.5 16C9.689 16 11.5793 15.535 12.4646 14.8618M13 9.5C13 10.6046 10.5376 11.5 7.5 11.5C4.46243 11.5 2 10.6046 2 9.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoinsStacked01)
const CoinsStacked01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CoinsStacked01'].join(' ')}
    />
  )
})
CoinsStacked01.displayName = 'IconCoinsStacked01'
export default CoinsStacked01
