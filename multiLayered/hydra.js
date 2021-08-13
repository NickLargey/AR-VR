var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
});

osc(0.01)
  .rotate(Math.abs(1408 / 26) / 337, [0, 0.5, 1, 5, Math.abs(503 / 337) * 26])
  .kaleid(64)
  .invert(50)
  .color(1, 0.0078, 0.576)
  .brightness(0.1)
  .mask(voronoi(64, 10, 10).brightness(0.1), 0.01, 0.1)
  .out(o0);
console.log(mouse.x, mouse.y);
