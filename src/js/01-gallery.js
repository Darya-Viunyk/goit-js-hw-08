import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";

// Change code below this line

// Render gallery items.
let renderedHtml = '';
galleryItems.forEach(element => {
    const img = document.createElement('img');
    img.classList.add("gallery__image");
    img.src = element.preview;
    img.setAttribute('data-source', element.original);
    img.alt = element.description;
    const a = document.createElement('a');
    a.classList.add("gallery__link");
    a.href = element.original;
    const div = document.createElement('div');
    div.classList.add('gallery__item');
    a.append(img);
    div.append(a);
    renderedHtml += div.outerHTML;
});

document.querySelector('.gallery').insertAdjacentHTML('beforeend', renderedHtml);
document.querySelectorAll(".gallery__link").forEach(item =>
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const instance = basicLightbox.create(
            `<img src="${e.currentTarget.href}" width="800" height="600">`
        );
        instance.show();
    })
);

console.log(galleryItems);
