export const transformDate = (value: Date) => {
  const addNull = (value: string) => {
    if (value.length < 2) {
      return '0' + value;
    }
    return value;
  };
    
  const year = String(value.getFullYear());
  const month = String(value.getMonth() + 1);
  const day = String(value.getDate());
  
  const data = `${year}-${addNull(month)}-${addNull(day)}`;

  return String(data);
};