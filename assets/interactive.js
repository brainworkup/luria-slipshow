(() => {
  'use strict';
  // Standard normal CDF approximation (maximum absolute error about 7.5e-8).
  function cdf(z) {const t=1/(1+.2316419*Math.abs(z));const d=.3989422804014327*Math.exp(-z*z/2);const p=1-d*t*(.319381530+t*(-.356563782+t*(1.781477937+t*(-1.821255978+t*1.330274429))));return z>=0?p:1-p;}
  const x=z=>70+(z+3)*160, y=z=>260-220*Math.exp(-z*z/2);
  function path(a,b){let s=`M ${x(a)} 260`;for(let z=a;z<b;z+=.025)s+=` L ${x(z)} ${y(z)}`;return s+` L ${x(b)} ${y(b)} L ${x(b)} 260 Z`;}
  function init(){
    const svg=document.querySelector('#explorer-curve'), slider=document.querySelector('#score-slider');
    if(!svg||!slider)return;
    function render(){const z=Number(slider.value)/10,p=cdf(z)*100;
      svg.innerHTML=`<title>Normal curve with ${p.toFixed(1)} percent of its area to the left of the selected score</title><path d="${path(-3,3)}" fill="#dce9ed"/><path d="${path(-3,z)}" fill="#72b1cc"/><path d="${path(-3,3)}" fill="none" stroke="#24566c" stroke-width="2"/><line x1="${x(z)}" x2="${x(z)}" y1="24" y2="264" stroke="#a6592b" stroke-width="4"/>${[-3,-2,-1,0,1,2,3].map(v=>`<text x="${x(v)}" y="293" text-anchor="middle">${v>0?'+':''}${v} SD</text>`).join('')}`;
      document.querySelector('#z-value').textContent=z.toFixed(1);
      document.querySelector('#ss-value').textContent=(100+15*z).toFixed(1).replace('.0','');
      document.querySelector('#t-value').textContent=(50+10*z).toFixed(1).replace('.0','');
      document.querySelector('#percentile-value').textContent=p.toFixed(1);
      document.querySelector('#curve-caption').textContent=`About ${Math.round(p)} out of 100 people in the reference group would score at or below this point in this idealized model.`;
      slider.setAttribute('aria-valuetext',`${z.toFixed(1)} standard deviations, percentile ${p.toFixed(1)}`);
    }
    slider.addEventListener('input',render);
    document.querySelectorAll('[data-z]').forEach(b=>b.addEventListener('click',()=>{slider.value=Number(b.dataset.z)*10;render();}));
    // Keep control keys inside controls; preserve Slipshow navigation elsewhere.
    document.querySelectorAll('button,input,summary').forEach(el=>['keydown','keyup','keypress'].forEach(type=>el.addEventListener(type,e=>e.stopPropagation())));
    document.addEventListener('pointerdown',e=>{if(!e.target.closest('button,input,summary') && document.activeElement instanceof HTMLElement)document.activeElement.blur();},true);
    const domains={
      attention:{name:'Attention & working memory',items:[['Hold information',37],['Work with information',16]],prompt:'Does keeping several steps in mind feel harder than following one step at a time?'},
      memory:{name:'Learning & memory',items:[['Learn across repetitions',50],['Recall after a delay',25],['Recognize information',63]],prompt:'Does repetition or a cue make remembering easier? We would check the actual test pattern before drawing that conclusion.'},
      reasoning:{name:'Reasoning',items:[['Visual problem solving',75],['Verbal reasoning',63]],prompt:'Could explaining an idea aloud or showing a visual example support learning?'}
    };
    function domain(key){const d=domains[key];document.querySelectorAll('[data-domain]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.domain===key)));document.querySelector('#domain-detail').innerHTML=`<h3>${d.name}</h3>${d.items.map(([name,p])=>`<div class="row"><span>${name}</span><div class="track"><div class="fill" style="width:${p}%"></div></div><span>${p}th percentile</span></div>`).join('')}<p class="small">${d.prompt}</p>`;}
    document.querySelectorAll('[data-domain]').forEach(b=>b.addEventListener('click',()=>domain(b.dataset.domain)));
    render();domain('attention');
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
