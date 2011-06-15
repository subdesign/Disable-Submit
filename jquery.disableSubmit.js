/*
 * disableSubmit - jQuery Plugin
 *
 * Copyright (c) 2011 - Barna Szalai
 *
 * Version: 1.0 (16/05/2011)
 * Requires: jQuery v1.4+
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

$.fn.disableSubmit = function(options) {
	
	var defaults = {
		submitBtn : ".submit",
		inputFields : ".username, .password"	
	}
	
	var options = $.extend(defaults, options);
	
	return this.each(function() {
		var o = options;
		var obj = $(this);
		
		obj.find(o.submitBtn).attr('disabled', true);
		
		var splitted = o.inputFields.split(", ");
		
		$(o.inputFields).bind("change keyup", function() {
			
			for(var i in splitted) {
				if($(splitted[i]).val() != "") {
					obj.find(o.submitBtn).removeAttr("disabled");		
				};
			for(var j in splitted) {
				if($(splitted[j]).val() == "") {
					obj.find(o.submitBtn).attr("disabled", true);			
				};
			}
		}
	});
  });
};
