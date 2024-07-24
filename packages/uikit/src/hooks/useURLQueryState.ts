import { useState } from 'react'

type TQueryState = { [key: string]: any }

export function useURLQueryState(
  key: string,
  defaultValue?: TQueryState
): [TQueryState | undefined, (value: TQueryState) => void] {
  const parsed = parse(window.location.search)
  const initialValue = parsed[key] ? JSON.parse(parsed[key] as string) : defaultValue
  const [formState, setFormState] = useState(initialValue)
  const value = formState
  const setValue = (partialValue: Partial<TQueryState>) => {
    const newFormState = { ...value, ...partialValue }
    setFormState(newFormState)
    const curSearch = parse(window.location.search)
    curSearch[key] = JSON.stringify(newFormState)
    const searchParams = new URLSearchParams(curSearch)
    window.history.replaceState({}, document.title, `?${searchParams.toString()}`)
  }

  return [value, setValue]
}

const parse = (search: string) => Object.fromEntries(new URLSearchParams(search).entries())
