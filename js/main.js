var instance = new vidbg(".video",{
    webm: "video/world.webm", // URL or relative path to webm video
    poster: "video/poster.jpg", // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
  },
);
var rellax = new Rellax('.rocket');
if (document.body.clientWidth < 576) {
  rellax.destroy();
}
AOS.init();
