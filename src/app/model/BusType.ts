export class BusType {
  constructor(name: string, capacity: number, recoveryTime: number, maxRange: number, distancePer100: number) {
    this.name = name;
    this.capacity = capacity;
    this.recoveryTime = recoveryTime;
    this.maxRange = maxRange;
    this.distancePer100 = distancePer100;
  }
  name: string;
  capacity: number;
  recoveryTime: number;
  maxRange: number;
  distancePer100: number;
}
