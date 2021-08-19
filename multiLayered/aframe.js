AFRAME.registerComponent("escape", {
  init: function () {
    console.log(this.el); // Reference to the scene element.
  },

  update: function () {
    this.el.addEventListener("click", (e) => {
      window.location.href = "https://www.duckduckgo.com";
    });
  },
});

AFRAME.registerComponent("hydra-texture", {
    init: function () {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.canvas.width = window.innerWidth * 2;
        this.canvas.height = window.innerHeight * 2;

        this.hydra = new Hydra({
        canvas,
        detectAudio: false,
        enableStreamCapture: false,
        }); 
    
    }
})