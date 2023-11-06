// 1. call
const car = {
  name: 'car',
  start() {
    console.log('Start the ' + this.name);
  },
  speedUp() {
    console.log('Speed up the ' + this.name);
  },
  stop() {
    console.log('Stop the ' + this.name);
  },
};

const aircraft = {
  name: 'aircraft',
  fly() {
    console.log('Fly');
  },
};

console.log(car.start.call(aircraft));
console.log(car.speedUp.call(aircraft));
console.log(aircraft.fly());



// 2. apply method

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr,numbers)
console.log(arr);

// 3. apply method

const computer = {
  name: 'MacBook',
  isOn: false,
  turnOn() {
      this.isOn = true;
      return `The ${this.name} is On`;
  },
  turnOff() {
      this.isOn = false;
      return `The ${this.name} is Off`;
  }
};

const server = {
  name: 'Dell PowerEdge T30',
  isOn: false
};
console.log(computer.turnOn.apply(server));

// 4. bind method

let runner = {
  name: 'Runner',
  run: function(speed) {
      console.log(this.name + ' runs at ' + speed + ' mph.');
  }
};

let flyer = {
  name: 'Flyer',
  fly: function(speed) {
      console.log(this.name + ' flies at ' + speed + ' mph.');
  }
};

let ans=(runner.run.bind(flyer,21));
console.log(ans());