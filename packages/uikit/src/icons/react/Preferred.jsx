import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPreferred = (props, ref) => {
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
        d="M9.48775 1.5H6.51161C5.96972 1.5 5.53264 1.49999 5.1787 1.52891C4.81428 1.55868 4.49418 1.62159 4.19804 1.77248C3.72763 2.01217 3.34518 2.39462 3.1055 2.86502C2.9894 3.09288 2.9031 3.27563 2.86451 3.56985C2.83295 3.81044 2.83297 4.1334 2.83301 4.64366L2.83301 4.93461C2.83301 5.06721 2.88569 5.19439 2.97946 5.28816C3.07323 5.38193 3.2004 5.43461 3.33301 5.43461L12.6663 5.43461C12.9425 5.43461 13.1663 5.21075 13.1663 4.93461L13.1663 4.64367C13.1664 4.1334 13.1664 3.81044 13.1349 3.56985C13.0963 3.27563 13.01 3.09288 12.8939 2.86502C12.6542 2.39462 12.2717 2.01217 11.8013 1.77248C11.5052 1.62159 11.1851 1.55868 10.8207 1.52891C10.4667 1.49999 10.0296 1.5 9.48775 1.5Z"
        fill="#383E40"
      />
      <path
        d="M12.6663 6.40751L3.33301 6.40751C3.05687 6.40751 2.83301 6.63137 2.83301 6.90751L2.83301 14C2.83301 14.1782 2.92789 14.343 3.08205 14.4325C3.23621 14.5219 3.42633 14.5226 3.58108 14.4341L7.99968 11.9092L12.4183 14.4341C12.573 14.5226 12.7632 14.5219 12.9173 14.4325C13.0715 14.343 13.1663 14.1782 13.1663 14V6.90751C13.1663 6.7749 13.1137 6.64773 13.0199 6.55396C12.9261 6.46019 12.799 6.40751 12.6663 6.40751Z"
        fill="#383E40"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPreferred)
const Preferred = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Preferred', props.className].join(' ')}
    />
  )
})
Preferred.displayName = 'IconPreferred'
export default Preferred
