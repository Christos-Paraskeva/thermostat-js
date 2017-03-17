    $( document ).ready(function() {
      thermostat = new Thermostat;

    $('.currentTemp').html(thermostat.currentTemp);

    // $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    //   $('#currentTempOutside').html(data.main.temp);
    // })

    $('#City').change(function() {
      var city = $('#City').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#currentTempOutside').html(data.main.temp);
    });
  });

    var usage = thermostat.energyUsage();

    $( 'button#up' ).click(function( event ) {
      var usage = thermostat.energyUsage();
      console.log(usage);
      if (usage === "Low") {
        $('.usage').css("background-color", "green");
      }
      else if (usage === "Medium") {
        $('.usage').css("background-color", "blue");
      }
      else {
        $('.usage').css("background-color", "red");
      };
      thermostat.increaseTemp();
        $('.currentTemp').html(thermostat.currentTemp);
      if (thermostat.currentTemp < 25 && thermostat.energySaving === true){
        $('.bar').css("height", "-=6");
      }
      else if (thermostat.currentTemp < 32 && thermostat.energySaving === false){
        $('.bar').css("height", "-=6");
      }
    });

    $( 'button#down' ).click(function( event ) {
      var usage = thermostat.energyUsage();
      console.log(usage);
      if (usage === "Low") {
        $('.usage').css("background-color", "green");
      }
      else if (usage === "Medium") {
        $('.usage').css("background-color", "blue");
      }
      else {
        $('.usage').css("background-color", "red");
      };
      thermostat.decreaseTemp();
      $('.currentTemp').html(thermostat.currentTemp);
      if (thermostat.currentTemp > 10){
        $('.bar').css("height", "+=6");
      }
    });

    $( 'button#reset' ).click(function( event ) {
      thermostat.resetTemp();
      $('.usage').css("background-color", "blue");
      $('.currentTemp').html(thermostat.currentTemp);
      thermostat.energySaving = true;
      $("button#psm").css("background-color", "green");
      $('.bar').css("height", "120px");
    });

    $( 'button#psm' ).click(function( event ) {
      thermostat.toggleEnergySaving();
      if (thermostat.energySaving === true) {
        $("button#psm").css("background-color", "green");
      }
      else if (thermostat.energySaving === false) {
        $("button#psm").css("background-color", "red");
      };
    });
  });
