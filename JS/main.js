'use strict'

let gCanvas;
let gCtx;
let gMemeImg = new Image();

// Initialize when DOM is ready
function onInit() {
    console.log('Initializing app');

    // Get canvas
    gCanvas = document.getElementById('memeCanvas');
    if (!gCanvas) {
        console.error('Canvas element not found');
        return;
    }

    gCtx = gCanvas.getContext('2d');

    // Set up fixed canvas size
    initCanvas();

    // Initialize the first image
    gMemeImg.src = gImgs[0].url;
    gMemeImg.onload = () => {
        renderMeme();
    };

    // Set up event listener for window resize
    window.addEventListener('resize', () => {
        renderMeme();
    });

    // Render gallery and initial meme
    renderGallery();

    // Set up initial text input
    if (gMeme && gMeme.lines.length > 0) {
        document.getElementById('textLine').value = gMeme.lines[0].txt;
        document.getElementById('fontFamily').value = gMeme.lines[0].font;
    }
}

// Make sure global functions are accessible from HTML
window.onload = onInit;
window.onImgSelect = onImgSelect;
window.onTextChange = onTextChange;
window.changeTextColor = changeTextColor;
window.onChangeFont = onChangeFont;
window.addLine = addLine;
window.deleteLine = deleteLine;
window.switchLine = switchLine;
window.onAlign = onAlign;
window.onMoveLine = onMoveLine;
window.changeFontSize = changeFontSize;
window.downloadMeme = downloadMeme;
window.renderGallery = renderGallery;
window.showAbout = showAbout;
window.hideAbout = hideAbout;
window.onSearchInput = onSearchInput;