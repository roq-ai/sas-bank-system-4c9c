import * as yup from 'yup';

export const billValidationSchema = yup.object().shape({
  bill_type: yup.string().required(),
  bill_amount: yup.number().integer().required(),
  due_date: yup.date().nullable(),
  payment_date: yup.date().nullable(),
  status: yup.string().required(),
  customer_id: yup.string().nullable().required(),
});
