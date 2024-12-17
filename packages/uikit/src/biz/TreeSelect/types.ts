export type SelectionProtectType = string | number

export interface TreeSelectOption<T extends SelectionProtectType = string> {
  label: string
  value: T
  disabled?: boolean
  isChecked?: boolean
  isLeaf?: boolean
  showChildren?: boolean
  children?: TreeSelectOption<T>[]
  renderSelectItem?: (options: TreeSelectOption<T>) => React.ReactNode
}

export interface SelectOption<T extends SelectionProtectType = string> extends Omit<TreeSelectOption<T>, 'children'> {
  parent?: T
}

export type StatusChangeType = 'check' | 'showChildren'

export interface OnStatusChangeEvent<T extends SelectionProtectType = string> {
  type: StatusChangeType
  target?: TreeSelectOption<T>
  node?: TreeSelectOption<T>
  options?: TreeSelectOption<T>[]
}
export interface OnStatusChange<T extends SelectionProtectType = string> {
  (evt: OnStatusChangeEvent<T>): void
}

export interface OnValueChange<T extends SelectionProtectType = string> {
  (value: TreeSelectOption<T>[]): void
}

export interface LoadData<T extends SelectionProtectType = string, R = any> {
  (id: T): Promise<R>
}

export interface RenderSelectItem<T extends SelectionProtectType = string> {
  (options: TreeSelectOption<T>): React.ReactNode
}
