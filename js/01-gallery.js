import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const listGallery = document.querySelector(".gallery");

galleryItems.forEach((image) => {
    const imageList = document.createElement("li");
    imageList.classList.add("gallery__image");
    listGallery.append(imageList);
    imageList.insertAdjacentHTML(
        "beforeend",
        `<a class="gallery__link"><img class="gallery__image" src=${image.preview} alt=${image.description}></></a>`
    );

    imageList.addEventListener("click", (event) => {
        event.preventDefault();
        const instance = basicLightbox.create(`<img src="${image.original}">`, {
            onShow: (instance) => {
                window.addEventListener("keyup", (event) => {
                    if (event.code === "Escape") {
                        instance.close();
                    }
                });
            },
        });

        instance.show();
    });
});

console.log(galleryItems);