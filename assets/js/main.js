// NavBar 
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const testemonialsIcons = document.querySelectorAll('.testemonial-icon');
const testemonialContent = document.querySelector('.testimonial-content');
burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
    links.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation = `anim1 0.4s ease forwards ${index / 7 +0.5}s`;
        }
    });
    burger.classList.toggle('toggle');
});

testemonialsIcons.forEach(icon =>{
    
    icon.addEventListener('click', ()=>{
        testemonialsIcons.forEach(icon =>{
            icon.classList.remove('selected');
        })
        icon.classList.add('selected');
        if(testemonialsIcons[0] == icon){
            testemonialContent.style.left = '0';
        }else if (testemonialsIcons[1] == icon){
            testemonialContent.style.left = '-100%';

        }else if (testemonialsIcons[2] == icon){
            testemonialContent.style.left = '-200%';

        }
    })
})

