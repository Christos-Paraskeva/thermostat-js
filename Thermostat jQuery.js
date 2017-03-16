    $( document ).ready(function() {
      thermostat = new Thermostat;

    $('.currentTemp').html(thermostat.currentTemp);

    $( 'button#up' ).click(function( event ) {
      thermostat.increaseTemp();
      $('.currentTemp').html(thermostat.currentTemp);
      $('.thermometer:before').css("height", "60%");
    });

    $( 'button#down' ).click(function( event ) {
      thermostat.decreaseTemp();
      $('.currentTemp').html(thermostat.currentTemp);
    });

    $( 'button#reset' ).click(function( event ) {
      thermostat.resetTemp();
      $('.currentTemp').html(thermostat.currentTemp);
      thermostat.energySaving = true;
      $(".psm").css("background-color", "green");
    });

    $( 'button#psm' ).click(function( event ) {
      thermostat.toggleEnergySaving();
      if (thermostat.energySaving === true) {
        $(".psm").css("background-color", "green");
      }
      else if (thermostat.energySaving === false) {
        $(".psm").css("background-color", "red");
      };
    });
  });
