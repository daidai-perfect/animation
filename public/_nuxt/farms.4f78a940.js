import{a6 as I}from"./entry.7427f084.js";import{u as oo,e as so,c as V,T as G,r as K}from"./pool.04cdd6ce.js";import{D as n}from"./decimal.0bdeb344.js";const eo=I("farms",{state:()=>({farmsPoolList:[],farmsPoolObj:{},farmsPoolListLoading:!1,cmmPoolInfoObj:{},farmsPositionObj:{},farmsLoadingObj:{},farmsUserUsd:{},farmsRewardObj:{},farmsPositionList:[],farmsAllPositionLoading:!1,myFarmsPoolList:[]}),getters:{getPoolStore(){return oo()}},actions:{async getFarmsPoolList(h){console.log("🚀🚀🚀 ~ file: farms.ts:33 ~ getFarmsPoolList ~ isDefault:",h),h||(this.farmsPoolListLoading=!0);try{const{data:_}=await fetch(`${so.Sui.api}/v2/sui/swap/count/v3`).then(t=>t.json()),d=_.pools.filter(t=>t.stable_farming);console.log(d,"#farmsPoolsfarmsPools");const j=await V("Sui").getSuiTokenObj();console.log("🚀🚀🚀 ~ file: farms.ts:43 ~ getFarmsPoolList ~ tokensObj:",j);const x=d.map(t=>{var p,L,i;let w=0;console.log(t,"#farmsPool");const e=j[t.token_a_address].decimals,r=j[t.token_b_address].decimals,m=G.tickIndexToPrice(t.stable_farming.effective_tick_lower,e,r).toString(),a=G.tickIndexToPrice(t.stable_farming.effective_tick_upper,e,r).toString();let O=[];t.rewarder&&t.rewarder.rewarder_coin&&t.rewarder.rewarder_coin.length>0&&(O=(L=(p=t.rewarder)==null?void 0:p.rewarder_coin)==null?void 0:L.map((o,s)=>({...o,amountDay:new n(o.amount_second).mul(new n(60*60*24)).toNumber(),rewarder_display:t.rewarder[`rewarder_display${s+1}`],rewarderApr:o.apr.replace("%","")})));let b=!1;t.stable_farming&&t.stable_farming.stable_rewarder.map(o=>{o.amount_second>0&&(b=!0)});const f=[];t.stable_farming.stable_rewarder.forEach(o=>{w+=Number(o.amount_second),o.amount_second>0&&f.push({emission_per_day:new n(o.amount_second).mul(60*60*24).toDP(2,n.ROUND_HALF_UP),reward_coin:o.coin=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":o.coin,symbol:o.symbol,allocate_point:Number(o.amount_second)>0?1:0})});const g=t.apr_24h.replace("%",""),S=t.rewarder&&t.rewarder.apr.replace("%","")||0;return console.log(g,S,"rewardApr####"),console.log(w,t,"##totalAllocatePoint"),{...t,clmm_pool_id:t.swap_account,effective_tick_lower:t.stable_farming.effective_tick_lower,effective_tick_upper:t.stable_farming.effective_tick_upper,fee:t.fee*100+"%",id:t.stable_farming.stable_farming_pool,rewarders:f,status:w>0?"Live":"Ended",minPrice:m,maxPrice:a,coinA:{...j[t.token_a_address]},coinB:{...j[t.token_b_address]},stableFarmingApr:t.stable_farming&&t.stable_farming.apr*100,rewarder:{...t.rewarder,rewardList:O},isStableFarming:b,is_display_rewarder:(i=t==null?void 0:t.rewarder)==null?void 0:i.is_display_rewarder,aprTotal:Number(g)+Number(S),apr:t.apr_24h.replace("%",""),clmmApr:Number(g)+Number(S)}});this.farmsPoolList=x,this.farmsPoolObj=Object.fromEntries(x.map(t=>[t.clmm_pool_id,{...t,address:t.clmm_pool_id}])),this.farmsPoolListLoading=!1,console.log(d,x,"farmsPools####")}catch(_){console.log("getFarmsPoolList error:",_);const d=V("Sui"),u=await d.getLpList();console.log("🚀🚀🚀 ~ file: farms.ts:126 ~ getFarmsPoolList ~ cmmLpList:",u);const j=Object.fromEntries(u.map((r,m)=>[r.address,r]));console.log(j,"cmmLpObj##");const t=await K("Sui").getFramsPoolList();console.log("getFarmsPoolList:",t);const w=await d.getSuiTokenObj();console.log("🚀🚀🚀 ~ file: farms.ts:137 ~ getFarmsPoolList ~ tokensObj:",w);const e=t==null?void 0:t.map(r=>{const m=j[r.clmm_pool_id];let a=0;const O=r.rewarders.map(p=>{const L=p.reward_coin=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":p.reward_coin,i=w[L].decimals,o=w[L].symbol;a=a+Number(p.allocate_point);const s=new n(p.allocate_point).div(new n(p.total_allocate_point));return{...p,reward_coin:L,emission_per_day:Number(p.allocate_point)>0?new n(p.emission_per_second).mul(s).div(Math.pow(10,12)).mul(60*60*24).div(Math.pow(10,i)).toString():"0",symbol:o}}),b=m.coinA.decimals,f=m.coinB.decimals,g=G.tickIndexToPrice(r.effective_tick_lower,b,f).toString(),S=G.tickIndexToPrice(r.effective_tick_upper,b,f).toString();return console.log(a,"allocatePoint##"),{...r,minPrice:g,maxPrice:S,fee:m.fee*100+"%",coinA:m.coinA,coinB:m.coinB,rewarders:O,status:a>0?"Live":"Ended",stable_farming:{apr:0,tvl:0},coin_a:m.coinA,coin_b:m.coinB,total_apr:0}});this.farmsPoolList=e,console.log("🚀🚀🚀 ~ file: farms.ts:190 ~ getFarmsPoolList ~ list:",e),this.farmsPoolObj=Object.fromEntries(e.map(r=>[r.clmm_pool_id,{...r,address:r.clmm_pool_id}])),this.cmmPoolInfoObj=j,this.farmsPoolListLoading=!1}},async getPositionByPool(h,_,d){var S,p,L,i;this.farmsLoadingObj[_]=!0;const u=V("Sui"),j=await u.getSuiTokenObj(),x=K("Sui");console.log(h,_,"#account, poolAddress");const t=await x.getOwnedFramsPositionNFTList([this.farmsPoolObj[_].id],!0);console.log(t,"###result");const w=t==null?void 0:t.filter(o=>o.clmm_pool_id==_),e=await u.getPositionList(h,{address:{address:_}})||[],r=w.concat(e);console.log(w,e,"###farmingPositionList"),console.log(r,"###positionGroup");const m={},a={},O=[],b=await u.getPool(_);for(let o=0;o<r.length;o++){const s=r[o],l=this.farmsPoolObj[s.clmm_pool_id||s.pool];console.log(l,"##poolInfo");const v=(S=l==null?void 0:l.coinA)==null?void 0:S.decimals,c=(p=l==null?void 0:l.coinB)==null?void 0:p.decimals;let B,F;s.tick_lower_index==u.TickUtil.getMinIndex(Number(l.tick_spacing))?B="0":B=u.TickMath.tickIndexToPrice(Number(s.tick_lower_index),v,c).toString(),s.tick_upper_index==u.TickUtil.getMaxIndex(Number(l.tick_spacing))?F="∞":F=u.TickMath.tickIndexToPrice(Number(s.tick_upper_index),v,c).toString(),console.log(s,"#position.clmm_pool_id");let A;const N=G.sqrtPriceX64ToPrice(b.current_sqrt_price,v,c).toString();Number(N)>=Number(B)&&(F==="∞"||Number(N)<=Number(F))?A="Active":(Number(N)>Number(F)||Number(N)<Number(B))&&(A="Inactive");const C=u.getCoinAmountFromLiquidity({pool:b,position:s,roundUp:!1}),{RATES:D}=this.getPoolStore;console.log(D,"##cmmPoolStore");const X=((L=D[l==null?void 0:l.token_a_address])==null?void 0:L.price)||0,$=((i=D[l==null?void 0:l.token_b_address])==null?void 0:i.price)||0,E=new n(C.coinaAmount).div(Math.pow(10,v)),T=new n(C.coinbAmount).div(Math.pow(10,c)),R=new n(C.coinaAmount).div(Math.pow(10,v)).mul(X),M=new n(C.coinbAmount).div(Math.pow(10,c)).mul($);let H=new n(0);const q=this.farmsPoolObj[s.clmm_pool_id];console.log("farmsPoolInfo:",q);const z=[];s.rewards&&s.rewards.length>0?(s.rewards.forEach((P,W)=>{var Q;const y=P.rewarder_type=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":P.rewarder_type,Y=j[y],Z=((Q=D[y])==null?void 0:Q.price)||0,J=new n(P.rewarder_amount).div(new n(Math.pow(10,Y.decimals))),U=J.mul(new n(Z));a[s.clmm_pool_id]&&a[s.clmm_pool_id][s.id]?a[s.clmm_pool_id][s.id]=a[s.clmm_pool_id][s.id].add(U):a[s.clmm_pool_id]&&!a[s.clmm_pool_id][s.id]?(a[s.clmm_pool_id][s.id]={},a[s.clmm_pool_id][s.id]=U):(a[s.clmm_pool_id]={},a[s.clmm_pool_id][s.id]={},a[s.clmm_pool_id][s.id]=U),console.log(this.farmsRewardObj,"##farmsRewardObj"),H=H.add(U),(q.rewarders[W]||P.rewarder_amount>0)&&z.push({...P,rewarderAmount:J.toString(),rewarderAmountUsd:U.toString(),rewarderType:y})}),s.rewards=z):(s.rewards=[],this.farmsRewardObj[s.clmm_pool_id]={});let k;if(s.id){const P=R.add(M);m[s.clmm_pool_id]||(m[s.clmm_pool_id]={}),m[s.clmm_pool_id][s.id]=P}console.log(this.farmsUserUsd,"##this.farmsUserUsd"),O.push({...s,minPrice:B,maxPrice:F,positionUSD:R.add(M).toNumber(),clmmPool:s.clmm_pool_id||s.pool,positionStatus:A,positionSource:s.creator?"clmm":"farming",farmsPoolId:d,coinA:l.coinA,coinB:l.coinB,positionShare:k,amountAUsd:R,amountBUsd:M,amountA:E,amountB:T,positionRewardAmount:H})}const f={};Object.keys(a).forEach(o=>{f[o]={},f[o].amountUsd=new n(0),typeof a[o]=="object"&&Object.keys(a[o]).forEach(s=>{console.log(s,a[o][s],"#######375"),f[o].amountUsd=f[o].amountUsd.add(a[o][s])})});const g={};Object.keys(m).forEach(o=>{g[o]={},g[o].amount=new n(0),g[o].positionNum=0,typeof m[o]=="object"&&Object.keys(m[o]).forEach(s=>{g[o].amount=g[o].amount.add(m[o][s]),g[o].positionNum+=1})}),console.log("farmsUserUsd:",m),console.log(f,"##farmsRewardObjResult"),this.farmsRewardObj[_]={},this.farmsRewardObj={...this.farmsRewardObj,...f},this.farmsUserUsd[_]={},this.farmsUserUsd={...this.farmsUserUsd,...g},this.farmsPositionObj[_]=O,this.farmsLoadingObj[_]=!1,this.getMyFarms()},async getPositionByAllPool(h){var g,S,p,L;this.farmsAllPositionLoading=!0;const _=K("Sui"),d=V("Sui"),u=await d.getSuiTokenObj(),j=await _.getOwnedFramsPositionNFTList([],!0),x=await d.getPositionList(h,this.farmsPoolObj)||[];console.log(x,"###clmmPositionList");const t=j.concat(x);console.log(t,"##positionGroup");const w=[],e={},r={},m=t.map(i=>i.clmm_pool_id||i.pool),a=await d.getPools(Array.from(new Set(m)));console.log(a,"poolList:");for(let i=0;i<t.length;i++){const o=t[i],s=a.filter(k=>k.poolAddress==o.clmm_pool_id||k.poolAddress==o.pool)[0];console.log(s,a,"##pool");const l=d.getCoinAmountFromLiquidity({pool:s,position:o,roundUp:!1}),{RATES:v}=this.getPoolStore,c=this.farmsPoolObj[o.clmm_pool_id||o.pool];console.log("🚀🚀🚀 ~ file: farms.ts:408 ~ getPositionByAllPool ~ poolInfo:",c);const B=((g=v[c==null?void 0:c.token_a_address])==null?void 0:g.price)||0,F=((S=v[c==null?void 0:c.token_b_address])==null?void 0:S.price)||0,A=(p=u[c==null?void 0:c.token_a_address])==null?void 0:p.decimals,N=(L=u[c==null?void 0:c.token_b_address])==null?void 0:L.decimals,C=new n(l.coinaAmount).div(Math.pow(10,A)),D=new n(l.coinbAmount).div(Math.pow(10,N)),X=new n(l.coinaAmount).div(Math.pow(10,A)).mul(B),$=new n(l.coinbAmount).div(Math.pow(10,N)).mul(F);let E,T;o.tick_lower_index==d.TickUtil.getMinIndex(Number(c.tick_spacing))?E="0":E=d.TickMath.tickIndexToPrice(Number(o.tick_lower_index),A,N).toString(),o.tick_upper_index==d.TickUtil.getMaxIndex(Number(c.tick_spacing))?T="∞":T=d.TickMath.tickIndexToPrice(Number(o.tick_upper_index),A,N).toString();let R;const M=G.sqrtPriceX64ToPrice(s.current_sqrt_price,A,N).toString();Number(M)>=Number(E)&&(T==="∞"||Number(M)<=Number(T))?R="Active":(Number(M)>Number(T)||Number(M)<Number(E))&&(R="Inactive");let H;if(o.id){const k=X.add($);r[o.clmm_pool_id]||(r[o.clmm_pool_id]={}),r[o.clmm_pool_id][o.id]=k}let q=new n(0);const z=[];if(o.rewards&&o.rewards.length>0){const k=this.farmsPoolObj[o.clmm_pool_id];console.log("farmsPoolInfo:",k),o.rewards.forEach((P,W)=>{var Q;const y=P.rewarder_type=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":P.rewarder_type,Y=u[y],Z=((Q=v[y])==null?void 0:Q.price)||0,J=new n(P.rewarder_amount).div(new n(Math.pow(10,Y.decimals))),U=J.mul(new n(Z));e[o.clmm_pool_id]&&e[o.clmm_pool_id][o.id]?e[o.clmm_pool_id][o.id]=e[o.clmm_pool_id][o.id].add(U):e[o.clmm_pool_id]&&!e[o.clmm_pool_id][o.id]?(e[o.clmm_pool_id][o.id]={},e[o.clmm_pool_id][o.id]=U):(e[o.clmm_pool_id]={},e[o.clmm_pool_id][o.id]={},e[o.clmm_pool_id][o.id]=U),console.log(this.farmsRewardObj,"##farmsRewardObj"),q=q.add(U),(k.rewarders[W]||P.rewarder_amount>0)&&z.push({...P,rewarderAmount:J.toString(),rewarderAmountUsd:U.toString(),rewarderType:y})}),o.rewards=z}else o.rewards=[],this.farmsRewardObj[o.clmm_pool_id]={};w.push({...o,minPrice:E,maxPrice:T,positionUSD:X.add($).toNumber(),clmmPool:o.clmm_pool_id||o.pool,positionStatus:R,positionSource:o.creator?"clmm":"farming",farmsPoolId:o.pool_id,coinA:c.coinA,coinB:c.coinB,soucrce:o.id?"farming":"clmm",positionShare:H,amountAUsd:X.toString(),amountBUsd:$.toString(),amountA:C.toString(),amountB:D.toString(),positionRewardAmount:q})}this.farmsPositionList=w;const O={};w.forEach(i=>{O[i.clmm_pool_id||i.pool]||(O[i.clmm_pool_id||i.pool]=[]),O[i.clmm_pool_id||i.pool].push(i)}),this.farmsPositionObj=O,this.farmsAllPositionLoading=!1,console.log(this.farmsPositionObj,"#farmingPositionList"),console.log(e,"##this.farmsRewardObj");const b={};Object.keys(e).forEach(i=>{console.log(e,i,"farmsRewardObj:"),b[i]={},b[i].amountUsd=new n(0),typeof e[i]=="object"&&Object.keys(e[i]).forEach(o=>{console.log(e[i][o].toString(),"#######375"),b[i].amountUsd=b[i].amountUsd.add(e[i][o]),console.log(b[i].amountUsd.toString(),"result[key].amountUsd.toString()")})});const f={};Object.keys(r).forEach(i=>{f[i]={},f[i].amount=new n(0),f[i].positionNum=0,typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{f[i].amount=f[i].amount.add(r[i][o]),f[i].positionNum+=1})}),console.log("farmsUserUsd:",r),this.farmsRewardObj=b,this.farmsUserUsd=f,console.log(this.farmsRewardObj,"##this.farmsRewardObj"),this.getMyFarms()},getMyFarms(){const h=[];console.log("🚀🚀🚀 ~ file: farms.ts:588 ~ getMyFarms ~ this.farmsPositionObj:",this.farmsPositionObj),this.farmsPoolList.forEach(_=>{const d=this.farmsPositionObj[_.clmm_pool_id]&&this.farmsPositionObj[_.clmm_pool_id].filter(u=>u.positionSource=="farming");console.log(d,"getMyFarmsresult##"),d&&d.length>0&&h.push(_)}),this.myFarmsPoolList=h,console.log(h,"##myFarms")},setFarmsLoadingObj(h){this.farmsLoadingObj[h]=!0},logOut(){this.farmsPositionObj={},this.farmsUserUsd={},this.farmsRewardObj={},this.farmsPositionList=[],this.farmsAllPositionLoading=!1,this.myFarmsPoolList=[]}}});export{eo as u};
