import { Gender, StatusMarital } from '../../../types/interface';

export const DATA_STATUS = [
  {
    'name': 'gender'  as const,
    'text': 'What\'s your gender',
    'initial': '',
    'options': Object.values(Gender).map((status)=>{
      return {title: status, el: status};
    }),
  },
  {
    'name': 'maritalStatus'  as const,
    'text': 'Your marital status',
    'initial': '',
    'options': Object.values(StatusMarital).map((status)=>{
      return {title: status, el: status};
    }),
  },
  {
    'name': 'dependentAmount'  as const,
    'text': 'Your number of dependents',
    'initial': '',
    'options': [
      {title: 1, el: 1},
      {title: 2, el: 2},
      {title: 3, el: 3},
      {title: 4 ,el: 4},
      {title: 5, el: 5},
      {title: 6 ,el: 6},
    ],
  },
]; 

export const DATA_CODE = [
  {
    'name': 'passportIssueDate'  as const,
    'text': 'Date of issue of the passport',
    'placeholder': 'Select Date and Time',
  },
  {
    'name': 'passportIssueBranch'  as const,
    'text': 'Division code',
    'placeholder': '000000',
  },
];
  
export const DATA_EMPLOYMENT = [
  {
    'name': 'employerINN'  as const,
    'text': 'Your employer INN',
    'placeholder': '000000000000',
  },
  {
    'name': 'salary'  as const,
    'text': 'Your salary',
    'placeholder': 'For example 100 000',
  },
];

export const DATA_EXPERIENCE = [
  {
    'name': 'workExperienceTotal'  as const,
    'text': 'Your work experience total',
    'placeholder': 'For example 10',
  },
  {
    'name': 'workExperienceCurrent'  as const,
    'text': 'Your work experience current',
    'placeholder': 'For example 2',
  },
];

