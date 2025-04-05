'use strict'

// Gallery View - Handles the gallery rendering and interactions
function renderGallery() {
    const elGallery = document.querySelector('.meme-gallery')
    if (!elGallery) {
        console.error('Gallery container not found')
        return
    }

    const images = getImgs()

    let galleryHTML = ''
    images.forEach(img => {
        galleryHTML += `
            <div class="image-container" data-id="${img.id}">
               <img src="${img.url}" alt="${img.keywords.join(', ')}">
            </div>`
    })

    elGallery.innerHTML = galleryHTML

    // Add click listeners to images
    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
        container.addEventListener('click', function () {
            const imgId = parseInt(this.dataset.id)

            // Remove selection from all images
            document.querySelectorAll('.meme-gallery img').forEach(img => {
                img.classList.remove('selected')
            })

            // Add selection to the clicked image
            const clickedImg = this.querySelector('img')
            clickedImg.classList.add('Åselected')

            onImgSelect(imgId)
        })
    })

    // Hide about section if open
    const aboutSection = document.querySelector('.about')
    if (aboutSection) {
        aboutSection.classList.remove('open')
    }
}

function onSearchInput(event) {
    const keyword = event.target.value.trim().toLowerCase()

    const filteredImages = keyword
        ? getImgs().filter(img =>
            img.keywords.some(kw => kw.toLowerCase().includes(keyword))
        )
        : getImgs()

    renderFilteredGallery(filteredImages)
}

function renderFilteredGallery(images) {
    const elGallery = document.querySelector('.meme-gallery')
    if (!elGallery) return

    let galleryHTML = ''
    images.forEach(img => {
        galleryHTML += `
        <img src="${img.url}" alt="${img.keywords.join(', ')}">
            <div class="image-container" data-id="${img.id}">
            </div>`
    })

    elGallery.innerHTML = galleryHTML

    const imageContainers = document.querySelectorAll('.image-container')
    imageContainers.forEach(container => {
        container.addEventListener('click', function () {
            const imgId = parseInt(this.dataset.id)

            // Remove selection from all images
            document.querySelectorAll('.meme-gallery img').forEach(img => {
                img.classList.remove('selected')
            })

            // Add selection to the clicked image
            const clickedImg = this.querySelector('img')
            clickedImg.classList.add('selected')

            onImgSelect(imgId)
        })
    })
}

function showAbout() {
    document.querySelector('.about').classList.add('open')
}

function hideAbout() {
    document.querySelector('.about').classList.remove('open')
}