undef.float = undef.float || function(num, params) {
	return this.initialize(num);	
};

undef.float.prototype.initialize = function(num) {
	this._rawValue = num;
	this._correctValue();	
};

undef.float.prototype.toString = function(precision) {
	if (!precision) {
		precision = 6;
	}
		
	return this._correctedValue.toFixed(precision);
};

undef.float.prototype.inspect = function() {	
	return this._correctedValue;	
};

undef.float.prototype._correctValue = function() {
	if (typeof(this._rawValue) == "number") {
		this._correctedValue = this._rawValue;
	}

	if (typeof(this._rawValue) == "string") {
		this._correctedValue = Math.round(Math.parseFloat(this._rawValue));
	}
};
		
undef.float.prototype.valueOf = function(precision) {	
	return this._correctedValue;
};