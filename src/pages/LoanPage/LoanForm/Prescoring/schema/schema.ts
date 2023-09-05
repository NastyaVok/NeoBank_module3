import * as yup from 'yup';

export const schemaInitialStep = yup.object().shape({ 
  amount: yup
    .number()
    .required(),
  term: yup
    .number(),
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/g,'Enter your first name')
    .typeError('Enter your first name')
    .required('Enter your first name'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/g, 'Enter your last name')
    .typeError('Enter your last name')
    .required('Enter your last name'),
  middleName: yup
    .string()
    .matches(/^([^0-9]*)$/g, 'Enter your middleName name'), 
  email: yup
    .string()
    .email('Incorrect email address')
    .matches(
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
      'Incorrect email address',
    ) 
    .typeError('Incorrect email address')
    .required('Incorrect email address'),
  birthdate: yup
    .date()
    .nullable('Incorrect date of birth')
    .typeError('Incorrect date of birth')
    .required('Incorrect date of birth')
    .test((val, {originalValue}) => {
      const age =  new Date().getFullYear() - val.getFullYear() >= 18;
      const delimetr = originalValue.match(/\/|\.|\-/);

      if(delimetr && age) {
        const date = originalValue.split(delimetr);
        return date.length === 3;
      }
    }),
  passportSeries: yup
    .string()
    .min(4,'The series must be 4 digits')
    .max(4,'The series must be 4 digits')
    .matches(/^\d+$/,'The series must be 4 digits')
    .typeError('The series must be 4 digits')
    .required('The series must be 4 digits'), 
  passportNumber: yup
    .string()
    .min(6,'The number must be 6 digits')
    .max(6,'The number must be 6 digits')
    .matches(/^\d+$/,'The number must be 6 digits')
    .typeError('The number must be 6 digits')
    .required('The number must be 6 digits'), 
});
