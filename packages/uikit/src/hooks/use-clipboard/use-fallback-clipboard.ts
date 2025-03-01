import { useState } from 'react'

const fallbackCopy = (text: string) => {
  return new Promise((resolve, reject) => {
    try {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.cssText = 'position:fixed;left:-9999px;opacity:0;'

      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      const successful = document.execCommand('copy')
      textarea.remove()

      if (successful) {
        resolve(undefined)
      } else {
        reject(new Error('Fallback copy failed'))
      }
    } catch (err) {
      reject(err)
    }
  })
}

export function useFallbackClipboard({ timeout = 2000 } = {}) {
  const [error, setError] = useState<Error | null>(null)
  const [copied, setCopied] = useState(false)
  const [copyTimeout, setCopyTimeout] = useState<number | null>(null)

  const handleCopyResult = (value: boolean) => {
    window.clearTimeout(copyTimeout!)
    setCopyTimeout(window.setTimeout(() => setCopied(false), timeout))
    setCopied(value)
  }

  const copy = (valueToCopy: string) => {
    fallbackCopy(valueToCopy)
      .then(() => handleCopyResult(true))
      .catch((err) => setError(err))
  }

  const reset = () => {
    setCopied(false)
    setError(null)
    window.clearTimeout(copyTimeout!)
  }

  return { copy, reset, error, copied }
}
