/**
 * User state interface.
 */
export interface INotifyState {
  kind?: NotifyEnum
  title?: string
  detail?: string
}

export enum NotifyEnum {
  ERROR = 'error',
  SUCCESS = 'success',
  LOADING = 'loading'
}