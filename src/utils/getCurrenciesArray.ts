export const getCurrenciesArray = (currencies: string[], data: string[], countCurrency: number = 6 ) => {
  const currenciesArray = [];
  let ul = [];   
  for (let i = 0; i < countCurrency; i++) { 
    const condition = data[i] !== 'rejected' && Number(data[i]);
          
    if(condition) { 
      ul.push({[currencies[i]]: Number(data[i]).toFixed(2)});
    }
    if(ul.length === 3) {
      currenciesArray.push(ul);
      ul = [];
    } else if (i === countCurrency - 1) {
      currenciesArray.push(ul);
    }
  } 
  return currenciesArray;
};