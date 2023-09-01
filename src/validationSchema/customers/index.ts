import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  account_number: yup.string().required(),
  account_type: yup.string().required(),
  balance: yup.number().integer().required(),
  credit_card_status: yup.string().required(),
  credit_card_limit: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
