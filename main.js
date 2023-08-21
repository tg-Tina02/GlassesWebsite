import './assets/scss/all.scss';

$(document).ready(function () {
    $(".ham-icon").click(function (event) {
      $(".dropdown").toggleClass("active");
    });
  });

  AOS.init();
  // var scene = document.getElementById('scene');
  // var parallax = new Parallax(scene);

// console.log("Hello world!");