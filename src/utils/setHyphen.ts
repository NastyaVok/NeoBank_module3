export const setHyphen = (value: string) => {
  const startStr = value.substring(0,3);
  const endStr = value.substring(3);
  return startStr + '-' + endStr;
};