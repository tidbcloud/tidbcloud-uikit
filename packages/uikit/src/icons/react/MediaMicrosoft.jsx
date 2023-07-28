import * as React from 'react'
import { forwardRef } from 'react'
const MediaMicrosoft = (props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" ref={ref} {...props}>
    <path fill="#F3F3F3" d="M22 2H2v20h20V2Z" />
    <path fill="#F8682C" d="M11.613 2.774H2.774v8.839h8.839V2.774Z" />
    <path fill="#91C300" d="M21.226 2.774h-8.838v8.839h8.838V2.774Z" />
    <path fill="#00B4F1" d="M11.613 12.387H2.774v8.838h8.839v-8.838Z" />
    <path fill="#FFC300" d="M21.226 12.387h-8.838v8.838h8.838v-8.838Z" />
  </svg>
)
const ForwardRef = forwardRef(MediaMicrosoft)
export default ForwardRef
