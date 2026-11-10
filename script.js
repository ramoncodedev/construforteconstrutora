(function(){
var nav=document.getElementById('nav'),menu=document.getElementById('menu'),b=document.getElementById('burger');
function onScroll(){nav.classList.toggle('solid',window.scrollY>40)}
onScroll();addEventListener('scroll',onScroll,{passive:true});
b.addEventListener('click',function(){var o=menu.classList.toggle('open');nav.classList.toggle('open',o);b.setAttribute('aria-expanded',o)});
menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');nav.classList.remove('open');b.setAttribute('aria-expanded','false')}});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}else{document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')})}
var yt=document.getElementById('yt');
if(yt)yt.addEventListener('click',function(){var i=document.createElement('iframe');i.src='https://www.youtube-nocookie.com/embed/'+yt.dataset.id+'?autoplay=1&rel=0';i.title='Vídeo institucional Construforte';i.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';i.allowFullscreen=true;i.referrerPolicy='strict-origin-when-cross-origin';yt.replaceChildren(i);yt.style.cursor='default'},{once:true});

/* galeria de projetos: para adicionar uma nova casa, inclua um item em PROJECTS e um cartão no HTML */
var PROJECTS={
 'vila-jagu':{name:'Vila Jagu',place:'Condomínio Pedro Grande',dir:'assets/img/projetos/vila-jagu/',alts:[
  'Vista aérea da Vila Jagu, no Condomínio Pedro Grande','Fachada com pergolado de madeira e piscina','Casa e piscina com coqueiros','Pergolado de toras e piscina revestida em pedra','Deck da piscina com espreguiçadeiras','Área gourmet externa com cobertura de madeira','Área gourmet com bancada e mesa de madeira maciça','Varanda com poltronas de vime e sala integrada','Varanda ampla com vista para a piscina','Sala de estar integrada com vigas de madeira','Sala de estar com pé-direito alto e janelas amplas','Sala de jantar com pendentes de fibra natural']},
 'casa-atena':{name:'Casa Atena',place:'Piri · Trancoso',dir:'assets/img/projetos/casa-atena/',alts:[
  'Vista aérea lateral da Casa Atena em Piri, Trancoso','Vista aérea da casa cercada por mata nativa','Vista de cima da piscina e do deck','Vista aérea completa da casa, piscina e jardim','Fachada da Casa Atena durante o dia','Fachada iluminada ao anoitecer','Sala de estar com sofá e mesa de jantar integradas','Sala de estar e jantar amplas com porta para a varanda','Mesa de jantar com acabamento refinado','Sala de estar com vista para a piscina','Sala de TV aconchegante','Área de jantar externa sob o pergolado','Cozinha gourmet com parede de pedra','Cozinha interna planejada','Deck com cadeiras de madeira ao lado da piscina','Piscina com puffs para descanso','Piscina iluminada à noite','Suíte master com decoração elegante'
 ]},
 'casa-cq':{name:'Casa CQ',place:'Terravista · Trancoso',dir:'assets/img/projetos/casa-cq/',alts:[
  'Vista aérea da Casa CQ com campo de golfe e o mar ao fundo, em Terravista','Vista aérea da casa, deck de madeira e piscina ao lado do campo de golfe','Fachada da casa com deck, piscina orgânica e coqueiros','Piscina de borda curva com vista para o campo de golfe e o mar','Deck de madeira com espreguiçadeiras ao lado da piscina','Piscina, deck e varandas de madeira da casa','Piscina com espreguiçadeiras e a casa de madeira ao fundo','Área de estar no deck com poltronas de madeira e vista para o golfe','Poltronas ao redor da mesa de fogo no deck, com a piscina ao fundo','Edifício anexo em madeira e pedra com escada e espaço de bem-estar','Área gourmet externa com mesa longa de madeira maciça e bancada','Bar com bancada de madeira, banquetas e luminárias pendentes','Sala de estar e jantar aberta com poltronas e mesa redonda','Espaço de lazer com mesa de sinuca e sala de estar integrada','Sala de jantar interna com mesa grande e luminárias de palha','Lounge externo com sofás brancos sob pergolado de madeira','Sala de massagem e bem-estar com painel de musgo','Escritório com mesa de madeira maciça e tapete redondo','Escritório com parede de pedra e portas abertas para o jardim'
 ]},
 'casa-f':{name:'Casa F',place:'Outeiro das Brisas',dir:'assets/img/projetos/casa-f/',alts:[
  'Fachada branca com varanda de troncos e janelas verdes','Fachada iluminada ao anoitecer, com varanda rústica de madeira','Área gourmet e de estar coberta no deck, com poltronas de madeira','Piscina com revestimento verde, deck e cerca de troncos'
 ]},
 'casa-verbena':{name:'Casa Verbena',place:'Condomínio Coqueiral',dir:'assets/img/projetos/casa-verbena/',alts:[
  'Vista aérea da Casa Verbena com piscina, deck e área gourmet em meio à mata','Fachada branca com telhado de madeira, deck e piscina','Fachada iluminada ao anoitecer com reflexo na piscina','Vista de cima da piscina, spa e espreguiçadeiras no deck','Sala de estar ampla com sofás brancos e pé-direito duplo','Sala integrada com sofás, escada de madeira e espelho grande','Sala de TV com móveis rústicos e vista para a área externa','Suíte com mosquiteiro, teto de madeira e bancada de lavatório','Suíte com closet embutido e cama com mosquiteiro','Banheira de hidromassagem em plataforma de madeira com janela para a mata'
 ]},
 'villa-di-maria':{name:'Villa di Maria',place:'Altos de Trancoso',dir:'assets/img/projetos/villa-di-maria/',alts:[
  'Vista aérea do condomínio Altos de Trancoso com o mar ao fundo','Fachada com parede de pedra, esquadrias de madeira e paisagismo tropical','Acesso à casa com caminho de grama, parede de pedra e porta de madeira','Sala de estar e jogos com teto de palha trançada, mesa de sinuca e TV','Sala integrada com sofá, mesa de jogos e varanda gourmet ao fundo','Sala e varanda de jantar integradas, com churrasqueira e bancada','Sofá em L, mesas de centro em madeira maciça e janelas altas','Deck de madeira com banco de tronco, poltronas e varanda gourmet ao fundo','Piscina com espreguiçadeiras submersas e deck de madeira','Piscina, jacuzzi, pedra e fogueira ao lado da casa','Piscina com guarda-sol de palha, deck e banco em volta da água','Deck com espreguiçadeiras e piscina rodeada por mata','Deck de madeira com espreguiçadeiras de vime e vista para a piscina','Suíte com cama de madeira rústica, mosquiteiro e abajur de macramê','Suíte com bancada de lavatório, espelho de palha e cama com mosquiteiro','Banheiro com banheira independente e janelas para a mata','Banheiro-suíte aberto com banheira, espelho de palha e poltrona'
 ]}
};
var gal=document.getElementById('gal'),gI=document.getElementById('galImg'),gT=document.getElementById('galT'),cur=null,idx=0,lastFocus=null;
function pad(n){return n<10?'0'+n:''+n}
function show(i){var p=PROJECTS[cur],n=p.alts.length;idx=(i+n)%n;gI.src=p.dir+pad(idx+1)+'.jpg';gI.alt=p.alts[idx];
 document.getElementById('galCount').textContent=(idx+1)+' / '+n;
 [].forEach.call(gT.children,function(b,k){b.classList.toggle('on',k===idx);if(k===idx)b.scrollIntoView({block:'nearest',inline:'center'})});
 var nx=new Image();nx.src=p.dir+pad((idx+1)%n+1)+'.jpg'}
function openG(id){cur=id;var p=PROJECTS[id];lastFocus=document.activeElement;
 document.getElementById('galName').textContent=p.name;document.getElementById('galPlace').textContent=p.place.toUpperCase();
 gT.innerHTML='';p.alts.forEach(function(a,k){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Foto '+(k+1));
  var im=document.createElement('img');im.src=p.dir+'t-'+pad(k+1)+'.jpg';im.alt='';im.loading='lazy';b.appendChild(im);b.addEventListener('click',function(){show(k)});gT.appendChild(b)});
 gal.hidden=false;document.body.classList.add('noscroll');show(0);document.getElementById('galX').focus()}
function closeG(){gal.hidden=true;document.body.classList.remove('noscroll');gI.removeAttribute('src');if(lastFocus)lastFocus.focus()}
document.querySelectorAll('[data-project]').forEach(function(b){b.addEventListener('click',function(){openG(b.dataset.project)})});
document.getElementById('galX').addEventListener('click',closeG);
document.getElementById('galP').addEventListener('click',function(){show(idx-1)});
document.getElementById('galN').addEventListener('click',function(){show(idx+1)});
gal.addEventListener('click',function(e){if(e.target===gal||e.target.classList.contains('gal__stage'))closeG()});
document.addEventListener('keydown',function(e){if(gal.hidden)return;if(e.key==='Escape')closeG();else if(e.key==='ArrowLeft')show(idx-1);else if(e.key==='ArrowRight')show(idx+1)});
var tx=0;gal.addEventListener('touchstart',function(e){tx=e.touches[0].clientX},{passive:true});
gal.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)show(idx+(d<0?1:-1))},{passive:true});
var f=document.getElementById('form');
f.addEventListener('submit',function(e){e.preventDefault();var ok=true;
['nome','tel','servico'].forEach(function(n){var el=f.elements[n];var bad=!el.value.trim();el.classList.toggle('err',bad);if(bad)ok=false});
if(!ok)return;
var d=f.elements,t='Olá! Meu nome é '+d.nome.value.trim()+'.\nServiço: '+d.servico.value+'\nWhatsApp: '+d.tel.value.trim()+(d.msg.value.trim()?'\nProjeto: '+d.msg.value.trim():'');
window.open('https://wa.me/5511981928860?text='+encodeURIComponent(t),'_blank','noopener')});
})();

/* vídeo do hero: carrega depois da página, só em telas maiores e sem economia de dados */
(function(){var v=document.getElementById('heroVid');if(!v)return;
var c=navigator.connection||{};
if(window.matchMedia('(max-width:700px)').matches||c.saveData||window.matchMedia('(prefers-reduced-motion:reduce)').matches)return;
function go(){v.src=v.dataset.src;v.addEventListener('canplay',function(){var p=v.play();if(p&&p.catch)p.catch(function(){})},{once:true});v.load()}
if(document.readyState==='complete')setTimeout(go,300);else window.addEventListener('load',function(){setTimeout(go,300)})})();

/* depoimentos: duplica o conjunto para a rolagem ficar contínua */
(function(){var t=document.getElementById('tmsTrack');if(!t)return;
var n=Array.prototype.slice.call(t.children);
n.forEach(function(e){var c=e.cloneNode(true);c.setAttribute('aria-hidden','true');if(c.tagName==='IMG')c.alt='';t.appendChild(c)})})();
