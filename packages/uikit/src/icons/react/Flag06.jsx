import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFlag06 = (props, ref) => {
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
        d="M2.6665 14L2.6665 2.66667M2.6665 8.66667H7.59984C7.97321 8.66667 8.15989 8.66667 8.3025 8.594C8.42794 8.53009 8.52993 8.4281 8.59384 8.30266C8.6665 8.16005 8.6665 7.97337 8.6665 7.6V3.06667C8.6665 2.6933 8.6665 2.50661 8.59384 2.36401C8.52993 2.23856 8.42794 2.13658 8.3025 2.07266C8.15989 2 7.97321 2 7.59984 2H3.73317C3.3598 2 3.17312 2 3.03051 2.07266C2.90507 2.13658 2.80308 2.23856 2.73917 2.36401C2.6665 2.50661 2.6665 2.6933 2.6665 3.06667V8.66667ZM8.6665 3.33333H12.9332C13.3065 3.33333 13.4932 3.33333 13.6358 3.406C13.7613 3.46991 13.8633 3.5719 13.9272 3.69734C13.9998 3.83995 13.9998 4.02663 13.9998 4.4V8.93333C13.9998 9.3067 13.9998 9.49339 13.9272 9.63599C13.8633 9.76144 13.7613 9.86342 13.6358 9.92734C13.4932 10 13.3065 10 12.9332 10H9.73317C9.3598 10 9.17312 10 9.03051 9.92734C8.90507 9.86342 8.80308 9.76144 8.73917 9.63599C8.6665 9.49339 8.6665 9.3067 8.6665 8.93333V3.33333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFlag06)
const Flag06 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Flag06', props.className].join(' ')}
    />
  )
})
Flag06.displayName = 'IconFlag06'
export default Flag06
