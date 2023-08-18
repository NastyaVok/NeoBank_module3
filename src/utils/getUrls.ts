export const getUrls = (currencies: string[], apiUrl: string, countCurrency: number = 6 ) => {
  const urls = [];
  for (let i = 0; i < countCurrency; i++) { 
    const params = new URLSearchParams({
      from: currencies[i],
      to: 'RUB',
      q: '1.0',
    });

    urls.push(apiUrl + '?' + params.toString());
  }
  return urls;
};