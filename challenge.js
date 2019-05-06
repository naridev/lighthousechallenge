var ship = {
    powerOn: false,
    modules: [],
    antenna: {
      active: false
    }
  };
  
  const availableModules = [
    { name: "life-support", size: 10, enabled : false, essential: true },
    { name: "Module 2",     size: 20, enabled : true , essential: false},
    { name: "propulsion",   size: 30, enabled : false, essential: true },
    { name: "Module 4",     size: 40, enabled : true , essential: false},
    { name: "Module 5",     size: 50, enabled : false, essential: true },
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

console.log("Essential: " + countEssential());
loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));
console.log(availableModules);
console.log(ship);