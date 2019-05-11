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

console.log("Essential: " + countEssential());
loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation"));
loadModule(findModuleIndex("communication"));
console.log(availableModules);
console.log(ship);
resetLARRY();
setMessage();
console.log(radio);
activateBeacon();
console.log((radio.range.high + radio.range.low)/2)