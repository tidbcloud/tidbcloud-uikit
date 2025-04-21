import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFolderCode = (props, ref) => {
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
        d="M8.66665 4.66667L7.92295 3.17928C7.70892 2.7512 7.60189 2.53715 7.44223 2.38078C7.30103 2.24249 7.13086 2.13732 6.94403 2.07287C6.73276 2 6.49345 2 6.01484 2H3.46665C2.71991 2 2.34654 2 2.06133 2.14532C1.81044 2.27316 1.60647 2.47713 1.47864 2.72801C1.33331 3.01323 1.33331 3.3866 1.33331 4.13333V4.66667M1.33331 4.66667H11.4666C12.5868 4.66667 13.1468 4.66667 13.5746 4.88465C13.951 5.0764 14.2569 5.38236 14.4487 5.75869C14.6666 6.18651 14.6666 6.74656 14.6666 7.86667V10.8C14.6666 11.9201 14.6666 12.4802 14.4487 12.908C14.2569 13.2843 13.951 13.5903 13.5746 13.782C13.1468 14 12.5868 14 11.4666 14H4.53331C3.41321 14 2.85316 14 2.42533 13.782C2.04901 13.5903 1.74305 13.2843 1.5513 12.908C1.33331 12.4802 1.33331 11.9201 1.33331 10.8V4.66667ZM9.33331 11L11 9.33333L9.33331 7.66667M6.66665 7.66667L4.99998 9.33333L6.66665 11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFolderCode)
const FolderCode = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'FolderCode', props.className].join(' ')}
    />
  )
})
FolderCode.displayName = 'IconFolderCode'
export default FolderCode
