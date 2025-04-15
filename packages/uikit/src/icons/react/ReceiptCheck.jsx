import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconReceiptCheck = (props, ref) => {
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
        d="M5.99984 7L7.33317 8.33333L10.3332 5.33333M13.3332 14V5.2C13.3332 4.0799 13.3332 3.51984 13.1152 3.09202C12.9234 2.71569 12.6175 2.40973 12.2412 2.21799C11.8133 2 11.2533 2 10.1332 2H5.8665C4.7464 2 4.18635 2 3.75852 2.21799C3.3822 2.40973 3.07624 2.71569 2.88449 3.09202C2.6665 3.51984 2.6665 4.0799 2.6665 5.2V14L4.49984 12.6667L6.1665 14L7.99984 12.6667L9.83317 14L11.4998 12.6667L13.3332 14Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconReceiptCheck)
const ReceiptCheck = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ReceiptCheck', props.className].join(' ')}
    />
  )
})
ReceiptCheck.displayName = 'IconReceiptCheck'
export default ReceiptCheck
