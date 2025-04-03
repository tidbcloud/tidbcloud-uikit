import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPassport = (props, ref) => {
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
        d="M6.6665 10.6668H9.33317M5.8665 14.6668H10.1332C11.2533 14.6668 11.8133 14.6668 12.2412 14.4488C12.6175 14.2571 12.9234 13.9511 13.1152 13.5748C13.3332 13.147 13.3332 12.5869 13.3332 11.4668V4.5335C13.3332 3.41339 13.3332 2.85334 13.1152 2.42552C12.9234 2.04919 12.6175 1.74323 12.2412 1.55148C11.8133 1.3335 11.2533 1.3335 10.1332 1.3335H5.8665C4.7464 1.3335 4.18635 1.3335 3.75852 1.55148C3.3822 1.74323 3.07624 2.04919 2.88449 2.42552C2.6665 2.85334 2.6665 3.41339 2.6665 4.5335V11.4668C2.6665 12.5869 2.6665 13.147 2.88449 13.5748C3.07624 13.9511 3.3822 14.2571 3.75852 14.4488C4.18635 14.6668 4.7464 14.6668 5.8665 14.6668ZM9.99984 6.00016C9.99984 7.10473 9.10441 8.00016 7.99984 8.00016C6.89527 8.00016 5.99984 7.10473 5.99984 6.00016C5.99984 4.89559 6.89527 4.00016 7.99984 4.00016C9.10441 4.00016 9.99984 4.89559 9.99984 6.00016Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPassport)
const Passport = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Passport', props.className].join(' ')}
    />
  )
})
Passport.displayName = 'IconPassport'
export default Passport
