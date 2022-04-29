import fetchPictures from '../../requests/picturesAPI/requestPicturesAPI.js';
import {
  getRequestPictureState,
  requestPictureListener,
} from '../../states/requestPictureState/requestPictureState.js';

export default function pictures() {
  const numberOfPictures = 3;

  const swiperDivsSlides = document.querySelectorAll('.swiper-slide');

  function createLoading() {
    const divParent = document.createElement('div');
    const divLoading = document.createElement('div');
    divParent.classList.add('loadingParentDiv');
    divParent.appendChild(divLoading);
    divLoading.classList.add('loadingAnimation');
    return divParent;
  }

  function handleLoadingApi(state) {
    const { myState } = state;
    if (myState === null) {
      return null;
    }
    if (myState === 'pending') {
      for (let index = 0; index < numberOfPictures; index++) {
        swiperDivsSlides[index].appendChild(createLoading());
      }
    } else {
      const animationElements = document.querySelectorAll('.loadingParentDiv');
      for (let index = 0; index < animationElements.length; index++) {
        animationElements[index].remove();
      }
    }
  }

  requestPictureListener(handleLoadingApi);

  function addNewPicture(src, alt) {
    const imgTag = document.createElement('img');
    imgTag.setAttribute('src', src);
    imgTag.setAttribute('alt', alt);
    return imgTag;
  }

  async function renderAllPictures() {
    const requestPictures = await fetchPictures();
    if (getRequestPictureState() === 'fullfiled') {
      for (let index = 0; index < numberOfPictures; index++) {
        const item = requestPictures[index];
        swiperDivsSlides[index].appendChild(
          addNewPicture(item.download_url, item.author),
        );
      }
    }
  }

  renderAllPictures();

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
