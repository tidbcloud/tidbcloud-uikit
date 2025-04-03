import { useState, useCallback, createContext, useContext, PropsWithChildren } from 'react'

import { useTree as useTreePrimitive, UseTreeInput, UseTreeReturnType, TreeNodeData } from '../../primitive/index.js'

export interface TreeStoreProps extends UseTreeInput {
  loadNodesFn?: (
    parent: string,
    updator: (tree: TreeNodeData[], newChildren: TreeNodeData[]) => TreeNodeData[]
  ) => Promise<void>
}

export interface TreeStore extends UseTreeReturnType {
  loadNodes: (parent: string) => Promise<void>
  loadingState: { [key: string]: boolean }
  disabledState: { [key: string]: boolean }
  setLoading: (parent: string, value: boolean) => void
  setDisabled: (parent: string, value: boolean) => void
  toggleLoading: (parent: string) => void
  toggleDisabled: (parent: string) => void
  toggleCheck: (value: string) => void
}

export const useTreeStore = (props: TreeStoreProps): TreeStore => {
  const { loadNodesFn, ...treeProps } = props
  const treeMethods = useTreePrimitive(treeProps)
  const {
    initialize: _initialize,
    checkNode,
    uncheckNode,
    isNodeChecked,
    toggleExpanded: _toggleExpanded
  } = treeMethods

  const [loadingState, setLoadingState] = useState<{ [key: string]: boolean }>({})
  const [disabledState, setDisabledState] = useState<{ [key: string]: boolean }>({})

  const setLoading = useCallback((parent: string, value: boolean) => {
    setLoadingState((prev) => ({ ...prev, [parent]: value }))
  }, [])

  const setDisabled = useCallback((parent: string, value: boolean) => {
    setDisabledState((prev) => ({ ...prev, [parent]: value }))
  }, [])

  const toggleLoading = useCallback((parent: string) => {
    setLoadingState((prev) => ({ ...prev, [parent]: !prev[parent] }))
  }, [])

  const toggleDisabled = useCallback((parent: string) => {
    setDisabledState((prev) => ({ ...prev, [parent]: !prev[parent] }))
  }, [])

  const toggleCheck = (value: string) => {
    if (isNodeChecked(value)) {
      uncheckNode(value)
    } else {
      checkNode(value)
    }
  }

  const loadNodes = useCallback(
    async (parent: string) => {
      if (!loadNodesFn) {
        return
      }

      toggleLoading(parent)

      await loadNodesFn(parent, (tree: TreeNodeData[], newChildren: TreeNodeData[]) => {
        const updateNodes = (nodeList: TreeNodeData[]): TreeNodeData[] => {
          return nodeList.map((node) => {
            if (node.value === parent) {
              return {
                ...node,
                children: node.children ? [...node.children, ...newChildren] : newChildren
              }
            }
            if (node.children) {
              return { ...node, children: updateNodes(node.children) }
            }
            return node
          })
        }
        return updateNodes(tree)
      })

      toggleLoading(parent)
    },
    [loadNodesFn]
  )

  return {
    ...treeMethods,
    loadingState,
    disabledState,
    loadNodes,
    toggleCheck,
    setLoading,
    setDisabled,
    toggleLoading,
    toggleDisabled
  }
}

const TreeContext = createContext<TreeStore>(null as any)

export const TreeProvider = ({ value, children }: PropsWithChildren<{ value: TreeStore }>) => (
  <TreeContext.Provider value={value}>{children}</TreeContext.Provider>
)

export const useTreeContext = () => useContext(TreeContext)
