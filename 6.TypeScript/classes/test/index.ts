import {assert} from 'chai';
import {Car, BaseVehicle, Counter} from '../src';

describe('car tests', () => {
    let carInstance;

    beforeEach(() => {
        carInstance = new Car('x5', 'BMW')
    });

    it('it should have car model name', () => {
        assert.equal(carInstance.modelName, 'x5');
    });

    it('it should have car vendor name', () => {
        assert.equal(carInstance.vendorName, 'BMW');
    });

    it('it should create car with drive interface', () => {
        assert.exists(carInstance.drive);
    });

    it('it should be no fuel in new car', () => {
        assert.equal(carInstance.fuel, 0);
    });

    it('it should be stopped engine in new car', () => {
        assert.equal(carInstance.getEngineStatus(), 'STOP');
    });

    it('it should be full fuel tank after refill', () => {
        carInstance.refuel();
        assert.equal(carInstance.fuel, 40);
    });

    it('it should throw error when engine starts without fuel', () => {
        assert.throws(carInstance.drive);
    });

    it('it should update engine status when it works', () => {
        carInstance.refuel();
        carInstance.drive();
        assert.equal(carInstance.getEngineStatus(), 'WORK');
    });

    it('it should spend fuel when car engine starts', () => {
        carInstance.refuel();
        carInstance.drive();
        assert.equal(carInstance.fuel, 37);
    });

    it('it should spend fuel when car engine works', (done) => {
        carInstance.refuel();
        carInstance.drive();
        setTimeout(() => {
            assert.equal(carInstance.fuel, 36);
            done();
        }, 1000);
    });

    it('it should update engine status when park()', () => {
        carInstance.refuel();
        carInstance.drive();
        carInstance.park();
        assert.equal(carInstance.getEngineStatus(), 'STOP')
    });
});

describe('custom vehicle tests', () => {
    let planeInstance;

    class Plane extends BaseVehicle {
        constructor() {
            super(
                'a380',
                'Airbus',
                300,
                {start: 10, work: 5},
            );
        }

        fly() {
            this.startEngine();
        }

        landing() {
            this.stopEngine();
        }

    }

    beforeEach(() => {
        planeInstance = new Plane()
    });

    it('it should have car model name', () => {
        assert.equal(planeInstance.modelName, 'a380');
    });

    it('it should have car vendor name', () => {
        assert.equal(planeInstance.vendorName, 'Airbus');
    });

    it('it should be no fuel in new plane', () => {
        assert.equal(planeInstance.fuel, 0);
    });

    it('it should be stopped engine in new plane', () => {
        assert.equal(planeInstance.getEngineStatus(), 'STOP');
    });

    it('it should be full fuel tank after refill', () => {
        planeInstance.refuel();
        assert.equal(planeInstance.fuel, 300);
    });

    it('it should throw error when plane engine starts without fuel', () => {
        assert.throws(planeInstance.fly);
    });

    it('it should update plane engine status when it works', () => {
        planeInstance.refuel();
        planeInstance.fly();
        planeInstance.landing();
        assert.equal(planeInstance.getEngineStatus(), 'STOP')
    });

    it('it should spend fuel when plane engine starts', () => {
        planeInstance.refuel();
        planeInstance.fly();
        planeInstance.landing();
        assert.equal(planeInstance.fuel, 290);
    });

    it('it should spend fuel when plane engine works', (done) => {
        planeInstance.refuel();
        planeInstance.fly();
        setTimeout(() => {
            assert.equal(planeInstance.fuel, 285);
            planeInstance.landing();
            done();
        }, 1000);
    });
    it('it should update engine status when park()', () => {
        planeInstance.refuel();
        planeInstance.fly();
        planeInstance.landing();
        assert.equal(planeInstance.getEngineStatus(), 'STOP')
    });
});

describe('Counter tests', () => {
    let counter1: Counter;
    let counter2: Counter;

    beforeEach(() => {
        counter1 = Counter.getInstance();
        counter2 = Counter.getInstance();
    });

    afterEach(() => {
        Counter.destroy();
    });

    it('should increase value of single counter to 2', () => {
        counter1.increase();
        counter1.increase();
        assert.strictEqual(counter1.getState(), 2)
    });

    it('should increase value of multiple counters to 3', () => {
        counter1.increase();
        counter1.increase();
        counter1.increase();
        assert.strictEqual(counter2.getState(), 3)
    });

    it('should decrease value of single counter to -2', () => {
        counter2.decrease();
        counter2.decrease();
        assert.strictEqual(counter1.getState(), -2)
    });

    it('should destroy counter instance', () => {
        counter1.increase();
        Counter.destroy();
        const newCounter = Counter.getInstance();
        assert.strictEqual(newCounter.getState(), 0);
    });
});
