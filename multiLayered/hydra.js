var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
});

osc(0.001)
  .rotate(360, 0.5)
  .kaleid(64)
  .invert(50)
  .color(1, 0.078, 0.576)
  .mask(voronoi(124, 0.5, 5).brightness(0.1), 0.01, 0.1)
  .modulate(noise(0.5), 0.2)
  .out(o0);
