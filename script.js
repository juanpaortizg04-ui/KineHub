var ex=[
{t:"Sentadilla",k:"Piernas y glúteos",d:"Pies al ancho de hombros, lleva la cadera atrás y abajo como si te sentaras, con la espalda recta. Sube empujando con los talones.",g:["3 x 12","Espalda recta","Rodillas alineadas"]},
{t:"Flexiones",k:"Pecho y brazos",d:"Manos bajo los hombros, cuerpo en línea recta. Baja el pecho hacia el suelo flexionando los codos y empuja para subir. Apoya las rodillas si lo necesitas.",g:["3 x 8-10","Cuerpo en línea","Opción de rodillas"]},
{t:"Plancha",k:"Core y hombros",d:"Apoya antebrazos y puntas de pie, cuerpo en línea recta de cabeza a talones. Aprieta abdomen y glúteos y respira con calma.",g:["3 x 30 s","Abdomen firme","No hundas la cadera"]},
{t:"Zancadas",k:"Cuádriceps y glúteos",d:"Da un paso largo al frente y baja hasta que ambas rodillas formen 90 grados. Empuja con el pie delantero para volver y alterna de pierna.",g:["3 x 10","Cada pierna","Torso erguido"]},
{t:"Superman",k:"Espalda baja y glúteos",d:"Boca abajo con brazos al frente, eleva a la vez brazos y piernas unos centímetros. Sostén 2 segundos y baja con control.",g:["3 x 12","Pausa 2 s","Cuello neutro"]}
];
document.getElementById("cards").innerHTML=ex.map(function(e,i){return '<div class="flip rv" tabindex="0"><div class="in"><div class="fr"><img class="service-image" src="images/service_'+(i+1)+'.png" alt="'+e.t+'" loading="lazy"><div class="ov"><small>'+(i+1)+' · '+e.k+'</small><h3>'+e.t+'</h3></div></div><div class="bk"><span class="label">Cómo hacerlo</span><h3>'+e.t+'</h3><p>'+e.d+'</p><div class="tags">'+e.g.map(function(g){return '<span class="tag">'+g+'</span>'}).join('')+'</div></div></div></div>'}).join('');
document.querySelectorAll(".flip").forEach(function(c){c.addEventListener("click",function(){c.classList.toggle("on")});c.addEventListener("keydown",function(ev){if(ev.key==="Enter")c.classList.toggle("on")})});
var P=document.getElementById("pts");for(var i=0;i<50;i++){var p=document.createElement("div");p.className="pt";p.style.left=Math.random()*100+"%";p.style.top=Math.random()*100+"%";p.style.animationDelay=Math.random()*20+"s";p.style.animationDuration=15+Math.random()*10+"s";P.appendChild(p)}
var nav=document.getElementById("nav");addEventListener("scroll",function(){nav.classList.toggle("s",scrollY>40)},{passive:true});
var L=document.getElementById("links");document.getElementById("menu").onclick=function(){L.classList.toggle("open")};L.onclick=function(){L.classList.remove("open")};
function count(el){var t=+el.dataset.n,c=0,inc=Math.max(t/120,.05),h=setInterval(function(){c+=inc;if(c>=t){el.textContent=t;clearInterval(h)}else el.textContent=Math.round(c)},16)}
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){var el=en.target;setTimeout(function(){el.classList.add("v")},(el.dataset.d||0)*1);el.querySelectorAll("[data-n]").forEach(count);io.unobserve(el)}})},{threshold:.1,rootMargin:"0px 0px -60px 0px"});
document.querySelectorAll(".rv").forEach(function(el,i){el.dataset.d=(i%3)*100;io.observe(el)});

var bar=document.getElementById("bar"),cur=document.getElementById("cur");
addEventListener("scroll",function(){bar.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight)*100+"%"},{passive:true});
addEventListener("pointermove",function(e){if(e.pointerType==="mouse"){cur.style.left=e.clientX+"px";cur.style.top=e.clientY+"px"}});
