import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStar04 = (props, ref) => {
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
        d="M8.00016 1.33325L9.34147 4.82064C9.52947 5.30946 9.62348 5.55387 9.76966 5.75946C9.89922 5.94167 10.0584 6.10086 10.2406 6.23042C10.4462 6.3766 10.6906 6.47061 11.1794 6.65861L14.6668 7.99992L11.1794 9.34122C10.6906 9.52923 10.4462 9.62323 10.2406 9.76942C10.0584 9.89898 9.89922 10.0582 9.76966 10.2404C9.62348 10.446 9.52948 10.6904 9.34147 11.1792L8.00016 14.6666L6.65886 11.1792C6.47085 10.6904 6.37685 10.446 6.23066 10.2404C6.1011 10.0582 5.94191 9.89898 5.7597 9.76942C5.55412 9.62323 5.30971 9.52923 4.82089 9.34122L1.3335 7.99992L4.82089 6.65862C5.30971 6.47061 5.55412 6.3766 5.7597 6.23042C5.94191 6.10086 6.1011 5.94167 6.23066 5.75946C6.37685 5.55387 6.47085 5.30946 6.65886 4.82064L8.00016 1.33325Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStar04)
const Star04 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Star04', props.className].join(' ')}
    />
  )
})
Star04.displayName = 'IconStar04'
export default Star04
