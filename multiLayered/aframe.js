AFRAME.registerComponent("foo", {
  init: function () {
    console.log(this.el); // Reference to the scene element.
  },

  update: function () {
    this.el.addEventListener("click", (e) => {
      window.location.href = "https://www.duckduckgo.com";
    });
  },
});
