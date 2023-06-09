import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galerryMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class='gallery__item'>
      <a class='gallery__link' href='${original}'>
      <img
        class='gallery__image'
        src='${preview}'
        alt='${description}'/>
      </a>
      </li>`
);

gallery.insertAdjacentHTML('beforeend', galerryMarkup.join(''));

const lightbox = new SimpleLightbox('.gallery__link', {
  captionDelay: 250,
  captionsData: 'alt',
});

console.log(galleryItems);
