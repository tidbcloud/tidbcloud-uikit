import * as React from 'react'
import { forwardRef } from 'react'
const HomeLine = (props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      height: size,
      width: size
    }
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 18 18"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.667 13.167h6.666M8.181 1.303 2.53 5.7c-.377.294-.566.441-.702.625-.12.163-.21.347-.265.542-.062.22-.062.46-.062.938v6.03c0 .933 0 1.4.182 1.756.16.314.414.569.728.728.357.182.823.182 1.757.182h9.666c.934 0 1.4 0 1.757-.182.314-.16.569-.414.728-.728.182-.357.182-.823.182-1.757V7.804c0-.478 0-.718-.062-.938a1.665 1.665 0 0 0-.265-.542c-.136-.184-.325-.33-.702-.625L9.819 1.303c-.293-.227-.44-.341-.601-.385a.833.833 0 0 0-.436 0c-.161.044-.308.158-.6.385Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(HomeLine)
export default ForwardRef
