export function isValueChecked(value: string | string[] | undefined | null, optionValue: string) {
  return Array.isArray(value) ? value.includes(optionValue) : value === optionValue
}
