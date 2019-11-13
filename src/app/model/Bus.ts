import {BusType} from './BusType';

export class Bus {
  constructor(name: string, type: BusType) {
    this.name = name;
    this.type = type;
  }

  name: string;
  type: BusType;
}
