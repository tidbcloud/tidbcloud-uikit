import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHand = (props, ref) => {
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
        d="M4.59992 7.62979V9.48165M4.59992 7.62979V3.18535C4.59992 2.5717 5.10733 2.07424 5.73325 2.07424C6.35917 2.07424 6.86659 2.5717 6.86659 3.18535M4.59992 7.62979C4.59992 7.01614 4.09251 6.51868 3.46659 6.51868C2.84066 6.51868 2.33325 7.01614 2.33325 7.62979V9.11127C2.33325 12.1795 4.87031 14.6668 7.99992 14.6668C11.1295 14.6668 13.6666 12.1795 13.6666 9.11127V5.40757C13.6666 4.79392 13.1592 4.29646 12.5333 4.29646C11.9073 4.29646 11.3999 4.79392 11.3999 5.40757M6.86659 3.18535V7.25942M6.86659 3.18535V2.44461C6.86659 1.83096 7.374 1.3335 7.99992 1.3335C8.62584 1.3335 9.13325 1.83096 9.13325 2.44461V3.18535M9.13325 3.18535V7.25942M9.13325 3.18535C9.13325 2.5717 9.64066 2.07424 10.2666 2.07424C10.8925 2.07424 11.3999 2.5717 11.3999 3.18535V5.40757M11.3999 5.40757V7.25942"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHand)
const Hand = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Hand', props.className].join(' ')}
    />
  )
})
Hand.displayName = 'IconHand'
export default Hand
