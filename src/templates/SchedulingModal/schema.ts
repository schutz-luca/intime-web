/**
 * IMPORTS
 */
import * as yup from 'yup';


/**
 * I am a schema to login validation.
 */
const schema = yup.object().shape({
  payment: yup.string().required('Selecione uma forma de pagamento'),
  startDate: yup.string().required('Selecione o horário do agendamento'),
});


/**
 * EXPORTS
 */
export { schema };
