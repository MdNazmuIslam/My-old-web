const { active } = require("browser-sync");

const marker = document.querySelector('.marker');
const navitem = document.querySelectorAll('.navbar-nav .nav-link');
function indicator(e){
    marker.style.left=e.offsetLeft+"px";
    marker.style.width =e.offsetWidth+"px";
}
navitem.forEach(link =>{
    link.addEventListener('click',(e)=>{
        indicator(e.target);
    })
})
navitem.forEach(namu =>{
    namu.addEventListener('click',function(){
        namu.classList.add("active");
    })
})
