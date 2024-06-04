//  1 Define an interface named Vehicle
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
//  2 Implement a class named Car 
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }

  const myCar = new Car("Toyota", "Camry", 2020);

  myCar.start();

  