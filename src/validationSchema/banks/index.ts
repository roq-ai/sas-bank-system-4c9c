import * as yup from 'yup';

export const bankValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  status: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
