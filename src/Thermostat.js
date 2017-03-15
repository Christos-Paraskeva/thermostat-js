function Thermostat() {
  this.DEFAULT = 20
  this.currentTemp = this.DEFAULT
  this.energySaving = true
};

Thermostat.prototype.increaseTemp = function () {
  if (this.energySaving === true && this.currentTemp < 25) {
    this.currentTemp++;
  }
  else if (this.energySaving === false && this.currentTemp < 32) {
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

Thermostat.prototype.energyUsage = function () {
  if(this.currentTemp < 18) return "Low";
  if(this.currentTemp < 25) return "Medium";
  if(this.currentTemp > 25) return "High";

};
