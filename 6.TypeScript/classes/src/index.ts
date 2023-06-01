enum VehicleStatus {
  STOP = 'STOP',
  WORK = 'WORK',
}

interface FuelConsumptionInterface {
  start: number,
  work: number,
}

interface BaseVehicleInterface {
  modelName: string;
  vendorName: string;
  fuelConsumption: FuelConsumptionInterface;
  fuel: number;
  tankCapacity: number;
  status: VehicleStatus;
  startEngine(): void;
  stopEngine(): void;
  getEngineStatus(): VehicleStatus;
  refuel(): void;
}

interface CarInterface {
  drive(): void;
  park(): void;
}

class BaseVehicle implements BaseVehicleInterface {
  modelName: string;
  vendorName: string;
  tankCapacity: number;
  fuelConsumption: FuelConsumptionInterface;
  fuel: number;
  status: VehicleStatus;
  workInterval: NodeJS.Timeout | undefined;

  constructor(
    modelName: string, 
    vendorName: string, 
    tankCapacity: number, 
    fuelConsumption: FuelConsumptionInterface
    ) {
    this.modelName = modelName;
    this.vendorName = vendorName;
    this.tankCapacity = tankCapacity;
    this.fuelConsumption = fuelConsumption;
    this.fuel = 0;
    this.status = VehicleStatus.STOP;
  }

  startEngine() {
    if (this.status === VehicleStatus.STOP && this.fuel > this.fuelConsumption.start) {
      this.status = VehicleStatus.WORK;
      this.fuel -= this.fuelConsumption.start;
      this.workInterval = setInterval(() => {
        if (this.status === VehicleStatus.WORK && this.fuel >= this.fuelConsumption.work) {
          this.fuel -= this.fuelConsumption.work;
          if (this.fuel < this.fuelConsumption.work) {
            this.stopEngine();
          }
        }
      }, 1000);
    } else {
      this.refuel();
    }
  }

  stopEngine() {
    this.status = VehicleStatus.STOP;
    if (this.workInterval) {
        clearInterval(this.workInterval);
      }
  }

  getEngineStatus(): VehicleStatus {
    return this.status
  }

  refuel() {
    this.fuel = this.tankCapacity;
  }

}

class Car extends BaseVehicle implements CarInterface {
  constructor(
    modelName: string, 
    vendorName: string, 
    tankCapacity: number = 40, 
    fuelConsumption: FuelConsumptionInterface = { start: 3, work: 1 }
    ) {
    super(modelName, vendorName, tankCapacity, fuelConsumption);
  }

  drive() {
    this.startEngine()
  }

  park() {
    this.stopEngine();
  }
}


/*
* Task 2: Counter singleton
*/
class Counter {
  private static instance: Counter;
  private count: number;

  private constructor () {
    this.count = 0;
  };
  
  static getInstance(){
    if (!Counter.instance) {
      Counter.instance = new Counter();
    };
    return Counter.instance;
  };
  static destroy() {
    Counter.instance = null;
  };
  increase() {
    this.count++;
  };
  decrease() {
    this.count--;
  };
  getState() {
    return this.count;
  };
}

export {BaseVehicle, Car, Counter};
