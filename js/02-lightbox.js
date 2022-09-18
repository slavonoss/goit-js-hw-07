import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('ul.gallery');
const markupImgCards = creatGalleryCards(galleryItems);
container.insertAdjacentHTML('beforeend', markupImgCards);

function creatGalleryCards(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>`;
    })
    .join('');
}

container.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
