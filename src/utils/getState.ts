export const statuses = (path: string, id: number | undefined ) => {
  const route = path.replace('/' + String(id), '');

  switch(route) {
  case '/loan/document': 
        
    return {
      initial: 'CC_APPROVED', 
      finish: 'DOCUMENT_CREATED',
    };

  case '/loan/document/sign': 

    return {
      initial: 'DOCUMENT_CREATED', 
      finish: 'code',
    };
      
  case '/loan/code': 

    return {
      initial: 'code', 
      finish: 'CREDIT_ISSUED',
    };
      
  default: 

    return {
      initial: 'APPROVED', 
      finish: 'CC_APPROVED',
    };

  }
};


  