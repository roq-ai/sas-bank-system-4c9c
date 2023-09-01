import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  employee_id: yup.string().required(),
  position: yup.string().required(),
  date_hired: yup.date().nullable(),
  date_terminated: yup.date().nullable(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
