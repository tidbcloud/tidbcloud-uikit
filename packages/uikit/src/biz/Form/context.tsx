import { createContext, useContext } from 'react'

export interface HookFormData {
  onError?: (e: any) => any
}

export const HookFormContext = createContext<HookFormData | null>(null)

export const HookFormProvider = HookFormContext.Provider

export const useHookFormContext = () => {
  const context = useContext(HookFormContext)
  return context
}
