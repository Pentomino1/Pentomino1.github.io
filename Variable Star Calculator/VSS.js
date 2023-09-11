// JavaScript Document

function JD() { //Current day to Julian Date
  var date = new Date();
  var unix = date.getTime();

  return (unix)/86400000 + 2440587.5;
}

function JtoD(input) {
  return (input - 2440587.5) * 86400000;
}

// Variable star objects
var Eta_Aquilae = {
	Period:7.17679, //In days
    Epoch:2436084.656  //In Julian Date
};

var Delta_Cephei = {
	Period:5.366266, 
    Epoch:2436075.445
};

var Algol = {
	Period:2.86736, 
    Epoch:2445641.554
};

var Mira = {
	Period:331.96, 
    Epoch:2444839.00
};

var Beta_Lyrae = {
	Period:12.94187, 
    Epoch:2458696.46 
};
// Display the days
function Eta_Aquilae_Display() {
  var Julian = JD();
  var n = Math.floor((Julian - Eta_Aquilae.Epoch)/Eta_Aquilae.Period + 1);//thx sky and telescope
  var next_minimum = n * Eta_Aquilae.Period + Eta_Aquilae.Epoch;
  
  for (var i = 0; i < 1; i++){
    var newUnix = JtoD(next_minimum);
	var date = new Date(newUnix);
	document.getElementById("bzoomer").innerHTML = date;
	console.log(date);
	return date
  }
  
}

function Delta_Cephei_Display() {
  var Julian = JD();
  var n = Math.floor((Julian - Delta_Cephei.Epoch)/Delta_Cephei.Period + 1);
  var next_minimum = n * Delta_Cephei.Period + Delta_Cephei.Epoch;
  
  for (var i = 0; i < 1; i++){
    var newUnix = JtoD(next_minimum);
	var date = new Date(newUnix);
	document.getElementById("bzoomer").innerHTML = date;
	console.log(date);
	return date
  }
  
}

function Algol_Display() {
  var Julian = JD();
  var n = Math.floor((Julian - Algol.Epoch)/Algol.Period + 1);
  var next_minimum = n * Algol.Period + Algol.Epoch;
  
  for (var i = 0; i < 1; i++){
    var newUnix = JtoD(next_minimum);
	var date = new Date(newUnix);
	document.getElementById("bzoomer").innerHTML = date;
	console.log(date);
	return date
  }
}
  
function Mira_Display() {
  var Julian = JD();
  var n = Math.floor((Julian - Mira.Epoch)/Mira.Period + 1);
  var next_minimum = n * Mira.Period + Mira.Epoch;
  
  for (var i = 0; i < 1; i++){
    var newUnix = JtoD(next_minimum);
	var date = new Date(newUnix);
	document.getElementById("bzoomer").innerHTML = date;
	console.log(date);
	return date
  }
  
}
  
function Beta_Lyrae_Display() {
  var Julian = JD();
  var n = Math.floor((Julian - Beta_Lyrae.Epoch)/Beta_Lyrae.Period + 1);
  var next_minimum = n * Beta_Lyrae.Period + Beta_Lyrae.Epoch;
  
  for (var i = 0; i < 1; i++){
    var newUnix = JtoD(next_minimum);
	var date = new Date(newUnix);
	document.getElementById("bzoomer").innerHTML = date;
	console.log(date);
	return date
  }
}

