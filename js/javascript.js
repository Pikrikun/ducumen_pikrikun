const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
});

const sidenav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sidenav);

const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

const materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);

var toastTrigger = document.getElementById("liveToastBtn");
var toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", function () {
    var toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
