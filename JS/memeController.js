'use strict'


function renderMeme() {
    const canvas = document.getElementById('memeCanvas')

    if (!canvas) {
        console.error('canvas element not found')
        return
    }
    const ctx = canvas.getContext('2d')

    ctx.drawImage(Img, x, y, width, height)
    ctx.fillText(text, x, y)
    ctx.strokeText(text, x, y)
}

function onTextChange(text) {
    setLineTxt(text)

    renderMeme()
}
