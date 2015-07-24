
var svg = d3.select("body").append("svg").attr("id", "main");
var text = svg.append("text").classed("touches", true).attr({
  dx: 200,
  dy: 200
}).text("touch or click");
var text = svg.append("text").classed("event", true).attr({
  dx: 200,
  dy: 400
}).text("event?");
console.log(text);


svg.on("touchstart", printTouches);
svg.on("touchmove", printTouches);
svg.on("touchend", printTouches);
svg.on("mousedown", printTouches);
svg.on("mouseup", printTouches);

function printTouches(event) { 
  svg.select(".touches").text(JSON.stringify(d3.touches(svg)));
  svg.select(".event").text(JSON.stringify(event));

  requestAnimationFrame(printTouches);
}

