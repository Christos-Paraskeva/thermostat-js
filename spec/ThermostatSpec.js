describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

describe('Upon Instantiating', function() {
  it('has a default temperature of 20 degrees', function (){
    expect(thermostat.DEFAULT).toEqual(20)
  });

  it('has a current temperature of 20 degrees when started up', function (){
    expect(thermostat.currentTemp).toEqual(20)
  });
});

describe('Temperature Control', function() {
  it('can increase the temperature', function(){
    thermostat.increaseTemp();
    expect(thermostat.currentTemp).toEqual(thermostat.DEFAULT + 1);
  });

  it('can decrease the temperature', function(){
    thermostat.decreaseTemp();
    expect(thermostat.currentTemp).toEqual(thermostat.DEFAULT - 1);
  });

  it('cannot decrease the temperature below 10', function (){
    for(var i = 0; i <12; i++)
    {
      thermostat.decreaseTemp();
    }
    expect(thermostat.currentTemp).toEqual(10);
  });

// test to alert if try to go below 10 degrees

  it('can reset the thermostat to the default temperature', function (){
    thermostat.increaseTemp();
    thermostat.resetTemp();
    expect(thermostat.currentTemp).toEqual(thermostat.DEFAULT)
  });
});

describe('Power Saving Tests', function () {
  it('is on power saving mode by default', function (){
    expect(thermostat.energySaving).toBe(true)
  });

  it('cannot increase temperature above 25 if powerSaving is true', function(){
    for(var i = 0; i <7; i++)
    {
      thermostat.increaseTemp();
    }
    expect(thermostat.currentTemp).toEqual(25)
  });

  it('cannot increase temperature above 32 if powerSaving is false', function(){
    thermostat.energySaving = false;
    for(var i = 0; i <15; i++)
    {
      thermostat.increaseTemp();
    }
    expect(thermostat.currentTemp).toEqual(32)
  });

  it("allows you to toggle energySaving off and on", function (){
    thermostat.toggleEnergySaving();
    expect(thermostat.energySaving).toBe(false)
  });
});

describe('Energy Usage', function () {

  it("returns 'Low' if temperature is below 18", function(){
    thermostat.currentTemp = 17;
    expect(thermostat.energyUsage()).toEqual("Low");
  });

  it("returns 'Medium' if temperature is below 25", function(){
    thermostat.currentTemp = 24;
    expect(thermostat.energyUsage()).toEqual("Medium");
  });

  it("returns 'High' if temperature is above 25", function(){
    thermostat.currentTemp = 26;
    expect(thermostat.energyUsage()).toEqual("High");
  });
});
});
