import { INotifyState, notifyKind } from "./index.d";
import { IRootState } from "../../state/reducer";

export const selectNotify = (state: IRootState): INotifyState => state.notify;
export const selectIsLoading = (state: IRootState): boolean => state.notify.kind === notifyKind.LOADING;
export const selectIsError = (state: IRootState): boolean => state.notify.kind === notifyKind.ERROR;