/**
 * IMPORTS
 */
import notify from 'features/notify';
import { NotifyEnum } from 'features/notify/index.d';


/**
 * I handle a request error.
 */
const handleError =
  async (exception, data, dispatch): Promise<unknown> => {
    // data available: notify and return
    if (data !== undefined) {
      return dispatch(notify.actions.update({ ...data, kind: NotifyEnum.ERROR }));
    }

    try {
      // get error details
      const error = await exception.json();
      // dispatch action to notify error
      dispatch(notify.actions.update({ ...error, kind: NotifyEnum.ERROR }));
    } catch (ex) {
      // dispatch action to notify failed request
      dispatch(notify.actions.update({
        title: import.meta.env.VITE_ERROR_REQUEST_FAILED
      }));
    }
  };


/**
 * I handle a request success.
 */
const handleSuccess = (data, dispatch): void => {
  // no data: do nothing
  if (data === undefined) return;

  // dispatch action to notify success
  dispatch(notify.actions.update({ ...data, kind: NotifyEnum.SUCCESS }));
};


/**
 * EXPORTS
 */
export { handleError, handleSuccess };
