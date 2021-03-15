// Anchor links
const anchors = document.querySelectorAll('a[href*="#"]');
const blackLine = document.querySelector('#black-line');

for (let item of anchors) {
    // click scroll
    item.addEventListener('click', event => {
        event.preventDefault();
        const blockID = item.getAttribute('href');
        if (blockID == '#intro') {
            blackLine.style.left = '0%';
        }
        if (blockID == '#projects') {
            blackLine.style.left = '38%';
        }
        if (blockID == '#contacts') {
            blackLine.style.left = '75%';
        }
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    });
}


// 
let sliderItem = document.querySelectorAll('.slider__item');
let sliderRight = document.querySelector('.right');
let sliderLeft = document.querySelector('.left');


// next
sliderRight.onclick = next;
function next() {
    for (let i = 0; i < sliderItem.length; i++) {
        if (sliderItem[sliderItem.length - 1].classList.contains('sliderOn')) {
            sliderItem[0].classList.add('sliderOn');
            sliderItem[sliderItem.length - 1].classList.remove('sliderOn');
            break;
        }
        if (sliderItem[i].classList.contains('sliderOn')) {
            sliderItem[i+1].classList.add('sliderOn');
            sliderItem[i].classList.remove('sliderOn');
            break;
        }
    }    
}

// prev
sliderLeft.onclick = prev;
function prev() {
    for (let i = 0; i < sliderItem.length; i++) {
        if (sliderItem[0].classList.contains('sliderOn')) {
            sliderItem[sliderItem.length - 1].classList.add('sliderOn');
            sliderItem[0].classList.remove('sliderOn');
            break;
        }
        if (sliderItem[i].classList.contains('sliderOn')) {
            sliderItem[i-1].classList.add('sliderOn');
            sliderItem[i].classList.remove('sliderOn');
            break;
        }
    }
}