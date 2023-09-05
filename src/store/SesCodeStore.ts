import { makeObservable, observable, computed, action} from 'mobx';

import { IRootStore } from './RootStore';

export class SesCodeStore {
  sesCode: string = '';
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      sesCode: observable,
      setSesCode: action,
      getSesCode: computed,
    });
    this.rootStore = rootStore;
  }

  get getSesCode() {
    return this.sesCode;
  }

  setSesCode = (code: string) => {
    this.sesCode = code;
  };
}