
var svg = d3.select("body").append("svg").attr("id", "main");
var text = svg.append("text").attr({
  dx: 200,
  dy: 200
}).text("touch or click");
console.log(text);


svg.on("touchstart", printTouches);
svg.on("touchmove", printTouches);
svg.on("touchend", printTouches);
svg.on("mousedown", printTouches);

function printTouches() { 
  svg.select("text").text(JSON.stringify(d3.touches(svg)));

  requestAnimationFrame(printTouches);
}

