const buyBtns = document.querySelectorAll('.js-buy-ticket-btn');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const closeModalBtn = document.querySelector('.js-close-modal-btn');

const header = document.getElementById('header');
const menuBtn = document.getElementById('mobile-menu-btn');
let isOpen = false;

const menuItems = document.querySelectorAll('#nav > li a');

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function () {
    modal.classList.add('open');
    })
}

closeModalBtn.addEventListener('click', function () {
    modal.classList.remove('open');
})

modal.addEventListener('click', function () {
    modal.classList.remove('open');
})
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})


menuBtn.onclick = function () {
    if (isOpen) {
        header.style.height = null;
        isOpen = false;
    }
    else {
        header.style.height = 'auto';
        isOpen = true;
    }
}

for (const menuItem of menuItems) {
    menuItem.onclick = function (event) {
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');

        if (isParentMenu) {
            event.preventDefault(); // Ngăn thẻ a của More hoạt động
            header.style.overflow = 'visible';
        }
        else {
            header.style.height = null;
            header.style.overflow = 'hidden';
            isOpen = false;
        }
    }
}

const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlider());

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    }
    for (const slide of slides) {
        slide.classList.remove('displaySlide');
    }

    slides[slideIndex].classList.add('displaySlide');
}