"use strict";
$.fn.readmore = function( options ) {
        
		var settings = $.extend
        (
            {
                div: this,
                hideText: "Read Less...",
                readText: "Read More...",
                isTextShown: false,
                effect: true,
                effectOption: "fast",
                buttonClasses: "btn-primary opacity-rollover",
                dataid: "read-more-action",
                multiple: false
            },
            options
        );
    
        var bIsTextShown = settings.isTextShown;
		
        if(settings.multiple === true)
        {
            $(settings.div).each(function(){
                var isTextShown = settings.isTextShown;   
                if(bIsTextShown === false){
                    showReadMore(this, settings);
                }
                else{
                    hideReadMore(this, settings)
                }
                bindShowText(this, settings, isTextShown);
            });
        }
        else
        {
            if(bIsTextShown === false){
                showReadMore(settings.div, settings);
            }
            else{
                hideReadMore(settings.div, settings)
            }
            bindShowText(settings.div, settings, settings.isTextShown);
        }
    
        //Functions
        function showReadMore(el, settings)
        {
            $(el).hide();
			$(el).parent().append(
                "<button data-id='"+settings.dataid+"' class='" + settings.buttonClasses +"'>"+ settings.readText + "</button>"
            );	
        }
    
        function hideReadMore(el, settings)
        {
            $(el).parent().append(
                "<button data-id='" + settings.dataid + "' class='" + settings.buttonClasses + "'>" + settings.hideText + "</button>"
            );	
        }

        function bindShowText(el, oSettings, bIsTextShown)
        {
            $(el).parent().find("[data-id='"+oSettings.dataid+"']").bind("click.readmore", function () 
            {
                if(bIsTextShown === false)
                {
                    $(el).parent().find("[data-id='"+oSettings.dataid+"']").text(oSettings.hideText);

                    if(oSettings.effect === true){
                        $(el).fadeIn(oSettings.effectOption);
                    }
                    else{
                        $(el).show();
                    }

                    bIsTextShown = true;		
                }
                else
                {
                    $(el).parent().find("[data-id='"+oSettings.dataid+"']").text(oSettings.readText);

                    if(oSettings.effect === true){
                        $(el).hide();
                    }else{
                        $(el).fadeOut(oSettings.effectOption);
                    }

                    bIsTextShown = false;
                }
            });
        };		
};