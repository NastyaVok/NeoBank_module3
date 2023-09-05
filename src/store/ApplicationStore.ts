import { makeObservable, observable, computed, action, runInAction} from 'mobx';
import axios from 'axios';

import { IApplication } from '../types/interface';

import { IRootStore } from './RootStore';

export class ApplicationStore {
  applicationArray: IApplication[] = [];
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      applicationArray: observable,
      fetchApplicationArray: action,
      getApplicationArray: computed,
    });
    this.rootStore = rootStore;
  }

  get getApplicationArray() {
    return this.applicationArray;
  }

  async fetchApplicationArray(url:string, data:{}, options:{} = '') {
    try { 
      const res = await axios.post(url, data, options);
      runInAction(() => {
        this.applicationArray = res?.data;
      });
    } catch (err) {
      if (err instanceof Error) {
        console.log('Could not fetch.', err.message);
        return false;
      }
    }
  }
};
