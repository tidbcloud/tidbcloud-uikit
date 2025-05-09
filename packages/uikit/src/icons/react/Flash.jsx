import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlash = (props, ref) => {
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
        d="M8.66662 1.3335L2.72892 8.45873C2.49638 8.73778 2.38011 8.8773 2.37833 8.99514C2.37679 9.09757 2.42244 9.19503 2.50212 9.25943C2.59378 9.3335 2.7754 9.3335 3.13864 9.3335H7.99995L7.33328 14.6668L13.271 7.54159C13.5035 7.26255 13.6198 7.12302 13.6216 7.00519C13.6231 6.90275 13.5775 6.80529 13.4978 6.7409C13.4061 6.66683 13.2245 6.66683 12.8613 6.66683H7.99995L8.66662 1.3335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlash)
const Flash = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Flash', props.className].join(' ')}
    />
  )
})
Flash.displayName = 'IconFlash'
export default Flash
