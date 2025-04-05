'use strict'

// Canvas View - Handles the canvas drawing and manipulation
function initCanvas() {
    gCanvas.width = 500  // Fixed width
    gCanvas.height = 500 // Fixed height - creates a square canvas
}

function renderMeme() {
    if (!gCanvas || !gCtx) {
        console.error('Canvas not initialized')
        return
    }

    // Clear the canvas
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)

    if (!gMemeImg.complete || gMemeImg.naturalWidth === 0) {
        console.log('Image not loaded yet')
        return
    }

    // Calculate image scaling while maintaining aspect ratio
    const imgWidth = gMemeImg.width
    const imgHeight = gMemeImg.height
    const imgRatio = imgWidth / imgHeight
    const canvasRatio = gCanvas.width / gCanvas.height

    let drawWidth, drawHeight, offsetX = 0, offsetY = 0

    if (imgRatio > canvasRatio) {
        // Image is wider than canvas (relative to height)
        drawWidth = gCanvas.width
        drawHeight = drawWidth / imgRatio
        offsetY = (gCanvas.height - drawHeight) / 2
    } else {
        // Image is taller than canvas (relative to width)
        drawHeight = gCanvas.height
        drawWidth = drawHeight * imgRatio;
        offsetX = (gCanvas.width - drawWidth) / 2
    }

    // Draw background color or pattern if desired
    gCtx.fillStyle = '#ffffff'
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height)

    // Draw the selected image centered and scaled
    gCtx.drawImage(gMemeImg, offsetX, offsetY, drawWidth, drawHeight)

    if (!gMeme || !gMeme.lines) {
        return
    }

    // Draw the text lines
    gMeme.lines.forEach((line, idx) => {
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = '#000000'
        gCtx.lineWidth = 2
        gCtx.font = `${line.size}px ${line.font}`
        gCtx.textAlign = line.align

        // Adjust text position based on the scaled image
        let x
        if (line.align === 'center') {
            x = gCanvas.width / 2
        } else if (line.align === 'left') {
            x = 20 + offsetX
        } else { // right
            x = gCanvas.width - 20 - offsetX
        }

        // Highlight selected line
        if (idx === gMeme.selectedLineIdx) {
            const textMetrics = gCtx.measureText(line.txt)
            const textHeight = line.size * 1.2
            let rectX

            if (line.align === 'center') {
                rectX = x - textMetrics.width / 2 - 10
            } else if (line.align === 'left') {
                rectX = x - 10
            } else { // right
                rectX = x - textMetrics.width - 10
            }

            gCtx.beginPath()
            gCtx.rect(rectX, line.y - textHeight, textMetrics.width + 20, textHeight + 10)
            gCtx.strokeStyle = '#a64dff'
            gCtx.stroke()
        }

        // Draw the text with outline
        gCtx.fillText(line.txt, x, line.y)
        gCtx.strokeText(line.txt, x, line.y)
    })
}

function downloadMeme() {
    // Temporarily remove the selection rectangle
    const selectedLineIdx = gMeme.selectedLineIdx
    gMeme.selectedLineIdx = -1
    renderMeme()

    // Create download link
    const link = document.createElement('a')
    link.download = 'my-meme.png'
    link.href = gCanvas.toDataURL('image/png')
    link.click()

    // Restore selection rectangle
    gMeme.selectedLineIdx = selectedLineIdx
    renderMeme()
}

function initCanvasEvents() {
    // Can add interactive canvas events here if needed
    console.log('Canvas events initialized')
}