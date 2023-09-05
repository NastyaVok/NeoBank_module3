export const sortData = <T extends keyof U, U>(fieldName: T) => {
  return (a: U, b: U) => a[fieldName] > b[fieldName] ? 1 : -1;
};