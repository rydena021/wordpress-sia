function insertParam(a,b,c,d){var e,f,g,h,i,j,k,l;if(0<a.indexOf("#")?(e=a.indexOf("#"),f=a.substring(a.indexOf("#"),a.length)):(f="",e=a.length),g=a.substring(0,e),h=g.split("?"),i="",1<h.length)for(j=h[1].split("&"),k=0;k<j.length;k++)l=j[k].split("="),l[0]!=b&&(""===i?i="?"+l[0]+"="+(l[1]?l[1]:""):(i+="&",i+=l[0]+"="+(l[1]?l[1]:"")));return""===i&&(i="?"),d?i="?"+b+"="+c+(i.length>1?"&"+i.substring(1):""):(""!==i&&"?"!=i&&(i+="&"),i+=b+"="+(c||"")),h[0]+i+f}function registerYoutubePlayers(){Number(fusionVideoGeneralVars.status_yt)&&!0===window.yt_vid_exists&&(window.$youtube_players=[],jQuery(".tfs-slider").each(function(){var a=jQuery(this);a.find("[data-youtube-video-id]").find("iframe").each(function(){var b=jQuery(this);window.YTReady(function(){window.$youtube_players[b.attr("id")]=new YT.Player(b.attr("id"),{events:{onReady:onPlayerReady(b.parents("li")),onStateChange:onPlayerStateChange(b.attr("id"),a)}})})})}))}function loadYoutubeIframeAPI(){var a,b;Number(fusionVideoGeneralVars.status_yt)&&!0===window.yt_vid_exists&&(a=document.createElement("script"),a.src="https://www.youtube.com/iframe_api",b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b))}function onYouTubePlayerAPIReady(){window.YTReady(!0)}function onPlayerStateChange(a,b){return function(a){a.data==YT.PlayerState.PLAYING&&jQuery(b).flexslider("pause"),a.data==YT.PlayerState.PAUSED&&jQuery(b).flexslider("play"),a.data==YT.PlayerState.BUFFERING&&jQuery(b).flexslider("pause"),a.data==YT.PlayerState.ENDED&&"1"==jQuery(b).data("autoplay")&&(void 0!==jQuery(b).find(".flex-active-slide").data("loop")&&"yes"!==jQuery(b).find(".flex-active-slide").data("loop")&&jQuery(b).flexslider("next"),jQuery(b).flexslider("play"))}}function onPlayerReady(a){return function(b){"yes"===jQuery(a).data("mute")&&b.target.mute()}}function ytVidId(a){var b=/^(?:https?:)?(\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;return!!a.match(b)&&RegExp.$1}function playVideoAndPauseOthers(a){var b=jQuery(a).find("[data-youtube-video-id]").find("iframe"),c=jQuery(a).data("flexslider").slides.eq(jQuery(a).data("flexslider").currentSlide),d=c.find("[data-youtube-video-id]").find("iframe");b.each(function(a){jQuery(this).attr("id")!=d.attr("id")&&window.$youtube_players[jQuery(this).attr("id")].stopVideo()}),d.length&&(!d.parents("li").hasClass("clone")&&d.parents("li").hasClass("flex-active-slide")&&"yes"===d.parents("li").attr("data-autoplay")&&(void 0===window.$youtube_players||void 0===window.$youtube_players[d.attr("id")]||"function"!=typeof window.$youtube_players[d.attr("id")].playVideo?setTimeout(function(){window.$youtube_players[d.attr("id")].playVideo()},300):"slide"===jQuery(a).data("animation")&&0===a.currentSlide&&void 0===jQuery(a).data("iteration")?window.$youtube_players[d.attr("id")]&&setTimeout(function(){window.$youtube_players[d.attr("id")].playVideo(),jQuery(a).data("iteration",1),a.stop(),setTimeout(function(){a.play()},1e3*window.$youtube_players[d.attr("id")].getDuration()-6e3)},2e3):window.$youtube_players[d.attr("id")].playVideo()),"yes"===c.attr("data-mute")&&window.$youtube_players[d.attr("id")].mute()),jQuery(a).find("video").each(function(a){"function"==typeof jQuery(this)[0].pause&&jQuery(this)[0].pause(),!jQuery(this).parents("li").hasClass("clone")&&jQuery(this).parents("li").hasClass("flex-active-slide")&&"yes"===jQuery(this).parents("li").attr("data-autoplay")&&"function"==typeof jQuery(this)[0].play&&jQuery(this)[0].play()})}window.YTReady=function(){var a=[],b=!1;return function(c,d){if(!0===c)for(b=!0;a.length;)a.shift()();else"function"==typeof c&&(b?c():a[d?"unshift":"push"](c))}}(),jQuery(document).ready(function(){var a;jQuery(".fusion-fullwidth.video-background").each(function(){jQuery(this).find("[data-youtube-video-id]")&&(window.yt_vid_exists=!0)}),a=jQuery("iframe"),jQuery.each(a,function(a,b){var c,d,e,f=jQuery(this).attr("src");f&&(Number(fusionVideoGeneralVars.status_vimeo)&&1<=f.indexOf("vimeo")&&(jQuery(this).attr("id","player_"+(a+1)),c=insertParam(f,"api","1",!1),d=insertParam(c,"player_id","player_"+(a+1),!1),e=insertParam(d,"wmode","opaque",!1),jQuery(this).attr("src",e)),Number(fusionVideoGeneralVars.status_yt)&&ytVidId(f)&&(jQuery(this).attr("id","player_"+(a+1)),c=insertParam(f,"enablejsapi","1",!1),d=insertParam(c,"wmode","opaque",!1),jQuery(this).attr("src",d),window.yt_vid_exists=!0))}),jQuery(".full-video, .video-shortcode, .wooslider .slide-content, .fusion-portfolio-carousel .fusion-video").not("#bbpress-forums .full-video, #bbpress-forums .video-shortcode, #bbpress-forums .wooslider .slide-content, #bbpress-forums .fusion-portfolio-carousel .fusion-video").fitVids(),jQuery("#bbpress-forums").fitVids(),registerYoutubePlayers(),loadYoutubeIframeAPI()});