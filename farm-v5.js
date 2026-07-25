const PIPELINE = [
  {
    id:'t1a', label:'T1A', short:'Attention → $297 Accelerator',
    summary:'The full front-door system. Phase 1 builds the media, academy, and lead-generation infrastructure. Phase 2 launches the search, tests the feeder, and improves the next class.',
    phases:[
      {
        id:'p1',label:'Phase 1',short:'Build & Produce',
        summary:'Three months of concentrated production that leaves Perry with a functioning lead-generation system, a bank of media, and the complete EM:Dirt academy.',
        proof:'A recent three-day event cost nearly $40,000 and produced four videos. Phase 1 is designed to produce 20+ useful assets—including full podcast episodes, man-on-the-street features, short-form promos, bumpers, graphics, and lead-generation content—while also installing the funnel those assets feed.',
        subtiers:[
          {
            label:'$1 Million Idea Search',short:'Build the lead engine',
            summary:'A hopeful man-on-the-street and founder-story format for people with an existing business, a serious side business, or something close to becoming full-time.',
            actions:[
              ['Create the interview format','Develop the “Do you have a dream, idea, or million-dollar business?” street and founder-interview structure.'],
              ['Produce the media bank','Film man-on-the-street videos, founder stories, bumpers, promos, sponsor inventory, and short-form variants.'],
              ['Build the visual system','Create graphics, campaign identity, influencer-share packages, and a website/social reface around the Search.'],
              ['Install the lead funnel','Build registration, lead capture, segmentation, retargeting, email/SMS follow-up, and measurement.']
            ],
            feeds:'Phase 2 registrations, EM:Dirt retargeting, sponsors, T1C opportunities, and future finalists.'
          },
          {
            label:'PM in the AM',short:'Build the weekly authority show',
            summary:'A separate podcast project that supports the Search while becoming its own sponsor-ready and subscriber-supported media property.',
            actions:[
              ['Prerecord months of episodes','Bank full podcast episodes during the first three months.'],
              ['Seed the launch','Use Perry’s current audience to populate live-stream chat, questions, and reactions during early releases.'],
              ['Build the content machine','Create clips, titles, thumbnails, transcripts, email/SMS distribution, and calls to action.'],
              ['Create the public-to-paid ladder','Release an edited public episode for reach, then offer the full conversation, extended cuts, and bonus material through Patreon.'],
              ['Package sponsorship inventory','Create sponsor segments and integrations that can support both PM in the AM and the Search.']
            ],
            feeds:'The Search, EM:Dirt, Monday Morning Leadership, Patreon members, diagnostics, sponsors, and Perry’s modern authority platform.'
          },
          {
            label:'EM:Dirt Academy',short:'Build the $297 90-day offer',
            summary:'Reuse Perry’s strongest books, seminars, teachings, and modules. Update the packaging, not the wheel: Video → Write-up → Action → Analyze → Repeat.',
            actions:[
              ['Audit Perry’s existing IP','Identify timeless lessons that can be refreshed, reorganized, and given a new implementation angle.'],
              ['Build every lesson in three parts','Each lesson includes a video, a clear written explanation, and a concrete action.'],
              ['Create consistent behavior','Participants analyze outcomes, adjust, and repeat through group sessions, message boards, prompts, and milestones.'],
              ['Build the digital layer','Create the guide, worksheets, Pocket AI, academy platform, onboarding, accountability rhythm, social reface, and site journey.']
            ],
            feeds:'The Phase 2 beta, the $297 public offer, T1B, T1C, the Tier 2 diagnostic, and SOS.'
          }
        ]
      },
      {
        id:'p2',label:'Phase 2',short:'Search, Beta & Retarget',
        summary:'Run the free $1 Million Idea Search for three months, release the media produced in Phase 1, give the first 100 users more hands-on support, and turn the lead pool into the feeder for EM:Dirt.',
        proof:'At the end of Phase 1, Perry already owns the media bank and functioning funnel. He can stop there—or continue into Phase 2 so the department can run the Search, measure demand, refine the offer, and build proof.',
        subtiers:[
          {
            label:'Run the Free Search',short:'Generate and study demand',
            summary:'Use the free contest to attract owners, founders, and serious side-business operators, then measure what messages and channels create qualified applications.',
            actions:[
              ['Run the campaign for three months','Launch paid and organic campaigns across the Search media system.'],
              ['Release Phase 1 content','Publish the man-on-the-street videos, founder stories, graphics, promos, influencer shares, and PM in the AM tie-ins.'],
              ['Give the first 100 users deeper support','Use a more hands-on first class to refine the tool, onboarding, language, and next-class experience.'],
              ['Measure the funnel','Track leads, applications, cost per lead, audience quality, video response, and retargeting behavior.']
            ],
            feeds:'A qualified lead pool, better campaign data, sponsor proof, founder stories, and EM:Dirt retargeting.'
          },
          {
            label:'Retarget Into EM:Dirt',short:'Convert attention into action',
            summary:'Not everyone entering the Search needs to win. Relevant applicants, viewers, visitors, and incomplete registrations receive a practical $297 next step.',
            actions:[
              ['Segment the audience','Separate applicants, viewers, visitors, incomplete registrations, and high-intent leads.'],
              ['Connect the offer to their stated problem','Use each lead’s dream, business, or bottleneck to make EM:Dirt relevant.'],
              ['Sell the 90-day accelerator','Route qualified leads into the academy, group accountability, and implementation rhythm.'],
              ['Track ascension','Measure movement from T1A into community, services, the Tier 2 diagnostic, and SOS.']
            ],
            feeds:'T1A buyers, T1B members, T1C clients, Tier 2 diagnostics, and SOS users.'
          },
          {
            label:'Validate With Perry Clients',short:'Quality control with 10 experienced owners',
            summary:'Invite 10 existing Perry clients to use the guide as a consistency checklist and report whether it is valuable to experienced Perry World members and newer owners moving toward their level.',
            actions:[
              ['Use the guide as a business checklist','Ask experienced clients whether they are consistently doing the fundamentals the program describes.'],
              ['Evaluate Perry fit','Confirm that the academy feels authentic to Perry’s body of work without simply recycling old packaging.'],
              ['Evaluate usefulness for newer owners','Ask whether the system would help less mature businesses move toward their current level.'],
              ['Revise the next class','Document missing steps, excess material, friction, behavior changes, and proof.']
            ],
            feeds:'The improved public class, credible proof, better onboarding, T1C opportunities, Tier 2, and future Search seasons.'
          }
        ]
      }
    ]
  },
  {
    id:'t1b',label:'T1B',short:'Community & Events',
    summary:'The Chicago-first relationship layer: fun plus function, useful introductions, collaborative problem solving, and experiences that create opportunity.',
    phases:[{id:'community',label:'Community',short:'Chicago launch',summary:'A concise first-year preview. The detailed build remains centered on T1A.',proof:'Community is an ascension path—not the only way the front-door economics work.',subtiers:[{label:'The Farm Community',short:'$500 annual membership',summary:'Build a local group of owners creating net worth for one another without boring networking.',actions:[['Launch the first Chicago cohort','Recruit the initial member base and establish the culture.'],['Run useful experiences','Mix workshops, dinners, improv, outings, and collaborative business problem-solving.'],['Track contribution','Reward members who implement, introduce people, and create opportunity.']],feeds:'T1C, Tier 2, SOS, Farm Builders, events, sponsors, and future chapters.'}]}]
  },
  {
    id:'t1c',label:'T1C',short:'Business Solutions',
    summary:'The done-for-you implementation path under an agreed Powered by Perry structure.',
    phases:[{id:'services',label:'Services',short:'Install the work',summary:'Businesses that understand the bottleneck can hire the department to build the solution.',proof:'T1C creates case studies and recurring service revenue while preventing the academy from ending at advice.',subtiers:[{label:'Top-to-Bottom Solutions',short:'IRL + Chicago AMP + 79ratio',summary:'Branding, social, websites, ads, text marketing, automation, AI agents, video, content, and implementation.',actions:[['Diagnose the implementation need','Translate the lesson or diagnostic into a clear scope.'],['Build and install','Use the approved delivery team to execute.'],['Measure the result','Track implementation, behavior, and business outcomes.']],feeds:'Proof, recurring services, SOS, diagnostics, and founder stories.'}]}]
  },
  {
    id:'t2',label:'Tier 2',short:'Diagnostic + SOS',
    summary:'The permanent analysis and Business Operating System layer.',
    phases:[{id:'analysis',label:'Analysis',short:'Find the bottleneck',summary:'The $497 diagnostic identifies what is actually choking growth.',proof:'Tier 2 increases the lifetime value of a T1A customer without requiring hundreds of new front-door sales.',subtiers:[
      {label:'Diagnostic',short:'$497 analysis',summary:'Find the primary constraint and route the owner into the correct next move.',actions:[['Assess the business','Collect operating, sales, leadership, and workflow data.'],['Interpret the bottleneck','Identify the primary constraint rather than producing a random list.'],['Route the next action','Recommend T1C, SOS, Tier 3, community, or advanced support.']],feeds:'T1C, SOS, Tier 3, and premium qualification.'},
      {label:'SOS',short:'$97 founding-year Business Operating System',summary:'More than CRM: a system designed to coordinate mundane functions, tracking, communication, workflows, and onboarding.',actions:[['Install the operating core','Set up people, tasks, pipelines, communication, and onboarding.'],['Automate repeatable work','Reduce mundane manual functions through workflows and AI.'],['Create the upgrade path','Identify users ready for the $297/month builder tier.']],feeds:'Tier 3, custom AI, deeper implementation, and Farm Builders.'}
    ]}]
  },
  {
    id:'t3',label:'Tier 3',short:'SOS Builders',
    summary:'A light preview of the advanced builder tier: deeper software, a development community, and one clearly scoped onboarding AI workflow.',
    phases:[{id:'builder',label:'Builder',short:'Co-build the operating system',summary:'Capacity-bound members help shape reusable workflows while receiving advanced SOS support.',proof:'This is a selective next step, not an unlimited custom-development promise.',subtiers:[{label:'SOS Builder',short:'$297/month',summary:'Advanced SOS, a builder community, and one defined onboarding AI agent or automation.',actions:[['Join the builder cohort','Work directly with the development community on practical workflows.'],['Build one defined AI workflow','Map and automate a clearly bounded onboarding process.'],['Earn contributor value','Useful testing and reusable ideas can earn credits, access, recognition, or priority.']],feeds:'Farm Builders, deeper T1C work, Tier 4 qualification, and reusable SOS features.'}]}]
  },
  {
    id:'t4',label:'Tier 4',short:'The Farmhouse',
    summary:'A light preview of the premium destination: high-level mindfulness, intellectual, and strategic experiences with Perry.',
    phases:[{id:'farmhouse',label:'Premium',short:'Protect Perry’s highest-value time',summary:'Direct Perry access is concentrated around founders who have already reduced operational chaos.',proof:'The lower tiers handle the fundamentals so premium rooms can focus on higher-order thinking.',subtiers:[{label:'The Farmhouse',short:'Retreats with Perry',summary:'Curated retreats and private rooms for advanced founders ready for strategy, leadership, legacy, and deeper thinking.',actions:[['Qualify the founder','Use implementation, contribution, and business maturity as the gate.'],['Curate the room','Bring together the right founders, experts, and questions.'],['Protect the experience','Keep Perry focused on high-leverage intellectual and strategic work.']],feeds:'Premium relationships, investment opportunities, legacy work, and Tier 5 leaders.'}]}]
  },
  {
    id:'t5',label:'Tier 5',short:'National Expansion',
    summary:'A light preview of the chapter model: prove Chicago, then expand through proven leaders rather than geography alone.',
    phases:[{id:'chapters',label:'Expansion',short:'Leader first, city second',summary:'The ecosystem expands through members who have implemented, contributed, and earned trust.',proof:'National growth should reproduce the culture and operating system—not just the logo.',subtiers:[{label:'Farm Chapters',short:'Austin, Miami, Nashville & beyond',summary:'Repeatable local chapters combining media, community, services, diagnostics, and SOS.',actions:[['Choose the leader first','Select a proven operator before selecting a market.'],['Launch the chapter playbook','Use repeatable events, technology, community rhythms, and quality standards.'],['Connect the national network','Share opportunities, sponsors, content, services, and advanced founders across cities.']],feeds:'A national network and a larger pool of future Perry-level founders.'}]}]
  }
];

const TIMELINE=[
  {when:'Months 1–3',title:'Phase 1 — Build T1A',text:'Produce the $1 Million Idea media system, 20+ content assets, PM in the AM episode bank, EM:Dirt academy, Pocket AI, guide, website/social reface, and the lead-generation funnel.',chips:['20+ useful media assets','Full podcast episodes','Short-form promos','Patreon content ladder','Academy + Pocket AI','Working lead funnel']},
  {when:'End of Month 3',title:'A Real Walk-Away Point',text:'Perry owns the produced media, academy infrastructure, and functioning funnel. The organization can pause—or continue into the beta and campaign-operation phase.',chips:['Assets delivered','Funnel functioning','Phase 2 is optional continuation']},
  {when:'Months 4–6',title:'Phase 2 — Search, Beta & Retarget',text:'Run the free Search for three months, release the Phase 1 media, give the first 100 users deeper support, retarget into EM:Dirt, and validate the guide with 10 existing Perry clients.',chips:['3-month campaign','First 100 users','10 Perry-client validators','Retargeting data']},
  {when:'Months 7–9',title:'Launch the Improved Ecosystem',text:'Scale EM:Dirt, activate T1B and T1C, sell the $497 diagnostic, and onboard SOS users at $97 for the founding year.',chips:['T1A scale','Community','Services','Diagnostic','SOS']},
  {when:'Months 10–12',title:'Touch the Next Levels',text:'Introduce Tier 3 builders, qualify future Tier 4 Farmhouse participants, and document the Tier 5 chapter path without overbuilding the later map in year one.',chips:['Tier 3 builder cohort','Tier 4 qualification','Tier 5 chapter notes']}
];

const TRANSLATE_OPERATE_BUILD=[
  ['Translate','Turn Perry’s existing IP into modern lessons, stories, offers, and media people can use now.'],
  ['Operate','Run the production, campaigns, academy, accountability, retargeting, diagnostics, software, and reporting.'],
  ['Build','Install the funnels, content library, community, services, operating systems, and next-generation client pipeline.']
];

const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
let tierIndex=0,phaseIndex=0,subIndex=0;

function current(){
  const tier=PIPELINE[tierIndex],phase=tier.phases[phaseIndex],sub=phase.subtiers[subIndex];
  return{tier,phase,sub}
}

function renderChoices(id,items,selected,formatter,onClick){
  const el=document.getElementById(id);
  el.innerHTML=items.map((x,i)=>`<button class="choice ${i===selected?'active':''}" data-i="${i}">${formatter(x)}</button>`).join('');
  el.querySelectorAll('button').forEach(b=>b.onclick=()=>onClick(+b.dataset.i))
}

function renderPipeline(){
  const {tier,phase,sub}=current();
  document.getElementById('breadcrumb').innerHTML=`<b>${tier.label}</b> &nbsp;›&nbsp; ${phase.label} &nbsp;›&nbsp; ${sub.label}`;
  renderChoices('tierRow',PIPELINE,tierIndex,x=>`<b>${x.label}</b><span>${x.short}</span>`,i=>{tierIndex=i;phaseIndex=0;subIndex=0;renderPipeline()});
  renderChoices('phaseRow',tier.phases,phaseIndex,x=>`<b>${x.label}</b><span>${x.short}</span>`,i=>{phaseIndex=i;subIndex=0;renderPipeline()});
  renderChoices('subRow',phase.subtiers,subIndex,x=>`<b>${x.label}</b><span>${x.short}</span>`,i=>{subIndex=i;renderPipeline()});
  document.getElementById('focus').innerHTML=`<div class="focus-title"><div><h3>${sub.label}</h3><p class="focus-summary">${sub.summary}</p></div><span class="step-badge">${tier.label} / ${phase.label}</span></div><div class="actions-grid">${sub.actions.map((a,i)=>`<article class="action-card"><div><span class="num">${i+1}</span><b>${a[0]}</b></div><p>${a[1]}</p><div class="action-meta"><div class="meta"><small>Phase purpose</small>${phase.summary}</div><div class="meta"><small>Why it matters</small>${phase.proof}</div><div class="meta"><small>Feeds next</small>${sub.feeds}</div></div></article>`).join('')}</div><div class="feeds">Feeds next → ${sub.feeds}</div>`;
}

function renderTimeline(){
  document.getElementById('timelineGrid').innerHTML=TIMELINE.map(x=>`<article class="timeline-card"><div class="timeline-top"><b>${x.title}</b><span>${x.when}</span></div><p>${x.text}</p><div class="deliverables">${x.chips.map(c=>`<span>${c}</span>`).join('')}</div></article>`).join('')
}

function renderTOB(){
  document.getElementById('tob').innerHTML=TRANSLATE_OPERATE_BUILD.map(x=>`<article class="tob-card"><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')
}

function openPage(id,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===id));
  document.querySelectorAll('.nav').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'})
}

function bindNav(){
  document.querySelectorAll('.nav').forEach(b=>b.onclick=()=>openPage(b.dataset.page,b))
}

const ECON={t1a:297,mml:197,farm:500,diag:497,sos:97,tier3:3564};
const PHASE_ONE_TARGET=60000;

function updateEconomicsCopy(team){
  const economics=document.getElementById('economics');
  if(!economics)return;

  const head=economics.querySelector('.section-head p');
  if(head){
    head.textContent=team
      ? 'T1A only needs to recover the $60,000 Phase 1 build—not carry the entire year by itself. Two hundred three sales cover that build; the wider ecosystem increases lifetime value through analysis, software, community, services, content, sponsors, and leadership.'
      : 'T1A only needs to recover the $60,000 Phase 1 build. Two hundred three sales cover that build; the goal is not to stop there, but to sell the connected ecosystem and create the conditions that grow future unicorns.'
  }

  const cards=economics.querySelectorAll('.econ-card');
  if(cards.length>=3){
    cards[0].querySelector('span').textContent='T1A front-door price';
    cards[0].querySelector('strong').textContent='$297';
    cards[0].querySelector('p').textContent='EM:Dirt is the practical entry point.';

    cards[1].querySelector('span').textContent='Core modeled lifetime path';
    cards[1].querySelector('strong').textContent='$5,152';
    cards[1].querySelector('p').textContent='T1A + Leadership + Farm + Diagnostic + SOS founding year + one Tier 3 year.';

    cards[2].querySelector('span').textContent='Phase 1 recovery benchmark';
    cards[2].querySelector('strong').textContent='203 sales';
    cards[2].querySelector('p').textContent='$60,000 ÷ $297 rounds up to 203 sales, producing $60,291.';
  }

  const chips=economics.querySelector('.chip-row');
  if(chips && ![...chips.children].some(x=>x.textContent.includes('Patreon'))){
    const chip=document.createElement('span');
    chip.className='chip';
    chip.textContent='Patreon extended episodes';
    chips.appendChild(chip);
  }

  const excluded=economics.querySelector('.not-included');
  if(excluded && !excluded.querySelector('.patreon-note')){
    const note=document.createElement('p');
    note.className='fine patreon-note';
    note.textContent='The public edit creates reach. Full conversations, extended cuts, bonus breakdowns, and behind-the-scenes material can create a smaller recurring Patreon revenue stream alongside sponsorships and platform monetization.';
    const existing=excluded.querySelector('.fine');
    excluded.insertBefore(note,existing||null);
  }
}

function injectTitleStyles(){
  const style=document.createElement('style');
  style.textContent=`
    .hero h1,.section-head h2,.focus-title h3,.choice b,.tob-card h3,.timeline-top b,
    .proof-card h3,.not-included h3,.team-card h3,.ask h3,.econ-card strong,.calc-total strong{
      font-family:"Arial Black",Arial,sans-serif!important;
      letter-spacing:.01em!important;
      -webkit-text-stroke:1px #050507;
      paint-order:stroke fill;
      text-shadow:1px 1px 0 #000!important
    }
    .hero h1{
      -webkit-text-stroke:2px #050507;
      text-shadow:2px 2px 0 #000!important
    }
    .calc-total strong{
      -webkit-text-stroke:1.5px #050507;
      text-shadow:2px 2px 0 #000!important
    }
  `;
  document.head.appendChild(style);
}

function initEconomics(team){
  const base=document.getElementById('baseSales');
  const full=document.getElementById('fullRate');
  const tier2=document.getElementById('tier2Rate');
  if(!base||!full||!tier2)return;

  base.min='0';
  base.max='700';
  base.value='203';
  full.value='5';
  tier2.value='10';

  const hints=base.closest('.control')?.querySelectorAll('.range-hints span');
  if(hints?.length===2){
    hints[0].textContent='0';
    hints[1].textContent='700';
  }

  [base,full,tier2].forEach(x=>x.oninput=()=>calcEconomics(team));
  calcEconomics(team)
}

function calcEconomics(team){
  const base=+document.getElementById('baseSales').value;
  const fullPct=+document.getElementById('fullRate').value;
  const t2Pct=+document.getElementById('tier2Rate').value;
  const full=Math.round(base*fullPct/100);
  const t2=Math.round(base*t2Pct/100);

  document.getElementById('baseOut').textContent=base.toLocaleString();
  document.getElementById('fullOut').textContent=fullPct+'%';
  document.getElementById('tier2Out').textContent=t2Pct+'%';

  const t1a=base*ECON.t1a;
  const fullIncrement=full*(ECON.mml+ECON.farm+ECON.diag+ECON.sos+ECON.tier3);
  const t2Increment=t2*(ECON.diag+ECON.sos);
  const total=t1a+fullIncrement+t2Increment;
  const recovery=t1a-PHASE_ONE_TARGET;

  document.getElementById('gross').textContent=money(total);

  const recoverySentence=t1a>=PHASE_ONE_TARGET
    ? `${base.toLocaleString()} T1A buyers create ${money(t1a)}, covering the $60,000 Phase 1 build by ${money(recovery)}.`
    : `${base.toLocaleString()} T1A buyers create ${money(t1a)}, leaving ${money(Math.abs(recovery))} to recover the $60,000 Phase 1 build.`;

  document.getElementById('econCopy').textContent=
    `${recoverySentence} ${full.toLocaleString()} modeled full-path customers add ${money(fullIncrement)}, and ${t2.toLocaleString()} additional Tier 2 customers add ${money(t2Increment)}.`;

  document.getElementById('breakdown').innerHTML=
    `<div class="break-row"><span>T1A front-door sales</span><b>${money(t1a)}</b></div>`+
    `<div class="break-row"><span>Phase 1 build target</span><b>${money(PHASE_ONE_TARGET)}</b></div>`+
    `<div class="break-row"><span>T1A recovery margin</span><b>${recovery>=0?'+':''}${money(recovery)}</b></div>`+
    `<div class="break-row"><span>${full} full-path customers</span><b>${money(fullIncrement)}</b></div>`+
    `<div class="break-row"><span>${t2} additional Tier 2 customers</span><b>${money(t2Increment)}</b></div>`+
    `<div class="break-row total"><span>Modeled gross ecosystem revenue</span><b>${money(total)}</b></div>`+
    `${team?`<div class="break-row"><span>Year-one engagement remains on Team & Ask</span><b>$200,000</b></div>`:''}`;
}

document.addEventListener('DOMContentLoaded',()=>{
  injectTitleStyles();
  renderPipeline();
  renderTimeline();
  renderTOB();
  bindNav();

  const team=document.body.classList.contains('team-mode');
  updateEconomicsCopy(team);
  initEconomics(team);

  const detail=document.getElementById('detailToggle');
  if(detail)detail.onclick=()=>{
    document.body.classList.toggle('advanced');
    detail.classList.toggle('active')
  }
});