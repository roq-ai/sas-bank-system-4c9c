import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createCustomer } from 'apiSdk/customers';
import { customerValidationSchema } from 'validationSchema/customers';
import { UserInterface } from 'interfaces/user';
import { getUsers } from 'apiSdk/users';
import { CustomerInterface } from 'interfaces/customer';

function CustomerCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: CustomerInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createCustomer(values);
      resetForm();
      router.push('/customers');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<CustomerInterface>({
    initialValues: {
      account_number: '',
      account_type: '',
      balance: 0,
      credit_card_status: '',
      credit_card_limit: 0,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: customerValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Customers',
              link: '/customers',
            },
            {
              label: 'Create Customer',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Customer
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.account_number}
            label={'Account Number'}
            props={{
              name: 'account_number',
              placeholder: 'Account Number',
              value: formik.values?.account_number,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.account_type}
            label={'Account Type'}
            props={{
              name: 'account_type',
              placeholder: 'Account Type',
              value: formik.values?.account_type,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Balance"
            formControlProps={{
              id: 'balance',
              isInvalid: !!formik.errors?.balance,
            }}
            name="balance"
            error={formik.errors?.balance}
            value={formik.values?.balance}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('balance', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.credit_card_status}
            label={'Credit Card Status'}
            props={{
              name: 'credit_card_status',
              placeholder: 'Credit Card Status',
              value: formik.values?.credit_card_status,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Credit Card Limit"
            formControlProps={{
              id: 'credit_card_limit',
              isInvalid: !!formik.errors?.credit_card_limit,
            }}
            name="credit_card_limit"
            error={formik.errors?.credit_card_limit}
            value={formik.values?.credit_card_limit}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('credit_card_limit', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/customers')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'customer',
    operation: AccessOperationEnum.CREATE,
  }),
)(CustomerCreatePage);
