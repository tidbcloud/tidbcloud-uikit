import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconStickerCircle = (props, ref) => {
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
        d="M22 12.117C22 6.53 17.472 2 11.885 2 7.348 2 3.51 4.984 2.224 9.095c-.082.264-.123.395-.12.56.004.134.045.3.104.42.073.147.186.26.41.485l10.822 10.82c.225.226.338.339.486.412.12.059.285.1.419.103.165.004.296-.037.56-.12C19.017 20.49 22 16.652 22 12.117"
        strokeWidth="inherit"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.447 9.734q.36-.026.728-.026c5.588 0 10.117 4.53 10.117 10.117q0 .367-.026.729c-.03.42-.044.63-.167.76a.53.53 0 0 1-.413.154c-.178-.018-.34-.18-.662-.502l-9.99-9.99c-.322-.322-.484-.484-.502-.661a.53.53 0 0 1 .155-.414c.13-.122.34-.137.76-.167"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconStickerCircle)
const StickerCircle = forwardRef((props, ref) => {
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
StickerCircle.displayName = 'IconStickerCircle'
export default StickerCircle
