import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDataApiSystem = (props, ref) => {
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
        d="M20.5 7.27771L12 11.9999M12 11.9999L3.49997 7.27771M12 11.9999L12 21.5M12.777 21.5683C12.4934 21.7258 12.3516 21.8046 12.2015 21.8355C12.0685 21.8628 11.9315 21.8628 11.7986 21.8355C11.6484 21.8046 11.5066 21.7258 11.223 21.5683L3.82297 17.4572C3.52345 17.2908 3.37369 17.2076 3.26463 17.0892C3.16816 16.9845 3.09515 16.8605 3.05048 16.7253C3 16.5725 3 16.4012 3 16.0585V7.94141C3 7.59877 3 7.42745 3.05048 7.27465C3.09515 7.13947 3.16816 7.01539 3.26463 6.9107C3.37369 6.79236 3.52345 6.70916 3.82297 6.54276L11.223 2.43165C11.5066 2.27409 11.6484 2.19531 11.7986 2.16442C11.9315 2.13709 12.0685 2.13709 12.2015 2.16442C12.3516 2.19531 12.4934 2.27409 12.777 2.43164L20.177 6.54276C20.4766 6.70916 20.6263 6.79236 20.7354 6.9107C20.8318 7.01539 20.9049 7.13947 20.9495 7.27464C21 7.42744 21 7.59876 21 7.94141V11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M16 20.1333C16 21.1643 16.7462 22 17.6667 22H19.2143C20.2005 22 21 21.1046 21 20C21 18.8954 20.2005 18 19.2143 18H17.7857C16.7995 18 16 17.1046 16 16C16 14.8954 16.7995 14 17.7857 14H19.3333C20.2538 14 21 14.8357 21 15.8667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDataApiSystem)
const DataApiSystem = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'DataApiSystem'].join(' ')}
    />
  )
})
DataApiSystem.displayName = 'IconDataApiSystem'
export default DataApiSystem
