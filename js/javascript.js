const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
});

const sidenav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sidenav, {
  close: true,
});

const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

const materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);
