'use strict'

// Image Service - Manages the image gallery
const gImgs = [
    { id: 1, url: 'meme-imgs/imgs/1.jpg', keywords: ['funny', 'cat', 'politics'] },
    { id: 2, url: 'meme-imgs/imgs/2.jpg', keywords: ['dog', 'cute', 'animals'] },
    { id: 3, url: 'meme-imgs/imgs/3.jpg', keywords: ['baby', 'dog', 'cute', 'sleep'] },
    { id: 4, url: 'meme-imgs/imgs/4.jpg', keywords: ['cat', 'computer', 'tired'] },
    { id: 5, url: 'meme-imgs/imgs/5.jpg', keywords: ['baby', 'cute', 'funny'] },
    { id: 6, url: 'meme-imgs/imgs/6.jpg', keywords: ['history', 'funny', 'meme'] },
    { id: 7, url: 'meme-imgs/imgs/7.jpg', keywords: ['baby', 'funny', 'excited'] },
    { id: 8, url: 'meme-imgs/imgs/8.jpg', keywords: ['movie', 'classic', 'character'] },
    { id: 9, url: 'meme-imgs/imgs/9.jpg', keywords: ['baby', 'laugh', 'cute'] },
    { id: 10, url: 'meme-imgs/imgs/10.jpg', keywords: ['politics', 'laugh', 'president'] },
    { id: 11, url: 'meme-imgs/imgs/11.jpg', keywords: ['sports', 'funny', 'close'] },
    { id: 12, url: 'meme-imgs/imgs/12.jpg', keywords: ['old', 'funny', 'pointing'] },
    { id: 13, url: 'meme-imgs/imgs/13.jpg', keywords: ['actor', 'drink', 'fancy'] },
    { id: 14, url: 'meme-imgs/imgs/14.jpg', keywords: ['movie', 'serious', 'glasses'] },
    { id: 15, url: 'meme-imgs/imgs/15.jpg', keywords: ['movie', 'character', 'fantasy'] },
    { id: 16, url: 'meme-imgs/imgs/16.jpg', keywords: ['star trek', 'funny', 'character'] },
    { id: 17, url: 'meme-imgs/imgs/17.jpg', keywords: ['politics', 'serious', 'president'] },
    { id: 18, url: 'meme-imgs/imgs/18.jpg', keywords: ['cartoon', 'movie', 'funny'] }
]

function getImgs() {
    return gImgs
}

function getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}