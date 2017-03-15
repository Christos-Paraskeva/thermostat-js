describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function (){
    expect(thermostat.DEFAULT).toEqual(20)
  });

  it('has a current temperature of 20 degrees when started up', function (){
    expect(thermostat.currentTemp).toEqual(20)
  });

  it('can increase the temperature', function(){
    thermostat.increaseTemp();
    expect(thermostat.currentTemp).toEqual(thermostat.DEFAULT + 1);
  });

  it('can decrease the temperature', function(){
    thermostat.decreaseTemp();
    expect(thermostat.currentTemp).toEqual(thermostat.DEFAULT - 1);
  });

  it('cannot decrease the temperature below 10', function(){
    for(var i = 0; i <12;i++)
    {
      thermostat.decreaseTemp();
    }
    expect(thermostat.currentTemp).toEqual(10);
  });


});
