import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDocumentation = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M9.5 16L9.41495 15.8749C8.82451 15.0066 8.52929 14.5725 8.13924 14.2582C7.79393 13.9799 7.39605 13.7712 6.96836 13.6438C6.48526 13.5 5.95304 13.5 4.8886 13.5H3.72C2.76791 13.5 2.29187 13.5 1.92822 13.3183C1.60834 13.1586 1.34827 12.9036 1.18529 12.59C1 12.2335 1 11.7668 1 10.8333V3.66667C1 2.73325 1 2.26654 1.18529 1.91002C1.34827 1.59641 1.60834 1.34144 1.92822 1.18166C2.29187 1 2.76791 1 3.72 1H4.06C5.96418 1 6.91627 1 7.64357 1.36331C8.28332 1.68289 8.80345 2.19282 9.12942 2.82003C9.5 3.53307 9.5 4.46649 9.5 6.33333M9.5 16V6.33333M9.5 16L9.58505 15.8749C10.1755 15.0066 10.4707 14.5725 10.8608 14.2582C11.2061 13.9799 11.604 13.7712 12.0316 13.6438C12.5147 13.5 13.047 13.5 14.1114 13.5H15.28C16.2321 13.5 16.7081 13.5 17.0718 13.3183C17.3917 13.1586 17.6517 12.9036 17.8147 12.59C18 12.2335 18 11.7668 18 10.8333V3.66667C18 2.73325 18 2.26654 17.8147 1.91002C17.6517 1.59641 17.3917 1.34144 17.0718 1.18166C16.7081 1 16.2321 1 15.28 1H14.94C13.0358 1 12.0837 1 11.3564 1.36331C10.7167 1.68289 10.1965 2.19282 9.87058 2.82003C9.5 3.53307 9.5 4.46649 9.5 6.33333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDocumentation)
const Documentation = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Documentation', props.className].join(' ')}
    />
  )
})
Documentation.displayName = 'IconDocumentation'
export default Documentation
