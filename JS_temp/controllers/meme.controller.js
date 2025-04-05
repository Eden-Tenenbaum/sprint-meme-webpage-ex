'use strict'

// Meme Controller - Handles user interactions and orchestrates the flow
function onImgSelect(imgId) {
    gMeme.selectedImgId = imgId
    const selectedImg = getImgById(imgId)

    if (!selectedImg) {
        console.error('Selected image not found')
        return
    }

    gMemeImg.src = selectedImg.url
    gMemeImg.onload = () => {
        renderMeme()
    }

    // On mobile, scroll to editor after selecting image
    if (window.innerWidth <= 768) {
        document.querySelector('.editor-wrapper').scrollIntoView({ behavior: 'smooth' })
    }
}

function onTextChange(txt) {
    if (!gMeme || gMeme.lines.length === 0) return

    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    renderMeme()
}

function changeTextColor(color) {
    if (!gMeme || gMeme.lines.length === 0) return

    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme()
}

function onChangeFont(fontFamily) {
    if (!gMeme || gMeme.lines.length === 0) return

    gMeme.lines[gMeme.selectedLineIdx].font = fontFamily
    renderMeme()
}

function addLine() {
    if (!gCanvas) return;

    let y;

    // Position new line based on existing lines
    if (gMeme.lines.length === 0) {
        y = 50 // Top
    } else if (gMeme.lines.length === 1) {
        y = gCanvas.height - 50 // Bottom
    } else {
        y = gCanvas.height / 2 // Middle
    }

    const newLine = createLine(
        'New Line',
        40,
        '#ffffff',
        'Impact',
        'center',
        gCanvas.width / 2,
        y
    )

    const newLineIdx = addLineToMeme(newLine)
    document.getElementById('textLine').value = gMeme.lines[newLineIdx].txt
    document.getElementById('fontFamily').value = gMeme.lines[newLineIdx].font
    renderMeme()
}

function deleteLine() {
    if (!gMeme || gMeme.lines.length === 0) return

    const newSelectedIdx = deleteMemeLineByIdx(gMeme.selectedLineIdx)
    gMeme.selectedLineIdx = newSelectedIdx;

    if (gMeme.lines.length > 0) {
        document.getElementById('textLine').value = gMeme.lines[newSelectedIdx].txt
        document.getElementById('fontFamily').value = gMeme.lines[newSelectedIdx].font
    } else {
        document.getElementById('textLine').value = ''
    }

    renderMeme()
}

function switchLine() {
    if (!gMeme || gMeme.lines.length === 0) return

    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length;
    document.getElementById('textLine').value = gMeme.lines[gMeme.selectedLineIdx].txt
    document.getElementById('fontFamily').value = gMeme.lines[gMeme.selectedLineIdx].font
    renderMeme()
}

function onAlign(alignment) {
    if (!gMeme || gMeme.lines.length === 0) return

    updateLineAlign(gMeme.selectedLineIdx, alignment)
    renderMeme()
}

function onMoveLine(diff) {
    if (!gMeme || gMeme.lines.length === 0) return

    updateLinePosition(gMeme.selectedLineIdx, diff)
    renderMeme()
}

function changeFontSize(diff) {
    if (!gMeme || gMeme.lines.length === 0) return

    updateTextSize(diff)
    renderMeme()
}