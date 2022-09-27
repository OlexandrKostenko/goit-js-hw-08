// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(img) {
    return galleryItems.map (({ preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    }).join('');
}

function onGalleryContainerClick (evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG'){
        return
    };

window.addEventListener('keydown', onEsckeyPress);
function onEsckeyPress (event) {
    const Esc_key_code = 'Escape';
    const isEscKey = event.code === Esc_key_code;

    if (isEscKey){
       gallery.close();
    }
}}

let gallery = new SimpleLightbox('.gallery a', {captionsData:'alt', captionDelay:'250'});
gallery.on('show.simplelightbox', function () {

});

// Change code below this line

