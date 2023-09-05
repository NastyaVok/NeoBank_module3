import { IApplication } from '../../../../types/interface';

export const sortLoan = (arr: IApplication[]) => {
  const min = arr.reduce(function(prev, curr) {
    return prev.monthlyPayment < curr.monthlyPayment ? prev : curr;
  }).monthlyPayment.toFixed();

  const max = arr.reduce(function(prev, curr) {
    return prev.monthlyPayment > curr.monthlyPayment ? prev : curr;
  }).monthlyPayment.toFixed();

  const mathIndex = (num: number) => {
    return 1 - (num-Number(min)) / (Number(max)-Number(min));
  };
  const sortedArr = [];

  for (let i=0; i < arr.length; i++) {
    const sum = arr[i].monthlyPayment.toFixed();
    const salary = arr[i].isSalaryClient ? 1 : 0;
    const insurance = arr[i].isInsuranceEnabled ? 1 : 0;
    const index = mathIndex(Number(sum));
    sortedArr.push(index + salary + insurance);
  }

  const first = Math.min(...sortedArr);
  const indexFirst = sortedArr.indexOf(first);
  const last = Math.max(...sortedArr);
  const indexLast = sortedArr.indexOf(last);
  sortedArr.splice(indexFirst, 1, 0);
  sortedArr.splice(indexLast, 1, 3);
  const [indexOne, indexTwo] = [0,1,2,3].filter((num) => indexFirst !== num && indexLast !== num);
  sortedArr[indexOne] > sortedArr[indexTwo] 
    ? 
    sortedArr.splice(indexOne, 1, 2) && sortedArr.splice(indexTwo, 1, 1) 
    :
    sortedArr.splice(indexOne, 1, 1) && sortedArr.splice(indexTwo, 1, 2);

  const newMap: IApplication[] = new Array(4);
  for (let i = 0; i < 4; i++) {
    newMap.splice(sortedArr.indexOf(i),1,arr[i]);
  }

  return newMap;
};
