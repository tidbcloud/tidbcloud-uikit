import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconArchive = (props, ref) => {
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
        d="M2.66667 5.33106C2.55733 5.32824 2.47793 5.32191 2.40655 5.30771C1.87763 5.2025 1.46416 4.78904 1.35896 4.26012C1.33334 4.13132 1.33334 3.97644 1.33334 3.66667C1.33334 3.3569 1.33334 3.20201 1.35896 3.07321C1.46416 2.54429 1.87763 2.13083 2.40655 2.02562C2.53535 2 2.69023 2 3 2H13C13.3098 2 13.4647 2 13.5935 2.02562C14.1224 2.13083 14.5358 2.54429 14.6411 3.07321C14.6667 3.20201 14.6667 3.3569 14.6667 3.66667C14.6667 3.97644 14.6667 4.13132 14.6411 4.26012C14.5358 4.78904 14.1224 5.2025 13.5935 5.30771C13.5221 5.32191 13.4427 5.32824 13.3333 5.33106M6.66667 8.66667H9.33334M2.66667 5.33333H13.3333V10.8C13.3333 11.9201 13.3333 12.4802 13.1153 12.908C12.9236 13.2843 12.6176 13.5903 12.2413 13.782C11.8135 14 11.2534 14 10.1333 14H5.86667C4.74656 14 4.18651 14 3.75869 13.782C3.38236 13.5903 3.0764 13.2843 2.88466 12.908C2.66667 12.4802 2.66667 11.9201 2.66667 10.8V5.33333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconArchive)
const Archive = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Archive', props.className].join(' ')}
    />
  )
})
Archive.displayName = 'IconArchive'
export default Archive
