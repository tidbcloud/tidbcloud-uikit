import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconHome03 = (props, ref) => {
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
        d="M6.00017 14V9.06667C6.00017 8.6933 6.00017 8.50661 6.07283 8.36401C6.13674 8.23857 6.23873 8.13658 6.36417 8.07266C6.50678 8 6.69346 8 7.06683 8H8.9335C9.30687 8 9.49355 8 9.63616 8.07266C9.7616 8.13658 9.86359 8.23857 9.9275 8.36401C10.0002 8.50661 10.0002 8.6933 10.0002 9.06667V14M1.3335 6.33333L7.36017 1.81333C7.58967 1.6412 7.70442 1.55514 7.83045 1.52196C7.9417 1.49268 8.05863 1.49268 8.16988 1.52196C8.29591 1.55514 8.41066 1.6412 8.64017 1.81333L14.6668 6.33333M2.66683 5.33333V11.8667C2.66683 12.6134 2.66683 12.9868 2.81216 13.272C2.93999 13.5229 3.14396 13.7268 3.39484 13.8547C3.68006 14 4.05343 14 4.80017 14H11.2002C11.9469 14 12.3203 14 12.6055 13.8547C12.8564 13.7268 13.0603 13.5229 13.1882 13.272C13.3335 12.9868 13.3335 12.6134 13.3335 11.8667V5.33333L9.28017 2.29333C8.82115 1.94907 8.59165 1.77695 8.33959 1.71059C8.1171 1.65202 7.88323 1.65202 7.66074 1.71059C7.40868 1.77695 7.17918 1.94907 6.72017 2.29333L2.66683 5.33333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconHome03)
const Home03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Home03', props.className].join(' ')}
    />
  )
})
Home03.displayName = 'IconHome03'
export default Home03
