import fetchPictures from "../../requests/picturesAPI/requestPicturesAPI.js";

export default function pictures() {
  const swiperDivsSlides = document.querySelectorAll(".swiper-slide");

  function addNewPicture(src, alt) {
    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", src);
    imgTag.setAttribute("alt", alt);
    return imgTag;
  }

  async function renderAllPictures() {
    const requestPictures = await fetchPictures();
    if (requestPictures.stateRequest === "fullfiled") {
      for (let index = 0; index < 3; index++) {
        const item = requestPictures.data[index];
        swiperDivsSlides[index].appendChild(
          addNewPicture(item.download_url, "s")
        );
      }
    }
  }

  renderAllPictures();

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
