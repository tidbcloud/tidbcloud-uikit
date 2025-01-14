import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSystemEndpoint = (props, ref) => {
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
        d="M19.7573 12C20.207 12 20.5756 11.6346 20.5329 11.1869C20.3605 9.37659 19.6154 7.66005 18.3952 6.29278C16.9935 4.72217 15.0629 3.7223 12.9713 3.48378C10.8797 3.24527 8.77354 3.78479 7.05423 4.99949C5.55751 6.05693 4.44512 7.56166 3.86949 9.28668C3.72714 9.71327 4.00399 10.1523 4.44216 10.2535V10.2535C4.88033 10.3548 5.31309 10.0793 5.46492 9.65601C5.94409 8.31998 6.82409 7.15611 7.99395 6.32959C9.38659 5.34568 11.0926 4.90867 12.7868 5.10187C14.4809 5.29507 16.0448 6.10496 17.1801 7.37715C18.1339 8.44584 18.7292 9.77796 18.8953 11.1876C18.9479 11.6342 19.3076 12 19.7573 12V12Z"
        fill="currentColor"
      />
      <path
        d="M4.57405 14.242C4.14352 14.372 3.89628 14.8283 4.06651 15.2446C4.6621 16.7009 5.6495 17.9706 6.92607 18.9082C8.20265 19.8459 9.70951 20.4083 11.2774 20.5409C11.7255 20.5788 12.087 20.2064 12.0822 19.7567V19.7567C12.0775 19.307 11.7079 18.9513 11.2607 18.9034C10.0462 18.7733 8.8823 18.3244 7.89015 17.5957C6.89799 16.8669 6.12147 15.8906 5.63405 14.7706C5.45459 14.3583 5.00457 14.112 4.57405 14.242V14.242Z"
        fill="currentColor"
      />
      <path
        d="M15.4287 18.5143C15.4287 19.177 15.9404 19.7143 16.5716 19.7143H17.6328C18.3091 19.7143 18.8573 19.1386 18.8573 18.4286C18.8573 17.7185 18.3091 17.1428 17.6328 17.1428H16.6532C15.9769 17.1428 15.4287 16.5672 15.4287 15.8571C15.4287 15.147 15.9769 14.5714 16.6532 14.5714H17.7144C18.3456 14.5714 18.8573 15.1087 18.8573 15.7714"
        stroke="currentColor"
        stroke-width="inherit"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M1.71436 12H12.0001" stroke="currentColor" stroke-width="inherit" stroke-linecap="round" />
      <circle cx="11.9999" cy="12.0001" r="1.71429" fill="currentColor" />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSystemEndpoint)
const SystemEndpoint = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
SystemEndpoint.displayName = 'IconSystemEndpoint'
export default SystemEndpoint
