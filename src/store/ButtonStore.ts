import { makeObservable, observable, computed, action} from 'mobx';

import { IRootStore } from './RootStore';

export class ButtonStore {
  buttonText: string = 'Apply for card';
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      buttonText: observable,
      setbuttonText:action,
      getButtonText: computed,
    });
    this.rootStore = rootStore;
  }

  get getButtonText() {
    return this.buttonText;
  }

  setbuttonText = (text: string) => {
    this.buttonText = text;
  };
}