import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galerryMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
);

gallery.insertAdjacentHTML('beforeend', galerryMarkup.join(''));
gallery.addEventListener('click', onClick);

function onClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  const onCloseModal = event => {
    const ESC_KEY = 'Escape';

    if (event.code === ESC_KEY) {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `
      <img src="${event.target.dataset.source}" width="800" height="600">
    `,
    {
      onShow: () => {
        window.addEventListener('keydown', onCloseModal);
      },

      onclose: () => {
        window.removeEventListener('keydown', onCloseModal);
      },
    }
  );
  instance.show();
}

console.log(galleryItems);
