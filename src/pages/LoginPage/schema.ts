
import * as yup from 'yup';


/**
 * I am a schema to login validation.
 */
const schema = yup.object().shape({
  username: yup.string().required('Digite seu usuário'),
  password: yup.string().required('Digite sua senha')
});


/**
 * EXPORTS
 */
export { schema };
