import axios from 'axios';

export const getApiResource = async (url:string, options:{} = '') => {
  try { 
    const res = await axios.get(url, options);

    return [res.data, res.status];
  } catch (err) {
    if (err instanceof Error) {
      console.log('Could not fetch.', err.message);
      return false;
    }
  }
};

export const postApiResource = async (url:string, data:{}, options:{} = '') => {
  try { 
    const res = await axios.post(url, data, options);

    return [res.data, res.status];
  } catch (err) {
    if (err instanceof Error) {
      console.log('Could not fetch.', err.message);
      return false;
    }
  }
};

export const getDataAllSettled = async (urls:string[], options:{}) => {
  const res = [];
  const data = await Promise.allSettled(urls.map(url => fetch(url, options)));
  for (const el of data) {
    if (el.status === 'fulfilled') {
      const data = await el.value;
      const json = await data.json();
      res.push(json);
    }
  }
  return res;
};