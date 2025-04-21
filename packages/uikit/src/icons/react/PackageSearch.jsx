import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPackageSearch = (props, ref) => {
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
        d="M13.6666 4.85173L7.99998 7.99987M7.99998 7.99987L2.33331 4.85173M7.99998 7.99987L8 14.3332M14 7.99989V5.29419C14 5.06576 14 4.95155 13.9663 4.84968C13.9366 4.75956 13.8879 4.67684 13.8236 4.60705C13.7509 4.52816 13.651 4.47269 13.4514 4.36176L8.51802 1.62102C8.32895 1.51598 8.23442 1.46346 8.1343 1.44287C8.0457 1.42464 7.95431 1.42464 7.8657 1.44287C7.76559 1.46346 7.67105 1.51598 7.48198 1.62102L2.54865 4.36176C2.34897 4.47269 2.24912 4.52816 2.17642 4.60705C2.11211 4.67684 2.06343 4.75957 2.03366 4.84968C2 4.95155 2 5.06576 2 5.29419V10.7056C2 10.934 2 11.0482 2.03366 11.1501C2.06343 11.2402 2.11211 11.3229 2.17642 11.3927C2.24912 11.4716 2.34897 11.5271 2.54865 11.638L7.48198 14.3788C7.67105 14.4838 7.76559 14.5363 7.8657 14.5569C7.95431 14.5751 8.0457 14.5751 8.1343 14.5569C8.23442 14.5363 8.32895 14.4838 8.51802 14.3788L8.66667 14.2962M5 2.99989L11 6.33323M14.6667 14.3332L14 13.6666M14.6667 11.9999C14.6667 13.1045 13.7712 13.9999 12.6667 13.9999C11.5621 13.9999 10.6667 13.1045 10.6667 11.9999C10.6667 10.8953 11.5621 9.99989 12.6667 9.99989C13.7712 9.99989 14.6667 10.8953 14.6667 11.9999Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPackageSearch)
const PackageSearch = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'PackageSearch', props.className].join(' ')}
    />
  )
})
PackageSearch.displayName = 'IconPackageSearch'
export default PackageSearch
