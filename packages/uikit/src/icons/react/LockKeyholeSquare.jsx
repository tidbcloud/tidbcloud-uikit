import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLockKeyholeSquare = (props, ref) => {
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
        d="M10.8 14C11.9201 14 12.4802 14 12.908 13.782C13.2843 13.5903 13.5903 13.2843 13.782 12.908C14 12.4802 14 11.9201 14 10.8V5.2C14 4.0799 14 3.51984 13.782 3.09202C13.5903 2.7157 13.2843 2.40973 12.908 2.21799C12.4802 2 11.9201 2 10.8 2L5.2 2C4.0799 2 3.51984 2 3.09202 2.21799C2.7157 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2L2 10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.07989 14 5.2 14H10.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M9.15438 8.79646C9.10734 8.65537 9.08383 8.58482 9.08505 8.52711C9.08634 8.46642 9.09446 8.4346 9.1224 8.38071C9.14898 8.32947 9.22003 8.26335 9.36213 8.13113C9.75454 7.76597 10 7.24498 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.24498 6.24546 7.76597 6.63787 8.13113C6.77997 8.26335 6.85102 8.32947 6.8776 8.38071C6.90554 8.4346 6.91366 8.46642 6.91495 8.52711C6.91617 8.58482 6.89266 8.65537 6.84562 8.79646L6.234 10.6313C6.15499 10.8683 6.11549 10.9869 6.13918 11.0812C6.15991 11.1637 6.21145 11.2353 6.28323 11.281C6.36522 11.3333 6.49013 11.3333 6.73996 11.3333H9.26004C9.50987 11.3333 9.63478 11.3333 9.71677 11.281C9.78855 11.2353 9.84009 11.1637 9.86082 11.0812C9.88451 10.9869 9.84501 10.8683 9.766 10.6313L9.15438 8.79646Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLockKeyholeSquare)
const LockKeyholeSquare = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LockKeyholeSquare', props.className].join(' ')}
    />
  )
})
LockKeyholeSquare.displayName = 'IconLockKeyholeSquare'
export default LockKeyholeSquare
