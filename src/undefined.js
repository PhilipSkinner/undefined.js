var undef = undef || {
	clone : function(obj) {		
	    var copy = {};
    	for (var attr in obj) {
			console.log(attr);
            if (obj.hasOwnProperty(attr)) copy[attr] = undef.clone(obj[attr]);
	    }
        return copy;
	},
	
	variableRegistry : {},
	
	registerVariable: function(variable) {
		undef.variableRegistry[variable.name] = variable;
	},
};

