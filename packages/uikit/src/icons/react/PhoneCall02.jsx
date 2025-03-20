import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPhoneCall02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.859 6A9.97 9.97 0 0 1 12 3a9.97 9.97 0 0 1 7.142 3m-2.67 3A5.99 5.99 0 0 0 12 7a5.99 5.99 0 0 0-4.472 2M12 17c1.51 0 2.96.258 4.31.731.044.016.067.024.102.04a1.05 1.05 0 0 1 .597.978c0 .233 0 .35.01.448a2 2 0 0 0 1.793 1.793c.098.01.215.01.447.01h.245c.461 0 .691 0 .883-.038a2 2 0 0 0 1.575-1.575c.038-.192.038-.422.038-.883v-.198c0-.475 0-.713-.05-.985-.114-.61-.557-1.363-1.033-1.759-.214-.177-.358-.257-.647-.418A16.9 16.9 0 0 0 12 13c-3.002 0-5.822.778-8.27 2.143-.289.162-.433.242-.647.42-.476.395-.919 1.149-1.032 1.758-.051.272-.051.51-.051.985v.198c0 .461 0 .691.038.883a2 2 0 0 0 1.575 1.575c.192.038.422.038.883.038h.245c.232 0 .349 0 .447-.01a2 2 0 0 0 1.794-1.793c.01-.098.01-.215.01-.448 0-.068 0-.102.002-.14.027-.35.273-.697.594-.839a1 1 0 0 1 .103-.039A13 13 0 0 1 12 17"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPhoneCall02)
const PhoneCall02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'PhoneCall02'].join(' ')}
    />
  )
})
PhoneCall02.displayName = 'IconPhoneCall02'
export default PhoneCall02
