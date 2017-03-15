function Thermostat() {
  this.DEFAULT = 20
  this.currentTemp = this.DEFAULT
  this.powerSaving = true
};

Thermostat.prototype.increaseTemp = function () {
  if (this.powerSaving === true && this.currentTemp < 25) {
    this.currentTemp++;
  }
  else if (this.powerSaving === false && this.currentTemp < 32) {
    this.currentTemp++;
  }
};

Thermostat.prototype.decreaseTemp = function () {
  if(this.currentTemp >= 11){
     this.currentTemp--;
  }
  else{
    // throw/alert user
  }
};

Thermostat.prototype.resetTemp = function () {
  this.currentTemp = this.DEFAULT
};
