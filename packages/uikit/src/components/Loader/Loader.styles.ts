import { keyframes } from '@mantine/core'

const spinKeyFrames = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
})

export const loaderAnimation = `${spinKeyFrames} 1s linear infinite`

export const loaderClassName = 'mantine-loader-root'
