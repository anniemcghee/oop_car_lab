function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.passengers = passengers || [];
  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
}

// *  `Car.sell()`, We should able to sell a car to someone, which should update the `owner` 
// and `previous_owners` array. This takes 1 string parameter for the new owner's name. 
// New owners should be `pushed` to the end of the array.

// // * `Car.paint()`, which should take a new color (string) and update the color of 
// the car to the new color.

Car.prototype.sell = function(newOwner){
	this.previousOwners.push(this.owner)
	this.owner=newOwner
	return this.owner
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
	return(newColor)
};

Car.prototype.start = function(){
	this.running = true;
};

Car.prototype.off = function(){
	this.running = false;
};

Car.prototype.driveTo = function(destination) {
	if (this.running === true) {
		console.log('driving to <destination>')
		return true;
	}
	else {
		return false;
	}
};

Car.prototype.park = function () {
	if (this.running === false) {
		console.log('parked!!')
		return true;
	}
	else {
		return false;

	}
}

Car.prototype.pickUp = function(name) {
	if (this.running === false || (this.passengers.length+1) >= this.seats) {
		return false
	}
	else {
		console.log("driving to 'pick up <friend>'");
		this.passengers.push(name);
		return true;
	}

}

Car.prototype.dropOff = function(name) {
	var getName = this.passengers.indexOf(name);
	if (this.running === false || getName === -1) {
		return false;
	}
	else {
		console.log("driving to drop off <friend>");
		this.passengers.splice(name, 1);
		return true;
	}
}

Car.prototype.passengerCount = function() {
	var newNum = this.passengers.length;
	return newNum;
}

// * `Car.passengerCount()` should return the number (integer) of passengers currently in the car.

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;