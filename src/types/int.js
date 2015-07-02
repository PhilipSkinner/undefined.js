undef.int = undef.int || function(num, params) {
	this.typeName = 'int';
	return this.initialize(num);	
};

undef.int.prototype.initialize = function(num) {
	this._rawValue = num;
	this._correctValue();	
};

undef.int.prototype.toString = function() {	
	return this._correctedValue;
};

undef.int.prototype.inspect = function() {	
	return this._correctedValue;	
};

undef.int.prototype._toInt = function(num) {
	if (typeof(num) == "number") {
		return Math.round(num);
	}

	if (typeof(num) == "string") {
		return Math.round(parseInt(num));
	}	
}

undef.int.prototype._correctValue = function() {
	this._correctedValue = this._toInt(this._rawValue);	
	this._rawValue = this._correctedValue;
};
		
undef.int.prototype.valueOf = function() {	
	return this._correctedValue;
};

/* standard operators */

undef.int.prototype.add = function(object) {	
	return new undef.int(this + object);		
};

undef.int.prototype.subtract = function(object) {	
	return new undef.int(this - object);		
};

undef.int.prototype.multiply = function(object) {	
	return new undef.int(this *  object);		
};

undef.int.prototype.divide = function(object) {	
	return new undef.int(this / object);		
};

undef.int.prototype.power = function(object) {
	return new undef.int(Math.pow(this, object));
};

undef.int.prototype.modulus = function(object) {
	return new undef.int(this % object);	
};

/* increment and decrement */

undef.int.prototype.inc = function() {
	this._rawValue++;
	this._correctValue();	
};

undef.int.prototype.dec = function() {
	this._rawValue--;
	this._correctValue();
};

/* copy operators */

undef.int.prototype.copyTo = function(object) {
	object = new undef.int(this._rawValue);	
};

undef.int.prototype.copyFrom = function(object) {
	this._rawValue = object;
	this._correctValue();
};

/* assignment operators */

undef.int.prototype.multiplyBy = function(object) {
	this._rawValue *= object;
	this._correctValue();	
};

undef.int.prototype.divideBy = function(object) {
	this._rawValue /= object;
	this._correctValue();
};

undef.int.prototype.increaseBy = function(object) {
	this._rawValue += object;
	this._correctValue();	
};

undef.int.prototype.decreaseBy = function(object) {
	this._rawValue -= object;
	this._correctValue();
};