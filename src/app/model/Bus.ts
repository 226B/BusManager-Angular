import {BusType} from './BusType';

export class Bus {
  constructor() {
    this.type = new BusType();
  }

  name: string;
  type: BusType;
}
