import{a6 as Y}from"./entry.ad32dc49.js";import{u as Z,T as C,a as V,e as W}from"./pool.f9585ea2.js";import{D as a}from"./decimal.0bdeb344.js";import{h as K}from"./sha256.de7acfa8.js";const ro=Y("farms",{state:()=>({farmsPoolList:[],farmsPoolObj:{},farmsPoolListLoading:!1,cmmPoolInfoObj:{},farmsPositionObj:{},farmsLoadingObj:{},farmsUserUsd:{},farmsRewardObj:{},farmsPositionList:[],farmsAllPositionLoading:!1,myFarmsPoolList:[]}),getters:{getPoolStore(){return Z()}},actions:{async getFarmsPoolList(P){console.log("🚀🚀🚀 ~ file: farms.ts:33 ~ getFarmsPoolList ~ isDefault:",P),P||(this.farmsPoolListLoading=!0);try{const{data:l}=await fetch(`${K.Sui.api}/v2/sui/swap/count`).then(s=>s.json()),d=l.pools.filter(s=>s.stable_farming);console.log(d,"#farmsPoolsfarmsPools");const _=d.map(s=>{var L,t,o;let p=0;console.log(s,"#farmsPool");const j=s.coin_a.decimals,r=s.coin_b.decimals,n=C.tickIndexToPrice(s.stable_farming.effective_tick_lower,j,r).toString(),c=C.tickIndexToPrice(s.stable_farming.effective_tick_upper,j,r).toString();let e=[];s.rewarder&&s.rewarder.rewarder_coin&&s.rewarder.rewarder_coin.length>0&&(e=(t=(L=s.rewarder)==null?void 0:L.rewarder_coin)==null?void 0:t.map((i,f)=>({...i,amountDay:new a(i.amount_second).mul(new a(60*60*24)).toNumber(),rewarder_display:s.rewarder[`rewarder_display${f+1}`],rewarderApr:i.apr.replace("%","")})));let g=!1;s.stable_farming&&s.stable_farming.stable_rewarder.map(i=>{i.amount_second>0&&(g=!0)});const b=[];s.stable_farming.stable_rewarder.forEach(i=>{p+=Number(i.amount_second),i.amount_second>0&&b.push({emission_per_day:new a(i.amount_second).mul(60*60*24).toDP(2,a.ROUND_HALF_UP),reward_coin:i.coin=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":i.coin,symbol:i.symbol,allocate_point:Number(i.amount_second)>0?1:0})});const m=s.apr_24h.replace("%",""),u=s.rewarder&&s.rewarder.apr.replace("%","")||0;return console.log(m,u,"rewardApr####"),console.log(p,s,"##totalAllocatePoint"),{...s,clmm_pool_id:s.swap_account,effective_tick_lower:s.stable_farming.effective_tick_lower,effective_tick_upper:s.stable_farming.effective_tick_upper,fee:s.fee*100+"%",id:s.stable_farming.stable_farming_pool,rewarders:b,status:p>0?"Live":"Ended",minPrice:n,maxPrice:c,coinA:s.coin_a,coinB:s.coin_b,stableFarmingApr:s.stable_farming&&s.stable_farming.apr*100,rewarder:{...s.rewarder,rewardList:e},isStableFarming:g,is_display_rewarder:(o=s==null?void 0:s.rewarder)==null?void 0:o.is_display_rewarder,aprTotal:Number(m)+Number(u),apr:s.apr_24h.replace("%",""),clmmApr:Number(m)+Number(u)}});this.farmsPoolList=_,this.farmsPoolObj=Object.fromEntries(_.map(s=>[s.clmm_pool_id,{...s,address:s.clmm_pool_id}])),this.farmsPoolListLoading=!1,console.log(d,_,"farmsPools####")}catch(l){console.log("getFarmsPoolList error:",l);const _=await V("Sui").getLpList();console.log("🚀🚀🚀 ~ file: farms.ts:126 ~ getFarmsPoolList ~ cmmLpList:",_);const s=Object.fromEntries(_.map((n,c)=>[n.address,n]));console.log(s,"cmmLpObj##");const j=await W("Sui").getFramsPoolList();console.log("getFarmsPoolList:",j);const r=j.map(n=>{const c=s[n.clmm_pool_id];let e=0;const{tokensObj:g}=this.getPoolStore,b=n.rewarders.map(o=>{const i=o.reward_coin=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":o.reward_coin,f=g[i].decimals,O=g[i].symbol;e=e+Number(o.allocate_point);const x=new a(o.allocate_point).div(new a(o.total_allocate_point));return{...o,reward_coin:i,emission_per_day:Number(o.allocate_point)>0?new a(o.emission_per_second).mul(x).div(Math.pow(10,12)).mul(60*60*24).div(Math.pow(10,f)).toString():"0",symbol:O}}),m=c.coinA.decimals,u=c.coinB.decimals,L=C.tickIndexToPrice(n.effective_tick_lower,m,u).toString(),t=C.tickIndexToPrice(n.effective_tick_upper,m,u).toString();return console.log(e,"allocatePoint##"),{...n,minPrice:L,maxPrice:t,fee:c.fee*100+"%",coinA:c.coinA,coinB:c.coinB,rewarders:b,status:e>0?"Live":"Ended",stable_farming:{apr:0,tvl:0},coin_a:c.coinA,coin_b:c.coinB,total_apr:0}});console.log("getFarmsPoolList",r),this.farmsPoolList=r,this.farmsPoolObj=Object.fromEntries(r.map(n=>[n.clmm_pool_id,{...n,address:n.clmm_pool_id}])),this.cmmPoolInfoObj=s,this.farmsPoolListLoading=!1}},async getPositionByPool(P,l,d){var L,t;this.farmsLoadingObj[l]=!0;const _=V("Sui"),s=W("Sui");console.log(P,l,"#account, poolAddress");const p=await s.getOwnedFramsPositionNFTList([this.farmsPoolObj[l].id],!0);console.log(p,"###result");const j=p==null?void 0:p.filter(o=>o.clmm_pool_id==l),r=await _.getPositionList(P,{address:{address:l}})||[],n=j.concat(r);console.log(j,r,"###farmingPositionList"),console.log(n,"###positionGroup");const c={},e={},g=[],b=await _.getPool(l);for(let o=0;o<n.length;o++){const i=n[o],f=this.farmsPoolObj[i.clmm_pool_id||i.pool];console.log(f,"##poolInfo");const O=f.coinA.decimals,x=f.coinB.decimals;let w,v;i.tick_lower_index==_.TickUtil.getMinIndex(Number(f.tick_spacing))?w="0":w=_.TickMath.tickIndexToPrice(Number(i.tick_lower_index),O,x).toString(),i.tick_upper_index==_.TickUtil.getMaxIndex(Number(f.tick_spacing))?v="∞":v=_.TickMath.tickIndexToPrice(Number(i.tick_upper_index),O,x).toString(),console.log(i,"#position.clmm_pool_id");let k;const S=C.sqrtPriceX64ToPrice(b.current_sqrt_price,O,x).toString();Number(S)>=Number(w)&&(v==="∞"||Number(S)<=Number(v))?k="Active":(Number(S)>Number(v)||Number(S)<Number(w))&&(k="Inactive");const A=_.getCoinAmountFromLiquidity({pool:b,position:i,roundUp:!1}),{RATES:E,tokensObj:H}=this.getPoolStore;console.log(E,"##cmmPoolStore");const D=((L=E[f.coin_a.address])==null?void 0:L.price)||0,I=((t=E[f.coin_a.address])==null?void 0:t.price)||0,M=new a(A.coinaAmount).div(Math.pow(10,O)),R=new a(A.coinbAmount).div(Math.pow(10,x)),F=new a(A.coinaAmount).div(Math.pow(10,O)).mul(D),T=new a(A.coinbAmount).div(Math.pow(10,x)).mul(I);let q=new a(0);const y=this.farmsPoolObj[i.clmm_pool_id];console.log("farmsPoolInfo:",y);const G=[];i.rewards&&i.rewards.length>0?(i.rewards.forEach((h,z)=>{var $;const B=h.rewarder_type=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":h.rewarder_type,J=H[B],Q=(($=E[B])==null?void 0:$.price)||0,X=new a(h.rewarder_amount).div(new a(Math.pow(10,J.decimals))),U=X.mul(new a(Q));e[i.clmm_pool_id]&&e[i.clmm_pool_id][i.id]?e[i.clmm_pool_id][i.id]=e[i.clmm_pool_id][i.id].add(U):e[i.clmm_pool_id]&&!e[i.clmm_pool_id][i.id]?(e[i.clmm_pool_id][i.id]={},e[i.clmm_pool_id][i.id]=U):(e[i.clmm_pool_id]={},e[i.clmm_pool_id][i.id]={},e[i.clmm_pool_id][i.id]=U),console.log(this.farmsRewardObj,"##farmsRewardObj"),q=q.add(U),(y.rewarders[z]||h.rewarder_amount>0)&&G.push({...h,rewarderAmount:X.toString(),rewarderAmountUsd:U.toString(),rewarderType:B})}),i.rewards=G):(i.rewards=[],this.farmsRewardObj[i.clmm_pool_id]={});let N;if(i.id){const h=F.add(T);c[i.clmm_pool_id]||(c[i.clmm_pool_id]={}),c[i.clmm_pool_id][i.id]=h}console.log(this.farmsUserUsd,"##this.farmsUserUsd"),g.push({...i,minPrice:w,maxPrice:v,positionUSD:F.add(T).toNumber(),clmmPool:i.clmm_pool_id||i.pool,positionStatus:k,positionSource:i.creator?"clmm":"farming",farmsPoolId:d,coinA:f.coinA,coinB:f.coinB,positionShare:N,amountAUsd:F,amountBUsd:T,amountA:M,amountB:R,positionRewardAmount:q})}const m={};Object.keys(e).forEach(o=>{m[o]={},m[o].amountUsd=new a(0),typeof e[o]=="object"&&Object.keys(e[o]).forEach(i=>{console.log(i,e[o][i],"#######375"),m[o].amountUsd=m[o].amountUsd.add(e[o][i])})});const u={};Object.keys(c).forEach(o=>{u[o]={},u[o].amount=new a(0),u[o].positionNum=0,typeof c[o]=="object"&&Object.keys(c[o]).forEach(i=>{u[o].amount=u[o].amount.add(c[o][i]),u[o].positionNum+=1})}),console.log("farmsUserUsd:",c),console.log(m,"##farmsRewardObjResult"),this.farmsRewardObj[l]={},this.farmsRewardObj={...this.farmsRewardObj,...m},this.farmsUserUsd[l]={},this.farmsUserUsd={...this.farmsUserUsd,...u},this.farmsPositionObj[l]=g,this.farmsLoadingObj[l]=!1,this.getMyFarms()},async getPositionByAllPool(P){var u,L;this.farmsAllPositionLoading=!0;const l=W("Sui"),d=V("Sui"),_=await l.getOwnedFramsPositionNFTList([],!0),s=await d.getPositionList(P,this.farmsPoolObj)||[];console.log(s,"###clmmPositionList");const p=_.concat(s);console.log(p,"##positionGroup");const j=[],r={},n={},c=p.map(t=>t.clmm_pool_id||t.pool),e=await d.getPools(Array.from(new Set(c)));console.log(e,"poolList:");for(let t=0;t<p.length;t++){const o=p[t],i=e.filter(N=>N.poolAddress==o.clmm_pool_id||N.poolAddress==o.pool)[0];console.log(i,e,"##pool");const f=d.getCoinAmountFromLiquidity({pool:i,position:o,roundUp:!1}),{RATES:O,tokensObj:x}=this.getPoolStore,w=this.farmsPoolObj[o.clmm_pool_id||o.pool],v=((u=O[w.coin_a.address])==null?void 0:u.price)||0,k=((L=O[w.coin_b.address])==null?void 0:L.price)||0,S=w.coin_a.decimals,A=w.coin_b.decimals,E=new a(f.coinaAmount).div(Math.pow(10,S)),H=new a(f.coinbAmount).div(Math.pow(10,A)),D=new a(f.coinaAmount).div(Math.pow(10,S)).mul(v),I=new a(f.coinbAmount).div(Math.pow(10,A)).mul(k);let M,R;o.tick_lower_index==d.TickUtil.getMinIndex(Number(w.tick_spacing))?M="0":M=d.TickMath.tickIndexToPrice(Number(o.tick_lower_index),S,A).toString(),o.tick_upper_index==d.TickUtil.getMaxIndex(Number(w.tick_spacing))?R="∞":R=d.TickMath.tickIndexToPrice(Number(o.tick_upper_index),S,A).toString();let F;const T=C.sqrtPriceX64ToPrice(i.current_sqrt_price,S,A).toString();Number(T)>=Number(M)&&(R==="∞"||Number(T)<=Number(R))?F="Active":(Number(T)>Number(R)||Number(T)<Number(M))&&(F="Inactive");let q;if(o.id){const N=D.add(I);n[o.clmm_pool_id]||(n[o.clmm_pool_id]={}),n[o.clmm_pool_id][o.id]=N}let y=new a(0);const G=[];if(o.rewards&&o.rewards.length>0){const N=this.farmsPoolObj[o.clmm_pool_id];console.log("farmsPoolInfo:",N),o.rewards.forEach((h,z)=>{var $;const B=h.rewarder_type=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":h.rewarder_type,J=x[B],Q=(($=O[B])==null?void 0:$.price)||0,X=new a(h.rewarder_amount).div(new a(Math.pow(10,J.decimals))),U=X.mul(new a(Q));r[o.clmm_pool_id]&&r[o.clmm_pool_id][o.id]?r[o.clmm_pool_id][o.id]=r[o.clmm_pool_id][o.id].add(U):r[o.clmm_pool_id]&&!r[o.clmm_pool_id][o.id]?(r[o.clmm_pool_id][o.id]={},r[o.clmm_pool_id][o.id]=U):(r[o.clmm_pool_id]={},r[o.clmm_pool_id][o.id]={},r[o.clmm_pool_id][o.id]=U),console.log(this.farmsRewardObj,"##farmsRewardObj"),y=y.add(U),(N.rewarders[z]||h.rewarder_amount>0)&&G.push({...h,rewarderAmount:X.toString(),rewarderAmountUsd:U.toString(),rewarderType:B})}),o.rewards=G}else o.rewards=[],this.farmsRewardObj[o.clmm_pool_id]={};j.push({...o,minPrice:M,maxPrice:R,positionUSD:D.add(I).toNumber(),clmmPool:o.clmm_pool_id||o.pool,positionStatus:F,positionSource:o.creator?"clmm":"farming",farmsPoolId:o.pool_id,coinA:w.coinA,coinB:w.coinB,soucrce:o.id?"farming":"clmm",positionShare:q,amountAUsd:D.toString(),amountBUsd:I.toString(),amountA:E.toString(),amountB:H.toString(),positionRewardAmount:y})}this.farmsPositionList=j;const g={};j.forEach(t=>{g[t.clmm_pool_id||t.pool]||(g[t.clmm_pool_id||t.pool]=[]),g[t.clmm_pool_id||t.pool].push(t)}),this.farmsPositionObj=g,this.farmsAllPositionLoading=!1,console.log(this.farmsPositionObj,"#farmingPositionList"),console.log(r,"##this.farmsRewardObj");const b={};Object.keys(r).forEach(t=>{console.log(r,t,"farmsRewardObj:"),b[t]={},b[t].amountUsd=new a(0),typeof r[t]=="object"&&Object.keys(r[t]).forEach(o=>{console.log(r[t][o].toString(),"#######375"),b[t].amountUsd=b[t].amountUsd.add(r[t][o]),console.log(b[t].amountUsd.toString(),"result[key].amountUsd.toString()")})});const m={};Object.keys(n).forEach(t=>{m[t]={},m[t].amount=new a(0),m[t].positionNum=0,typeof n[t]=="object"&&Object.keys(n[t]).forEach(o=>{m[t].amount=m[t].amount.add(n[t][o]),m[t].positionNum+=1})}),console.log("farmsUserUsd:",n),this.farmsRewardObj=b,this.farmsUserUsd=m,console.log(this.farmsRewardObj,"##this.farmsRewardObj"),this.getMyFarms()},getMyFarms(){const P=[];this.farmsPoolList.forEach(l=>{console.log(this.farmsPositionObj[l.clmm_pool_id],"this.this.farmsPositionObj[##");const d=this.farmsPositionObj[l.clmm_pool_id]&&this.farmsPositionObj[l.clmm_pool_id].filter(_=>_.positionSource=="farming");console.log(d,"getMyFarmsresult##"),d&&d.length>0&&P.push(l)}),this.myFarmsPoolList=P,console.log(P,"##myFarms")},setFarmsLoadingObj(P){this.farmsLoadingObj[P]=!0},logOut(){this.farmsPositionObj={},this.farmsUserUsd={},this.farmsRewardObj={},this.farmsPositionList=[],this.farmsAllPositionLoading=!1,this.myFarmsPoolList=[]}}});export{ro as u};
