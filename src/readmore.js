$(function(){
	$.fn.readmore = function( options ) {
		 
		var settings = $.extend({
			div: this,
			hideText: "Read Less...",
			readText: "Read More...",
			isTextShown: false,
			effect: true,
			effectOption: "fast",
			buttonClasses: "btn-primary opacity-rollover",
			id: "read-more-action"
		},options);
		
		if(settings.isTextShown === false){
			$(settings.div).hide();
			$(settings.div).parent().append("<button id='"+settings.id+"' class='"+ settings.buttonClasses +"'>"+ settings.readText + "</button>");	
		}else{
			$(settings.div).parent().append("<button id='"+settings.id+"' class='"+ settings.buttonClasses +"'>"+ settings.hideText + "</button>");	
		}
			
		$(settings.div).parent().find("#" + settings.id).bind("click.readmore", function () {
			if(settings.isTextShown === false){
				$(settings.div).parent().find("#" + settings.id).text(settings.hideText);
				if(settings.effect === true){
					$(settings.div).fadeIn(settings.effectOption);
				}else{
					$(settings.div).show();
				}
				settings.isTextShown = true;		
			}else{
				$(settings.div).parent().find("#" + settings.id).text(settings.readText);
				if(settings.effect === true){
					$(settings.div).hide();
				}else{
					$(settings.div).fadeOut(settings.effectOption);
				}
				settings.isTextShown = false;
			}
		});
		
	};
});