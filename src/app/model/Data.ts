import {Bus} from './Bus';

export class Data {
  static buses: Bus[];

  static getBuses() {
    return this.buses;
  }

  static setBuses(buses: Bus[]): void {
    this.buses = buses;
  }
}
