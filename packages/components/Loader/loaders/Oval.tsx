import { Box, keyframes } from '@mantine/core'
import React from 'react'

import { LoaderProps } from './loader-props'

const spinAmimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
})

export function Oval({ size, color, display, ...others }: LoaderProps) {
  return (
    <Box
      component="svg"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      display={display as string}
      {...others}
      sx={{ animation: `${spinAmimation} 1s linear infinite` }}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(2.5 2.5)" strokeWidth="5">
          <circle strokeOpacity=".5" cx="16" cy="16" r="16" />
          <path d="M32 16c0-9.94-8.06-16-16-16"></path>
        </g>
      </g>
    </Box>
  )
}
