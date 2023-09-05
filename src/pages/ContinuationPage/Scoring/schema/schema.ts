import * as yup from 'yup';

export const schemaScoringStep = yup.object().shape({ 
  gender: yup
    .mixed()
    .oneOf(['MALE', 'FAMALE'] as const, 'Select one of the options')
    .defined('Select one of the options'),
  maritalStatus: yup
    .mixed()
    .oneOf([ 'MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER' ] as const, 'Select one of the options')
    .defined('Select one of the options'),
  dependentAmount: yup
    .number()
    .typeError('Select one of the options')
    .required('Select one of the options'),
  passportIssueDate: yup
    .date()
    .typeError('Incorrect date of passport issue date')
    .required('Incorrect date of passport issue date') 
    .test((val, {originalValue}) => {
      const delimetr = originalValue.match(/\/|\.|\-/);
      const date = originalValue.split(delimetr);

      if(date.length !== 3) {
        return false;
      };

      const currentDate = new Date();
      const recievedDate = val;
   
      if (currentDate.getFullYear() > recievedDate.getFullYear()) return true;
      if (currentDate.getMonth() > recievedDate.getMonth()) return true;
      if (currentDate.getDate() >= recievedDate.getDate()) return true;

      return false;
    }), 
  passportIssueBranch: yup
    .string()
    .min(6,'The series must be 6 digits')
    .max(6,'The series must be 6 digits')
    .matches(/^\d+$/,'The series must be 6 digits')
    .typeError('The series must be 6 digits')
    .required('The series must be 6 digits'), 
  employmentStatus: yup
    .mixed()
    .oneOf([ 'UNEMPLOYED', 'SELF_EMPLOYED', 'EMPLOYED', 'BUSINESS_OWNER' ] as const, 'Select one of the options')
    .defined('Select one of the options'),
  employerINN: yup
    .number()
    .typeError('Department code must be 12 digits')
    .required('Department code must be 12 digits')
    .test('','Department code must be 12 digits', (val) => {
      return String(val).length === 12;
    }),
  salary: yup
    .number()
    .typeError('Enter your salary')
    .required('Enter your salary'),
  position: yup
    .mixed()
    .oneOf([ 'WORKER', 'MID_MANAGER', 'TOP_MANAGER', 'OWNER' ] as const, 'Select one of the options')
    .defined('Select one of the options'),
  workExperienceTotal: yup
    .number()
    .typeError('Enter your work experience total')
    .test('','Enter your work experience total', (val) => {
      return String(val).length <= 2;
    })
    .required('Enter your work experience total'),
  workExperienceCurrent: yup
    .number()
    .typeError('Enter your work experience current')
    .test('','Enter your work experience current', (val) => {
      return String(val).length <= 2;
    })
    .required('Enter your work experience current'),
});
  