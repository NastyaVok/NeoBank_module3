import { makeObservable, observable, computed, action} from 'mobx';

import { IRootStore } from './RootStore';

export class ApplicationIdStore {
  applicationId: number | undefined = 0;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      applicationId: observable,
      setApplicationId:action,
      getApplicationId: computed,
    });
    this.rootStore = rootStore;
  }

  get getApplicationId() {
    return this.applicationId;
  }

  setApplicationId = (id: number | undefined) => {
    this.applicationId = id;
  };
}