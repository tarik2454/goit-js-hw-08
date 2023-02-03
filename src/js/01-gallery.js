import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const createCardsMarkup = ({ preview, original, description }) => {
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

const createCardsGallery = [...galleryItems].map(createCardsMarkup).join('');
galleryContainer.insertAdjacentHTML('beforeend', createCardsGallery);

new SimpleLightbox('.gallery a', {
  fadeSpeed: 100,
  animationSlide: false,
});
