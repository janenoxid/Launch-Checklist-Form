// Write your JavaScript code here!


window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const missionDiv = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
         let random = Math.floor(Math.random()*6);
         missionDiv.innerHTML = `
            <ol>
               <li>Name: ${json[random].name}</li>
               <li>Diameter ${json[random].diameter}</li>
               <li>Star: ${json[random].star}</li>
               <li>Distance from Earth: ${json[random].distance}</li>
               <li>Number of Moons: ${json[random].moons}</li>
            </ol>
            <img src="${json[random].image}">
         `;
      });
   });
   

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {

      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      let letters = /^[a-zA-Z]+$/;
      let numbers = /^[0-9]+$/;

      if (pilotName.value === "" || copilotName.value === "" 
         || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      // Enter conditionals here for validating that names are valid names
      // enter conditional here for validation that fuel level and cargo mass are valid numbers

    
      if (!letters.test(pilotName.value)){ // wasn't working because i didn't add ".value"
         alert("Please enter a valid name for the Pilot");
         event.preventDefault();
      }
      if (!letters.test(copilotName.value)){ // wasn't working because i didn't add ".value"
         alert("Please enter a valid name for the Co-Pilot");
         event.preventDefault();
      }
      if(!numbers.test(fuelLevel.value)){ // wasn't working because i didn't add ".value"
         alert("Please enter a number for the fuel level");
         event.preventDefault();
      }
      if(!numbers.test(cargoMass.value)){ // wasn't working because i didn't add ".value"
         alert("Please enter a number for the cargo mass");
         event.preventDefault();
   }


// OKAY I guess this is where I'll update the faultyItems div
      let faultyDiv = document.getElementById("faultyItems")
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus")
      let launchStatus = document.getElementById("launchStatus")

      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;

      function notReady(){
         faultyDiv.style.visibility = "visible";
         launchStatus.innerText = "Shuttle not ready for launch";
         launchStatus.style.color = "red";

      }

      if (fuelLevel.value < 10000){
         fuelStatus.innerText = "Fuel level is too low for launch";
         notReady();
      }

      if (cargoMass.value > 10000){
         cargoStatus.innerText = "Cargo mass is too high for launch";
         notReady();
      }
      
      if(cargoMass.value <= 10000 && fuelLevel.value >= 10000){
         launchStatus.innerText = "Shuttle ready for launch";
         launchStatus.style.color = "green";
         fuelStatus.innerText = "Fuel level is high enough for launch";
         cargoStatus.innerText = "Cargo mass is low enough for launch";
      }

      event.preventDefault();
   });
});




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json.name}</li>
   <li>Diameter ${json.diameter}</li>
   <li>Star: ${json.star}</li>
   <li>Distance from Earth: ${json.distance}</li>
   <li>Number of Moons: ${json.moons}</li>
</ol>
<img src="${json.image}">
*/
