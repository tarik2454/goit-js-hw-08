import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const galleryList = document.querySelector('ul.gallery');

const createCardsMarkup = cards => {
  const { preview, original, description } = cards;
  return `
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          title="${description}"
        />
      </a>
  `;
};

const createCardsGallery = galleryItems.map(createCardsMarkup).join('');
galleryList.insertAdjacentHTML('beforeend', createCardsGallery);

new SimpleLightbox('.gallery a', {
  captionSelector: 'alt',
  captionDelay: 250,
  fadeSpeed: 150,
  animationSlide: false,
});
