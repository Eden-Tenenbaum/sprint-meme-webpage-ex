'use strict'


function renderMeme() {
    const canvas = document.getElementById('memeCanvas')

    if (!canvas) {
        console.error('canvas element not found')
        return
    }
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const meme = getMeme()
    const img = new Image()

    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        drawText(meme, ctx)
    }

    img.src = `meme-imgs/imgs/${meme.selectedImgId}.jpg`
}

function onTextChange(text) {
    setLineTxt(text)
    renderMeme()
}

function drawText(meme, ctx) {
    if (!meme || !meme.lines || !meme.lines.length) {
        console.error('Meme data is incomplete:', meme)
        return
    }

    ctx.font = `${meme.lines[0].size}px Impact`
    ctx.fillStyle = meme.lines[0].color
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.textAlign = 'center'


    const canvas = document.getElementById('memeCanvas')
    const x = canvas.width / 2
    const y = 50

    ctx.fillText(meme.lines[0].txt, x, y)
    ctx.strokeText(meme.lines[0].txt, x, y)
}