function icon(name){return iconSvg[name]||iconSvg.spark}
let currentStage=0;

function renderStageTabs(){
  stageTabs.innerHTML=stages.map((s,i)=>`<button class="${i===currentStage?'active':''}" data-stage="${i}" style="--c:${s.color};--g:${s.glow}"><strong>${s.label}</strong><span>${s.sub}</span></button>`).join('');
  stageTabs.querySelectorAll('[data-stage]').forEach(btn=>btn.addEventListener('click',()=>{currentStage=+btn.dataset.stage;renderStageTabs();renderStage()}));
}
function renderStage(){
  const s=stages[currentStage];
  stageSummary.style.cssText=`--c:${s.color};--g:${s.glow}`;
  stageSummary.innerHTML=`<h3>${s.label} — ${s.sub}</h3><p>${s.summary}</p>`;
  flowTree.style.cssText=`--c:${s.color};--g:${s.glow}`;
  flowTree.innerHTML=s.nodes.map((n,i)=>`${i?'<div class="connector"></div>':''}<article class="node">
    <button class="node-trigger"><span class="node-icon">${icon(n.icon)}</span><span class="node-title"><strong>${n.title}</strong><span>${n.sub}</span></span><span class="chev">⌄</span></button>
    <div class="node-body"><p>${n.simple}</p>
      ${n.beta?'<div class="beta-track"><div>Day 0<br>Baseline</div><div>Day 30<br>Use</div><div>Day 60<br>Install</div><div>Day 90<br>Proof</div></div><div class="beta-note"><strong>Important:</strong> This is a temporary validation workstream inside Tier 2. Tier 2 permanently contains the diagnostic and SOS.</div>':''}
      <div class="advanced"><ul>${n.bullets.map(b=>`<li>${b}</li>`).join('')}</ul><div class="meta-grid">
        <div class="meta team-only"><small>Success / dependency</small><div>${n.feeds}</div></div>
        <div class="meta"><small>Perry — 20%</small><div>${n.perry}</div></div>
        <div class="meta"><small>Team — 80%</small><div>${n.team}</div></div>
      </div></div>
      <div class="split"><span class="perry"></span><span class="team"></span></div>
      <div class="split-copy"><div class="rolebox perry"><b>Perry 20%</b>${n.perry}</div><div class="rolebox team"><b>Team 80%</b>${n.team}</div></div>
      <div class="feed">Feeds next → ${n.feeds}</div>
    </div></article>`).join('');
  flowTree.querySelectorAll('.node-trigger').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.node').classList.toggle('open')));
  stageCounter.textContent=`${currentStage+1} / ${stages.length}`;
}
function renderTimeline(){
  timelineGrid.innerHTML=timelineData.map(([when,title,text])=>`<article class="timeline-card"><div class="timeline-top"><b>${title}</b><span>${when}</span></div><p>${text}</p></article>`).join('');
}
function renderRoles(){
  roleCards.innerHTML=roles.map(([stage,p,t])=>`<button class="info-card"><div class="card-head"><span class="card-icon">${icon('users')}</span><div><h3>${stage}</h3><p>20% authority / 80% execution</p></div></div><div class="card-detail"><div class="econ-row"><span>Perry 20%</span><b>${p}</b></div><div class="econ-row"><span>Team 80%</span><b>${t}</b></div></div></button>`).join('');
  roleCards.querySelectorAll('.info-card').forEach(c=>c.addEventListener('click',()=>c.classList.toggle('open')));
}
function renderMonetization(){
  monetizationCards.innerHTML=monetizationData.map(([title,ic,desc,pays,earns,cost,purpose])=>`<button class="info-card"><div class="card-head"><span class="card-icon">${icon(ic)}</span><div><h3>${title}</h3><p>${desc}</p></div></div><div class="card-detail"><div class="econ-row"><span>Who pays</span><b>${pays}</b></div><div class="econ-row"><span>Who earns</span><b>${earns}</b></div><div class="econ-row"><span>Cost profile</span><b>${cost}</b></div><div class="econ-row"><span>Strategic job</span><b>${purpose}</b></div></div></button>`).join('');
  monetizationCards.querySelectorAll('.info-card').forEach(c=>c.addEventListener('click',()=>c.classList.toggle('open')));
}

function openView(id){
  document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active',p.id===id));
  document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id));
  document.getElementById('ecosystem-breakdown').scrollIntoView({behavior:'smooth'});
}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>openView(b.dataset.view)));

clientMode.addEventListener('click',()=>setAudience(false));
teamMode.addEventListener('click',()=>setAudience(true));
function setAudience(team){
  document.body.classList.toggle('team-view',team);
  clientMode.classList.toggle('active',!team);
  teamMode.classList.toggle('active',team);
}
advancedToggle.addEventListener('click',()=>{
  const on=document.body.classList.toggle('advanced-mode');
  advancedToggle.classList.toggle('active',on);
  advancedToggle.setAttribute('aria-pressed',String(on));
});
presentToggle.addEventListener('click',()=>{
  document.body.classList.add('presenting','advanced-mode');
  currentStage=0;renderStageTabs();renderStage();openView('walkthrough');
  stageSummary.scrollIntoView({behavior:'smooth',block:'center'});
});
prevStage.addEventListener('click',()=>{currentStage=Math.max(0,currentStage-1);renderStageTabs();renderStage();stageSummary.scrollIntoView({behavior:'smooth',block:'center'})});
nextStage.addEventListener('click',()=>{currentStage=Math.min(stages.length-1,currentStage+1);renderStageTabs();renderStage();stageSummary.scrollIntoView({behavior:'smooth',block:'center'})});
exitPresent.addEventListener('click',()=>document.body.classList.remove('presenting'));

const navDefs=[
  ['ecosystem','spark','Ecosystem'],
  ['pipeline','chart','Pipeline'],
  ['timeline','calendar','Timeline'],
  ['division','users','20 / 80'],
  ['monetization','dollar','Revenue']
];
document.querySelectorAll('.navbtn').forEach((btn,i)=>{btn.innerHTML=icon(navDefs[i][1])+`<span>${navDefs[i][2]}</span>`});
document.querySelectorAll('[data-go]').forEach(btn=>btn.addEventListener('click',()=>{document.getElementById(btn.dataset.go).scrollIntoView({behavior:'smooth'});setNav(btn)}));
document.querySelectorAll('[data-view-open]').forEach(btn=>btn.addEventListener('click',()=>{openView(btn.dataset.viewOpen);setNav(btn)}));
function setNav(btn){document.querySelectorAll('.navbtn').forEach(b=>b.classList.remove('active'));btn.classList.add('active')}

const basePreset=document.getElementById('base250Preset');
const netAfterFee=document.getElementById('netAfterFee');
const pipelineContext=document.getElementById('pipelineContext');
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
const inputs = {
  em:{el:document.getElementById('em'),out:emOut,price:297,label:'EM:Dirt'},
  mml:{el:document.getElementById('mml'),out:mmlOut,price:197,label:'Leadership'},
  farm:{el:document.getElementById('farm'),out:farmOut,price:500,label:'Farm'},
  diagnostic:{el:document.getElementById('diagnostic'),out:diagnosticOut,price:497,label:'Diagnostic'},
  sos97:{el:document.getElementById('sos97'),out:sos97Out,price:97,label:'SOS $97'},
  sos297:{el:document.getElementById('sos297'),out:sos297Out,price:297*12,label:'SOS Builder'},
  agency:{el:document.getElementById('agency'),out:agencyOut,price:2500,label:'T1C Kickback'}
};
Object.values(inputs).forEach(x=>x.el.addEventListener('input',calculate));
inputs.sos297.el.value=3;
const teamServiceTotal=document.getElementById('teamServiceTotal');
const combinedOpportunity=document.getElementById('combinedOpportunity');
const serviceChart=document.getElementById('serviceChart');
const teamInputs={
  socialClients:{el:document.getElementById('socialClients'),out:document.getElementById('socialClientsOut'),price:499*12,label:'Social Media',kind:'units'},
  webBuilds:{el:document.getElementById('webBuilds'),out:document.getElementById('webBuildsOut'),price:997,label:'Website Builds',kind:'units'},
  webCareClients:{el:document.getElementById('webCareClients'),out:document.getElementById('webCareClientsOut'),price:197*12,label:'Web Management',kind:'units'},
  textSetupClients:{el:document.getElementById('textSetupClients'),out:document.getElementById('textSetupClientsOut'),price:297,label:'Text Setup',kind:'units'},
  textMonthlyClients:{el:document.getElementById('textMonthlyClients'),out:document.getElementById('textMonthlyClientsOut'),price:97*12,label:'Text Marketing',kind:'units'},
  adsCustom:{el:document.getElementById('adsCustom'),out:document.getElementById('adsCustomOut'),price:1,label:'Ad Programs',kind:'money'},
  videoCustom:{el:document.getElementById('videoCustom'),out:document.getElementById('videoCustomOut'),price:1,label:'Video Shoots',kind:'money'},
  creativeCustom:{el:document.getElementById('creativeCustom'),out:document.getElementById('creativeCustomOut'),price:1,label:'Content + Design',kind:'money'}
};
Object.values(teamInputs).forEach(x=>x.el.addEventListener('input',calculate));
basePreset.addEventListener('click',()=>{
  inputs.em.el.value=250;inputs.mml.el.value=0;inputs.farm.el.value=0;inputs.diagnostic.el.value=0;inputs.sos97.el.value=0;inputs.sos297.el.value=0;inputs.agency.el.value=0;calculate();
});
layupPreset.addEventListener('click',()=>{
  inputs.em.el.value=250;inputs.mml.el.value=250;inputs.farm.el.value=0;inputs.diagnostic.el.value=0;inputs.sos97.el.value=0;inputs.sos297.el.value=0;inputs.agency.el.value=0;calculate();
});
function calculateTeamServices(ecosystemTotal){
  const rows=Object.values(teamInputs).map(x=>{
    const units=+x.el.value;
    x.out.textContent=x.kind==='money'?money(units):units.toLocaleString();
    return {label:x.label,value:units*x.price};
  });
  const total=rows.reduce((sum,row)=>sum+row.value,0);
  teamServiceTotal.textContent=money(total);
  combinedOpportunity.textContent=money(ecosystemTotal+total);
  const max=Math.max(...rows.map(r=>r.value),1);
  serviceChart.innerHTML=rows.map(r=>`<div class="chart-row"><span class="chart-label">${r.label}</span><div class="chart-track"><div class="chart-bar service-bar" style="width:${r.value/max*100}%"></div></div><span class="chart-value">${money(r.value)}</span></div>`).join('');
}
function calculate(){
  const rows=Object.values(inputs).map(x=>{
    const units=+x.el.value; x.out.textContent=units.toLocaleString();
    return {label:x.label,value:units*x.price};
  });
  const total=rows.reduce((a,b)=>a+b.value,0);
  grossTotal.textContent=money(total);
  calculateTeamServices(total);
  if(pipelineContext) pipelineContext.textContent=`Based on ${(+inputs.em.el.value).toLocaleString()} EM:Dirt buyers and the current downstream assumptions.`;
  netAfterFee.textContent=(total>=200000?'+':'−')+money(Math.abs(total-200000));
  netAfterFee.classList.toggle('positive',total>=200000);
  const pct=Math.min(100,total/200000*100);
  progressFill.style.width=pct+'%';
  progress.classList.toggle('covered',total>=200000);
  feeMessage.classList.toggle('covered',total>=200000);
  feeMessage.textContent=total>=200000
    ? 'Fee Covered! All additional revenue is shared profit.'
    : `${money(200000-total)} remains to cover the $200,000 fee target.`;
  const max=Math.max(...rows.map(r=>r.value),1);
  chart.innerHTML=rows.map(r=>`<div class="chart-row"><span class="chart-label">${r.label}</span><div class="chart-track"><div class="chart-bar" style="width:${r.value/max*100}%"></div></div><span class="chart-value">${money(r.value)}</span></div>`).join('');
}
renderStageTabs();renderStage();renderTimeline();renderRoles();renderMonetization();calculate();