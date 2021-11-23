/**
 * HTTP default headers.
 */
export const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-API-Key': process.env.VITE_API_KEY,
};


/**
 * HTTP methods.
 */
export enum methods {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT'
}
