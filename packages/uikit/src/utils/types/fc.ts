export interface FixedFunctionComponent<P extends unknown = {}> {
  (props: P): JSX.Element | null
  displayName?: string | undefined
}

export type ForwardRefWithStaticProps<
  P extends Record<string, any>,
  S extends Record<string, any>
> = FixedFunctionComponent<P> & S
