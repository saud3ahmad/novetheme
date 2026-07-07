document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

class NovaTheme {
 constructor(){
  this.init();
 }
 init(){
  console.log('NovaTheme initialized');
  this.mobileMenu();
 }
 mobileMenu(){
  const menu=document.querySelector('.mobile-menu-drawer');
  const toggle=document.querySelector('.mobile-menu-toggle');

  if(toggle && menu){
   toggle.addEventListener('click',()=>{
    menu.classList.toggle('active');
   });
  }
 }
}

document.addEventListener('DOMContentLoaded',()=>new NovaTheme());