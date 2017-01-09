var Car = function (name, model) {
	this.name = name;
	this.model = model;
	this.numOfDoors = 4;
  this.numOfWheels = 4;
  this.isSaloon = true;
	if (this.name == undefined) {
	    this.name = 'General';
    };
    if (this.model == undefined) {
    	this.model = 'GM';
    };
};

Car.prototype.drive = function() {
  return 
};


function Porshe(name, model) {
  
  Car.call(this, name, model);
  this.numOfDoors = 2;
}

Porshe.prototype = new Car();
Porshe.prototype.constructor = Porshe;

Porshe.prototype.drive = function(arg) {
  speed = (arg * 50).toString + ' km/h';
};


function Koenigsegg(name, model) {
  Car.call(this, name, model);
  this.model = 'Agera R'
  this.numOfDoors = 2;
  this.isSaloon = true;
}
Koenigsegg.prototype = new Car();
Koenigsegg.prototype.constructor = Koenigsegg;


function MAN(name, model, type) {
   Car.call(this, name, model);
   this.type = type;
   this.numOfWheels = 8;
   this.isSaloon = false;
   this.speed = '0 km/h'
}

MAN.prototype = new Car();
MAN.prototype.constructor = MAN;

MAN.prototype.drive = function(arg) {
  this.speed = (arg * 11).toString + ' km/h';
};

MAN.prototype = new Car();
MAN.prototype.constructor = MAN;

 var porshe = new Car('Porshe', '911 Turbo');
console.log(porshe.speed)


module.exports = Car
module.exports = Porshe
module.exports = Koenigsegg
module.exports = MAN
