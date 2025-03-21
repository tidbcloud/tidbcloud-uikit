import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFileImport02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M9.49799 2.26953V6.40007C9.49799 6.96012 9.49799 7.24015 9.38899 7.45406C9.29312 7.64222 9.14014 7.7952 8.95198 7.89108C8.73807 8.00007 8.45804 8.00007 7.89799 8.00007H3.76745M12.498 22H8.29799C6.61783 22 5.77775 22 5.13602 21.673C4.57153 21.3854 4.11259 20.9265 3.82497 20.362C3.49799 19.7202 3.49799 18.8802 3.49799 17.2V8L9.49799 2H14.698C16.3781 2 17.2182 2 17.86 2.32698C18.4244 2.6146 18.8834 3.07354 19.171 3.63803C19.498 4.27976 19.498 5.11984 19.498 6.8V10M20.8601 17.2L17.8601 14.2M17.8601 14.2L14.8601 17.2M17.8601 14.2L17.8601 17.2V22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFileImport02)
const FileImport02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'FileImport02'].join(' ')}
    />
  )
})
FileImport02.displayName = 'IconFileImport02'
export default FileImport02
