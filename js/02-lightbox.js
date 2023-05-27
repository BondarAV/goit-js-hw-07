import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.forEach(galleryItem => {
  gallery.insertAdjacentHTML("beforeend", `
    <li class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
        <img
          class="gallery__image"
          src="${galleryItem.preview}"
          alt="${galleryItem.description}"
        />
      </a>
    </li>
  `);
});

const lightbox = new SimpleLightbox('.gallery__link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
