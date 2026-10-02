const stores = [
  {id:'S0001',name:'广州天河服务中心',region:'华南',province:'广东',type:'实体服务中心',status:'营业',tier:'S',risk:'green',score:93.3,sales:280000,mom:.12,deposit:79500,settlement:70000,overdue:0,inventory:210000,slow:.071,turnover:34,rate:.75,activities:5,diagnosis:'经营稳健，资金和库存效率处于同群前10%。',advice:'建议维持75%押货率，可评估信用额度上调至9.3万元，并作为区域标杆复制高周转做法。'},
  {id:'S0002',name:'深圳南山微店',region:'华南',province:'广东',type:'线上微店',status:'营业',tier:'S',risk:'green',score:94.4,sales:160000,mom:.08,deposit:50000,settlement:40000,overdue:0,inventory:90000,slow:.089,turnover:28,rate:.75,activities:4,diagnosis:'线上转化效率高、库存轻、无资金风险。',advice:'维持75%押货率，增加私域复购和组合购试点。'},
  {id:'S0003',name:'杭州西湖体验店',region:'华东',province:'浙江',type:'实体店',status:'营业',tier:'A',risk:'green',score:76.1,sales:190000,mom:-.04,deposit:65500,settlement:28500,overdue:0,inventory:240000,slow:.146,turnover:55,rate:.85,activities:3,diagnosis:'销售轻微下滑，但资金安全，库存仍在可控区间。',advice:'保持85%押货率，执行30天复购提升计划，避免库存继续上升。'},
  {id:'S0004',name:'成都锦江服务中心',region:'西南',province:'四川',type:'实体服务中心',status:'营业',tier:'D',risk:'red',score:43.0,sales:145000,mom:-.18,deposit:94600,settlement:21750,overdue:6000,inventory:310000,slow:.274,turnover:82,rate:.85,activities:2,diagnosis:'销售下滑、库存资金占用偏高，并出现轻度逾期。',advice:'暂停信用提额；7日内核对结算并提交滞销SKU调拨清单。'},
  {id:'S0005',name:'武汉江汉店',region:'华中',province:'湖北',type:'实体店',status:'营业',tier:'D',risk:'red',score:15.0,sales:98000,mom:-.28,deposit:68000,settlement:14700,overdue:18000,inventory:260000,slow:.346,turnover:108,rate:.85,activities:1,diagnosis:'逾期、库存积压、销售下滑和违规风险叠加。',advice:'押货率升至100%并暂停新增信用；财务2日内清收，供应链7日内完成滞销清理方案。'},
  {id:'S0006',name:'西安高新微店',region:'华北',province:'陕西',type:'线上微店',status:'暂停',tier:'D',risk:'red',score:10.5,sales:15000,mom:-.45,deposit:28000,settlement:0,overdue:12000,inventory:120000,slow:.5,turnover:145,rate:1,activities:0,diagnosis:'长期低活跃、欠款且库存严重积压，经营状态已暂停。',advice:'冻结新增押货和信用，人工核查退出或重启条件。'},
  {id:'S0007',name:'北京朝阳服务中心',region:'华北',province:'北京',type:'实体服务中心',status:'营业',tier:'S',risk:'green',score:93.4,sales:330000,mom:.16,deposit:87500,settlement:82500,overdue:0,inventory:260000,slow:.069,turnover:32,rate:.75,activities:6,diagnosis:'高增长、高活跃、低库存风险。',advice:'维持75%押货率并开放区域导师店计划。'},
  {id:'S0008',name:'上海浦东体验店',region:'华东',province:'上海',type:'实体店',status:'营业',tier:'S',risk:'green',score:88.6,sales:300000,mom:.05,deposit:75000,settlement:75000,overdue:0,inventory:290000,slow:.11,turnover:40,rate:.75,activities:4,diagnosis:'整体稳健，库存结构略弱于同层门店。',advice:'维持75%押货率，优化长尾SKU占比。'},
  {id:'S0009',name:'南京鼓楼店',region:'华东',province:'江苏',type:'实体店',status:'营业',tier:'D',risk:'red',score:54.6,sales:175000,mom:-.09,deposit:73600,settlement:26250,overdue:3000,inventory:250000,slow:.20,turnover:68,rate:.85,activities:2,diagnosis:'经营动能减弱并出现欠款，健康分跌破红线。',advice:'维持85%押货但冻结提额，双周复盘销售恢复与欠款清理。'},
  {id:'S0010',name:'长沙岳麓微店',region:'华中',province:'湖南',type:'线上微店',status:'营业',tier:'A',risk:'green',score:77.5,sales:88000,mom:.03,deposit:41250,settlement:13200,overdue:0,inventory:110000,slow:.20,turnover:64,rate:.85,activities:3,diagnosis:'销售恢复，库存仍需继续优化。',advice:'保持85%押货率，优先处理临近滞销阈值SKU。'},
  {id:'S0011',name:'沈阳和平店',region:'华北',province:'辽宁',type:'实体店',status:'营业',tier:'D',risk:'red',score:12.0,sales:72000,mom:-.22,deposit:47000,settlement:0,overdue:15000,inventory:230000,slow:.413,turnover:118,rate:1,activities:1,diagnosis:'欠款、库存、增长和违规风险同时触发红色预警。',advice:'维持100%押货，信用降至0，启动人工风控调查。'},
  {id:'S0012',name:'青岛市南服务中心',region:'华北',province:'山东',type:'实体服务中心',status:'营业',tier:'S',risk:'green',score:90.9,sales:210000,mom:.11,deposit:77250,settlement:31500,overdue:0,inventory:220000,slow:.127,turnover:49,rate:.85,activities:5,diagnosis:'增长和服务活跃度较好，资金安全。',advice:'可评估从85%调整至75%，审批后灰度观察。'},
  {id:'S0013',name:'昆明盘龙店',region:'西南',province:'云南',type:'实体店',status:'装修',tier:'D',risk:'red',score:33.0,sales:32000,mom:-.35,deposit:57000,settlement:0,overdue:8000,inventory:150000,slow:.333,turnover:126,rate:.85,activities:0,diagnosis:'装修状态叠加经营停滞，当前指标不宜与营业门店直接比较。',advice:'转入特殊状态队列，确认重开计划和库存处置方案。'},
  {id:'S0014',name:'厦门思明微店',region:'华南',province:'福建',type:'线上微店',status:'营业',tier:'S',risk:'green',score:96.1,sales:125000,mom:.20,deposit:42500,settlement:31250,overdue:0,inventory:80000,slow:.063,turnover:25,rate:.75,activities:4,diagnosis:'高增长且库存轻，是线上微店标杆。',advice:'维持75%押货率，复制内容与复购路径。'},
  {id:'S0015',name:'郑州金水服务中心',region:'华中',province:'河南',type:'实体服务中心',status:'营业',tier:'D',risk:'red',score:58.0,sales:155000,mom:-.02,deposit:74250,settlement:23250,overdue:2000,inventory:275000,slow:.218,turnover:73,rate:.85,activities:3,diagnosis:'健康分接近红线，库存和客诉为主要拖累。',advice:'维持85%押货率，执行库存与服务双专项，30天后复评。'}
];

const storeOpenDates = {
  S0001:'2021-03-18',S0002:'2025-11-06',S0003:'2023-05-20',S0004:'2022-09-12',S0005:'2024-02-08',
  S0006:'2026-01-15',S0007:'2020-06-28',S0008:'2024-04-16',S0009:'2025-08-21',S0010:'2025-10-10',
  S0011:'2019-12-03',S0012:'2023-08-19',S0013:'2026-03-09',S0014:'2026-02-14',S0015:'2022-11-25'
};
const openedAt = store => storeOpenDates[store.id] || '2020-01-01';

const monthly = [
  ['08月',188,192],['09月',195,198],['10月',202,205],['11月',210,208],['12月',228,220],
  ['01月',196,200],['02月',175,182],['03月',205,206],['04月',214,212],['05月',220,218],['06月',231,226],['07月',242,235]
];

const networkMetrics = {
  totalStores:7026,
  serviceCenters:2184,
  microStores:4842,
  activeStores:6760,
  monthlyPerformance:242000000,
  endingDeposit:110000000,
  overdue:4300000,
  inventory:193000000,
  averageHealth:78.6,
  newStores12m:638,
  activeNewStores12m:612,
  newStoreMonthlyAvg:32400,
  serviceCenterMonthlyAvg:58600,
  microStoreMonthlyAvg:25500
};
const newStoreCohort = [
  ['08月',42,29800,55200,23800],['09月',44,30100,55800,24100],['10月',47,30500,56300,24400],['11月',50,30800,56900,24600],
  ['12月',55,31200,57500,24900],['01月',58,31500,58000,25100],['02月',49,30600,56800,24500],['03月',52,31000,57200,24700],
  ['04月',55,31600,57800,25000],['05月',57,31900,58200,25200],['06月',60,32100,58400,25400],['07月',69,32400,58600,25500]
];

const categoryMeta = [
  {key:'health', name:'健康品类', short:'健康', color:'#148b7d', experience:'营养健康体验装＋7天打卡包', enablement:'健康顾问微课、会员健康打卡与复购提醒'},
  {key:'beauty', name:'美容品类', short:'美容', color:'#b76d8b', experience:'护肤体验装＋肌肤测试工具', enablement:'主题美容沙龙、体验流程话术与顾客回访'},
  {key:'daily', name:'日化品类', short:'日化', color:'#4f87aa', experience:'家庭清洁试用组合＋便携分装', enablement:'家庭场景陈列、组合购和周期性复购提醒'},
  {key:'kitchen', name:'小型厨具品类', short:'厨具', color:'#d09a43', experience:'轻量厨具演示套装＋食谱卡', enablement:'场景演示课、短视频素材与烹饪体验活动'}
];

// 销售结构与押货库存结构均为演示数据，生产版应来自门店-SKU-品类明细。
const categoryProfiles = {
  S0001:{sales:[.46,.24,.22,.08],stock:[.39,.28,.24,.09]}, S0002:{sales:[.39,.36,.20,.05],stock:[.31,.38,.25,.06]},
  S0003:{sales:[.25,.48,.19,.08],stock:[.29,.40,.23,.08]}, S0004:{sales:[.44,.18,.28,.10],stock:[.31,.17,.38,.14]},
  S0005:{sales:[.31,.20,.36,.13],stock:[.24,.18,.40,.18]}, S0006:{sales:[.24,.18,.43,.15],stock:[.18,.13,.48,.21]},
  S0007:{sales:[.52,.22,.18,.08],stock:[.44,.25,.22,.09]}, S0008:{sales:[.22,.54,.17,.07],stock:[.26,.45,.21,.08]},
  S0009:{sales:[.28,.31,.29,.12],stock:[.25,.25,.34,.16]}, S0010:{sales:[.34,.26,.35,.05],stock:[.29,.29,.36,.06]},
  S0011:{sales:[.35,.16,.34,.15],stock:[.23,.12,.43,.22]}, S0012:{sales:[.49,.24,.19,.08],stock:[.42,.27,.22,.09]},
  S0013:{sales:[.27,.19,.38,.16],stock:[.20,.15,.42,.23]}, S0014:{sales:[.36,.42,.18,.04],stock:[.30,.39,.26,.05]},
  S0015:{sales:[.43,.21,.26,.10],stock:[.34,.24,.29,.13]}
};

const financeProfiles = {
  S0001:{wallet:38000,guarantee:20000,creditLimit:80000,creditUsed:22000,deliveryIncome:5600,serviceIncome:8400,incentive:2200,otherIncome:800},
  S0002:{wallet:22000,guarantee:10000,creditLimit:50000,creditUsed:8000,deliveryIncome:3200,serviceIncome:4800,incentive:900,otherIncome:300},
  S0003:{wallet:15000,guarantee:20000,creditLimit:60000,creditUsed:26000,deliveryIncome:3800,serviceIncome:5700,incentive:900,otherIncome:300},
  S0004:{wallet:-5000,guarantee:20000,creditLimit:80000,creditUsed:69000,deliveryIncome:2900,serviceIncome:4350,incentive:300,otherIncome:0},
  S0005:{wallet:-12000,guarantee:10000,creditLimit:50000,creditUsed:48000,deliveryIncome:1960,serviceIncome:2940,incentive:0,otherIncome:0},
  S0006:{wallet:-8000,guarantee:10000,creditLimit:20000,creditUsed:20000,deliveryIncome:300,serviceIncome:450,incentive:8200,otherIncome:1800},
  S0007:{wallet:42000,guarantee:20000,creditLimit:100000,creditUsed:18000,deliveryIncome:2600,serviceIncome:3200,incentive:700,otherIncome:300},
  S0008:{wallet:35000,guarantee:20000,creditLimit:100000,creditUsed:30000,deliveryIncome:6000,serviceIncome:9000,incentive:1500,otherIncome:500},
  S0009:{wallet:8000,guarantee:10000,creditLimit:60000,creditUsed:45000,deliveryIncome:2800,serviceIncome:3900,incentive:500,otherIncome:200},
  S0010:{wallet:6000,guarantee:10000,creditLimit:30000,creditUsed:12000,deliveryIncome:1760,serviceIncome:2640,incentive:700,otherIncome:100},
  S0011:{wallet:-6000,guarantee:10000,creditLimit:40000,creditUsed:40000,deliveryIncome:900,serviceIncome:1600,incentive:0,otherIncome:0},
  S0012:{wallet:18000,guarantee:20000,creditLimit:70000,creditUsed:21000,deliveryIncome:4200,serviceIncome:6300,incentive:1600,otherIncome:400},
  S0013:{wallet:1000,guarantee:10000,creditLimit:30000,creditUsed:28000,deliveryIncome:640,serviceIncome:960,incentive:6100,otherIncome:1300},
  S0014:{wallet:12000,guarantee:10000,creditLimit:40000,creditUsed:6000,deliveryIncome:2500,serviceIncome:3750,incentive:1200,otherIncome:250},
  S0015:{wallet:9000,guarantee:20000,creditLimit:60000,creditUsed:39000,deliveryIncome:3100,serviceIncome:4650,incentive:500,otherIncome:150}
};

function financeFor(store){
  const f=financeProfiles[store.id]||{wallet:0,guarantee:0,creditLimit:0,creditUsed:0,deliveryIncome:0,serviceIncome:0,incentive:0,otherIncome:0};
  const comprehensiveIncome=f.deliveryIncome+f.serviceIncome+f.incentive+f.otherIncome;
  const incomeRate=comprehensiveIncome/Math.max(1,store.sales);
  const creditUtil=f.creditUsed/Math.max(1,f.creditLimit);
  const netPosition=store.deposit+f.wallet+f.guarantee-f.creditUsed-store.overdue;
  const fundStatus=(store.overdue>10000||f.wallet<0||creditUtil>.9)?'red':(store.overdue>0||creditUtil>.75?'yellow':'green');
  return {...f,comprehensiveIncome,incomeRate,creditUtil,netPosition,fundStatus};
}

function preferenceFor(store){
  const p = categoryProfiles[store.id] || {sales:[.25,.25,.25,.25],stock:[.25,.25,.25,.25]};
  const ranked = p.sales.map((v,i)=>({i,v})).sort((a,b)=>b.v-a.v);
  const main = categoryMeta[ranked[0].i];
  const gaps = p.sales.map((v,i)=>v-p.stock[i]);
  const opportunityIndex = gaps.indexOf(Math.max(...gaps));
  const excessIndex = gaps.indexOf(Math.min(...gaps));
  const match = Math.max(0,100-p.sales.reduce((sum,v,i)=>sum+Math.abs(v-p.stock[i]),0)*50);
  const confidence = Math.min(96,Math.round(74+(ranked[0].v-ranked[1].v)*85));
  let suggestion = `主推${main.name}，配置${main.experience}；${main.enablement}。`;
  if(gaps[opportunityIndex]>.05) suggestion += ` ${categoryMeta[opportunityIndex].short}销售占比高于库存${(gaps[opportunityIndex]*100).toFixed(0)}个百分点，建议适度增加对应体验装与畅销SKU。`;
  if(gaps[excessIndex]<-.08) suggestion += ` ${categoryMeta[excessIndex].short}押货偏高，建议减少新增押货并清理长尾SKU。`;
  return {...p, main, match, confidence, gaps, suggestion};
}

function inventoryFor(store){
  const seed=Number(store.id.slice(-2))||1;
  const stockQty=Math.max(1,Math.round(store.inventory/(260+(seed%5)*32)));
  const stockedSku=Math.max(12,Math.round(48+Math.sqrt(store.inventory)/2.8+(seed%4)*7));
  const slow6Sku=Math.max(1,Math.round(stockedSku*store.slow*.72));
  const slow12Sku=Math.max(0,Math.round(slow6Sku*(.28+(seed%3)*.08)));
  const safetyInventory=store.sales*1.5;
  const safetyGap=store.inventory-safetyInventory;
  const turnoverYoy=Math.round((store.turnover-60)*.38-(seed%4)*2);
  const depositMom=Math.max(-.55,Math.min(.35,store.mom*.72-.015));
  const depositYoy=Math.max(-.5,Math.min(.45,store.mom*.9+.035));
  const depositReturns=Math.round(store.deposit*(store.slow>.2?.065:.018));
  const reportYoy=Math.max(-.5,Math.min(.5,store.mom*.75+.055));
  const reportReturns=Math.round(store.sales*(store.risk==='red'?.024:.007));
  const noOrderMonths=store.status==='暂停'?5:store.status==='装修'?2:store.mom<-.25?3:0;
  const avgRetailPrice=store.inventory/stockQty;
  const depositOrderAmount=Math.round(store.inventory*(.22+(seed%4)*.025));
  const depositOrderQty=Math.max(1,Math.round(depositOrderAmount/avgRetailPrice));
  const reportQty=Math.max(1,Math.round(store.sales/avgRetailPrice));
  const depositReturnQty=Math.round(depositReturns/avgRetailPrice);
  const reportReturnQty=Math.round(reportReturns/avgRetailPrice);
  const aging6to12=store.slow*.64;
  const aging12plus=store.slow-aging6to12;
  const aging3to6=Math.min(.31,Math.max(.12,.21+(store.turnover-60)/500));
  const aging0to3=Math.max(0,1-aging3to6-store.slow);
  const riskScore=Math.min(100,Math.round(store.turnover*.42+store.slow*105+Math.max(0,-store.mom)*55+noOrderMonths*7));
  return {stockQty,stockedSku,slow6Sku,slow12Sku,safetyInventory,safetyGap,turnoverYoy,depositMom,depositYoy,depositReturns,depositReturnQty,depositOrderAmount,depositOrderQty,reportQty,reportYoy,reportReturns,reportReturnQty,noOrderMonths,avgRetailPrice,aging:[aging0to3,aging3to6,aging6to12,aging12plus],riskScore};
}

function creditAgentFor(store){
  const fin=financeFor(store),seed=Number(store.id.slice(-2))||1;
  const operating=store.status==='营业';
  const isBranch=false;
  const oneToThree=store.rate===1;
  const cloudCredit=seed%5===0?10000:0;
  const depositCredit=seed%4===0?10000:0;
  const guaranteeNegativeMonths=fin.wallet<0?3:0;
  const income6m=fin.comprehensiveIncome;
  const gates=[operating,!oneToThree,!isBranch,cloudCredit===0,depositCredit===0,fin.wallet>=0,guaranteeNegativeMonths===0];
  const eligible=gates.every(Boolean);
  const suggested=!eligible||income6m<5000?0:income6m<30000?10000:30000;
  const failed=['运作店','非1:3保证金','非分店','云商信用额=0','分级押货信用额=0','钱包≥0','近半年押货保证金无负数'].filter((_,i)=>!gates[i]);
  return {fin,operating,isBranch,oneToThree,cloudCredit,depositCredit,guaranteeNegativeMonths,income6m,eligible,suggested,failed};
}

function depositRatioAgentFor(store){
  const fin=financeFor(store),inv=inventoryFor(store);
  const avgIncome=fin.comprehensiveIncome;
  const deliveryGap=store.settlement-avgIncome;
  let suggested=store.rate,reason='按时结算且未命中调整条件，维持现比例';
  if(store.rate===1){reason='100%门店按申请审批，智能体不自动调整';}
  else if(store.status!=='营业'||store.risk==='red') {suggested=.85;reason='不运作/风险店按规则建议调整至85%';}
  else if(store.rate===.75&&(Math.abs(deliveryGap)>avgIncome||store.sales<10000||fin.wallet<0||inv.noOrderMonths>=3||(store.tier==='D'&&store.sales>100000))){suggested=.85;reason='交付差额、低业绩、负余额或连续无销售命中调高规则';}
  else if(store.rate===.85&&Math.abs(deliveryGap)<avgIncome&&store.sales>30000&&store.deposit>0&&avgIncome>30000){suggested=.75;reason='交付差额低于收入且业绩、余额、收入均达标，建议调低';}
  const direction=suggested>store.rate?'调高':suggested<store.rate?'调低':'维持';
  const adjustment=(suggested-store.rate)*store.inventory;
  return {fin,inv,avgIncome,deliveryGap,suggested,direction,adjustment,reason};
}

function inventoryAgentFor(store){
  const inv=inventoryFor(store),pref=preferenceFor(store);
  let action='保持精准补货并按销售偏好配置体验装',priority='P2',release=0;
  if(inv.noOrderMonths>=3){action='冻结新增押货，核查门店状态并制定库存退出方案';priority='P0';release=store.inventory*store.slow;}
  else if(store.turnover>90||store.slow>.2){action='暂停长尾SKU补货，生成跨店调拨与滞销清理清单';priority='P0';release=store.inventory*store.slow*.72;}
  else if(inv.safetyGap>0){action='按安全库存目标压降超储，优先消化非主偏好品类';priority='P1';release=Math.min(inv.safetyGap,store.inventory*store.slow);}
  else if(inv.safetyGap<0){action=`补充${pref.main.name}畅销SKU并配置${pref.main.experience}`;priority='P1';}
  return {inv,pref,action,priority,release};
}

const state = { view:'dashboard', region:'all', province:'all', type:'all', storeId:'all', search:'' };
const titles = {
  dashboard:['门店财务驾驶舱','统一观察资金效率、收入匹配、库存效率和三个智能体建议，形成CFO审批闭环。'],
  stores:['门店360管理','按健康度、风险、类型和区域管理门店，点击任意门店查看完整诊断。'],
  settlement:['资金效率','综合监控保证金、押货余额、钱包、欠款、综合收入及业绩—收入匹配度。'],
  inventory:['库存效率中心','聚焦周转、滞销和资金占用，生成SKU与门店级改善任务。'],
  alerts:['风险预警中心','将资金、库存、增长、服务与合规异常统一进入可闭环处置队列。'],
  agents:['三个财务决策智能体','信誉额授信、押货比例调整、库存积压与调优建议，所有高影响动作均进入人工审批。'],
  tasks:['审批与任务中心','跟踪智能体建议的审批、执行、结果和复盘，确保每项建议形成闭环。']
};

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const money = n => '¥' + Math.abs(n).toLocaleString('zh-CN', {maximumFractionDigits:0});
const pct = n => `${n >= 0 ? '+' : ''}${(n*100).toFixed(1)}%`;
const riskText = r => ({green:'绿色',yellow:'黄色',red:'红色'})[r] || r;

function filteredStores(){
  return stores.filter(s => (state.region==='all'||s.region===state.region) && (state.province==='all'||s.province===state.province) && (state.type==='all'||s.type===state.type) && (state.storeId==='all'||s.id===state.storeId) && (!state.search || `${s.name}${s.province}${s.id}${s.diagnosis}`.toLowerCase().includes(state.search.toLowerCase())));
}

function syncFilterOptions(){
  const provincePool=stores.filter(s=>(state.region==='all'||s.region===state.region)&&(state.type==='all'||s.type===state.type));
  const provinces=[...new Set(provincePool.map(s=>s.province))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
  if(state.province!=='all'&&!provinces.includes(state.province)) state.province='all';
  $('#provinceFilter').innerHTML='<option value="all">全部省份</option>'+provinces.map(p=>`<option value="${p}">${p}</option>`).join('');
  $('#provinceFilter').value=state.province;
  const storePool=stores.filter(s=>(state.region==='all'||s.region===state.region)&&(state.province==='all'||s.province===state.province)&&(state.type==='all'||s.type===state.type));
  if(state.storeId!=='all'&&!storePool.some(s=>s.id===state.storeId)) state.storeId='all';
  $('#storeFilter').innerHTML='<option value="all">全部门店</option>'+storePool.map(s=>`<option value="${s.id}">${s.name}</option>`).join('');
  $('#storeFilter').value=state.storeId;
}

function currentScopeLabel(){
  if(state.storeId!=='all') return stores.find(s=>s.id===state.storeId)?.name || '单店';
  if(state.province!=='all') return `${state.province}省`;
  if(state.region!=='all') return state.region;
  if(state.type!=='all') return state.type;
  return '全国';
}

function render(){
  syncFilterOptions();
  const [heading,sub] = titles[state.view];
  $('#pageHeading').textContent = heading;
  $('#pageSubheading').textContent = `${sub} 当前视角：${currentScopeLabel()}。`;
  $('#viewTitle').textContent = heading;
  const map = {dashboard:renderDashboard,stores:renderStores,settlement:renderSettlement,inventory:renderInventory,alerts:renderAlerts,agents:renderAgents,tasks:renderTasks};
  $('#viewContainer').innerHTML = map[state.view]();
  bindDynamicEvents();
  requestAnimationFrame(drawCharts);
}

function renderDashboard(){
  const list=filteredStores();
  const financeRows=list.map(store=>({store,...financeFor(store)}));
  const inventoryRows=list.map(store=>({store,...inventoryFor(store)}));
  const quadrantRows=financeQuadrantRows(list);
  const total=fn=>list.reduce((sum,store)=>sum+fn(store),0);
  const totalFinance=fn=>financeRows.reduce((sum,row)=>sum+fn(row),0);
  const highLow=quadrantRows.filter(r=>r.quadrant==='highLow');
  const slowAmount=total(s=>s.inventory*s.slow);
  const creditRows=list.map(store=>({store,...creditAgentFor(store)}));
  const ratioRows=list.map(store=>({store,...depositRatioAgentFor(store)}));
  const invAgentRows=list.map(store=>({store,...inventoryAgentFor(store)}));
  const pending=creditRows.filter(r=>r.eligible&&r.suggested>0).length+ratioRows.filter(r=>r.suggested!==r.store.rate).length+invAgentRows.filter(r=>r.priority!=='P2').length;
  const avgTurnover=list.length?total(s=>s.turnover)/list.length:0;
  return `<section class="finance-source-note"><span>规则依据</span><b>《门店资金与库存以及3个智能体.xlsx》</b><p>当前为演示数据；规则结论为建议，不替代授信、押货比例、冻结、调账或库存处置审批。</p></section>

  <section class="finance-hero">
    <div class="finance-hero-copy"><span>CFO · ${currentScopeLabel()}决策摘要</span><h2>${highLow.length?`${highLow.length}家门店处于高销售低收入象限，需优先核对收入完整性`:'资金与收入匹配总体稳定，关注库存结构和智能体待审批建议'}</h2><p>资金风险、收入质量、库存积压和策略调整统一进入一张看板。三个智能体已生成 <b>${pending}项</b> 待审批建议，所有高影响动作保留规则证据与人工决策记录。</p></div>
    <div class="finance-hero-actions"><button class="primary-button" data-nav="agents">进入智能体工作台</button><button class="ghost-button" data-nav="tasks">查看审批队列</button></div>
  </section>

  <section class="finance-kpi-grid">
    ${financeKpi('门店资金沉淀',money(total(s=>s.deposit)+totalFinance(r=>r.wallet)+totalFinance(r=>r.guarantee)),'押货余额＋钱包＋履约保证金','fund')}
    ${financeKpi('逾期欠款',money(total(s=>s.overdue)),`${list.filter(s=>s.overdue>0).length}家待清收；>15天红色`,'overdue',total(s=>s.overdue)>0?'red':'green')}
    ${financeKpi('门店综合收入',money(totalFinance(r=>r.comprehensiveIncome)),`近月配送费＋服务收入＋其他`,'income')}
    ${financeKpi('高销售低收入',`${highLow.length}家`,'固定分界：月均销售10万、月均收入1万','quadrant',highLow.length?'red':'green')}
    ${financeKpi('滞销库存',money(slowAmount),`占库存 ${(slowAmount/Math.max(1,total(s=>s.inventory))*100).toFixed(1)}%；>20%红色`,'stock',slowAmount/Math.max(1,total(s=>s.inventory))>.2?'red':'amber')}
    ${financeKpi('智能体待审批',`${pending}项`,'授信、押货比例、库存处置','agent',pending?'amber':'green')}
  </section>

  <section class="finance-main-grid">
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>资金效率全景</h3><p>保证金、押货余额、钱包、信用占用与欠款统一观察</p></div><button class="panel-link" data-nav="settlement">进入资金效率 →</button></div><div class="fund-health-strip">${fundHealthStrip(list,financeRows)}</div><div class="chart-wrap finance-fund-chart"><canvas id="financeFundChart"></canvas></div></div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>销售业绩 × 综合收入四象限</h3><p>横轴销售｜纵轴收入｜规则固定分界：10万元 / 1万元</p></div><button class="panel-link" data-nav="alerts">查看异常门店 →</button></div><div class="chart-wrap finance-quadrant-chart"><canvas id="financeQuadrantChart"></canvas></div><div class="quadrant-mini-legend">${quadrantMini(quadrantRows)}</div></div>
  </section>

  <section class="finance-inventory-panel panel"><div class="panel-head"><div class="panel-title"><h3>库存效率与资金占用</h3><p>安全库存、周转、库龄、滞销与品类结构联动</p></div><button class="panel-link" data-nav="inventory">进入库存效率 →</button></div><div class="finance-inventory-body">
    <div class="inventory-finance-metrics">${miniDecisionMetric('库存零售额',money(total(s=>s.inventory)),'期末库存')}${miniDecisionMetric('平均周转',avgTurnover.toFixed(1)+'天','绿≤45 / 黄45–90 / 红>90')}${miniDecisionMetric('超6月滞销',money(slowAmount),`${inventoryRows.reduce((n,r)=>n+r.slow6Sku,0)}个SKU`)}${miniDecisionMetric('连续无销售',inventoryRows.filter(r=>r.noOrderMonths>=3).length+'家','≥3月黄 / ≥6月红')}</div>
    <div class="chart-wrap finance-aging-chart"><canvas id="financeAgingChart"></canvas></div>
    <div class="finance-inventory-advice">${inventoryAgentSummary(invAgentRows)}</div>
  </div></section>

  <section class="finance-agent-section"><div class="section-heading"><div><span>AI DECISION AGENTS</span><h3>三个智能体，共用同一套门店事实与审批链</h3></div><button class="ghost-button" data-nav="agents">查看全部建议</button></div><div class="finance-agent-grid">
    ${financeAgentCard('信誉额授信智能体','授信','先准入、后定额',creditRows.filter(r=>r.eligible).length+'家可建议',money(creditRows.reduce((sum,r)=>sum+r.suggested,0)),'运作店、非1:3、非分店、现有信用额为0、钱包及近半年保证金非负',creditRows.filter(r=>r.eligible&&r.suggested>0).length,'credit')}
    ${financeAgentCard('押货比例智能体','比例','75% / 85% / 100%',ratioRows.filter(r=>r.suggested!==r.store.rate).length+'家建议调整',money(ratioRows.reduce((sum,r)=>sum+Math.abs(r.adjustment),0)),'结合网点状态、交付差额、综合收入、销售、欠款与连续无销售',ratioRows.filter(r=>r.suggested!==r.store.rate).length,'ratio')}
    ${financeAgentCard('库存积压与调优智能体','库存','识别—调拨—赋能',invAgentRows.filter(r=>r.priority==='P0').length+'家P0',money(invAgentRows.reduce((sum,r)=>sum+r.release,0)),'结合周转、库龄、安全库存、品类结构、退回和连续无销售',invAgentRows.filter(r=>r.priority!=='P2').length,'inventory')}
  </div></section>

  <section class="panel finance-approval-panel"><div class="panel-head"><div class="panel-title"><h3>智能体联合建议与审批队列</h3><p>按资金影响、风险等级和规则命中数排序；点击门店查看证据链</p></div><button class="primary-button" data-nav="tasks">进入审批中心</button></div>${financeDecisionTable(list,creditRows,ratioRows,invAgentRows)}</section>`;
}

function financeQuadrantRows(list){
  return list.map(store=>{const row={store,...financeFor(store)};row.quadrant=store.sales>100000?(row.comprehensiveIncome>10000?'highHigh':'highLow'):(row.comprehensiveIncome>10000?'lowHigh':'lowLow');return row;});
}
function financeKpi(label,value,note,icon,status=''){const icons={fund:'¥',overdue:'!',income:'↗',quadrant:'◫',stock:'◇',agent:'✦'};return `<article class="finance-kpi ${status}"><div><span>${label}</span><i>${icons[icon]}</i></div><strong>${value}</strong><small>${note}</small></article>`;}
function miniDecisionMetric(label,value,note){return `<article><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`;}
function fundHealthStrip(list,rows){const total=fn=>rows.reduce((sum,r)=>sum+fn(r),0);return `${miniDecisionMetric('履约保证金',money(total(r=>r.guarantee)),'开店固定1万/2万')}${miniDecisionMetric('押货余额',money(list.reduce((s,r)=>s+r.deposit,0)),`${list.filter(s=>s.deposit<0).length}家负余额`)}${miniDecisionMetric('钱包余额',money(total(r=>r.wallet)),`${rows.filter(r=>r.wallet<0).length}家为负`)}${miniDecisionMetric('信用占用',money(total(r=>r.creditUsed)),`使用率${(total(r=>r.creditUsed)/Math.max(1,total(r=>r.creditLimit))*100).toFixed(0)}%`)}`;}
function quadrantMini(rows){const items=[['highHigh','高销售高收入','#2e8b67'],['highLow','高销售低收入','#c34d4d'],['lowLow','低销售低收入','#71858f'],['lowHigh','低销售高收入','#d09a43']];return items.map(x=>`<span><i style="background:${x[2]}"></i>${x[1]} <b>${rows.filter(r=>r.quadrant===x[0]).length}</b></span>`).join('');}
function inventoryAgentSummary(rows){if(!rows.length)return '<div class="empty-state"><b>暂无库存建议</b></div>';return [...rows].sort((a,b)=>b.release-a.release).slice(0,3).map(r=>`<article><span class="risk-pill ${r.priority==='P0'?'red':'yellow'}">${r.priority}</span><div><strong>${r.store.name}</strong><p>${r.action}</p></div><b>${money(r.release)}</b></article>`).join('');}
function financeAgentCard(title,kicker,mode,count,impact,rules,pending,type){return `<article class="finance-agent-card ${type}"><div class="finance-agent-head"><span>${kicker}</span><i>✦</i></div><h3>${title}</h3><p>${rules}</p><div class="agent-decision-mode">${mode}</div><div class="finance-agent-stats"><div><span>本期输出</span><b>${count}</b></div><div><span>影响金额</span><b>${impact}</b></div><div><span>待审批</span><b>${pending}项</b></div></div><small>系统生成建议与证据；最终由业务/财务负责人审批</small></article>`;}
function financeDecisionTable(list,credits,ratios,inventories){
  const creditMap=new Map(credits.map(r=>[r.store.id,r])),ratioMap=new Map(ratios.map(r=>[r.store.id,r])),inventoryMap=new Map(inventories.map(r=>[r.store.id,r]));
  const rows=list.map(store=>({store,credit:creditMap.get(store.id),ratio:ratioMap.get(store.id),inventory:inventoryMap.get(store.id)})).filter(r=>r.credit.suggested>0||r.ratio.suggested!==r.store.rate||r.inventory.priority!=='P2').sort((a,b)=>(b.store.overdue+b.inventory.release)-(a.store.overdue+a.inventory.release)).slice(0,8);
  if(!rows.length)return '<div class="empty-state"><b>当前范围暂无待审批建议</b><span>三个智能体会持续监控规则变化</span></div>';
  return `<div class="table-scroll"><table class="data-table finance-decision-table"><thead><tr><th>门店</th><th>信誉额建议</th><th>押货比例建议</th><th>库存调优建议</th><th>关键证据</th><th>审批边界</th><th>状态</th></tr></thead><tbody>${rows.map(r=>`<tr data-store="${r.store.id}"><td class="store-name"><strong>${r.store.name}</strong><small>${r.store.id} · ${r.store.province}</small></td><td>${r.credit.suggested?`建议${money(r.credit.suggested)}`:`不建议授信`}<small class="cell-note">${r.credit.eligible?'准入条件通过':r.credit.failed.slice(0,2).join('、')}</small></td><td>${(r.store.rate*100).toFixed(0)}% → <b>${(r.ratio.suggested*100).toFixed(0)}%</b><small class="cell-note">${r.ratio.reason}</small></td><td><span class="risk-pill ${r.inventory.priority==='P0'?'red':'yellow'}">${r.inventory.priority}</span> ${r.inventory.action}</td><td>收入${money(r.credit.income6m)} · 销售${money(r.store.sales)}<small class="cell-note">周转${r.store.turnover}天 · 滞销${(r.store.slow*100).toFixed(1)}%</small></td><td>授信/比例/冻结/调拨均需人工审批</td><td><span class="risk-pill yellow">待审批</span></td></tr>`).join('')}</tbody></table></div>`;
}

function dashboardBrief(list,national,redLabel){
  if(national) return {title:'销售好于预算，但风险仍集中在欠款与滞销库存',body:`7月销售额同比增长 <b>15.0%</b>，已连续4个月超过预算；红色门店较上月减少40家。建议优先处理 <b>${redLabel}</b>，其中库存周转超过90天的门店预计可释放资金约 <b>¥83万</b>。`};
  if(!list.length) return {title:'当前筛选范围暂无匹配门店',body:'请调整省份、门店类型或搜索条件后重新查看。'};
  const avgMom=list.reduce((sum,s)=>sum+s.mom,0)/list.length;
  const overdue=list.reduce((sum,s)=>sum+s.overdue,0);
  const slowStock=list.reduce((sum,s)=>sum+s.inventory*s.slow,0);
  const red=list.filter(s=>s.risk==='red').length;
  return {title:red?`${currentScopeLabel()}存在需立即干预的资金或库存风险`:`${currentScopeLabel()}整体经营稳定，可聚焦增长与结构优化`,body:`当前共纳入 <b>${list.length}家</b>门店，销售环比均值 <b>${pct(avgMom)}</b>；红色风险 <b>${red}家</b>，逾期欠款 <b>${money(overdue)}</b>，滞销库存约 <b>${money(slowStock)}</b>。AI建议优先从高逾期、高周转天数门店开始闭环。`};
}

function dashboardInsights(list,national){
  if(national) return `${insight('danger','资金风险','武汉江汉店等3家门店逾期与库存风险叠加，建议冻结自动提额并由财务共享逐笔核对结算。','高置信 92%')}${insight('warning','库存机会','华中实体店滞销占比高于全国同群7.4个百分点，优先调拨12个长尾SKU可减少资金占用。','中高置信 84%')}${insight('','增长标杆','厦门思明微店销售增长20%，库存周转25天，适合作为线上微店增长路径复制样本。','高置信 90%')}`;
  if(!list.length) return '<div class="empty-state"><b>暂无可分析门店</b><span>请调整筛选条件</span></div>';
  const overdue=[...list].sort((a,b)=>b.overdue-a.overdue)[0];
  const turnover=[...list].sort((a,b)=>b.turnover-a.turnover)[0];
  const growth=[...list].sort((a,b)=>b.mom-a.mom)[0];
  return `${insight(overdue.overdue?'danger':'','资金效率',overdue.overdue?`${overdue.name}逾期${money(overdue.overdue)}，建议核对结算时点、押货款对冲与信用占用。`:`${currentScopeLabel()}当前无逾期，建议保持押货款、钱包和授信滚动监控。`,'高置信 92%')}${insight(turnover.turnover>60?'warning':'','库存效率',`${turnover.name}周转${turnover.turnover}天、滞销占比${(turnover.slow*100).toFixed(1)}%，建议结合销售偏好配置体验装并优化长尾SKU。`,'中高置信 86%')}${insight('','增长机会',`${growth.name}销售环比${pct(growth.mom)}，可作为${currentScopeLabel()}同类型门店运营动作与体验活动的参考样本。`,'高置信 90%')}`;
}

function networkOverview(){
  const list=filteredStores();
  const national=state.region==='all'&&state.province==='all'&&state.type==='all'&&state.storeId==='all'&&!state.search;
  const serviceList=list.filter(s=>s.type!=='线上微店');
  const microList=list.filter(s=>s.type==='线上微店');
  const recentList=list.filter(s=>openedAt(s)>='2025-07-23');
  const activeRecent=recentList.filter(s=>s.status==='营业');
  const average=arr=>arr.length?arr.reduce((a,s)=>a+s.sales,0)/arr.length:0;
  const m=national?networkMetrics:{
    totalStores:list.length,serviceCenters:serviceList.length,microStores:microList.length,
    serviceCenterMonthlyAvg:average(serviceList.filter(s=>s.status==='营业')),
    microStoreMonthlyAvg:average(microList.filter(s=>s.status==='营业')),
    newStores12m:recentList.length,activeNewStores12m:activeRecent.length,newStoreMonthlyAvg:average(activeRecent)
  };
  const serviceVsMicro=m.microStoreMonthlyAvg?m.serviceCenterMonthlyAvg/m.microStoreMonthlyAvg:0;
  const newVsService=m.serviceCenterMonthlyAvg?m.newStoreMonthlyAvg/m.serviceCenterMonthlyAvg-1:null;
  const newVsMicro=m.microStoreMonthlyAvg?m.newStoreMonthlyAvg/m.microStoreMonthlyAvg-1:null;
  const serviceShare=m.totalStores?m.serviceCenters/m.totalStores*100:0;
  const microShare=m.totalStores?m.microStores/m.totalStores*100:0;
  const comparisonLabel=serviceVsMicro?`服务中心月均为微店 ${serviceVsMicro.toFixed(1)}倍`:`${currentScopeLabel()}筛选结果`;
  const newComparison=`${newVsService===null?'无服务中心对比':`较服务中心${newVsService>=0?'+':''}${(newVsService*100).toFixed(1)}%`} · ${newVsMicro===null?'无微店对比':`较微店${newVsMicro>=0?'+':''}${(newVsMicro*100).toFixed(1)}%`}`;
  const trendTitle=state.storeId==='all'?'近12个月新开店与分类型月均业绩':'单店与分类型月均业绩走势';
  const trendSub=state.storeId==='all'?'柱：新开店数｜线：新店、服务中心、微店单店月均报单业绩':'线：当前门店模拟走势｜服务中心、微店月均业绩对标';
  return `<section class="network-section">
    <div class="panel network-summary"><div class="panel-head"><div class="panel-title"><h3>门店规模与新店成长</h3><p>${currentScopeLabel()}口径｜近1年开店按开店日期滚动识别</p></div><span class="risk-pill green">${comparisonLabel}</span></div>
      <div class="network-body">
        <div class="network-total"><span>门店总数</span><strong>${m.totalStores.toLocaleString('zh-CN')}<small>家</small></strong><p>覆盖全国服务中心与线上微店</p></div>
        <div class="network-metrics">
          <article><span>实体服务中心</span><strong>${m.serviceCenters.toLocaleString('zh-CN')}家</strong><small>${serviceShare.toFixed(1)}%</small></article>
          <article><span>线上微店</span><strong>${m.microStores.toLocaleString('zh-CN')}家</strong><small>${microShare.toFixed(1)}%</small></article>
          <article><span>服务中心月均业绩</span><strong>${money(m.serviceCenterMonthlyAvg)}<em>/店</em></strong><small>营业服务中心报单均值</small></article>
          <article><span>微店月均业绩</span><strong>${money(m.microStoreMonthlyAvg)}<em>/店</em></strong><small>营业微店报单均值</small></article>
          <article><span>近1年新开店</span><strong>${m.newStores12m}家</strong><small>其中在营${m.activeNewStores12m}家</small></article>
          <article class="compare below"><span>新店月均业绩</span><strong>${money(m.newStoreMonthlyAvg)}<em>/店</em></strong><small>${newComparison}</small></article>
        </div>
      </div>
    </div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>${trendTitle}</h3><p>${trendSub}</p></div><button class="panel-link">查看新店清单 →</button></div><div class="chart-wrap network-chart-wrap"><canvas id="newStoreChart"></canvas></div></div>
  </section>`;
}

function kpi(label,value,unit,delta,foot,icon,cls=''){ return `<article class="kpi-card"><div class="kpi-top"><span>${label}</span><i class="kpi-icon">${icon}</i></div><div class="kpi-value">${value}<small>${unit}</small></div><div class="kpi-foot"><b class="delta ${cls}">${delta}</b><span>${foot}</span></div></article>`; }
function insight(cls,title,text,conf){ return `<article class="insight-card ${cls}"><div class="insight-top"><h4>${title}</h4><span class="confidence">${conf}</span></div><p>${text}</p></article>`; }

function renderStores(){
  const list=filteredStores();
  const counts = ['S','A','B','C','D'].map(t=>list.filter(s=>s.tier===t).length);
  return `<section class="metric-strip">
    <div class="metric-block teal"><span>S/A级优质门店</span><strong>${counts[0]+counts[1]} 家</strong><small>建议优先配置经营资源</small></div>
    <div class="metric-block"><span>B/C级改善门店</span><strong>${counts[2]+counts[3]} 家</strong><small>进入30天专项改善</small></div>
    <div class="metric-block amber"><span>需关注门店</span><strong>${list.filter(s=>s.score<75&&s.score>=60).length} 家</strong><small>健康分低于75分</small></div>
    <div class="metric-block red"><span>红色风险门店</span><strong>${list.filter(s=>s.risk==='red').length} 家</strong><small>需人工介入与审批</small></div>
  </section>
  <section class="dashboard-grid">
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>门店健康分与销售规模</h3><p>圆点越靠右健康度越高</p></div></div><div class="chart-wrap"><canvas id="scatterChart"></canvas></div></div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>区域风险率</h3><p>红色风险门店占比</p></div></div><div class="chart-wrap"><canvas id="regionChart"></canvas></div></div>
  </section>
  <section class="panel"><div class="panel-head"><div class="panel-title"><h3>门店360清单</h3><p>共找到 ${list.length} 家示例门店</p></div><button class="panel-link">批量生成改善计划 →</button></div>${storeTable(list,true)}</section>`;
}

function renderSettlementLegacy(){
  const list=filteredStores(); const due=list.reduce((a,s)=>a+s.settlement,0), dep=list.reduce((a,s)=>a+s.deposit,0), overdue=list.reduce((a,s)=>a+s.overdue,0);
  return `<section class="metric-strip">
    <div class="metric-block teal"><span>本期待清分销售额</span><strong>${money(list.reduce((a,s)=>a+s.sales,0))}</strong><small>100%销售应收口径</small></div>
    <div class="metric-block"><span>销售对冲押货款</span><strong>${money(dep)}</strong><small>批次明细勾稽率99.92%</small></div>
    <div class="metric-block amber"><span>净结算应收</span><strong>${money(due)}</strong><small>扣除配送费与服务费</small></div>
    <div class="metric-block red"><span>逾期未清金额</span><strong>${money(overdue)}</strong><small>${list.filter(s=>s.overdue>0).length}家门店待处理</small></div>
  </section>
  <section class="two-col">
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>结算勾稽进度</h3><p>押货批次—正式销售—对冲—费用—收付款</p></div><span class="risk-pill green">总体正常</span></div><div class="panel-body progress-list">
      ${progress('销售订单与收款',99.8)}${progress('销售与押货批次对冲',99.2)}${progress('配送/服务费重算',98.7)}${progress('结算单与银行流水',97.9)}${progress('异常差异关闭',84.5)}
    </div></div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>AI结算核对结论</h3><p>今日08:30自动分析</p></div></div><div class="panel-body insight-list">
      ${insight('danger','6笔需人工核对','3笔押货余额滚动不平，2笔费用合同版本不一致，1笔退款未匹配原销售订单。','高置信 96%')}
      ${insight('warning','预计影响 ¥28,460','若按当前规则结算，将形成公司多收¥16,200、少收¥12,260。','高置信 94%')}
      ${insight('','建议处理顺序','先阻断异常结算单，再核对销售—押货批次链路，最后由财务审批调账或退款。','规则已命中')}
    </div></div>
  </section>
  <section class="panel"><div class="panel-head"><div class="panel-title"><h3>结算异常清单</h3><p>高影响动作需财务负责人审批</p></div><button class="primary-button">创建核对任务</button></div>${settlementTable(list.filter(s=>s.overdue>0||s.risk==='red'))}</section>`;
}
function renderSettlement(){
  const list=filteredStores();
  const rows=list.map(store=>({store,...financeFor(store)}));
  const total=(key)=>rows.reduce((a,r)=>a+(r[key]||0),0);
  const totalIncome=total('comprehensiveIncome');
  return `<section class="metric-strip">
    <div class="metric-block teal"><span>门店资金沉淀</span><strong>${money(list.reduce((a,s)=>a+s.deposit,0)+total('wallet')+total('guarantee'))}</strong><small>押货款＋钱包＋保证金</small></div>
    <div class="metric-block"><span>期末押货款余额</span><strong>${money(list.reduce((a,s)=>a+s.deposit,0))}</strong><small>销售对冲后滚动余额</small></div>
    <div class="metric-block amber"><span>信用占用</span><strong>${money(total('creditUsed'))}</strong><small>总额度使用率 ${(total('creditUsed')/Math.max(1,total('creditLimit'))*100).toFixed(1)}%</small></div>
    <div class="metric-block red"><span>逾期欠款</span><strong>${money(list.reduce((a,s)=>a+s.overdue,0))}</strong><small>${list.filter(s=>s.overdue>0).length}家门店待清收</small></div>
  </section>

  <section class="fund-overview-grid">
    ${fundCard('钱包余额',money(total('wallet')),rows.filter(r=>r.wallet<0).length+'家余额为负','wallet')}
    ${fundCard('履约保证金',money(total('guarantee')),'覆盖'+rows.filter(r=>r.guarantee>0).length+'家门店','guarantee')}
    ${fundCard('信用总额度',money(total('creditLimit')),'已用'+money(total('creditUsed')),'credit')}
    ${fundCard('资金净头寸',money(total('netPosition')),'押货+钱包+保证金-信用-欠款','position')}
    ${fundCard('红色资金风险',rows.filter(r=>r.fundStatus==='red').length+'家','需人工复核与处置','risk')}
  </section>

  <section class="two-col">
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>门店资金全景</h3><p>押货款、钱包、保证金、信用和欠款统一观察</p></div><button class="panel-link">查看资金口径 →</button></div>${fundTable(rows)}</div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>资金风险结构</h3><p>门店资金构成与风险占用</p></div></div><div class="chart-wrap"><canvas id="fundChart"></canvas></div></div>
  </section>

  <section class="panel income-panel"><div class="panel-head"><div class="panel-title"><h3>门店综合收入分析</h3><p>配送费＋服务收入＋经营激励＋其他收入；用于判断门店真实收益与报单业绩是否匹配</p></div><button class="panel-link">综合收入规则配置 →</button></div>
    <div class="income-summary">
      ${incomeCard('综合收入',money(totalIncome),'总收入率 '+(totalIncome/Math.max(1,list.reduce((a,s)=>a+s.sales,0))*100).toFixed(2)+'%','#13877a')}
      ${incomeCard('配送费收入',money(total('deliveryIncome')),'占综合收入 '+(total('deliveryIncome')/Math.max(1,totalIncome)*100).toFixed(1)+'%','#4d88aa')}
      ${incomeCard('服务收入',money(total('serviceIncome')),'占综合收入 '+(total('serviceIncome')/Math.max(1,totalIncome)*100).toFixed(1)+'%','#a66c8c')}
      ${incomeCard('经营激励及其他',money(total('incentive')+total('otherIncome')),'异常高占比需复核','#d09a43')}
    </div>
    ${incomeTable(rows)}
  </section>

  ${fundsQuadrantSection(list)}

  <section class="two-col">
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>结算勾稽进度</h3><p>押货批次—正式销售—对冲—费用—综合收入—收付款</p></div><span class="risk-pill green">总体正常</span></div><div class="panel-body progress-list">${progress('销售订单与收款',99.8)}${progress('销售与押货批次对冲',99.2)}${progress('配送/服务收入重算',98.4)}${progress('结算单与钱包/银行流水',97.9)}${progress('异常差异关闭',84.5)}</div></div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>AI资金与收入核对结论</h3><p>今日08:30自动分析</p></div></div><div class="panel-body insight-list">
      ${insight('danger','高业绩低收入风险','北京朝阳服务中心报单业绩33万元，但综合收入仅0.68万元，收入率2.1%，明显低于同群。','高置信 95%')}
      ${insight('warning','低业绩高收入异常','西安高新微店与昆明盘龙店报单偏低，但经营激励及其他收入占比异常，需核对激励依据和收入归属。','高置信 92%')}
      ${insight('','资金处置建议','先核对合同费率、服务完成记录与收入归属，再处理钱包负数、信用高占用和逾期欠款。','规则已命中')}
    </div></div>
  </section>`;
}

function fundCard(label,value,note,type){return `<article class="fund-card ${type}"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`;}
function incomeCard(label,value,note,color){return `<article class="income-card"><i style="background:${color}"></i><div><span>${label}</span><strong>${value}</strong><small>${note}</small></div></article>`;}
function progress(label,n){return `<div class="progress-item"><span>${label}</span><div class="progress-track"><i style="width:${n}%"></i></div><b>${n}%</b></div>`;}
function fundsQuadrantSection(list){
  const rows=financeQuadrantRows(list),highLow=rows.filter(r=>r.quadrant==='highLow'),lowHigh=rows.filter(r=>r.quadrant==='lowHigh');
  return `<section class="two-col quadrant-layout funds-quadrant-section"><div class="panel"><div class="panel-head"><div class="panel-title"><h3>业绩与综合收入匹配度四象限</h3><p>固定规则：月均销售10万元 / 月均综合收入1万元</p></div><span class="risk-pill ${highLow.length?'red':'green'}">${highLow.length}家高销售低收入</span></div><div class="chart-wrap quadrant-wrap"><canvas id="fundsQuadrantChart"></canvas></div></div><div class="panel"><div class="panel-head"><div class="panel-title"><h3>异常象限核对动作</h3><p>异常不直接定性，先核合同、服务和收入事实</p></div></div><div class="panel-body quadrant-guide"><article class="quadrant-card q-highlow"><b>高销售低收入 · P0</b><p>核对收入漏结、费率配置、服务完成记录与收入归属。</p><span>${highLow.length}家</span></article><article class="quadrant-card q-lowhigh"><b>低销售高收入 · P1</b><p>拆解补贴、激励、跨期及跨店收入，核对真实性与归属。</p><span>${lowHigh.length}家</span></article><article class="quadrant-card q-highhigh"><b>高销售高收入 · 标杆</b><p>验证收入率和库存效率，沉淀可复制经营路径。</p><span>${rows.filter(r=>r.quadrant==='highHigh').length}家</span></article><article class="quadrant-card q-lowlow"><b>低销售低收入 · 低活跃</b><p>结合库存和连续无销售判断唤醒、转型或退出。</p><span>${rows.filter(r=>r.quadrant==='lowLow').length}家</span></article></div></div></section>`;
}

function renderInventoryLegacy(){
  const list=filteredStores();
  return `<section class="metric-strip">
    <div class="metric-block"><span>库存零售额</span><strong>${money(list.reduce((a,s)=>a+s.inventory,0))}</strong><small>较上月下降1.8%</small></div>
    <div class="metric-block teal"><span>平均周转天数</span><strong>${(list.reduce((a,s)=>a+s.turnover,0)/Math.max(1,list.length)).toFixed(1)} 天</strong><small>目标 ≤ 60天</small></div>
    <div class="metric-block amber"><span>超6月滞销库存</span><strong>${money(list.reduce((a,s)=>a+s.inventory*s.slow,0))}</strong><small>占库存 ${(list.reduce((a,s)=>a+s.inventory*s.slow,0)/Math.max(1,list.reduce((a,s)=>a+s.inventory,0))*100).toFixed(1)}%</small></div>
    <div class="metric-block red"><span>周转红线门店</span><strong>${list.filter(s=>s.turnover>90).length} 家</strong><small>周转天数超过90天</small></div>
  </section>
  <section class="dashboard-grid">
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>库存资金占用 TOP 8</h3><p>库存零售额与滞销占比</p></div></div><div class="chart-wrap"><canvas id="inventoryChart"></canvas></div></div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>AI库存优化建议</h3><p>按预计资金释放排序</p></div></div><div class="panel-body insight-list">
      ${insight('danger','武汉江汉店','12个SKU超过180天无动销，建议暂停补货并向华南S/A级门店调拨。预计释放¥6.8万。','高置信 91%')}
      ${insight('warning','沈阳和平店','库存销售覆盖3.2个月，建议先清理高效期风险SKU并暂停同品类新增押货。','中高置信 86%')}
      ${insight('','跨店调拨机会','青岛市南服务中心的3个畅销SKU在南京缺货，可生成跨店调拨方案，预计减少缺货损失¥1.4万。','中置信 78%')}
    </div></div>
  </section>
  <section class="panel"><div class="panel-head"><div class="panel-title"><h3>门店库存效率清单</h3><p>周转、滞销与销售动能联动分析</p></div><button class="panel-link">生成SKU行动清单 →</button></div>${inventoryTable(list)}</section>`;
}

function renderInventory(){
  const list=filteredStores();
  const rows=list.map(store=>({store,inventory:inventoryFor(store),preference:preferenceFor(store)}));
  const sum=fn=>rows.reduce((total,row)=>total+fn(row),0);
  const totalInventory=sum(r=>r.store.inventory),totalQty=sum(r=>r.inventory.stockQty);
  const totalSku=rows.length?Math.min(sum(r=>r.inventory.stockedSku),Math.round(Math.max(...rows.map(r=>r.inventory.stockedSku))*1.25+rows.length*4)):0;
  const slowAmount=sum(r=>r.store.inventory*r.store.slow),avgTurnover=rows.length?sum(r=>r.store.turnover)/rows.length:0;
  const safetyTarget=sum(r=>r.inventory.safetyInventory),safetyGap=totalInventory-safetyTarget;
  const riskRows=rows.filter(r=>r.store.turnover>90||r.store.slow>.2||r.inventory.noOrderMonths>=3);
  const avgMatch=rows.length?sum(r=>r.preference.match)/rows.length:0;
  const worst=[...rows].sort((a,b)=>b.inventory.riskScore-a.inventory.riskScore)[0];
  const summary=worst?`${worst.store.name}风险评分最高：周转${worst.store.turnover}天、滞销${(worst.store.slow*100).toFixed(1)}%、连续无报单${worst.inventory.noOrderMonths}个月。`:'当前筛选范围暂无库存数据。';
  return `<section class="inventory-source-note"><span>指标原型依据：《库存效率.xlsx》</span><p>当前为演示数据｜库存与周转按日/月更新，押货与报单按月更新；周转同比黄/红阈值待业务确认。</p></section>

  <section class="inventory-kpi-grid">
    ${inventoryKpi('有库存SKU',totalSku.toLocaleString('zh-CN'),'个','当前范围内去重SKU口径','sku')}
    ${inventoryKpi('库存数量',totalQty.toLocaleString('zh-CN'),'件',`库存零售额 ${money(totalInventory)}`,'qty')}
    ${inventoryKpi('库存零售均价',money(totalInventory/Math.max(1,totalQty)),'/件','库存零售额 ÷ 库存数量','price')}
    ${inventoryKpi('平均周转天数',avgTurnover.toFixed(1),'天','目标≤60天；>90天红色','turnover',avgTurnover>90?'red':avgTurnover>60?'amber':'green')}
    ${inventoryKpi('超6月滞销占比',(slowAmount/Math.max(1,totalInventory)*100).toFixed(1),'%',`${money(slowAmount)}；>20%红色`,'slow',slowAmount/Math.max(1,totalInventory)>.2?'red':'green')}
    ${inventoryKpi('安全库存偏差',`${safetyGap>=0?'+':'-'}${money(safetyGap)}`,'',`目标=报单业绩×1.5；当前${safetyGap>=0?'超储':'不足'}`,'safe',safetyGap>0?'amber':'green')}
  </section>

  <section class="inventory-ai-brief">
    <div class="preference-icon">✦</div><div><span>AI · ${currentScopeLabel()}库存诊断</span><h3>${riskRows.length?`${riskRows.length}家门店命中库存处置规则，先控新增押货再消化存量`:'库存结构总体健康，重点关注畅销品补货与体验装配置'}</h3><p>${summary} AI已综合库龄、周转、押货/报单动能、退回与品类偏好生成可执行建议。</p></div><button class="ghost-button">生成库存经营简报</button>
  </section>

  <section class="inventory-control-grid">
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>库存库龄与健康结构</h3><p>库存金额口径｜0–3月、3–6月、6–12月、1年以上</p></div><span class="risk-pill ${slowAmount/Math.max(1,totalInventory)>.2?'red':'green'}">滞销红线 20%</span></div><div class="inventory-aging-layout"><div class="chart-wrap inventory-aging-chart"><canvas id="inventoryAgingChart"></canvas></div><div class="aging-summary">${agingSummary(rows,totalInventory)}</div></div></div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>押货与报单动能</h3><p>近12个月金额趋势｜同时观察数量、退回与连续无报单</p></div><span class="risk-pill ${sum(r=>r.inventory.noOrderMonths>=3)?'red':'green'}">${sum(r=>r.inventory.noOrderMonths>=3)}家连续3月无报单</span></div><div class="chart-wrap inventory-flow-chart"><canvas id="inventoryFlowChart"></canvas></div><div class="inventory-pulse">
      ${pulse('本月押货',money(sum(r=>r.inventory.depositOrderAmount)),`${sum(r=>r.inventory.depositOrderQty).toLocaleString('zh-CN')}件`)}
      ${pulse('押货增速',pct(rows.length?sum(r=>r.inventory.depositMom)/rows.length:0),`同比 ${pct(rows.length?sum(r=>r.inventory.depositYoy)/rows.length:0)}`)}
      ${pulse('押货退回',money(sum(r=>r.inventory.depositReturns)),`${sum(r=>r.inventory.depositReturnQty).toLocaleString('zh-CN')}件`)}
      ${pulse('本月报单',money(sum(r=>r.store.sales)),`${sum(r=>r.inventory.reportQty).toLocaleString('zh-CN')}件`)}
      ${pulse('报单增速',pct(rows.length?sum(r=>r.store.mom)/rows.length:0),`同比 ${pct(rows.length?sum(r=>r.inventory.reportYoy)/rows.length:0)}`)}
      ${pulse('报单退回',money(sum(r=>r.inventory.reportReturns)),`${sum(r=>r.inventory.reportReturnQty).toLocaleString('zh-CN')}件`)}
    </div></div>
  </section>

  <section class="dashboard-grid">
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>品类销售结构 vs 押货库存结构</h3><p>识别畅销缺货、结构错配与体验装配置机会</p></div><div class="category-legend"><span><i class="sales-dot"></i>报单销售</span><span><i class="stock-dot"></i>押货库存</span></div></div><div class="chart-wrap"><canvas id="categoryChart"></canvas></div></div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>安全库存与赋能建议</h3><p>安全库存目标=报单业绩×1.5</p></div><span class="match-score">结构匹配 ${avgMatch.toFixed(0)}分</span></div><div class="panel-body inventory-recommendations">${inventoryRecommendations(rows)}</div></div>
  </section>

  <section class="panel inventory-diagnosis-panel"><div class="panel-head"><div class="panel-title"><h3>门店库存经营诊断清单</h3><p>点击门店查看360画像；红色规则：滞销占比>20%、周转>90天或连续3个月无报单</p></div><button class="panel-link">批量生成处置任务 →</button></div>${inventoryDiagnosticTable(rows)}</section>

  <section class="inventory-bottom-grid">
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>月报单畅销SKU TOP 10</h3><p>原需求支持TOP20；原型默认展示前10</p></div><button class="panel-link">查看TOP20 →</button></div>${topSkuTable(rows)}</div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>归因分析 · 待办 · 处理建议</h3><p>从识别风险到责任人闭环</p></div><span class="risk-pill red">${riskRows.length}项待处置</span></div><div class="panel-body inventory-task-board">${inventoryTaskBoard(rows)}</div></div>
  </section>`;
}

function inventoryKpi(label,value,unit,note,icon,status=''){
  const icons={sku:'▦',qty:'◇',price:'¥',turnover:'↻',slow:'!',safe:'◎'};
  return `<article class="inventory-kpi ${status}"><div><span>${label}</span><i>${icons[icon]}</i></div><strong>${value}<em>${unit}</em></strong><small>${note}</small></article>`;
}
function pulse(label,value,note){return `<article><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`;}
function agingSummary(rows,total){
  const labels=['0–3个月','3–6个月','6–12个月','1年以上'],colors=['#168779','#6ba59b','#d4a04a','#c45454'];
  const vals=labels.map((_,i)=>rows.reduce((sum,r)=>sum+r.store.inventory*r.inventory.aging[i],0));
  return labels.map((label,i)=>`<article><i style="background:${colors[i]}"></i><div><span>${label}</span><strong>${money(vals[i])}</strong></div><b>${(vals[i]/Math.max(1,total)*100).toFixed(1)}%</b></article>`).join('');
}
function inventoryRecommendations(rows){
  if(!rows.length)return '<div class="empty-state"><b>暂无匹配数据</b><span>请调整筛选条件</span></div>';
  const shortage=[...rows].sort((a,b)=>a.inventory.safetyGap-b.inventory.safetyGap)[0];
  const excess=[...rows].sort((a,b)=>b.inventory.safetyGap-a.inventory.safetyGap)[0];
  const mismatch=[...rows].sort((a,b)=>a.preference.match-b.preference.match)[0];
  return `${insight(shortage.inventory.safetyGap<0?'warning':'','畅销补货',`${shortage.store.name}安全库存${shortage.inventory.safetyGap<0?'缺口':'余量'}${money(shortage.inventory.safetyGap)}，主偏好为${shortage.preference.main.name}；建议优先补畅销SKU，不做全品类平均补货。`,'规则命中')}${insight(excess.inventory.safetyGap>0?'danger':'','超储消化',`${excess.store.name}较安全库存目标${excess.inventory.safetyGap>=0?'高':'低'}${money(excess.inventory.safetyGap)}，建议暂停低动销SKU新增押货并匹配跨店调拨。`,'高置信 90%')}${insight('','体验装配置',`${mismatch.store.name}${mismatch.preference.main.name}偏好最明确，结构匹配${mismatch.preference.match.toFixed(0)}分；建议配置${mismatch.preference.main.experience}。`,'中高置信 86%')}`;
}
function inventoryDiagnosticTable(rows){
  const ranked=[...rows].sort((a,b)=>b.inventory.riskScore-a.inventory.riskScore);
  const salesRank=new Map([...rows].sort((a,b)=>b.store.sales-a.store.sales).map((r,i)=>[r.store.id,i+1]));
  return `<div class="table-scroll"><table class="data-table inventory-diagnostic-table"><thead><tr><th>门店</th><th>库存SKU/数量</th><th>库存额/均价</th><th>安全库存偏差</th><th>周转/同比</th><th>滞销SKU</th><th>滞销占比</th><th>押货环比/同比</th><th>报单环比/同比</th><th>业绩排名</th><th>连续无报单</th><th>AI动作</th></tr></thead><tbody>${ranked.map(r=>{const red=r.store.turnover>90||r.store.slow>.2||r.inventory.noOrderMonths>=3;const action=r.inventory.noOrderMonths>=3?'冻结新增押货并人工核查':r.store.slow>.2?'清理滞销、跨店调拨':r.inventory.safetyGap<0?'补畅销SKU与体验装':'按销售偏好优化结构';return `<tr data-store="${r.store.id}"><td class="store-name"><strong>${r.store.name}</strong><small>${r.store.id} · ${r.store.province}</small></td><td><b>${r.inventory.stockedSku}</b>个 / ${r.inventory.stockQty}件</td><td><b>${money(r.store.inventory)}</b><small class="cell-note">均价${money(r.inventory.avgRetailPrice)}</small></td><td class="${r.inventory.safetyGap>0?'money negative':''}">${r.inventory.safetyGap>=0?'+':'-'}${money(r.inventory.safetyGap)}</td><td><span class="risk-pill ${r.store.turnover>90?'red':r.store.turnover>60?'yellow':'green'}">${r.store.turnover}天</span><small class="cell-note">同比${r.inventory.turnoverYoy>=0?'+':''}${r.inventory.turnoverYoy}天</small></td><td>6月+ ${r.inventory.slow6Sku}<small class="cell-note">1年+ ${r.inventory.slow12Sku}</small></td><td><span class="risk-pill ${r.store.slow>.2?'red':'green'}">${(r.store.slow*100).toFixed(1)}%</span></td><td class="${r.inventory.depositMom<0?'money negative':''}">${pct(r.inventory.depositMom)}<small class="cell-note">同比${pct(r.inventory.depositYoy)}</small></td><td class="${r.store.mom<0?'money negative':''}">${pct(r.store.mom)}<small class="cell-note">同比${pct(r.inventory.reportYoy)}</small></td><td><b>#${salesRank.get(r.store.id)}</b><small class="cell-note">共${rows.length}家</small></td><td><span class="risk-pill ${r.inventory.noOrderMonths>=3?'red':r.inventory.noOrderMonths?'yellow':'green'}">${r.inventory.noOrderMonths}个月</span></td><td class="recommend-cell"><b class="${red?'money negative':''}">${action}</b></td></tr>`}).join('')}</tbody></table></div>`;
}

const skuCatalog=[
  ['H001','复合维生素营养包','健康'],['B006','焕亮修护精华','美容'],['D012','浓缩洗衣凝珠','日化'],['H018','益生菌固体饮料','健康'],['K003','便携养生壶','厨具'],['B021','舒缓保湿面膜','美容'],['D025','厨房净洁喷雾','日化'],['H027','高钙蛋白营养粉','健康'],['K011','多功能料理杯','厨具'],['D031','抑菌洗手液','日化']
];
function topSkuTable(rows){
  const total=rows.reduce((sum,r)=>sum+r.store.sales,0);
  return `<div class="table-scroll"><table class="data-table sku-top-table"><thead><tr><th>排名</th><th>SKU/品名</th><th>品类</th><th>报单金额</th><th>销售占比</th><th>库存覆盖</th></tr></thead><tbody>${skuCatalog.map((sku,i)=>{const share=Math.max(.018,.072-i*.0052),amount=total*share,cover=22+i*6;return `<tr><td><b>${i+1}</b></td><td class="store-name"><strong>${sku[1]}</strong><small>${sku[0]}</small></td><td><span class="category-chip" style="--chip:${categoryMeta[['健康','美容','日化','厨具'].indexOf(sku[2])]?.color||'#648ea7'}">${sku[2]}</span></td><td>${money(amount)}</td><td>${(share*100).toFixed(1)}%</td><td><span class="risk-pill ${cover>60?'yellow':'green'}">${cover}天</span></td></tr>`}).join('')}</tbody></table></div>`;
}
function inventoryTaskBoard(rows){
  if(!rows.length)return '<div class="empty-state"><b>暂无任务</b></div>';
  const ordered=[...rows].sort((a,b)=>b.inventory.riskScore-a.inventory.riskScore).slice(0,4);
  return ordered.map((r,i)=>{const reason=r.inventory.noOrderMonths>=3?`连续${r.inventory.noOrderMonths}个月无报单`:r.store.slow>.2?`滞销占比${(r.store.slow*100).toFixed(1)}%`:`安全库存偏差${money(r.inventory.safetyGap)}`;const action=r.inventory.noOrderMonths>=3?'财务与运营联合核查门店状态':r.store.slow>.2?'供应链生成SKU调拨/清理方案':'运营按品类偏好配置体验装';return `<article class="inventory-task"><div class="task-rank ${i===0?'urgent':''}">${i+1}</div><div><strong>${r.store.name}</strong><p><b>归因：</b>${reason}；押货环比${pct(r.inventory.depositMom)}、报单环比${pct(r.store.mom)}。</p><small><b>待办：</b>${action}</small></div><button data-store="${r.store.id}">查看</button></article>`}).join('');
}

function renderAlertsLegacy(){
  const list=filteredStores(); const risky=list.filter(s=>s.risk==='red'||s.overdue>0||s.turnover>90);
  return `<section class="metric-strip">
    <div class="metric-block red"><span>P0高风险预警</span><strong>${risky.filter(s=>s.risk==='red').length} 项</strong><small>2小时内完成分派</small></div>
    <div class="metric-block amber"><span>P1关注预警</span><strong>28 项</strong><small>今日新增6项</small></div>
    <div class="metric-block"><span>本月已关闭</span><strong>214 项</strong><small>按期关闭率94.8%</small></div>
    <div class="metric-block teal"><span>预计风险敞口</span><strong>${money(risky.reduce((a,s)=>a+s.overdue+s.inventory*s.slow,0))}</strong><small>欠款+可处置滞销库存</small></div>
  </section>
  <section class="two-col">
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>风险预警队列</h3><p>按影响金额、严重度和持续时间排序</p></div><button class="panel-link">规则配置</button></div><div class="panel-body risk-list">${renderRiskRows(risky)}</div></div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>风险类型结构</h3><p>一店可命中多个风险标签</p></div></div><div class="chart-wrap"><canvas id="riskChart"></canvas></div></div>
  </section>`;
}

function renderAlerts(){
  const list=filteredStores();
  const rows=list.map(store=>({store,...financeFor(store)}));
  const salesLine=100000;
  const incomeLine=10000;
  const quadrant=(r)=>r.store.sales>salesLine?(r.comprehensiveIncome>incomeLine?'highHigh':'highLow'):(r.comprehensiveIncome>incomeLine?'lowHigh':'lowLow');
  rows.forEach(r=>r.quadrant=quadrant(r));
  const risky=list.filter(s=>s.risk==='red'||s.overdue>0||s.turnover>90);
  const highLow=rows.filter(r=>r.quadrant==='highLow');
  const lowHigh=rows.filter(r=>r.quadrant==='lowHigh');
  return `<section class="metric-strip">
    <div class="metric-block red"><span>高业绩低收入</span><strong>${highLow.length} 家</strong><small>核对费率、服务记录与收入归属</small></div>
    <div class="metric-block amber"><span>低业绩高收入</span><strong>${lowHigh.length} 家</strong><small>核对激励、补贴及其他收入</small></div>
    <div class="metric-block"><span>其他红色预警</span><strong>${risky.length} 项</strong><small>欠款、库存、增长与合规</small></div>
    <div class="metric-block teal"><span>匹配分析覆盖</span><strong>${rows.length} 家</strong><small>生产版覆盖全部7,000+门店</small></div>
  </section>

  <section class="quadrant-intro">
    <div><span>风险管理 · 收入匹配度</span><h3>销售业绩 × 门店综合收入四象限</h3><p>依据规则表，以月均综合收入1万元、月均销售10万元为高低分界；气泡大小可在生产版表示对应门店家数。</p></div>
    <div class="quadrant-legend"><span><i class="q1"></i>高业绩高收入：协调标杆</span><span><i class="q2"></i>低业绩高收入：收入异常</span><span><i class="q3"></i>低业绩低收入：低活跃</span><span><i class="q4"></i>高业绩低收入：重点风险</span></div>
  </section>

  <section class="two-col quadrant-layout">
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>销售业绩与综合收入匹配度</h3><p>横轴：近6月月均销售｜纵轴：配送费、服务收入及个人收入月均</p></div><button class="panel-link">查看规则口径 →</button></div><div class="chart-wrap quadrant-wrap"><canvas id="quadrantChart"></canvas></div></div>
    <div class="panel"><div class="panel-head"><div class="panel-title"><h3>四象限风险解读</h3><p>异常不直接定性，需结合合同与服务事实人工复核</p></div></div><div class="panel-body quadrant-guide">
      <article class="quadrant-card q-highlow"><b>IV 高业绩低收入 · 重点风险</b><p>可能存在费率配置错误、配送/服务漏计、服务记录缺失、收入归属错误或结算未完成。</p><span>${highLow.length}家 · 优先级P0</span></article>
      <article class="quadrant-card q-lowhigh"><b>II 低业绩高收入 · 异常关注</b><p>可能存在激励补贴占比过高、跨期确认、收入归属错误或非报单服务收入，需要拆解来源。</p><span>${lowHigh.length}家 · 优先级P1</span></article>
      <article class="quadrant-card q-highhigh"><b>I 高业绩高收入 · 协调标杆</b><p>重点验证收入率、服务质量和库存效率，将优秀门店的活动与服务路径复制到同群。</p><span>${rows.filter(r=>r.quadrant==='highHigh').length}家</span></article>
      <article class="quadrant-card q-lowlow"><b>III 低业绩低收入 · 低活跃</b><p>结合无报单月数、库存和门店状态判断唤醒、转型或退出，不宜单纯增加押货。</p><span>${rows.filter(r=>r.quadrant==='lowLow').length}家</span></article>
    </div></div>
  </section>

  <section class="panel quadrant-risk-table"><div class="panel-head"><div class="panel-title"><h3>收入匹配异常门店清单</h3><p>重点查看高业绩低收入和低业绩高收入门店</p></div><button class="primary-button">批量创建核对任务</button></div>${quadrantTable(rows.filter(r=>r.quadrant==='highLow'||r.quadrant==='lowHigh'),salesLine,incomeLine)}</section>

  <section class="two-col"><div class="panel"><div class="panel-head"><div class="panel-title"><h3>其他风险预警队列</h3><p>资金、库存、增长、服务和合规风险</p></div><button class="panel-link">规则配置</button></div><div class="panel-body risk-list">${renderRiskRows(risky)}</div></div><div class="panel"><div class="panel-head"><div class="panel-title"><h3>AI风险处置建议</h3><p>先核事实，再调整政策</p></div></div><div class="panel-body insight-list">
    ${insight('danger','高业绩低收入','先检查合同费率、生效时间、服务完成记录、配送业绩和收入归属，再确认是否存在漏结或错结。','高置信 95%')}
    ${insight('warning','低业绩高收入','拆解激励及其他收入，核对是否跨期、跨店、补贴依赖或与实际服务不匹配。','高置信 92%')}
    ${insight('','管理动作','系统只生成核对清单和证据；调账、追回、补付、费率调整必须由财务与业务负责人审批。','治理规则')}
  </div></div></section>`;
}

function renderAgents(){
  const list=filteredStores();
  const credits=list.map(store=>({store,...creditAgentFor(store)}));
  const ratios=list.map(store=>({store,...depositRatioAgentFor(store)}));
  const inventories=list.map(store=>({store,...inventoryAgentFor(store)}));
  const eligible=credits.filter(r=>r.eligible&&r.suggested>0),ratioChanges=ratios.filter(r=>r.suggested!==r.store.rate),inventoryActions=inventories.filter(r=>r.priority!=='P2');
  return `<section class="agent-governance-banner"><div class="ai-orb">✦</div><div><span>AI AGENT GOVERNANCE</span><h3>三个智能体只负责识别、测算和建议，不直接改变门店财务政策</h3><p>信誉额授信、押货比例、冻结押货、库存调拨和报废均属于高影响动作，必须由业务与财务负责人审批；系统完整保留输入、规则命中、建议、审批和结果。</p></div><button class="ghost-button">查看规则版本 v1.0</button></section>

  <section class="agent-workbench-grid">
    ${agentWorkbenchCard('信誉额授信智能体','credit','先判断是否可借，再按近半年综合收入建议额度',credits.length,eligible.length,money(eligible.reduce((s,r)=>s+r.suggested,0)),['运作店','保证金类型≠1:3','非分店','云商/分级押货信用额=0','钱包≥0','近半年押货保证金≥0'],['0.5–3万：1万元','3万元以上：3万元','任一准入失败：不建议授信'])}
    ${agentWorkbenchCard('押货比例智能体','ratio','根据风险和经营事实，在75%/85%/100%之间生成调整建议',ratios.length,ratioChanges.length,money(ratioChanges.reduce((s,r)=>s+Math.abs(r.adjustment),0)),['网点状态','近3月交付差额','近3月综合收入','近3月销售','即时/近3月押货余额','连续无销售'],['75%命中风险：调至85%','85%经营达标：调至75%','100%：按申请，不自动调整'])}
    ${agentWorkbenchCard('库存积压与调优智能体','inventory','结合周转、库龄、安全库存和品类偏好输出处置与赋能方案',inventories.length,inventoryActions.length,money(inventories.reduce((s,r)=>s+r.release,0)),['周转天数','超6月/1年库存','滞销金额占比','安全库存偏差','品类结构','退回与连续无销售'],['周转>90天：红色','滞销占比>20%：红色','连续无销售≥3月：干预'])}
  </section>

  <section class="agent-rule-grid"><div class="panel"><div class="panel-head"><div class="panel-title"><h3>信誉额准入漏斗</h3><p>第一层规则需全部满足；任何一项失败即不建议借款</p></div><span class="risk-pill green">${eligible.length}家通过</span></div><div class="panel-body rule-funnel">${creditRuleFunnel(credits)}</div></div><div class="panel"><div class="panel-head"><div class="panel-title"><h3>押货比例调整方向</h3><p>展示建议，不直接修改系统系数</p></div><span class="risk-pill yellow">${ratioChanges.length}家变化</span></div><div class="panel-body ratio-direction-grid">${ratioDirectionSummary(ratios)}</div></div><div class="panel"><div class="panel-head"><div class="panel-title"><h3>库存处置优先级</h3><p>按风险与预计释放资金排序</p></div><span class="risk-pill red">${inventories.filter(r=>r.priority==='P0').length}家P0</span></div><div class="panel-body inventory-agent-list">${inventoryAgentSummary(inventories)}</div></div></section>

  <section class="panel"><div class="panel-head"><div class="panel-title"><h3>三个智能体联合建议清单</h3><p>同一门店可同时收到授信、押货比例和库存建议，审批时需综合判断</p></div><button class="primary-button" data-nav="tasks">批量进入审批</button></div>${financeDecisionTable(list,credits,ratios,inventories)}</section>`;
}

function agentWorkbenchCard(title,type,desc,coverage,actions,impact,rules,outputs){return `<article class="agent-workbench-card ${type}"><div class="agent-workbench-head"><i>✦</i><span>在线 · 月度运行</span></div><h3>${title}</h3><p>${desc}</p><div class="agent-output-strip"><div><span>覆盖</span><b>${coverage}家</b></div><div><span>本期建议</span><b>${actions}项</b></div><div><span>影响金额</span><b>${impact}</b></div></div><div class="agent-rule-columns"><div><b>输入与准入</b>${rules.map(r=>`<span>✓ ${r}</span>`).join('')}</div><div><b>建议输出</b>${outputs.map(r=>`<span>→ ${r}</span>`).join('')}</div></div><small>审批边界：系统不得自动授信、改比例、冻结、调拨或报废</small></article>`;}
function creditRuleFunnel(rows){const stages=[['运作店',r=>r.operating],['非1:3/非分店',r=>!r.oneToThree&&!r.isBranch],['现有信用额为0',r=>r.cloudCredit===0&&r.depositCredit===0],['钱包非负',r=>r.fin.wallet>=0],['保证金半年非负',r=>r.guaranteeNegativeMonths===0],['建议授信',r=>r.eligible&&r.suggested>0]];return stages.map((s,i)=>{const n=rows.filter(s[1]).length,p=rows.length?n/rows.length*100:0;return `<article style="--funnel:${Math.max(22,p)}%"><div><span>${i+1}</span><b>${s[0]}</b></div><strong>${n}家</strong><small>${p.toFixed(0)}%</small></article>`}).join('');}
function ratioDirectionSummary(rows){const groups=[['调高至85%',rows.filter(r=>r.suggested>r.store.rate),'red'],['调低至75%',rows.filter(r=>r.suggested<r.store.rate),'green'],['维持现比例',rows.filter(r=>r.suggested===r.store.rate),'yellow']];return groups.map(g=>`<article><span class="risk-pill ${g[2]}">${g[0]}</span><strong>${g[1].length}家</strong><p>${g[1].slice(0,2).map(r=>r.store.name).join('、')||'当前无门店'}</p></article>`).join('');}

function renderTasks(){
  return `<section class="metric-strip"><div class="metric-block teal"><span>进行中任务</span><strong>38 项</strong><small>其中P0任务6项</small></div><div class="metric-block"><span>本月完成</span><strong>214 项</strong><small>完成率94.8%</small></div><div class="metric-block amber"><span>临期任务</span><strong>9 项</strong><small>未来48小时到期</small></div><div class="metric-block red"><span>逾期任务</span><strong>4 项</strong><small>已升级至部门负责人</small></div></section>
  <section class="panel"><div class="panel-head"><div class="panel-title"><h3>AI建议执行任务</h3><p>责任人、截止时间、审批与经营结果全程留痕</p></div><button class="primary-button">＋ 新建任务</button></div>${taskTable()}</section>`;
}

function renderRiskRows(list){
  if(!list.length) return '<div class="empty-state"><b>当前筛选范围暂无高风险事项</b><span>可调整区域或门店类型查看其他数据</span></div>';
  return list.map(s=>`<div class="risk-row ${s.risk==='red'?'':'warning'}" data-store="${s.id}"><div class="risk-level">${s.risk==='red'?'P0':'P1'}</div><div><strong>${s.name}</strong><small>${s.diagnosis}</small></div><div class="risk-amount"><b>${money(s.overdue+s.inventory*s.slow)}</b><span>风险敞口</span></div></div>`).join('');
}

function storeTable(list,full=false){
  if(!list.length) return '<div class="empty-state"><b>未找到匹配门店</b><span>请调整筛选条件或搜索关键词</span></div>';
  return `<div class="table-scroll"><table class="data-table"><thead><tr><th style="width:18%">门店</th><th style="width:8%">状态</th><th style="width:10%">类型</th><th style="width:10%">销售额</th><th style="width:9%">环比</th><th style="width:13%">健康分</th><th style="width:8%">等级</th><th style="width:10%">风险</th><th style="width:10%">押货建议</th><th style="width:4%"></th></tr></thead><tbody>${list.map(s=>`<tr data-store="${s.id}"><td class="store-name"><strong>${s.name}</strong><small>${s.id} · ${s.province} · 开店${openedAt(s)}</small></td><td><span class="status-pill ${s.status==='营业'?'':'paused'}">${s.status}</span></td><td>${s.type}</td><td>${money(s.sales)}</td><td class="${s.mom<0?'money negative':''}">${pct(s.mom)}</td><td><div class="score-cell"><b>${s.score.toFixed(1)}</b><span class="score-bar ${s.score<60?'danger':''}"><i style="width:${s.score}%"></i></span></div></td><td><span class="tier-pill ${s.tier}">${s.tier}</span></td><td><span class="risk-pill ${s.risk}">${riskText(s.risk)}</span></td><td>${s.risk==='red'?'100%/暂停':s.score>=85?'75%':'85%'}</td><td>›</td></tr>`).join('')}</tbody></table></div><div class="table-footer"><span>显示 ${list.length} 条示例数据</span><span>生产版支持7000+门店分页与下钻</span></div>`;
}

function fundTable(rows){
  return `<div class="table-scroll"><table class="data-table fund-table"><thead><tr><th>门店</th><th>押货款</th><th>钱包余额</th><th>保证金</th><th>信用占用/额度</th><th>逾期欠款</th><th>资金净头寸</th><th>状态</th></tr></thead><tbody>${rows.map(r=>`<tr data-store="${r.store.id}"><td class="store-name"><strong>${r.store.name}</strong><small>${r.store.id}</small></td><td>${money(r.store.deposit)}</td><td class="${r.wallet<0?'money negative':''}">${r.wallet<0?'-':''}${money(r.wallet)}</td><td>${money(r.guarantee)}</td><td><b>${money(r.creditUsed)}</b><small class="cell-note"> / ${money(r.creditLimit)} · ${(r.creditUtil*100).toFixed(0)}%</small></td><td class="${r.store.overdue?'money negative':''}">${money(r.store.overdue)}</td><td class="${r.netPosition<0?'money negative':''}">${r.netPosition<0?'-':''}${money(r.netPosition)}</td><td><span class="risk-pill ${r.fundStatus}">${riskText(r.fundStatus)}</span></td></tr>`).join('')}</tbody></table></div>`;
}

function incomeTable(rows){
  return `<div class="table-scroll"><table class="data-table income-table"><thead><tr><th>门店</th><th>报单业绩</th><th>配送费收入</th><th>服务收入</th><th>激励及其他</th><th>综合收入</th><th>综合收入率</th><th>匹配判断</th></tr></thead><tbody>${rows.map(r=>{const label=r.incomeRate<.03&&r.store.sales>=155000?'高业绩低收入':r.incomeRate>.12&&r.store.sales<100000?'低业绩高收入':r.store.sales>=155000?'协调增长':'低位观察';const cls=label.includes('低收入')||label.includes('高收入')?'red':label==='协调增长'?'green':'yellow';return `<tr data-store="${r.store.id}"><td class="store-name"><strong>${r.store.name}</strong><small>${r.store.type}</small></td><td>${money(r.store.sales)}</td><td>${money(r.deliveryIncome)}</td><td>${money(r.serviceIncome)}</td><td>${money(r.incentive+r.otherIncome)}</td><td><b>${money(r.comprehensiveIncome)}</b></td><td>${(r.incomeRate*100).toFixed(2)}%</td><td><span class="risk-pill ${cls}">${label}</span></td></tr>`}).join('')}</tbody></table></div>`;
}

function quadrantTable(rows,salesLine,incomeLine){
  if(!rows.length) return '<div class="empty-state"><b>当前筛选范围暂无收入匹配异常</b><span>建议继续观察收入率与服务完成情况</span></div>';
  const baselineRate=incomeLine/Math.max(1,salesLine);
  return `<div class="table-scroll"><table class="data-table quadrant-table"><thead><tr><th>门店</th><th>象限</th><th>报单业绩</th><th>综合收入</th><th>收入率</th><th>基准收入</th><th>收入差异</th><th>可能原因</th><th>AI核对建议</th></tr></thead><tbody>${rows.map(r=>{const highLow=r.quadrant==='highLow';const expected=r.store.sales*baselineRate;const gap=r.comprehensiveIncome-expected;return `<tr data-store="${r.store.id}"><td class="store-name"><strong>${r.store.name}</strong><small>${r.store.type} · ${r.store.province}</small></td><td><span class="risk-pill ${highLow?'red':'yellow'}">${highLow?'高业绩低收入':'低业绩高收入'}</span></td><td>${money(r.store.sales)}</td><td><b>${money(r.comprehensiveIncome)}</b></td><td>${(r.incomeRate*100).toFixed(2)}%</td><td>${money(expected)}</td><td class="${gap<0?'money negative':''}">${gap<0?'-':''}${money(gap)}</td><td>${highLow?'费率/漏计/收入归属/结算时点':'激励占比/跨期/跨店归属/非报单服务'}</td><td class="recommend-cell">${highLow?'核对合同费率、配送与服务完成记录，检查是否漏结或错结。':'拆解激励和其他收入，核对审批依据、服务事实与归属期间。'}</td></tr>`}).join('')}</tbody></table></div>`;
}

function settlementTable(list){return `<table class="data-table"><thead><tr><th>门店</th><th>异常类型</th><th>期末押货款</th><th>净结算应收</th><th>逾期</th><th>AI建议</th><th>状态</th></tr></thead><tbody>${list.map(s=>`<tr data-store="${s.id}"><td class="store-name"><strong>${s.name}</strong><small>${s.id}</small></td><td>${s.overdue>0?'逾期/账龄异常':'余额滚动待核'}</td><td>${money(s.deposit)}</td><td>${money(s.settlement)}</td><td class="money negative">${money(s.overdue)}</td><td>${s.advice}</td><td><span class="risk-pill red">待核对</span></td></tr>`).join('')}</tbody></table>`;}
function preferenceTable(profiles){
  if(!profiles.length) return '<div class="empty-state"><b>当前筛选范围暂无门店</b><span>请调整区域或门店类型</span></div>';
  return `<div class="table-scroll"><table class="data-table preference-table"><thead><tr><th style="width:16%">门店</th><th style="width:9%">主销售偏好</th><th style="width:16%">销售品类结构</th><th style="width:16%">押货库存结构</th><th style="width:9%">结构匹配度</th><th style="width:9%">偏好置信度</th><th style="width:25%">AI针对性赋能建议</th></tr></thead><tbody>${profiles.map(p=>{
    const s=p.store;
    const salesMix=p.sales.map((v,i)=>`<i title="${categoryMeta[i].name} ${(v*100).toFixed(0)}%" style="width:${v*100}%;background:${categoryMeta[i].color}"></i>`).join('');
    const stockMix=p.stock.map((v,i)=>`<i title="${categoryMeta[i].name} ${(v*100).toFixed(0)}%" style="width:${v*100}%;background:${categoryMeta[i].color}"></i>`).join('');
    return `<tr data-store="${s.id}"><td class="store-name"><strong>${s.name}</strong><small>${s.type} · ${s.province}</small></td><td><span class="category-chip" style="--chip:${p.main.color}">${p.main.name}</span></td><td><div class="mix-meter">${salesMix}</div><small class="mix-caption">${p.sales.map((v,i)=>`${categoryMeta[i].short}${(v*100).toFixed(0)}%`).join(' · ')}</small></td><td><div class="mix-meter muted">${stockMix}</div><small class="mix-caption">${p.stock.map((v,i)=>`${categoryMeta[i].short}${(v*100).toFixed(0)}%`).join(' · ')}</small></td><td><b class="match-score ${p.match<85?'warning':''}">${p.match.toFixed(0)}分</b></td><td>${p.confidence}%</td><td class="recommend-cell">${p.suggestion}</td></tr>`;
  }).join('')}</tbody></table></div><div class="table-footer"><span>销售结构：近90天正式销售净额占比</span><span>押货库存结构：期末可售库存零售额占比</span></div>`;
}

function inventoryTable(list){return `<table class="data-table"><thead><tr><th>门店</th><th>库存零售额</th><th>滞销库存</th><th>滞销占比</th><th>周转天数</th><th>销售环比</th><th>AI策略</th></tr></thead><tbody>${[...list].sort((a,b)=>b.turnover-a.turnover).map(s=>`<tr data-store="${s.id}"><td class="store-name"><strong>${s.name}</strong><small>${s.type}</small></td><td>${money(s.inventory)}</td><td>${money(s.inventory*s.slow)}</td><td>${(s.slow*100).toFixed(1)}%</td><td><span class="risk-pill ${s.turnover>90?'red':s.turnover>60?'yellow':'green'}">${s.turnover}天</span></td><td class="${s.mom<0?'money negative':''}">${pct(s.mom)}</td><td>${s.turnover>90?'暂停补货/调拨清理':s.turnover>60?'SKU瘦身':'保持精准补货'}</td></tr>`).join('')}</tbody></table>`;}
function taskTable(){const rows=[['TK-0722-001','核对武汉江汉店押货结算差异','P0','财务共享-李敏','2026-07-23','审批中','¥18,000'],['TK-0722-002','沈阳和平店信用降额与清收','P0','信用风控-王磊','2026-07-23','待审批','¥15,000'],['TK-0722-003','西安高新微店库存退出方案','P0','西北区-陈卓','2026-07-24','进行中','¥60,000'],['TK-0722-004','武汉江汉店滞销SKU跨店调拨','P1','供应链-周颖','2026-07-29','进行中','¥68,000'],['TK-0722-005','杭州西湖店30天复购提升计划','P1','华东运营-林越','2026-08-21','未开始','¥24,000']];return `<table class="data-table"><thead><tr><th>任务编号</th><th>任务</th><th>优先级</th><th>负责人</th><th>截止日期</th><th>状态</th><th>预计价值</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td><strong>${r[1]}</strong></td><td><span class="risk-pill ${r[2]==='P0'?'red':'yellow'}">${r[2]}</span></td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td>${r[6]}</td></tr>`).join('')}</tbody></table>`;}
function agentActivityTable(){const rows=[['08:28','结算核对智能体','发现6笔结算差异并阻断自动清分','等待财务复核'],['08:16','门店健康诊断智能体','7家门店进入红色风险层','已创建任务'],['07:55','库存优化智能体','生成12项跨店调拨建议','等待供应链审批'],['07:30','CFO经营分析智能体','完成7月经营简报与会议议题','已完成']];return `<table class="data-table"><thead><tr><th>时间</th><th>智能体</th><th>事件</th><th>状态</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</tbody></table>`;}

function drawCharts(){
  if($('#newStoreChart')) newStoreGrowthChart($('#newStoreChart'),scopedNewStoreCohort());
  if($('#salesChart')) lineChart($('#salesChart'),scopedMonthlyTrend());
  if($('#tierChart')) doughnutChart($('#tierChart'), filteredStores(), state.region==='all'&&state.province==='all'&&state.type==='all'&&state.storeId==='all'&&!state.search ? [1550,2200,1800,1116,360] : null);
  if($('#scatterChart')) scatterChart($('#scatterChart'), filteredStores());
  if($('#regionChart')) barChart($('#regionChart'),['华南','华东','华北','西南','华中'],[5,18,27,43,31],['#3ea795','#5d91b7','#d7a64f','#c95d58','#d18c48']);
  if($('#fundChart')) fundStructureChart($('#fundChart'), filteredStores());
  if($('#financeFundChart')) fundStructureChart($('#financeFundChart'), filteredStores());
  if($('#financeQuadrantChart')) incomeQuadrantChart($('#financeQuadrantChart'), filteredStores(),100000,10000);
  if($('#fundsQuadrantChart')) incomeQuadrantChart($('#fundsQuadrantChart'), filteredStores(),100000,10000);
  if($('#quadrantChart')) incomeQuadrantChart($('#quadrantChart'), filteredStores(),100000,10000);
  if($('#inventoryAgingChart')) inventoryAgingChart($('#inventoryAgingChart'), filteredStores());
  if($('#financeAgingChart')) inventoryAgingChart($('#financeAgingChart'), filteredStores());
  if($('#inventoryFlowChart')) inventoryFlowChart($('#inventoryFlowChart'), filteredStores());
  if($('#categoryChart')) categoryMixChart($('#categoryChart'), filteredStores());
  if($('#inventoryChart')) horizontalBar($('#inventoryChart'),[...filteredStores()].sort((a,b)=>b.inventory-a.inventory).slice(0,8));
  if($('#riskChart')) barChart($('#riskChart'),['欠款/结算','库存积压','销售下滑','违规合规','数据质量'],[46,68,55,22,14],['#c95555','#d28b44','#d5aa50','#a95866','#648ea7']);
}

function scopedMonthlyTrend(){
  const list=filteredStores();
  const national=state.region==='all'&&state.province==='all'&&state.type==='all'&&state.storeId==='all'&&!state.search;
  const current=national?networkMetrics.monthlyPerformance:list.reduce((sum,s)=>sum+s.sales,0);
  const scale=current/10000/242;
  return monthly.map(d=>[d[0],Math.round(d[1]*scale),Math.round(d[2]*scale)]);
}

function scopedNewStoreCohort(){
  const national=state.region==='all'&&state.province==='all'&&state.type==='all'&&state.storeId==='all'&&!state.search;
  if(national) return newStoreCohort;
  const list=filteredStores();
  const active=list.filter(s=>s.status==='营业');
  const service=active.filter(s=>s.type!=='线上微店');
  const micro=active.filter(s=>s.type==='线上微店');
  const recent=active.filter(s=>openedAt(s)>='2025-07-23');
  const average=arr=>arr.length?arr.reduce((sum,s)=>sum+s.sales,0)/arr.length:0;
  const recentCount=list.filter(s=>openedAt(s)>='2025-07-23').length;
  const serviceBase=average(service)||networkMetrics.serviceCenterMonthlyAvg;
  const microBase=average(micro)||networkMetrics.microStoreMonthlyAvg;
  const newBase=average(recent)||average(active)||networkMetrics.newStoreMonthlyAvg;
  return newStoreCohort.map(d=>[
    d[0],
    Math.round(d[1]/networkMetrics.newStores12m*recentCount),
    Math.round(newBase*d[2]/networkMetrics.newStoreMonthlyAvg),
    Math.round(serviceBase*d[3]/networkMetrics.serviceCenterMonthlyAvg),
    Math.round(microBase*d[4]/networkMetrics.microStoreMonthlyAvg)
  ]);
}

function setupCanvas(canvas){const dpr=Math.min(window.devicePixelRatio||1,2); const rect=canvas.getBoundingClientRect(); canvas.width=rect.width*dpr; canvas.height=rect.height*dpr; const ctx=canvas.getContext('2d');ctx.scale(dpr,dpr);return {ctx,w:rect.width,h:rect.height};}
function lineChart(canvas,data){const {ctx,w,h}=setupCanvas(canvas),p={l:52,r:14,t:18,b:30};const values=data.flatMap(d=>[d[1],d[2]]),rawMin=Math.min(...values),rawMax=Math.max(...values),gap=Math.max(1,rawMax-rawMin);const max=rawMax+gap*.16,min=Math.max(0,rawMin-gap*.16);ctx.font='9px Microsoft YaHei';ctx.strokeStyle='#e8edef';ctx.fillStyle='#87959d';ctx.lineWidth=1;for(let i=0;i<5;i++){const y=p.t+(h-p.t-p.b)*i/4;ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(w-p.r,y);ctx.stroke();ctx.fillText(Math.round(max-(max-min)*i/4).toLocaleString('zh-CN'),5,y+3);}data.forEach((d,i)=>{const x=p.l+(w-p.l-p.r)*i/(data.length-1);ctx.fillText(d[0],x-10,h-8);});const plot=(idx,color,dash=[])=>{ctx.beginPath();ctx.setLineDash(dash);data.forEach((d,i)=>{const x=p.l+(w-p.l-p.r)*i/(data.length-1),y=p.t+(max-d[idx])/(max-min)*(h-p.t-p.b);i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.strokeStyle=color;ctx.lineWidth=2;ctx.stroke();ctx.setLineDash([]);};plot(2,'#b4c0c6',[5,4]);plot(1,'#138477');ctx.fillStyle='#138477';data.forEach((d,i)=>{const x=p.l+(w-p.l-p.r)*i/(data.length-1),y=p.t+(max-d[1])/(max-min)*(h-p.t-p.b);ctx.beginPath();ctx.arc(x,y,2.5,0,Math.PI*2);ctx.fill();});ctx.fillStyle='#138477';ctx.fillText('● 销售收入',w-145,10);ctx.fillStyle='#8d9aa2';ctx.fillText('┄ 预算',w-70,10);}
function newStoreGrowthChart(canvas,data){
  const {ctx,w,h}=setupCanvas(canvas),p={l:34,r:52,t:30,b:30};const maxCount=Math.max(5,...data.map(d=>d[1]))*1.1;const averages=data.flatMap(d=>[d[2],d[3],d[4]]);const rawMin=Math.min(...averages),rawMax=Math.max(...averages),avgGap=Math.max(1000,rawMax-rawMin);const minAvg=Math.max(0,rawMin-avgGap*.12),maxAvg=rawMax+avgGap*.12;
  ctx.font='8px Microsoft YaHei';ctx.strokeStyle='#e7ecef';ctx.fillStyle='#84939c';
  for(let i=0;i<=3;i++){const y=p.t+(h-p.t-p.b)*i/3;ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(w-p.r,y);ctx.stroke();ctx.fillText(Math.round(maxCount*(1-i/3)),8,y+3);ctx.textAlign='right';ctx.fillText(((maxAvg-(maxAvg-minAvg)*i/3)/10000).toFixed(1)+'万',w-3,y+3);ctx.textAlign='left';}
  const group=(w-p.l-p.r)/data.length,bw=Math.min(18,group*.46);
  data.forEach((d,i)=>{const cx=p.l+group*(i+.5),bh=(h-p.t-p.b)*d[1]/maxCount;ctx.fillStyle='rgba(64,137,166,.25)';ctx.fillRect(cx-bw/2,h-p.b-bh,bw,bh);ctx.fillStyle='#6b7e88';ctx.textAlign='center';ctx.fillText(d[0],cx,h-10);});
  const plot=(idx,color,dash=[])=>{ctx.beginPath();ctx.setLineDash(dash);data.forEach((d,i)=>{const cx=p.l+group*(i+.5),yy=p.t+(maxAvg-d[idx])/(maxAvg-minAvg)*(h-p.t-p.b);i?ctx.lineTo(cx,yy):ctx.moveTo(cx,yy)});ctx.strokeStyle=color;ctx.lineWidth=2;ctx.stroke();ctx.setLineDash([]);data.forEach((d,i)=>{const cx=p.l+group*(i+.5),yy=p.t+(maxAvg-d[idx])/(maxAvg-minAvg)*(h-p.t-p.b);ctx.beginPath();ctx.arc(cx,yy,2.2,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();});};
  plot(3,'#365f78',[5,3]);plot(4,'#d09a43',[4,3]);plot(2,'#138477');ctx.textAlign='left';ctx.fillStyle='#3d89a5';ctx.fillText('■ 新开店数',p.l,12);ctx.fillStyle='#138477';ctx.fillText('● 新店月均',p.l+68,12);ctx.fillStyle='#365f78';ctx.fillText('┄ 服务中心月均',p.l+135,12);ctx.fillStyle='#c48627';ctx.fillText('┄ 微店月均',p.l+235,12);
}
function doughnutChart(canvas,list,overrideCounts=null){const {ctx,w,h}=setupCanvas(canvas);const tiers=['S','A','B','C','D'],colors=['#168778','#4e9f91','#6f98b0','#d5a24d','#c55555'],counts=overrideCounts||tiers.map(t=>list.filter(s=>s.tier===t).length);const total=Math.max(1,counts.reduce((a,b)=>a+b,0));const cx=w*.36,cy=h*.48,r=Math.min(w,h)*.31;let start=-Math.PI/2;counts.forEach((n,i)=>{const end=start+n/total*Math.PI*2;ctx.beginPath();ctx.arc(cx,cy,r,start,end);ctx.arc(cx,cy,r*.62,end,start,true);ctx.closePath();ctx.fillStyle=colors[i];ctx.fill();start=end;});ctx.fillStyle='#213d4d';ctx.font='700 20px Microsoft YaHei';ctx.textAlign='center';ctx.fillText(total.toLocaleString('zh-CN'),cx,cy+2);ctx.fillStyle='#87949c';ctx.font='9px Microsoft YaHei';ctx.fillText(overrideCounts?'全国门店':'示例门店',cx,cy+17);ctx.textAlign='left';tiers.forEach((t,i)=>{const y=35+i*28;ctx.fillStyle=colors[i];ctx.fillRect(w*.7,y-7,8,8);ctx.fillStyle='#667983';ctx.font='9px Microsoft YaHei';ctx.fillText(`${t}级  ${counts[i].toLocaleString('zh-CN')}家`,w*.7+14,y);});}
function barChart(canvas,labels,vals,colors){const {ctx,w,h}=setupCanvas(canvas),p={l:55,r:20,t:20,b:32},max=Math.max(...vals)*1.18;ctx.font='9px Microsoft YaHei';labels.forEach((l,i)=>{const bw=(w-p.l-p.r)/labels.length*.52,x=p.l+(w-p.l-p.r)*(i+.5)/labels.length-bw/2,bh=(h-p.t-p.b)*vals[i]/max,y=h-p.b-bh;ctx.fillStyle='#eef2f4';ctx.fillRect(x,h-p.b-(h-p.t-p.b),bw,h-p.t-p.b);ctx.fillStyle=colors[i]||'#178779';ctx.fillRect(x,y,bw,bh);ctx.fillStyle='#6f818b';ctx.textAlign='center';ctx.fillText(l,x+bw/2,h-10);ctx.fillStyle='#314b5a';ctx.fillText(vals[i]+'%',x+bw/2,y-7);});ctx.textAlign='left';}
function horizontalBar(canvas,list){const {ctx,w,h}=setupCanvas(canvas),p={l:105,r:35,t:12,b:15};const max=Math.max(...list.map(s=>s.inventory));ctx.font='9px Microsoft YaHei';list.forEach((s,i)=>{const rowH=(h-p.t-p.b)/list.length,y=p.t+i*rowH+rowH*.22,bh=rowH*.45,bw=(w-p.l-p.r)*s.inventory/max;ctx.fillStyle='#758892';ctx.textAlign='right';ctx.fillText(s.name.replace(/服务中心|体验店|微店|店/g,''),p.l-8,y+bh*.75);ctx.fillStyle='#e9eef1';ctx.fillRect(p.l,y,w-p.l-p.r,bh);ctx.fillStyle=s.turnover>90?'#c95c57':s.turnover>60?'#d2a04d':'#168779';ctx.fillRect(p.l,y,bw,bh);ctx.fillStyle='#536b77';ctx.textAlign='left';ctx.fillText((s.inventory/10000).toFixed(1)+'万',p.l+bw+5,y+bh*.75);});}
function categoryMixChart(canvas,list){
  const {ctx,w,h}=setupCanvas(canvas),p={l:48,r:18,t:24,b:36};
  const totalSales=Math.max(1,list.reduce((a,s)=>a+s.sales,0));
  const totalStock=Math.max(1,list.reduce((a,s)=>a+s.inventory,0));
  const sales=categoryMeta.map((_,i)=>list.reduce((a,s)=>a+s.sales*preferenceFor(s).sales[i],0)/totalSales*100);
  const stock=categoryMeta.map((_,i)=>list.reduce((a,s)=>a+s.inventory*preferenceFor(s).stock[i],0)/totalStock*100);
  const max=Math.max(50,...sales,...stock)*1.12;
  ctx.font='9px Microsoft YaHei';ctx.strokeStyle='#e6ecef';ctx.fillStyle='#84939c';
  for(let i=0;i<=4;i++){const y=p.t+(h-p.t-p.b)*i/4;ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(w-p.r,y);ctx.stroke();ctx.fillText(Math.round(max*(1-i/4))+'%',8,y+3);}
  categoryMeta.forEach((c,i)=>{const group=(w-p.l-p.r)/categoryMeta.length,cx=p.l+group*(i+.5),bw=Math.min(30,group*.24);const sh=(h-p.t-p.b)*sales[i]/max,sth=(h-p.t-p.b)*stock[i]/max;ctx.fillStyle=c.color;ctx.fillRect(cx-bw-2,h-p.b-sh,bw,sh);ctx.fillStyle='#cbd5da';ctx.fillRect(cx+2,h-p.b-sth,bw,sth);ctx.textAlign='center';ctx.fillStyle='#526a76';ctx.fillText(c.short,cx,h-13);ctx.fillStyle=c.color;ctx.fillText(sales[i].toFixed(1)+'%',cx-bw/2-2,h-p.b-sh-7);ctx.fillStyle='#87959d';ctx.fillText(stock[i].toFixed(1)+'%',cx+bw/2+2,h-p.b-sth-7);});ctx.textAlign='left';
}
function inventoryAgingChart(canvas,list){
  const {ctx,w,h}=setupCanvas(canvas),rows=list.map(s=>({s,inventory:inventoryFor(s)}));
  const values=[0,1,2,3].map(i=>rows.reduce((sum,r)=>sum+r.s.inventory*r.inventory.aging[i],0));
  const total=Math.max(1,values.reduce((a,b)=>a+b,0)),colors=['#168779','#6ba59b','#d4a04a','#c45454'];
  const cx=w*.5,cy=h*.48,r=Math.min(w,h)*.34;let start=-Math.PI/2;
  values.forEach((value,i)=>{const end=start+value/total*Math.PI*2;ctx.beginPath();ctx.arc(cx,cy,r,start,end);ctx.arc(cx,cy,r*.62,end,start,true);ctx.closePath();ctx.fillStyle=colors[i];ctx.fill();start=end;});
  ctx.textAlign='center';ctx.fillStyle='#1e4051';ctx.font='700 19px Microsoft YaHei';ctx.fillText(money(total),cx,cy-2);ctx.fillStyle='#81919a';ctx.font='8px Microsoft YaHei';ctx.fillText('库存零售额',cx,cy+15);ctx.textAlign='left';
}
function inventoryFlowChart(canvas,list){
  const {ctx,w,h}=setupCanvas(canvas),p={l:48,r:18,t:30,b:30};
  const reportBase=Math.max(1,list.reduce((sum,s)=>sum+s.sales,0));
  const depositBase=Math.max(1,list.reduce((sum,s)=>sum+inventoryFor(s).depositOrderAmount,0));
  const factors=[.76,.82,.86,.91,1.02,.88,.72,.84,.90,.95,.98,1];
  const report=factors.map((f,i)=>reportBase*f*(.97+(i%3)*.015));
  const deposit=factors.map((f,i)=>depositBase*f*(1.05-(i%4)*.018));
  const max=Math.max(...report,...deposit)*1.15,months=['09月','10月','11月','12月','01月','02月','03月','04月','05月','06月','07月','08月'];
  ctx.font='8px Microsoft YaHei';ctx.strokeStyle='#e5ebee';ctx.fillStyle='#82919a';
  for(let i=0;i<=4;i++){const y=p.t+(h-p.t-p.b)*i/4;ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(w-p.r,y);ctx.stroke();ctx.fillText((max*(1-i/4)/10000).toFixed(0)+'万',5,y+3);}
  const group=(w-p.l-p.r)/months.length,bw=Math.min(17,group*.46);
  months.forEach((month,i)=>{const x=p.l+group*(i+.5),barH=(h-p.t-p.b)*deposit[i]/max;ctx.fillStyle='rgba(76,137,167,.28)';ctx.fillRect(x-bw/2,h-p.b-barH,bw,barH);ctx.fillStyle='#758892';ctx.textAlign='center';ctx.fillText(month,x,h-10);});
  ctx.beginPath();report.forEach((v,i)=>{const x=p.l+group*(i+.5),y=h-p.b-(h-p.t-p.b)*v/max;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.strokeStyle='#138477';ctx.lineWidth=2.2;ctx.stroke();report.forEach((v,i)=>{const x=p.l+group*(i+.5),y=h-p.b-(h-p.t-p.b)*v/max;ctx.beginPath();ctx.arc(x,y,2.3,0,Math.PI*2);ctx.fillStyle='#138477';ctx.fill();});
  ctx.textAlign='left';ctx.fillStyle='#4c89a7';ctx.fillText('■ 押货金额',p.l,12);ctx.fillStyle='#138477';ctx.fillText('● 报单金额',p.l+75,12);
}
function fundStructureChart(canvas,list){
  const {ctx,w,h}=setupCanvas(canvas),p={l:88,r:46,t:18,b:16};
  const rows=list.map(s=>({s,...financeFor(s)}));
  const vals=[list.reduce((a,s)=>a+s.deposit,0),rows.reduce((a,r)=>a+r.wallet,0),rows.reduce((a,r)=>a+r.guarantee,0),rows.reduce((a,r)=>a+r.creditUsed,0),list.reduce((a,s)=>a+s.overdue,0)];
  const labels=['押货款余额','钱包余额','履约保证金','信用占用','逾期欠款'],colors=['#17877a','#4e89a9','#6c9a79','#d19a42','#c45454'];
  const max=Math.max(...vals.map(Math.abs),1);ctx.font='9px Microsoft YaHei';
  vals.forEach((v,i)=>{const row=(h-p.t-p.b)/vals.length,y=p.t+i*row+row*.24,bh=row*.44,bw=(w-p.l-p.r)*Math.abs(v)/max;ctx.textAlign='right';ctx.fillStyle='#637783';ctx.fillText(labels[i],p.l-9,y+bh*.72);ctx.fillStyle='#edf1f3';ctx.fillRect(p.l,y,w-p.l-p.r,bh);ctx.fillStyle=colors[i];ctx.fillRect(p.l,y,bw,bh);ctx.textAlign='left';ctx.fillStyle=v<0?'#b74747':'#506875';ctx.fillText(`${v<0?'-':''}${(Math.abs(v)/10000).toFixed(1)}万`,p.l+bw+6,y+bh*.72);});ctx.textAlign='left';
}
function incomeQuadrantChart(canvas,list,fixedSalesLine=100000,fixedIncomeLine=10000){
  const {ctx,w,h}=setupCanvas(canvas),p={l:58,r:24,t:26,b:38};
  const rows=list.map(s=>({s,...financeFor(s)}));
  const sx=fixedSalesLine,sy=fixedIncomeLine;
  const maxX=Math.max(350000,...rows.map(r=>r.s.sales))*1.08,maxY=Math.max(18000,...rows.map(r=>r.comprehensiveIncome))*1.12;
  const x=v=>p.l+(w-p.l-p.r)*v/maxX,y=v=>h-p.b-(h-p.t-p.b)*v/maxY;
  ctx.fillStyle='rgba(45,139,103,.045)';ctx.fillRect(x(sx),p.t,w-p.r-x(sx),y(sy)-p.t);
  ctx.fillStyle='rgba(203,147,61,.055)';ctx.fillRect(p.l,p.t,x(sx)-p.l,y(sy)-p.t);
  ctx.fillStyle='rgba(104,126,140,.045)';ctx.fillRect(p.l,y(sy),x(sx)-p.l,h-p.b-y(sy));
  ctx.fillStyle='rgba(190,69,69,.055)';ctx.fillRect(x(sx),y(sy),w-p.r-x(sx),h-p.b-y(sy));
  ctx.strokeStyle='#e4eaed';ctx.lineWidth=1;ctx.font='8px Microsoft YaHei';ctx.fillStyle='#84929b';
  for(let i=0;i<=4;i++){const yy=p.t+(h-p.t-p.b)*i/4;ctx.beginPath();ctx.moveTo(p.l,yy);ctx.lineTo(w-p.r,yy);ctx.stroke();ctx.fillText(Math.round(maxY*(1-i/4)/1000)+'k',14,yy+3);}
  for(let i=0;i<=5;i++){const xx=p.l+(w-p.l-p.r)*i/5;ctx.fillText(Math.round(maxX*i/5/10000)+'万',xx-9,h-12);}
  ctx.setLineDash([5,4]);ctx.strokeStyle='#90a2ab';ctx.beginPath();ctx.moveTo(x(sx),p.t);ctx.lineTo(x(sx),h-p.b);ctx.stroke();ctx.beginPath();ctx.moveTo(p.l,y(sy));ctx.lineTo(w-p.r,y(sy));ctx.stroke();ctx.setLineDash([]);
  ctx.font='700 9px Microsoft YaHei';ctx.fillStyle='#2d8063';ctx.fillText('I 高业绩高收入',w-p.r-95,p.t+14);ctx.fillStyle='#b47d2a';ctx.fillText('II 低业绩高收入',p.l+8,p.t+14);ctx.fillStyle='#71828c';ctx.fillText('III 低业绩低收入',p.l+8,h-p.b-9);ctx.fillStyle='#b74646';ctx.fillText('IV 高业绩低收入',w-p.r-100,h-p.b-9);
  rows.forEach(r=>{const hiX=r.s.sales>=sx,hiY=r.comprehensiveIncome>=sy;const color=hiX?(hiY?'#2e8c68':'#c34d4d'):(hiY?'#d09a43':'#71858f');ctx.beginPath();ctx.arc(x(r.s.sales),y(r.comprehensiveIncome),Math.max(4,Math.min(8,r.s.inventory/45000)),0,Math.PI*2);ctx.fillStyle=color;ctx.globalAlpha=.82;ctx.fill();ctx.globalAlpha=1;if((hiX&&!hiY)||(!hiX&&hiY)){ctx.fillStyle='#3f5663';ctx.font='8px Microsoft YaHei';ctx.fillText(r.s.name.replace(/服务中心|体验店|微店|店/g,''),x(r.s.sales)+7,y(r.comprehensiveIncome)-5);}});
  ctx.fillStyle='#768892';ctx.font='8px Microsoft YaHei';ctx.fillText(`规则分界线：销售${(sx/10000).toFixed(0)}万 / 收入${(sy/10000).toFixed(0)}万`,p.l,p.t-9);
}
function scatterChart(canvas,list){const {ctx,w,h}=setupCanvas(canvas),p={l:45,r:20,t:18,b:30};ctx.strokeStyle='#e7ecef';ctx.fillStyle='#85939c';ctx.font='9px Microsoft YaHei';for(let i=0;i<=4;i++){const y=p.t+(h-p.t-p.b)*i/4;ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(w-p.r,y);ctx.stroke();ctx.fillText((35-i*8)+'万',8,y+3);}for(let i=0;i<=5;i++){const x=p.l+(w-p.l-p.r)*i/5;ctx.fillText(i*20,x-5,h-8);}list.forEach(s=>{const x=p.l+(w-p.l-p.r)*s.score/100,y=p.t+(h-p.t-p.b)*(350000-s.sales)/335000;ctx.beginPath();ctx.arc(x,y,Math.max(4,Math.min(9,s.inventory/40000)),0,Math.PI*2);ctx.fillStyle=s.risk==='red'?'rgba(195,78,78,.72)':'rgba(17,133,120,.68)';ctx.fill();});ctx.fillStyle='#84939b';ctx.fillText('健康分 →',w-70,h-8);}

function openDrawer(id){const s=stores.find(x=>x.id===id);if(!s)return;const pref=preferenceFor(s),fin=financeFor(s);$('#drawerStoreName').textContent=s.name;$('#drawerStoreMeta').textContent=`${s.id} · ${s.province} · ${s.type} · 开店 ${openedAt(s)} · 当前押货率 ${(s.rate*100).toFixed(0)}%`;$('#drawerContent').innerHTML=`
  <div class="drawer-score"><div class="score-ring" style="--score:${s.score}"><div><strong>${s.score.toFixed(1)}</strong><span>综合健康分</span></div></div><div class="score-summary"><div><span class="tier-pill ${s.tier}">${s.tier}级门店</span> <span class="risk-pill ${s.risk}">${riskText(s.risk)}风险</span></div><h3>${s.diagnosis}</h3><p>AI基于资金、库存、增长、活跃和合规五个维度完成同群对标。</p></div></div>
  <div class="mini-metrics"><div class="mini-metric"><span>本月销售</span><strong>${money(s.sales)}</strong></div><div class="mini-metric"><span>销售环比</span><strong class="${s.mom<0?'money negative':''}">${pct(s.mom)}</strong></div><div class="mini-metric"><span>库存周转</span><strong>${s.turnover}天</strong></div><div class="mini-metric"><span>逾期欠款</span><strong class="${s.overdue?'money negative':''}">${money(s.overdue)}</strong></div><div class="mini-metric"><span>期末押货款</span><strong>${money(s.deposit)}</strong></div><div class="mini-metric"><span>滞销占比</span><strong>${(s.slow*100).toFixed(1)}%</strong></div></div>
  <section class="drawer-section"><h3>资金与综合收入</h3><div class="evidence-list"><div class="evidence"><span>钱包 / 保证金</span><b class="${fin.wallet<0?'bad':''}">${fin.wallet<0?'-':''}${money(fin.wallet)} / ${money(fin.guarantee)}</b></div><div class="evidence"><span>信用占用</span><b class="${fin.creditUtil>.9?'bad':''}">${money(fin.creditUsed)} / ${money(fin.creditLimit)} · ${(fin.creditUtil*100).toFixed(0)}%</b></div><div class="evidence"><span>综合收入</span><b>${money(fin.comprehensiveIncome)} · 收入率${(fin.incomeRate*100).toFixed(2)}%</b></div><div class="evidence"><span>收入构成</span><b>配送${money(fin.deliveryIncome)} / 服务${money(fin.serviceIncome)} / 其他${money(fin.incentive+fin.otherIncome)}</b></div></div></section>
  <section class="drawer-section"><h3>品类销售偏好与押货匹配</h3><div class="evidence-list"><div class="evidence"><span>主销售偏好</span><b style="color:${pref.main.color}">${pref.main.name} · ${(Math.max(...pref.sales)*100).toFixed(0)}%</b></div><div class="evidence"><span>品类结构匹配度</span><b class="${pref.match<85?'bad':''}">${pref.match.toFixed(0)}分</b></div><div class="evidence"><span>偏好识别置信度</span><b>${pref.confidence}%</b></div></div><div class="recommend-box" style="margin-top:10px"><p>${pref.suggestion}</p></div></section>
  <section class="drawer-section"><h3>AI诊断证据</h3><div class="evidence-list"><div class="evidence"><span>销售动能</span><b class="${s.mom<0?'bad':''}">${pct(s.mom)} · ${s.mom<0?'低于同群':'优于同群'}</b></div><div class="evidence"><span>库存效率</span><b class="${s.turnover>90?'bad':''}">${s.turnover}天 · 滞销${(s.slow*100).toFixed(1)}%</b></div><div class="evidence"><span>资金安全</span><b class="${s.overdue?'bad':''}">逾期 ${money(s.overdue)}</b></div><div class="evidence"><span>运营活跃</span><b>${s.activities}场活动/月</b></div></div></section>
  <section class="drawer-section"><h3>建议经营动作</h3><div class="recommend-box"><p>${s.advice}</p></div><div class="action-row"><button class="approve" data-action="approve">批准并创建任务</button><button class="secondary">要求补充证据</button></div></section>
  <section class="drawer-section"><h3>AI执行边界</h3><div class="evidence-list"><div class="evidence"><span>可自动执行</span><b>生成任务、提醒、资料清单</b></div><div class="evidence"><span>必须人工审批</span><b class="bad">押货率、授信、退款、冻结</b></div></div></section>`;
  $('#storeDrawer').classList.add('open');$('#drawerBackdrop').classList.add('open');$('#storeDrawer').setAttribute('aria-hidden','false');
}
function closeDrawer(){$('#storeDrawer').classList.remove('open');$('#drawerBackdrop').classList.remove('open');$('#storeDrawer').setAttribute('aria-hidden','true');}

function bindDynamicEvents(){
  $$('[data-store]').forEach(el=>el.addEventListener('click',()=>openDrawer(el.dataset.store)));
  $$('[data-nav]').forEach(el=>el.addEventListener('click',()=>switchView(el.dataset.nav)));
}
function switchView(view){state.view=view;$$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.view===view));render();window.scrollTo({top:0,behavior:'smooth'});}

$$('.nav-item').forEach(n=>n.addEventListener('click',()=>switchView(n.dataset.view)));
$('#regionFilter').addEventListener('change',e=>{state.region=e.target.value;state.province='all';state.storeId='all';closeDrawer();render();});
$('#provinceFilter').addEventListener('change',e=>{state.province=e.target.value;state.storeId='all';closeDrawer();render();});
$('#typeFilter').addEventListener('change',e=>{state.type=e.target.value;state.storeId='all';closeDrawer();render();});
$('#storeFilter').addEventListener('change',e=>{state.storeId=e.target.value;closeDrawer();render();if(state.storeId!=='all')setTimeout(()=>openDrawer(state.storeId),80);});
$('#globalSearch').addEventListener('input',e=>{state.search=e.target.value.trim();if(state.view==='dashboard'||state.view==='stores')render();});
$('#resetFilters').addEventListener('click',()=>{state.region='all';state.province='all';state.type='all';state.storeId='all';state.search='';closeDrawer();$('#regionFilter').value='all';$('#provinceFilter').value='all';$('#typeFilter').value='all';$('#storeFilter').value='all';$('#globalSearch').value='';render();});
$('#closeDrawer').addEventListener('click',closeDrawer);$('#drawerBackdrop').addEventListener('click',closeDrawer);
$('#drawerContent').addEventListener('click',e=>{if(e.target.dataset.action==='approve'){closeDrawer();showToast('任务已创建','已进入运营任务中心，等待责任人确认');}});
$('#exportBtn').addEventListener('click',()=>showToast('经营简报已生成','演示原型未实际下载文件'));
window.addEventListener('resize',()=>requestAnimationFrame(drawCharts));
function showToast(title,sub){$('#toast strong').textContent=title;$('#toast small').textContent=sub;$('#toast').classList.add('show');setTimeout(()=>$('#toast').classList.remove('show'),2600);}

const initialParams = new URLSearchParams(location.search);
const initialView = initialParams.get('view') || location.hash.replace('#','');
if (titles[initialView]) {
  state.view = initialView;
  $$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.view===initialView));
}
const initialProvince=initialParams.get('province');
if(initialProvince&&stores.some(s=>s.province===initialProvince)) state.province=initialProvince;
const initialStore=initialParams.get('store');
if(initialStore&&stores.some(s=>s.id===initialStore)) state.storeId=initialStore;
render();
if(state.storeId!=='all') setTimeout(()=>openDrawer(state.storeId),120);
