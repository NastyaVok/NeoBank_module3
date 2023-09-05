export const getApplicationId = (path: string) => {
  const arr = path.split('/');

  for (let i = 0; i < arr.length; i++) {
    const condition = isNaN(Number(arr[i]));

    if(!condition  && arr[i].length) {
      return Number(arr[i]);
    }
  }
};