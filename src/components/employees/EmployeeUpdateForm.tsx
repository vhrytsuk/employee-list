import { EmployeeSchema } from "@/schemas/Employee";
import { Employee } from "@/types/Employee";
import { Box, Button, Flex } from "@radix-ui/themes";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface EmployeeUpdateFormProps {
  employee: Employee;
  handleUpdateEmployee: (values: Partial<Employee>) => void;
  cancelUpdate: () => void;
}

export const EmployeeUpdateForm: React.FC<EmployeeUpdateFormProps> = ({
  employee,
  handleUpdateEmployee,
  cancelUpdate,
}) => {
  const initialValues = {
    first_name: employee.first_name,
    last_name: employee.last_name,
    email: employee.email,
    street_address: employee.street_address,
    city: employee.city,
    bio: employee.bio,
  };

  const handleSubmit = (values: Partial<Employee>) => {
    handleUpdateEmployee(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EmployeeSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='min-w-80 md:min-w-96'>
          <Box mb='4'>
            <Field
              id='first_name'
              name='first_name'
              type='text'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            <ErrorMessage
              name='first_name'
              component='div'
              className='text-red-500 text-sm'
            />
          </Box>

          <Box mb='4'>
            <Field
              id='last_name'
              name='last_name'
              type='text'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            <ErrorMessage
              name='last_name'
              component='div'
              className='text-red-500 text-sm'
            />
          </Box>

          <Box mb='4'>
            <Field
              id='email'
              name='email'
              type='email'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            <ErrorMessage
              name='email'
              component='div'
              className='text-red-500 text-sm'
            />
          </Box>

          <Box mb='4'>
            <Field
              id='street_address'
              name='street_address'
              type='text'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            <ErrorMessage
              name='street_address'
              component='div'
              className='text-red-500 text-sm'
            />
          </Box>

          <Box mb='4'>
            <Field
              id='city'
              name='city'
              type='text'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            <ErrorMessage
              name='city'
              component='div'
              className='text-red-500 text-sm'
            />
          </Box>

          <Box mb='4'>
            <Field
              as='textarea'
              id='bio'
              name='bio'
              className='w-full p-2 border border-gray-300 rounded-md'
            />
            <ErrorMessage
              name='bio'
              component='div'
              className='text-red-500 text-sm'
            />
          </Box>

          <Flex justify='end'>
            <Button
              variant='soft'
              color='gray'
              type='button'
              className='mr-2'
              onClick={cancelUpdate}
            >
              Cancel
            </Button>
            <Button
              variant='soft'
              type='submit'
              color='blue'
              disabled={isSubmitting}
            >
              Save Changes
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
