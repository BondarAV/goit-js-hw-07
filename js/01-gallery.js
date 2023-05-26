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
          data-source="${galleryItem.original}"
          alt="${galleryItem.description}"
        />
      </a>
    </li>
  `);
});

gallery.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
      <img
        src="${event.target.getAttribute("data-source")}"
        alt="${event.target.getAttribute("alt")}
        width="800"
        height="600">
    `);

    instance.show();

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  }
});
