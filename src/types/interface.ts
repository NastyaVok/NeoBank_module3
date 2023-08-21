export interface PrescoringForm {
    amount: string,
    term: '6 month' | '12 month' | '18 month' | '24 month',
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
    applicationId?: number,
    requestedAmount: number,
    totalAmount: number,
    term: number,
    monthlyPayment: number,
    rate: number,
    isInsuranceEnabled: boolean,
    isSalaryClient: boolean
}
