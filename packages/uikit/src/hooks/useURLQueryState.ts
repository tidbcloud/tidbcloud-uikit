import qs from 'qs'
import { useState } from 'react'

type TQueryState = { [key: string]: any }

export function useURLQueryState(
  key: string,
  defaultValue?: TQueryState
): [TQueryState | undefined, (value: TQueryState) => void] {
  const parsed = qs.parse(window.location.search)
  const initialValue = parsed[key] ? JSON.parse(parsed[key] as string) : defaultValue
  const [formState, setFormState] = useState(initialValue)
  const value = formState
  const setValue = (partialValue: Partial<TQueryState>) => {
    const newFormState = { ...value, ...partialValue }
    setFormState(newFormState)
    const curSearch = qs.parse(window.location.search)
    curSearch[key] = JSON.stringify(newFormState)
    window.history.replaceState({}, document.title, `?${qs.stringify(curSearch).substring(3)}`)
  }

  return [value, setValue]
}
