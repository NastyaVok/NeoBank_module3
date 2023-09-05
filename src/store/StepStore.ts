import { makeObservable, observable, computed, action} from 'mobx';

import { IRootStore } from './RootStore';

export class StepStore {
  stepStore: boolean = false;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      stepStore: observable,
      setStepStore: action,
      getStepStore: computed,
    });
    this.rootStore = rootStore;
  }

  get getStepStore() {
    return this.stepStore;
  }

  setStepStore = (step: boolean) => {
    this.stepStore = step;
  };
}