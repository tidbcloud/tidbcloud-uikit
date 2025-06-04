import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLoading03 = (props, ref) => {
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
        d="M2.22682 11.3331C1.39204 9.88654 1.81647 8.04294 3.19862 7.10669L3.2001 7.10521C4.31041 6.35488 5.77181 6.38006 6.8562 7.16817L9.14423 8.83178C10.2279 9.61989 11.6893 9.64507 12.8003 8.89474L12.8018 8.89326C14.1847 7.95702 14.6099 6.11193 13.7736 4.66682M11.3346 13.7728C9.88803 14.6076 8.04442 14.1832 7.10817 12.801L7.10669 12.7996C6.35636 11.6892 6.38154 10.2278 7.16965 9.14345L8.83326 6.85543C9.62137 5.77178 9.64656 4.31037 8.89622 3.19932L8.89326 3.19784C7.95702 1.81643 6.11193 1.39053 4.66682 2.22678M12.7136 3.28599C15.3172 5.88955 15.3172 10.1101 12.7136 12.7136C10.1101 15.3172 5.88955 15.3172 3.28599 12.7136C0.682421 10.1101 0.682421 5.88955 3.28599 3.28599C5.88955 0.682421 10.1101 0.682421 12.7136 3.28599Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLoading03)
const Loading03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Loading03', props.className].join(' ')}
    />
  )
})
Loading03.displayName = 'IconLoading03'
export default Loading03
