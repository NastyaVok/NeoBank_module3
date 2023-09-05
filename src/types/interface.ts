export enum Term {
    '6 month',
    '12 month',
    '18 month',
    '24 month',
}

export interface IPrescoring {
    amount: string,
    term: Term,
    firstName: string,
    lastName: string,
    middleName: string,
    email: string,
    birthdate: string,
    passportSeries: string,
    passportNumber: string,
}

export interface INews {
    urlToImage: string,
    title: string,
    description: string,
    url: string,
}

export interface IApplication {
    applicationId: number,
    requestedAmount: number,
    totalAmount: number,
    term: number,
    monthlyPayment: number,
    rate: number,
    isInsuranceEnabled: boolean,
    isSalaryClient: boolean
}

export enum Gender {
    'MALE'='MALE',
    'FEMALE'='FEMALE',
}

export enum StatusMarital {
    'MARRIED'='MARRIED',
    'DIVORCED'='DIVORCED',
    'SINGLE'='SINGLE',
    'WIDOW_WIDOWER'='WIDOW_WIDOWER',
}

export enum StatusEmployment {
    'UNEMPLOYED'='UNEMPLOYED',
    'SELF_EMPLOYED'='SELF_EMPLOYED',
    'EMPLOYED'='EMPLOYED',
    'BUSINESS_OWNER'='BUSINESS_OWNER',
}

export enum Position {
    'WORKER'='WORKER',
    'MID_MANAGER'='MID_MANAGER',
    'TOP_MANAGER'='TOP_MANAGER',
    'OWNER'='OWNER',
}

export interface IScoring {
    gender: Gender,
    maritalStatus: StatusMarital,
    dependentAmount: number,
    passportIssueDate: string,
    passportIssueBranch: string,
    employmentStatus: StatusEmployment,
    employerINN: number,
    salary: number,
    position: Position,
    workExperienceTotal: number,
    workExperienceCurrent: number,
}

export interface IPaymentSchedule {
        number: number,
        date: string,
        totalPayment: number,
        interestPayment: number,
        debtPayment: number,
        remainingDebt: number,
}

export enum Sort {
    'number' = 'number',
    'date' = 'date',
    'totalPayment'= 'totalPayment',
    'interestPayment' = 'interestPayment',
    'debtPayment' = 'debtPayment',
    'remainingDebt'= 'remainingDebt',
}
