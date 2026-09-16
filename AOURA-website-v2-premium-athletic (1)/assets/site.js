
const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn&&navLinks){
  menuBtn.addEventListener('click',()=>{
    const open=navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',String(open));
  });
}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks?.classList.remove('open')));
