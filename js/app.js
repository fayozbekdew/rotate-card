const bmw = document.querySelector('.bmw')
const mers = document.querySelector('.mers')
const audi = document.querySelector('.audi')
const image = document.querySelectorAll('.images')

bmw.addEventListener('click', () => {
    myCar('https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1280px-BMW_M4_%28G82%29_IMG_4183.jpg', 0);
    deleteImg(0)
})

mers.addEventListener('click', () => {
    myCar('https://mercedes-benz-uzbekistan.uz/wp-content/uploads/2022/02/1167f.webp', 1);
    deleteImg(1)
})

audi.addEventListener('click', () => {
    myCar('https://cdn.motor1.com/images/mgl/XB32Xe/s3/2023-audi-r8-v10-gt-rwd.jpg', 2);
    deleteImg(2)
})

let arr = []
function myCar(url,idx){
    image.forEach((i) => {
    arr.push(i);
        arr[idx].classList.add('rotate');
    
        arr[idx].style.background = `url(${url})`
        arr[idx].style.backgroundRepeat = 'no-repeat'
        arr[idx].style.backgroundSize = 'cover'
        arr[idx].style.backgroundPosition = 'center'
    } )

    
}
console.log(arr);

function deleteImg(idx){
    
    setTimeout(() => {
        arr[`${idx}`].classList.remove('rotate');
        arr[`${idx}`].style.background = 'aqua'
    }, 3000)
}