jQuery(window).load(function(){jQuery(".fullwidth-faded").fusionScroller({type:"fading_blur"})}),jQuery(document).ready(function(a){Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")&&jQuery(".fullwidth-faded").each(function(){var a=jQuery(this).css("background-image");jQuery(this).parent().css("background-image",a),jQuery(this).remove()})});