// تهيئة بسيطة للعام والسكرول ريفيل وتخزين رسالة الاتصال محلياً كتجربة
document.getElementById('year').textContent = new Date().getFullYear();

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  });
},{threshold:.12});
revealEls.forEach(el=>io.observe(el));

window.formSuccess = function(){
  const form = document.querySelector('.contact-form');
  const data = Object.fromEntries(new FormData(form).entries());
  try{
    const box = JSON.parse(localStorage.getItem('messages') || '[]');
    box.push({...data, at: new Date().toISOString()});
    localStorage.setItem('messages', JSON.stringify(box));
    alert('تم إرسال رسالتك كتجربة محلية. شكراً لتواصلك!');
    form.reset();
  }catch(e){
    alert('تم الإرسال.');
  }
};
