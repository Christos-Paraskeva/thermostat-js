describe('Thermostat', function(){
  var thermostat = new Thermostat();
  it('has a default temperature of 20 degrees', function (){
    expect(thermostat.DEFAULT).toEqual(20)
  });

  it('has a current temperature of 20 degrees when started up', function (){
    expect(thermostat.currentTemp).toEqual(20)
  });
});
