$(function(){var a=document.createElement("div"),b=-(~~$("html").css("padding-left").replace("px","")+~~$("body").css("margin-left").replace("px","")),c=-32;a.className="ex-tooltip",document.body.appendChild(a);{var d={xScale:"time",yScale:"linear",main:[{className:".pizza",data:[{x:"2012-11-05",y:6},{x:"2012-11-06",y:6},{x:"2012-11-07",y:8},{x:"2012-11-08",y:3},{x:"2012-11-09",y:4},{x:"2012-11-10",y:9},{x:"2012-11-11",y:6}]}]},e={dataFormatX:function(a){return d3.time.format("%Y-%m-%d").parse(a)},tickFormatX:function(a){return d3.time.format("%A")(a)},mouseover:function(d){var e=$(this).offset();$(a).text(d3.time.format("%A")(d.x)+": "+d.y).css({top:c+e.top,left:e.left+b}).show()},mouseout:function(){$(a).hide()}};new xChart("line-dotted",d,"#example4",e)}});