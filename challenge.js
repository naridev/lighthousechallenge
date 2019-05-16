/*Global Objects*/
var ship = {
    powerOn: false,
    modules: [],
    antenna: {
      active: false
    }
  };

  var LARRY = {
      quack() {
      console.log("quack");
      }
    }

  var navigation = {
    x: -2,
    y: 4,
    z: 7,
    speed: "raaaaid"
  };

  var radio = {
    range: {
      low: 88,
      high: 108,
    },
    frequency: 0,
    message: "Bugs are cool.",
    beacon: false
  };
  
  const availableModules = [
    { name: "life-support", size: 10, enabled : false, essential: true },
    { name: "Module 2",     size: 20, enabled : true , essential: false},
    { name: "propulsion",   size: 30, enabled : false, essential: true },
    { name: "communication", size: 40, enabled : true , essential: true},
    { name: "navigation",     size: 50, enabled : false, essential: true },
  ];

/*Functions*/

function powerOn() {
  ship.powerOn= true;
}

function countModules() {
  return availableModules.length;
}

function countEssential() {
  var count = 0;
  for (var i =0; i< availableModules.length; i++){
    if (availableModules[i].essential === true){
      count++;
    }
  }
  return count;
}

function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

function findModuleIndex(given){
  for (var i =0; i< availableModules.length; i++){
    if (availableModules[i].name === given && availableModules[i].essential){
        return i;
    }
  }
}

function resetLARRY(){
  for (var i = 0; i<10; i++){
    LARRY.quack();
  }
}

function setMessage() {
  radio.message = JSON.stringify(navigation);
}

function activateBeacon() {
  radio.beacon = true;
}

function setFrequency() {
  radio.frequency = (radio.range.low + radio.range.high)/2
}

function initialize() {
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

function calibrateX() {
  for (var i = 0; i<12; i++){
    var signal = checkSignal();
    if (signal) {
      navigation.x = signal;
    }
  }
}

function calibrateY() {
  for (var i = 0; i<60; i++){
    var signal = checkSignal();
    if (signal) {
      navigation.y = signal;
      break;
    }
  }
}

function calibrateZ() {
  for (var i = 0; i<60; i++){
    var signal = checkSignal();
    if (signal) {
      navigation.z = signal;
      break;
    }
  }
}

function calibrate() {
  calibrateX();
  calibrateY();
  calibrateZ();
}


function checkSignal() {
  return 2;
}

/*Function calls*/

//challenge 3
console.log("Essential: " + countEssential());

//challenge 4
loadModule(findModuleIndex("life-support"));

//challenge 5
loadModule(findModuleIndex("propulsion"));

//challenge 6
loadModule(findModuleIndex("navigation"));

//challenge 7
resetLARRY();

//challenge 8
loadModule(findModuleIndex("communication"));

//challenge 9
setMessage();

//challenge 10
activateBeacon();

//challenge 11
setFrequency();

//challenge 12
initialize();

//challenge 13,14,15
calibrate();

console.log("Available Modules: ");
console.log(availableModules);
console.log("Ship: ");
console.log(ship);
console.log("Radio: ");
console.log(radio);
console.log("Navigation: ");
console.log(navigation);
