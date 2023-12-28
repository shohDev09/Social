const rightImg = document.querySelector('.right-img')
const rightImg_2 = document.querySelector('.right-img_2')
const main = document.querySelector('.main')
const color = document.querySelector('.color')
const today = document.querySelector('.today')
rightImg.addEventListener('click', function () {
    rightImg.style.display = 'none'
    rightImg_2.style.display = 'block'
    main.style.background = '#fff'
    color.style.color = '#1D1F29'
    today.style.color = '#1D1F29'
});
rightImg_2.addEventListener('click', function () {
    rightImg_2.style.display = 'none'
    rightImg.style.display = 'block'
    main.style.background = '#1D1F29'
    color.style.color = '#fff'
    today.style.color = '#fff'
});

