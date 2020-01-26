export class Trip {
  startLocationName: string;
  arrivalLocationName: string;
  startTime: Date;
  arrivalTime: Date;
  startTerminal: string;
  arrivalTerminal: string;
  busType: string;
}

export class CreateTripDto {
  startStation: string;
  endStation: string;
  capacity: number;
  time: Date;
}

export class TripInfo {
  capacities: number[];
  stations: string[];
}
