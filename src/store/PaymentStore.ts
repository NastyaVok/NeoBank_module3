import { makeObservable, observable, computed, action} from 'mobx';

import { IPaymentSchedule } from '../types/interface';

import { IRootStore } from './RootStore';

export class PaymentStore {
  paymentArray: IPaymentSchedule[] = [];
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      paymentArray: observable,
      setPaymentArray: action,
      getPaymentArray: computed,
    });
    this.rootStore = rootStore;
  }

  get getPaymentArray() {
    return this.paymentArray;
  }

  setPaymentArray = (array: IPaymentSchedule[]) => {
    this.paymentArray = array;
  };
}