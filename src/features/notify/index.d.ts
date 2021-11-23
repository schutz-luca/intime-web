/**
 * User state interface.
 */
export interface INotifyState {
  kind?: notifyKind
  title?: string
  detail?: string
}

export enum notifyKind {
  ERROR = 'error',
  SUCCESS = 'success',
  LOADING = 'loading'
}