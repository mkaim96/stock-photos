const images = document.querySelectorAll(".picture");


images.forEach(el => el.addEventListener('mouseenter', ()=> {
    el.children[0].classList.remove('hide');
}))

images.forEach(el => el.addEventListener('mouseleave', ()=> {
    el.children[0].classList.add('hide');
}))

