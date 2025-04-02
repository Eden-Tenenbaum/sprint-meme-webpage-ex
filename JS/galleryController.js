'use strict'


function renderGallery() {
    const elGallery = document.querySelector('.meme-gallery')
    console.log('Gallery:', elGallery)

    if (!elGallery) {
        console.error('container not found')
        return
    }

    const images = [
        { id: 1, url: 'meme-imgs/imgs/1.jpg', keywords: ['funny', 'cat'] },
        { id: 2, url: 'meme-imgs/imgs/2.jpg', keywords: ['dog', 'cute'] }
    ]

    let galleryHTML = ''
    images.forEach(img => {
        galleryHTML += `
            <div class="image-container" data-id="${img.id}">
               <img src = "meme-imgs/imgs/${img.id}.jpg" alt="${img.keywords.join(', ')}">
            </div> `
    })

    elGallery.innerHTML = galleryHTML
    console.log('Gallery HTML set:', galleryHTML)

    const imageContainers = document.querySelectorAll('.image-container')
    imageContainers.forEach(container => {
        container.addEventListener('click', function () {
            const imgId = parseInt(this.dataset.id)
            onImgSelect(imgId)
        })
    })

}

function onImgSelect(imgId) {
    setImg(imgId)
    renderMeme()

}
