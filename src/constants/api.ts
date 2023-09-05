export const API_KEY_CURRENCY = '558d167f94mshb1e9836246f2a98p1a5ad9jsn6de8308cea88';
export const API_HOST_CURRENCY = 'currency-exchange.p.rapidapi.com';

const EXCHANGE = 'exchange';

export const API_URL_CURRENCY = 'https://'+ API_HOST_CURRENCY + '/' + EXCHANGE;

export const API_KEY_NEWS = 'acb62ce1bbca44248f9ffbb8faf7db31';
export const API_HOST_NEWS = 'newsapi.org';

const COUNTRY = 'us';
const SIZE = '40';
const CATEGORY = 'business';

export const API_URL_NEWS = 'https://' + API_HOST_NEWS + 
    `/v2/top-headlines?country=${COUNTRY}&pageSize=${SIZE}&category=${CATEGORY}`;

export const API_HOST_LOCALHOST = 'http://localhost:8080';

export const EMAIL = '/email';
export const APPLICATION = '/application';
export const REGISTRATION = '/registration';
export const APPLY = '/apply';
export const ADMIN = '/admin';
export const DOCUMENT = '/document';
export const SIGN = '/sign';
export const CODE = '/code';
export const DENY = '/deny';

export const API_URL_POSTEMAIL = API_HOST_LOCALHOST + EMAIL;
export const API_URL_POSTCREATE = API_HOST_LOCALHOST + APPLICATION;
export const API_URL_POSTAPPLY = API_HOST_LOCALHOST + APPLICATION + APPLY;
export const API_URL_PUTREGISTRATION = API_HOST_LOCALHOST + APPLICATION + REGISTRATION;
export const API_URL_GETAPPLICATION = API_HOST_LOCALHOST + ADMIN + APPLICATION;
export const API_URL_POSTDOCUMENT = API_HOST_LOCALHOST + DOCUMENT;
export const API_URL_POSTCODE = SIGN + CODE;