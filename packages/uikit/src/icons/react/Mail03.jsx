import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconMail03 = (props, ref) => {
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
        d="M1.33325 4.66663L4.79581 6.975C4.99558 7.10817 5.09546 7.17476 5.20352 7.22193C5.29943 7.2638 5.39994 7.29424 5.50297 7.3126C5.61905 7.33329 5.73909 7.33329 5.97917 7.33329H10.0207C10.2607 7.33329 10.3808 7.33329 10.4969 7.3126C10.5999 7.29424 10.7004 7.2638 10.7963 7.22193C10.9044 7.17476 11.0043 7.10817 11.204 6.975L14.6666 4.66663M4.53325 13.3333H11.4666C12.5867 13.3333 13.1467 13.3333 13.5746 13.1153C13.9509 12.9236 14.2569 12.6176 14.4486 12.2413C14.6666 11.8134 14.6666 11.2534 14.6666 10.1333V5.86663C14.6666 4.74652 14.6666 4.18647 14.4486 3.75864C14.2569 3.38232 13.9509 3.07636 13.5746 2.88461C13.1467 2.66663 12.5867 2.66663 11.4666 2.66663H4.53325C3.41315 2.66663 2.85309 2.66663 2.42527 2.88461C2.04895 3.07636 1.74299 3.38232 1.55124 3.75864C1.33325 4.18647 1.33325 4.74652 1.33325 5.86663V10.1333C1.33325 11.2534 1.33325 11.8134 1.55124 12.2413C1.74299 12.6176 2.04895 12.9236 2.42527 13.1153C2.85309 13.3333 3.41315 13.3333 4.53325 13.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconMail03)
const Mail03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Mail03', props.className].join(' ')}
    />
  )
})
Mail03.displayName = 'IconMail03'
export default Mail03
