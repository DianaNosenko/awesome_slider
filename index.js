const wrapper = document.querySelector('.wrapper');
const leftSlidesContainer = document.querySelector('.left_slider');
const rightSlidesContainer = document.querySelector('.right_slider');

const downBtn = document.querySelector('#down');
const upBtn = document.querySelector('#up');

const slidesAmount = leftSlidesContainer.querySelectorAll('div').length;
let counter = 0;

leftSlidesContainer.style.top = `-${(slidesAmount-1)*100}vh`;

const changeSlide = (route) => {
    const slideHeight = wrapper.clientHeight;
    if(route === 'up'){
        counter++;
        if (counter>slidesAmount-1){
            counter = 0;
        }
    } else if (route === 'down'){
        counter--;
        if (counter<0){
            counter = slidesAmount-1;
        }
    }
    rightSlidesContainer.style.transform = `translateY(-${counter*slideHeight}px)`;
    leftSlidesContainer.style.transform = `translateY(${counter*slideHeight}px)`;
};
upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));
