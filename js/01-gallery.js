import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('div.gallery');
const markupImgCards = creatGalleryCards(galleryItems);
container.insertAdjacentHTML('beforeend', markupImgCards);

function creatGalleryCards(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join('');
}

container.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="auto" height="auto">
`);

  instance.show();

  container.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}
