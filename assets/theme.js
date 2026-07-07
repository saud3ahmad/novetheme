document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

class NovaTheme {
 constructor(){
  this.init();
 }
 init(){
  console.log('NovaTheme initialized');
 }
}

document.addEventListener('DOMContentLoaded',()=>new NovaTheme());