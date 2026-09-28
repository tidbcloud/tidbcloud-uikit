import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileSystem = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M9.86259 11H6.23907M6.03563 15H7.29752M11.7761 7H6.23907M7.38818 22H13.7882C15.4683 22 16.3084 22 16.9502 21.673C17.5146 21.3854 17.9736 20.9265 18.2612 20.362C18.5882 19.7202 18.5882 18.8802 18.5882 17.2V6.8C18.5882 5.11984 18.5882 4.27976 18.2612 3.63803C17.9736 3.07354 17.5146 2.6146 16.9502 2.32698C16.3084 2 15.4683 2 13.7882 2H11.0882M14.0882 22H16.7884C18.4685 22 19.3086 22 19.9503 21.673C20.5148 21.3854 20.9738 20.9265 21.2614 20.362C21.5884 19.7202 21.5884 18.8802 21.5884 17.2V6.8C21.5884 5.11984 21.5884 4.27976 21.2614 3.63803C20.9738 3.07354 20.5148 2.6146 19.9503 2.32698C19.3086 2 18.4685 2 16.7884 2H14.0884M15.603 6.8V17.2C15.603 18.8802 15.603 19.7202 15.2902 20.362C15.015 20.9265 14.5759 21.3854 14.0359 21.673C13.4219 22 12.6182 22 11.0107 22H7.00446C5.39699 22 4.59325 22 3.97928 21.673C3.43921 21.3854 3.00012 20.9265 2.72494 20.362C2.41211 19.7202 2.41211 18.8802 2.41211 17.2V6.8C2.41211 5.11984 2.41211 4.27976 2.72494 3.63803C3.00012 3.07354 3.43921 2.6146 3.97928 2.32698C4.59325 2 5.39699 2 7.00446 2H11.0107C12.6182 2 13.4219 2 14.0359 2.32698C14.5759 2.6146 15.015 3.07354 15.2902 3.63803C15.603 4.27976 15.603 5.11984 15.603 6.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileSystem)
const FileSystem = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FileSystem', props.className].join(' ')}
    />
  )
})
FileSystem.displayName = 'IconFileSystem'
export default FileSystem
