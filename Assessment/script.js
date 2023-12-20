const displayImage = document.getElementById('displayImage');
const imagess = ['https://picsum.photos/seed/picsum/400/220', 'https://picsum.photos/id/237/400/220', 'https://picsum.photos/400/220', 'https://picsum.photos/id/22/400/220', 'https://picsum.photos/id/27/400/220', 'https://picsum.photos/id/46/400/220'];
const slider1 = document.getElementById('slider1');

let count = 0

function createSlider(slide, images) {
    for (let i = 0; i < images.length; i++) {
        const image = document.createElement('img');
        image.src = images[i];
        image.alt = `Image ${i + 1}`;
        image.classList.add('slider-image');
        slide.appendChild(image);
    }
}

createSlider(slider1, imagess);

function changeSlide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    count += direction;

    if (count < 0) {
        count = imagess.length - 1;
    } else if (count >= imagess.length) {
        count = 0;
    }

    // Calculate the translation value on index
    const translateValue = -count * 50 + '%';
    slider.style.transform = `translateX(${translateValue})`;

    // Display the selected image in the display area
    displayImage.src = slider.children[count].src;
}
