
import * as yup from 'yup';


/**
 * I am a schema to login validation.
 */
const schema = yup.object().shape({
  email: yup.string().required('Digite seu email').email('Email com formato inválido'),
  password: yup.string().required('Digite sua senha').min(6, 'A senha deve ter no mínimo 6 caracteres'),
  fullname: yup.string().required('Digite seu nome completo'),
  phone: yup.string().required('Digite seu celular'),
  confirmPassword: yup.string().required('Digite a confirmação da senha')
    .oneOf([yup.ref('password'), null], 'Confirmação divergente'),
});

/**
 * I am a schema to login validation.
 */
const editSchema = yup.object().shape({
  email: yup.string().required('Digite seu email').email('Email com formato inválido'),
  fullname: yup.string().required('Digite seu nome completo'),
  phone: yup.string().required('Digite seu celular'),
});


/**
 * EXPORTS
 */
export { schema, editSchema };
