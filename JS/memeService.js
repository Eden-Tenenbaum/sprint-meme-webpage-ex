'use strict'

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat falafel',
            size: 20,
            color: 'red'
        }
    ]
}

function getMeme() {
    return gMeme
}

function setLineTxt(text) {
    const meme = getMeme()

    // Update the text of the currently selected line
    meme.lines[meme.selectedLineIdx].txt = text
}

// Updates the selected image ID in the meme data model based on user selection
function setImg(imgId) {
    gMeme.selectedImgId = imgId
    console.log('imgId', imgId)

}
