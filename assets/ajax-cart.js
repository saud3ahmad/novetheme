class AjaxCart {
 constructor(){
  this.bindEvents();
 }
 bindEvents(){
  document.addEventListener('submit',(e)=>{
   const form=e.target.closest('form[action*="/cart/add"]');
   if(!form) return;
   e.preventDefault();
   const data=new FormData(form);
   fetch('/cart/add.js',{
    method:'POST',
    body:data,
    headers:{'Accept':'application/json'}
   }).then(()=>window.dispatchEvent(new Event('cart:updated')));
  });
 }
}

document.addEventListener('DOMContentLoaded',()=>new AjaxCart());