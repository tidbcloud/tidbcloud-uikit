import { DefaultProps } from '@mantine/core'
import { mergeSxList } from '@tidb-cloud-uikit/utils'
import { isFunction } from 'lodash-es'

export function mergeMProps<P extends DefaultProps | ((...args: unknown[]) => DefaultProps)>(preProps: P, mProps?: P) {
  type PropsResult = Extract<P, { className?: string }> | undefined

  if (isFunction(preProps) || isFunction(mProps)) {
    const fn = (...args: unknown[]) => {
      const prePropsResult = isFunction(preProps) ? preProps(...args) : (preProps as NonNullable<PropsResult>)
      const mPropsResult = isFunction(mProps) ? mProps(...args) : (mProps as PropsResult)

      return {
        ...prePropsResult,
        ...mPropsResult,
        sx: mergeSxList([prePropsResult?.sx, mPropsResult?.sx])
      }
    }

    return fn as P
  }

  return {
    ...preProps,
    ...(mProps || {}),
    sx: mergeSxList([preProps.sx, mProps?.sx])
  }
}
