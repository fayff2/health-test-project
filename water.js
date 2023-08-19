function calculateWater() {
    let weight = document.getElementById("weight").value;
    let  activity = document.getElementById("exercise").value;
  
     let rrequiredWaterLeter = (weight * 0.033 ) + (activity/30);
     let rrequiredWaterLeter2 = rrequiredWaterLeter.toFixed(2)
      var waterBottles = rrequiredWaterLeter * 4.2;
      var waterBottles2 = waterBottles.toFixed();
      if (isNaN(weight)) {
        alert("Please enter only numeric values.");
      }
      else if (weight === "") {
        alert("Please enter your weight.");
      } else if (activity === "") {
          alert("Please enter your exercise time. If you have not been active, please enter 0.");
        }
  
      else {
        document.getElementById("required_water").innerHTML= rrequiredWaterLeter2 + " لتر يوميا " +  " أي مايعادل "  +  waterBottles2 + " كوب";
       
      }
    }
    function resetForm() {
        document.getElementById("personal_info").reset();
    }
    