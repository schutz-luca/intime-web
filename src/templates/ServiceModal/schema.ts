
import * as yup from 'yup';


/**
 * I am a schema to login validation.
 */
const schema = yup.object().shape({
  name: yup.string().required('Digite o nome do serviço'),
  description: yup.string().required('Digite a descrição'),
  price: yup.number().required('Digite o preço'),
  duration: yup.number().required('Digite a duração'),
});


/**
 * EXPORTS
 */
export { schema };
