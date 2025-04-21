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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M8.00004 1.33325L9.34135 4.82064C9.52935 5.30946 9.62336 5.55387 9.76954 5.75946C9.8991 5.94167 10.0583 6.10086 10.2405 6.23042C10.4461 6.3766 10.6905 6.47061 11.1793 6.65861L14.6667 7.99992L11.1793 9.34122C10.6905 9.52923 10.4461 9.62323 10.2405 9.76942C10.0583 9.89898 9.8991 10.0582 9.76954 10.2404C9.62336 10.446 9.52935 10.6904 9.34135 11.1792L8.00004 14.6666L6.65874 11.1792C6.47073 10.6904 6.37673 10.446 6.23054 10.2404C6.10098 10.0582 5.94179 9.89898 5.75958 9.76942C5.55399 9.62323 5.30958 9.52923 4.82076 9.34122L1.33337 7.99992L4.82076 6.65862C5.30958 6.47061 5.55399 6.3766 5.75958 6.23042C5.94179 6.10086 6.10098 5.94167 6.23054 5.75946C6.37673 5.55387 6.47073 5.30946 6.65874 4.82064L8.00004 1.33325Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
