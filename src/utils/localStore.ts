export const getLocalStorage = (key:string) => {
  const data = localStorage.getItem(key);

  if (data != null) {
    return data;
  }
  return '';
};

export const setLocalStorage = (key:string, data:string) => {
  localStorage.setItem(key, data);
};

