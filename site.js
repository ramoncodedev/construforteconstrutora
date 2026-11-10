(function(){
var nav=document.getElementById('nav'),menu=document.getElementById('menu'),b=document.getElementById('burger');
if(b&&menu&&nav){b.addEventListener('click',function(){var o=menu.classList.toggle('open');nav.classList.toggle('open',o);b.setAttribute('aria-expanded',o)});
menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');nav.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
var t=document.getElementById('tmsTrack');
if(t){Array.prototype.slice.call(t.children).forEach(function(e){var c=e.cloneNode(true);c.setAttribute('aria-hidden','true');if(c.tagName==='IMG')c.alt='';t.appendChild(c)})}
var els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(el){io.observe(el)})}else{els.forEach(function(el){el.classList.add('in')})}
var f=document.getElementById('form');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var ok=true;
['nome','tel','servico'].forEach(function(n){var el=f.elements[n];var bad=!el.value.trim();el.classList.toggle('err',bad);if(bad)ok=false});
if(!ok)return;
var d=f.elements,x='Olá! Meu nome é '+d.nome.value.trim()+'.\nServiço: '+d.servico.value+'\nWhatsApp: '+d.tel.value.trim()+(d.msg.value.trim()?'\nProjeto: '+d.msg.value.trim():'');
window.open('https://wa.me/5511981928860?text='+encodeURIComponent(x),'_blank','noopener')});
var pg=document.querySelector('.pgal'),gal=document.getElementById('gal');
if(pg&&gal){
var items=[].slice.call(pg.querySelectorAll('.pgal__i')),gI=document.getElementById('galImg'),gT=document.getElementById('galT'),idx=0,last=null;
items.forEach(function(it,k){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Foto '+(k+1));var im=document.createElement('img');im.src=it.querySelector('img').src;im.alt='';im.loading='lazy';b.appendChild(im);b.addEventListener('click',function(){show(k)});gT.appendChild(b);it.addEventListener('click',function(){open(k)})});
function show(i){var n=items.length;idx=(i+n)%n;gI.src=items[idx].dataset.full;gI.alt=items[idx].querySelector('img').alt;document.getElementById('galCount').textContent=(idx+1)+' / '+n;
[].forEach.call(gT.children,function(b,k){b.classList.toggle('on',k===idx);if(k===idx)b.scrollIntoView({block:'nearest',inline:'center'})});
var nx=new Image();nx.src=items[(idx+1)%n].dataset.full}
function open(k){last=document.activeElement;document.getElementById('galName').textContent=pg.dataset.name;document.getElementById('galPlace').textContent=pg.dataset.place.toUpperCase();gal.hidden=false;document.body.classList.add('noscroll');show(k);document.getElementById('galX').focus()}
function close(){gal.hidden=true;document.body.classList.remove('noscroll');gI.removeAttribute('src');if(last)last.focus()}
document.getElementById('galX').addEventListener('click',close);
document.getElementById('galP').addEventListener('click',function(){show(idx-1)});
document.getElementById('galN').addEventListener('click',function(){show(idx+1)});
gal.addEventListener('click',function(e){if(e.target===gal||e.target.classList.contains('gal__stage'))close()});
document.addEventListener('keydown',function(e){if(gal.hidden)return;if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(idx-1);else if(e.key==='ArrowRight')show(idx+1)});
var tx=0;gal.addEventListener('touchstart',function(e){tx=e.touches[0].clientX},{passive:true});
gal.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)show(idx+(d<0?1:-1))},{passive:true});
}
})();
