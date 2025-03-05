import { createContext, PropsWithChildren, useContext } from 'react'

export type SelectionProtectType = string | number

// Tree Option
export interface TreeSelectOption<T = string> {
  label: string
  value: T
  disabled?: boolean
  isChecked?: boolean
  isLeaf?: boolean
  isLoading?: boolean
  expanded?: boolean
  children?: TreeSelectOption<T>[]
  parentValue?: T
}

export interface SelectOption<T = string> extends Omit<TreeSelectOption<T>, 'children' | 'parentValue'> {
  parentValue: T
}

// Tree Store
export interface TreeStoreConfig<T = string> {
  options: SelectOption<T>[]
  onOptionChange?: OnOptionChange<T>
  onLoadChildren?: LoadChildren<T>
  // Load children asynchronously function, return a promise with children options.
  // Automatically update the children of the target option.
  onLoadChildrenAsync?: LoadChildrenAsync<T>
}

export interface LoadChildren<T = string> {
  (option: TreeSelectOption<T>): void
}

export interface LoadChildrenAsync<T = string> {
  (option: TreeSelectOption<T>): Promise<TreeSelectOption<T>[]>
}

// Tree Store Returns
export interface TreeStore<T = string> {
  options: TreeSelectOption<T>[]
  updateOption: OnOptionChange<T>
  updateChildren: UpdateChildren<T>
  toggleLoading: ToggleLoading<T>
  loadChildren: LoadChildren<T>
  toggleExpand: ToggleExpand<T>
  foldAll: () => void
  toggleCheck: ToggleCheck<T>
  checkByValues: (values: T[]) => TreeSelectOption<T>[]
}

export interface OnOptionChange<T = string> {
  (evt: OptionChangeEvent<T>, preprocess?: (node: TreeSelectOption<T>) => TreeSelectOption<T>): void
}
export type StatusChangeType = 'check' | 'expand' | 'loading' | 'updateChildren'
export interface OptionChangeEvent<T = string> {
  type: StatusChangeType
  target: TreeSelectOption<T>
  newData: Partial<TreeSelectOption<T>>
}

export interface UpdateChildren<T = string> {
  (target: TreeSelectOption<T>, children: TreeSelectOption<T>[]): void
}

export interface ToggleLoading<T = string> {
  (target: TreeSelectOption<T>): void
}

export interface ToggleExpand<T = string> {
  (target: TreeSelectOption<T>, reset?: boolean): void
}

export interface ToggleCheck<T = string> {
  (target: TreeSelectOption<T>): TreeSelectOption<T>[]
}

const TreeContext = createContext<TreeStore<string>>(null as any)

export const TreeProvider = <T extends SelectionProtectType = string>({
  value,
  children
}: PropsWithChildren<{ value: TreeStore<T> }>) => (
  <TreeContext.Provider value={value as TreeStore<string>}>{children}</TreeContext.Provider>
)

export const useTreeContext = () => useContext(TreeContext)
