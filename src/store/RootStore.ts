import { ApplicationStore } from './ApplicationStore';

export interface IRootStore {
    applicationArray: ApplicationStore;
};

export class RootStore implements IRootStore {
  applicationArray: ApplicationStore;

  constructor() {
    this.applicationArray = new ApplicationStore(this);
  }
}
