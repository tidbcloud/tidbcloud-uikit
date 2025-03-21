import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCryptocurrency04 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 2L4 4M22 2L20 4M22 22L20 20M2 22L4 20M2 16H3.5M8 2V3.5M22 8H20.5M16 22V20.5M18 16H21.5M16 2V6M2 8H6M8 22V18M11.4343 7.56569L7.56569 11.4343C7.36768 11.6323 7.26867 11.7313 7.23158 11.8455C7.19895 11.9459 7.19895 12.0541 7.23158 12.1545C7.26867 12.2687 7.36768 12.3677 7.56569 12.5657L11.4343 16.4343C11.6323 16.6323 11.7313 16.7313 11.8455 16.7684C11.9459 16.8011 12.0541 16.8011 12.1545 16.7684C12.2687 16.7313 12.3677 16.6323 12.5657 16.4343L16.4343 12.5657C16.6323 12.3677 16.7313 12.2687 16.7684 12.1545C16.8011 12.0541 16.8011 11.9459 16.7684 11.8455C16.7313 11.7313 16.6323 11.6323 16.4343 11.4343L12.5657 7.56569C12.3677 7.36768 12.2687 7.26867 12.1545 7.23158C12.0541 7.19895 11.9459 7.19895 11.8455 7.23158C11.7313 7.26867 11.6323 7.36768 11.4343 7.56569Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCryptocurrency04)
const Cryptocurrency04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Cryptocurrency04'].join(' ')}
    />
  )
})
Cryptocurrency04.displayName = 'IconCryptocurrency04'
export default Cryptocurrency04
