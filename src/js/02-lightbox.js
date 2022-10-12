import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


let renderedHtml = '';
galleryItems.forEach(element => {
    const img = document.createElement('img');
    img.classList.add("gallery__image");
    img.src = element.preview;

    img.alt = element.description;
    const a = document.createElement('a');
    a.classList.add("gallery__item");
    a.href = element.original;
    a.append(img);
    renderedHtml += a.outerHTML;
});

document.querySelector('.gallery').insertAdjacentHTML('beforeend', renderedHtml);
var lightbox = new SimpleLightbox('.gallery__item', 
{captionsData: "alt",captionDelay: 250,});

console.log(galleryItems);
