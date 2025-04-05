'use strict'

// The Meme Model
let gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Add your text here',
            size: 40,
            color: '#ffffff',
            font: 'Impact',
            align: 'center',
            x: 250,
            y: 50
        }
    ]
}

function getMeme() {
    return gMeme
}

function createLine(txt, size, color, font, align, x, y) {
    return {
        txt,
        size,
        color,
        font,
        align,
        x,
        y
    }
}

function addLineToMeme(line) {
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1;
    return gMeme.selectedLineIdx
}

function updateLineAlign(lineIdx, alignment) {
    const line = gMeme.lines[lineIdx]
    if (!line) return

    line.align = alignment

    // Update x position based on alignment
    if (alignment === 'center') {
        line.x = gCanvas.width / 2
    } else if (alignment === 'left') {
        line.x = 20
    } else if (alignment === 'right') {
        line.x = gCanvas.width - 20
    }
}

function updateLinePosition(lineIdx, diffY) {
    const line = gMeme.lines[lineIdx]
    if (!line) return

    line.y += diffY
}

function deleteMemeLineByIdx(lineIdx) {
    if (gMeme.lines.length === 1) {
        gMeme.lines[0].txt = ''
        return 0
    }

    gMeme.lines.splice(lineIdx, 1)
    return Math.min(lineIdx, gMeme.lines.length - 1)
}

function updateTextSize(diff) {
    if (gMeme.lines.length === 0) return;

    gMeme.lines[gMeme.selectedLineIdx].size += diff;
    if (gMeme.lines[gMeme.selectedLineIdx].size < 12) {
        gMeme.lines[gMeme.selectedLineIdx].size = 12
    }

    if (gMeme.lines[gMeme.selectedLineIdx].size > 80) {
        gMeme.lines[gMeme.selectedLineIdx].size = 80
    }
}