/**
 * IMPORTS
 */
import notify from 'features/notify';
import { NotifyEnum } from 'features/notify/index.d';
import { handleError, handleSuccess } from './handlers';
import { defaultHeaders, methods } from './http.d';


/**
 * I execute a http request.
 */
const doFetch = async (url: string, config?: any): Promise<any> => {
  // url not available: throw error
  if (url === undefined) throw new Error('You must specify a url');

  // get options
  const {
    bodyType = 'json',
    dispatch,
    errorData,
    successData,
    external,
    ...options
  } = config;

  // execute request
  try {
    // set loading state
    dispatch(notify.actions.update({ kind: NotifyEnum.LOADING }));
    // is json request: stringify body
    if (config.method !== methods.GET && bodyType === 'json') {
      options.body = JSON.stringify(options.body);
    }

    // merge headers options
    options.headers = {
      ...defaultHeaders,
      ...options.headers,
    };

    // is json request: stringify body
    if (bodyType === 'form') {
      delete options.headers['Content-Type'];
    }
    if (bodyType === 'image')
      delete options.headers;

    // make request
    let response;
    if (external) {
      response = await fetch(url, options)
    }
    else {
      response = await fetch(
        `${import.meta.env.VITE_API_HOST}/${url}`,
        options
      );
    }


    // response failed: throw error
    if (response.ok === false) {
      throw response;
    }

    // no content: handle success and return
    if (response.headers.get('Content-Length') === '0') {
      handleSuccess(successData, dispatch);
      return;
    }

    // get data from json response
    const data = await response.json();

    // handle success
    handleSuccess(successData | data, dispatch);

    // return data
    return data;
  } catch (ex) {
    // handle error
    handleError(ex, errorData, dispatch);

  }
};


/**
 * I execute a delete request.
 */
const $delete = (url: string, config?: any): Promise<any> => (
  doFetch(url, { ...config, method: methods.DELETE })
);


/**
 * I execute a get request.
 */
const get = (url: string, config?: any): Promise<any> => (
  doFetch(url, { ...config, method: methods.GET })
);


/**
 * I execute a patch request.
 */
const patch = (url: string, config?: any): Promise<any> => (
  doFetch(url, { ...config, method: methods.PATCH })
);


/**
 * I execute a post request.
 */
const post = (url: string, config?: any): Promise<any> => (
  doFetch(url, { ...config, method: methods.POST })
);


/**
 * I execute a put request.
 */
const put = (url: string, config?: any): Promise<any> => (
  doFetch(url, { ...config, method: methods.PUT })
);

const actions = { delete: $delete, get, patch, post, put }

/**
 * EXPORTS
 */
export default actions;
