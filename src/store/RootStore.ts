import { ApplicationStore } from './ApplicationStore';
import { ButtonStore } from './ButtonStore';
import { StepStore } from './StepStore';
import { PaymentStore } from './PaymentStore';
import { ApplicationIdStore } from './ApplicationIdStore';
import { SesCodeStore } from './SesCodeStore';

export interface IRootStore {
  applicationArray: ApplicationStore;
  buttonText: ButtonStore;
  stepStore: StepStore;
  paymentArray: PaymentStore;
  applicationId: ApplicationIdStore;
  sesCode: SesCodeStore;
};

export class RootStore implements IRootStore {
  applicationArray: ApplicationStore;
  buttonText: ButtonStore;
  stepStore: StepStore;
  paymentArray: PaymentStore;
  applicationId: ApplicationIdStore;
  sesCode: SesCodeStore;

  constructor() {
    this.applicationArray = new ApplicationStore(this);
    this.buttonText = new ButtonStore(this);
    this.stepStore = new StepStore(this);
    this.paymentArray = new PaymentStore(this);
    this.applicationId = new ApplicationIdStore(this);
    this.sesCode = new SesCodeStore(this);
  }
}
