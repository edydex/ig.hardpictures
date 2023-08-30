// script.js

document.addEventListener("DOMContentLoaded", function () {
  const albumTiles = document.querySelectorAll(".album-tile");
  const closeBtn = document.querySelector(".close-btn");

  const albumImagesMap = {

//album title
"McDonalds 10/11/21"
: [
//album content
"mcDonalds/1.jpg",
"mcDonalds/2.jpg",
"mcDonalds/3.jpg",
"mcDonalds/4.jpg",
"mcDonalds/5.jpg",
"mcDonalds/7.jpg",
"mcDonalds/8.jpg",
"mcDonalds/9.jpg",
"mcDonalds/10.jpg",
"mcDonalds/11.jpg",
"mcDonalds/12.jpg",
"mcDonalds/13.jpg",
"mcDonalds/14.jpg",
"mcDonalds/15.jpg",
"mcDonalds/16.jpg",
"mcDonalds/17.jpg",
"mcDonalds/18.jpg",
],
"BeReals": [
"beReals/1.jpg",
"beReals/2.jpg",
"beReals/3.jpg",
"beReals/4.jpg",
"beReals/5.jpg",
"beReals/6.jpg",
"beReals/7.jpg",
        // Add more image URLs for Album 2
      ],
"Random": [
"random/1.jpg",
"random/2.jpg",
"random/3.jpg",
"random/4.jpg",
        // Add more image URLs for Random
      ],
      // Add more entries for additional albums
    };

  albumTiles.forEach(function (tile) {
    tile.addEventListener("click", function () {
      const albumTitle = tile.querySelector(".album-title").textContent;
      const albumImages = albumImagesMap[albumTitle];

      if (albumImages) {
        const imageLinks = albumImages.map((image) => `<a href="${image}" target="_blank"><img src="${image}" alt="${albumTitle}" class="album-image"></a>`).join("");

        const imageGrid = document.querySelector(".image-grid");
        imageGrid.innerHTML = imageLinks;

        const albumModal = document.querySelector(".album-modal");
        albumModal.style.display = "block";
      }
    });
  });

  closeBtn.addEventListener("click", function () {
    const albumModal = document.querySelector(".album-modal");
    albumModal.style.display = "none";

    const imageGrid = document.querySelector(".image-grid");
    imageGrid.innerHTML = "";
  });

  window.addEventListener("click", function (event) {
    const albumModal = document.querySelector(".album-modal");
    if (event.target === albumModal) {
      albumModal.style.display = "none";

      const imageGrid = document.querySelector(".image-grid");
      imageGrid.innerHTML = "";
    }
  });
});
