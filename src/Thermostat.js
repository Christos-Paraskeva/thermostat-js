function Thermostat() {
  this.DEFAULT = 20
  this.currentTemp = this.DEFAULT
};

Thermostat.prototype.increaseTemp = function () {
  this.currentTemp++;
};

Thermostat.prototype.decreaseTemp = function () {
  if(this.currentTemp >= 11){
     this.currentTemp--;
  }
  else{
    // throw/alert user
  }
};
