// const scrollHeader = () => {
//     const up = document.getElementById('up');
//     // this.scrollY >= 350 ? up.classList.add('show-scroll')
//     //     : up.classList.remove('show-scroll');
//     if(scrollY >= 50)
//     up.classList.add('show-scroll')
// }
// window.addEventListener('scroll', scrollHeader);

window.addEventListener('scroll', () =>{
    const up = document.getElementById('up');
    up.classList.add('show-scroll');

    console.log('scrolled!');
});
