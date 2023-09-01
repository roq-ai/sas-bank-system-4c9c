import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  transaction_type: yup.string().required(),
  transaction_amount: yup.number().integer().required(),
  transaction_date: yup.date().nullable(),
  transaction_status: yup.string().required(),
  transaction_description: yup.string().nullable(),
  customer_id: yup.string().nullable().required(),
});
