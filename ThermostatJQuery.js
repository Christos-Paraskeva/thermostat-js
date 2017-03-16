    $( document ).ready(function() {
      thermostat = new Thermostat;

    $('.currentTemp').html(thermostat.currentTemp);

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
      $('.thermometer:before').css("height", '40%');
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
