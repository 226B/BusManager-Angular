export class Bus {
  constructor() {
    this.type = new BusType();
  }

  name: string;
  type: BusType;
}

export class BusType {
  constructor() {
    this.name = '';
    this.capacity = null;
    this.recoveryTime = null;
    this.maxRange = null;
    this.distancePerH = null;
  }

  name: string;
  capacity: number;
  recoveryTime: number;
  maxRange: number;
  distancePerH: number;
}
