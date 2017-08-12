import uuid from 'uuid/v4';

export default class Car {

    constructor(make, engineSize, numberOfDoors) {
        this.id = uuid();
        this.make = make;
        this.engineSize = engineSize;
        this.numberOfDoors = numberOfDoors;
    }

    static isValid(car) {
        return car &&
            car.make &&
            car.engineSize &&
            car.numberOfDoors;
    }

    static getAll(start = null, limit = null) {
        const startAt = start || 0;
        const limitTo = limit || carsRepo.length;
        return carsRepo.slice(startAt, limitTo);
    }

    static getOne(id) {
        if (!id) {
            return null;
        }
        for (let i = 0; i < carsRepo.length; i++) {
            if (carsRepo[i].id === id) {
                return carsRepo[i];
            }
        }
        return null;
    }

    static create(car) {
        if (!Car.isValid(car)) {
            return null;
        }
        const carToCreate = new Car(car.make, car.engineSize, car.numberOfDoors);
        carsRepo.push(carToCreate);
        return carToCreate;
    }

    static update(id, car) {
        if (!Car.isValid(car)) {
            return null;
        }
        const carToUpdate = Car.getOne(id);
        if (!carToUpdate) {
            return null;
        }
        const updateIndex = carsRepo.indexOf(carToUpdate);
        if (updateIndex < 0 || updateIndex >= carsRepo.length) {
            return null;
        }
        carsRepo[updateIndex] = car;
        return carsRepo[updateIndex];
    }

    static delete(id) {
        const carToDelete = Car.getOne(id);
        if (!carToDelete) {
            return false;
        }
        const deleteIndex = carsRepo.indexOf(carToDelete);
        if (deleteIndex < 0 || deleteIndex >= carsRepo.length) {
            return false;
        }
        carsRepo.splice(deleteIndex, 1);
        return true;
    }

}

const carsRepo = [
    new Car('BMW', 2.2, 3),
    new Car('Audi', 1.6, 5),
    new Car('Mercedes', 2.6, 3),
    new Car('Range Rover', 5.0, 5),
];
