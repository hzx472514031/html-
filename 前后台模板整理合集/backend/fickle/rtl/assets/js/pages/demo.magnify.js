jQuery(document).ready(function(a){image_Magnify();image__Fluid_Box()});function image_Magnify(){$(".ls-image-magnify img").magnify()}function image__Fluid_Box(){$(".ls-image-fluid-box a").fluidbox();$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);a=a.length?a:$("[name="+this.hash.slice(1)+"]");if(a.length){$("html,body").animate({scrollTop:a.offset().top},1000);return false}}})};