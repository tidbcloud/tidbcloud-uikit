import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCopy07 = (props, ref) => {
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
        d="M7 1.33524C6.54997 1.34134 6.2798 1.36739 6.06135 1.4787C5.81047 1.60653 5.60649 1.8105 5.47866 2.06139C5.36735 2.27984 5.3413 2.55001 5.3352 3.00004M13 1.33524C13.45 1.34134 13.7202 1.36739 13.9387 1.4787C14.1895 1.60653 14.3935 1.8105 14.5213 2.06139C14.6327 2.27984 14.6587 2.55 14.6648 3.00003M14.6648 9.00003C14.6587 9.45007 14.6327 9.72024 14.5213 9.93869C14.3935 10.1896 14.1895 10.3936 13.9387 10.5214C13.7202 10.6327 13.45 10.6587 13 10.6648M14.6667 5.33337V6.6667M9.33337 1.33337H10.6666M3.46667 14.6667H8.53334C9.28007 14.6667 9.65344 14.6667 9.93866 14.5214C10.1895 14.3936 10.3935 14.1896 10.5213 13.9387C10.6667 13.6535 10.6667 13.2801 10.6667 12.5334V7.46671C10.6667 6.71997 10.6667 6.3466 10.5213 6.06139C10.3935 5.8105 10.1895 5.60653 9.93866 5.4787C9.65344 5.33337 9.28007 5.33337 8.53334 5.33337H3.46667C2.71993 5.33337 2.34656 5.33337 2.06135 5.4787C1.81047 5.60653 1.60649 5.8105 1.47866 6.06139C1.33334 6.3466 1.33334 6.71997 1.33334 7.46671V12.5334C1.33334 13.2801 1.33334 13.6535 1.47866 13.9387C1.60649 14.1896 1.81047 14.3936 2.06135 14.5214C2.34656 14.6667 2.71993 14.6667 3.46667 14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCopy07)
const Copy07 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Copy07', props.className].join(' ')}
    />
  )
})
Copy07.displayName = 'IconCopy07'
export default Copy07
