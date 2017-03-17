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
      $('.bar').css("height", "+=20");
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
    });

    $( 'button#reset' ).click(function( event ) {
      thermostat.resetTemp();
      $('.usage').css("background-color", "blue");
      $('.currentTemp').html(thermostat.currentTemp);
      thermostat.energySaving = true;
      $("button#psm").css("background-color", "green");
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
