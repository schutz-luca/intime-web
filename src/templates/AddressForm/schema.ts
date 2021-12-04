/**
 * IMPORTS
 */
import * as yup from 'yup';


/**
 * I am a schema to login validation.
 */
const schema = yup.object().shape({
  zipCode: yup.string().required('Digite seu CEP'),
  street: yup.string().required('Digite sua rua'),
  number: yup.string().required('Digite seu número'),
  district: yup.string().required('Digite seu bairro'),
  state: yup.string().required('Digite seu estado'),
  complement: yup.string()
});

/**
 * EXPORTS
 */
export { schema };
