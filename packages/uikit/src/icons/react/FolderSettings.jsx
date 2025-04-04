import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFolderSettings = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.221 5.983 12.083 3.76c-.327-.64-.491-.959-.735-1.192a2.05 2.05 0 0 0-.763-.46C10.262 2 9.895 2 9.163 2H5.264c-1.142 0-1.714 0-2.15.217-.384.19-.696.496-.892.87C2 3.513 2 4.071 2 5.186v.797m11.221 0H2.001m11.22 0h4.285c1.713 0 2.06 0 2.715.325a3.02 3.02 0 0 1 1.337 1.305c.334.64.334 1.476.334 3.149M2 5.982v9.658c0 1.673 0 2.51.334 3.148a3.03 3.03 0 0 0 1.337 1.306c.655.325 1.512.325 3.225.325h4.452m5.246-.619.273.6c.081.179.214.33.381.437a1.05 1.05 0 0 0 1.128 0c.168-.107.3-.258.382-.437l.273-.6c.097-.213.26-.39.468-.507s.448-.167.687-.142l.669.07c.198.02.4-.016.578-.105s.326-.226.426-.395a.99.99 0 0 0-.06-1.099l-.395-.53a1.09 1.09 0 0 1 .002-1.307l.396-.531a.994.994 0 0 0-.367-1.494 1.06 1.06 0 0 0-.578-.104l-.669.07a1.16 1.16 0 0 1-.687-.143 1.1 1.1 0 0 1-.468-.51l-.275-.6a1 1 0 0 0-.382-.437 1.05 1.05 0 0 0-1.128 0c-.167.107-.3.259-.381.437l-.273.6c-.097.214-.26.392-.468.51a1.16 1.16 0 0 1-.687.142l-.67-.07c-.2-.02-.4.016-.58.105a1.02 1.02 0 0 0-.426.395.99.99 0 0 0 .06 1.099l.396.53a1.09 1.09 0 0 1 0 1.305l-.396.53a.994.994 0 0 0 .367 1.494c.178.089.38.125.578.105l.669-.07c.239-.024.479.026.687.143s.372.295.47.51m2.62-3.363c0 .756-.628 1.369-1.402 1.369-.775 0-1.403-.613-1.403-1.37 0-.755.628-1.368 1.402-1.368.775 0 1.403.613 1.403 1.369"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFolderSettings)
const FolderSettings = forwardRef((props, ref) => {
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
FolderSettings.displayName = 'IconFolderSettings'
export default FolderSettings
