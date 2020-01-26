export class Bus {
  name: string;
  type: BusType;
  station: string;

  constructor() {
    this.type = new BusType();
  }
}

export class BusType {
  name: string;
  capacity: number;
  recoveryTime: number;
  maxRange: number;
  distancePerH: number;

  constructor() {
    this.name = '';
    this.capacity = null;
    this.recoveryTime = null;
    this.maxRange = null;
    this.distancePerH = null;
  }
}

export class Stations {
  stations: string[];
}
