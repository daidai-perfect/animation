import{m as W,W as A,ae as K}from"./entry.7427f084.js";import{e as i,L as B,M as z,a as j,X as c,s as g}from"./pool.04cdd6ce.js";import{D as l}from"./decimal.0bdeb344.js";const q=K(),N=q.public.appEnv;function Q(a){const f={launchpad:i[a||"Sui"].launchpad,ido:i[a||"Sui"].ido,xcetus:i[a||"Sui"].xcetus,xcetus_dividends:i[a||"Sui"].xcetus_dividends,cetus_faucet:i[a||"Sui"].cetus_faucet,xtoken:i[a||"Sui"].xtoken,xtoken_dividends:i[a||"Sui"].xtoken_dividends,token_faucet:i[a||"Sui"].token_faucet,booster:i[a||"Sui"].booster,maker_bonus:i[a||"Sui"].maker_bonus},p={fullRpcUrl:localStorage.getItem(`${a}-currentRpclocal4`)||i[a||"Sui"].fullRpcUrl,simulationAccount:i[a||"Sui"].simulationAccount,cetus_config:i[a||"Sui"].cetus_config,clmm_pool:i[a||"Sui"].clmm_pool,integrate:i[a||"Sui"].integrate,deepbook:i[a||"Sui"].deepbook,deepbook_endpoint_v2:i[a||"Sui"].deepbook_endpoint_v2,aggregatorUrl:i[a||"Sui"].aggregatorUrl},w=new B(p),s=new z(f,w),C=j(),m=W(()=>C);A(()=>{m.value.address&&(s.ClmmSDK.senderAddress=m.value.address)});const y=async e=>{const t=await s.XCetusModule.getOwnerLockCetuss(e);return console.log(t,"===>lockWhales"),t},M=async(e,t)=>{const o=c.getAvailableXCetus(e,t);return console.log(o,"==>availableXwhale"),o},S=async e=>{const t=await s.XCetusModule.getOwnerCetusCoins(e);return console.log(t,"===>coins"),t},x=async e=>await s.XCetusModule.getOwnerVeNFT(e),D=async(e,t)=>{const o={amount:e};t&&(o.venft_id=t);const n=await s.XCetusModule.convertPayload(o),r={action:"xCETUSConvert",txbParams:o};return{txb:u(n),payloadParams:r}},P=async()=>{const e=await s.XCetusModule.mintVeNFTPayload();return u(e)},b=async(e,t)=>{const o=await s.XCetusModule.redeemNum(e,t);return console.log(o,"result===>"),{amountOut:o.amountOut,percent:g(new l(o.percent).mul(new l(100)).toString(),2)}},X=async(e,t)=>{const o=await s.XCetusModule.reverseRedeemNum(e,t);return{amountOut:o.amountOut,percent:g(new l(o.percent).mul(new l(100)).toString(),2)}},k=async(e,t,o)=>{const n={venft_id:t,amount:e,lock_day:o},r=await s.XCetusModule.redeemLockPayload(n),d={action:"xCETUSRedeemLock",txbParams:n};return{txb:u(r),payloadParams:d}},T=e=>c.getLockingCetuss(e),_=async(e,t)=>{const o=await s.XCetusModule.getLockCetus(e);if(o&&c.isLocked(o)){const n={venft_id:t,lock_id:e},r=s.XCetusModule.cancelRedeemPayload(n),d={action:"xCETUSCancelRedeem",txbParams:n};return{txb:u(r),payloadParams:d}}},h=async(e,t)=>{const o=await s.XCetusModule.getLockCetus(e);if(o&&!c.isLocked(o)){const n={venft_id:t,lock_id:e},r=await s.XCetusModule.redeemPayload(n),d={action:"xCETUSRedeem",txbParams:n};return{txb:u(r),payloadParams:d}}},I=async()=>{const e=await s.XCetusModule.getDividendManager();console.log("dividendManager:",e);const t=Number(c.getNextStartTime(e).toString());return console.log(t,"===>nextStartTime"),{nextStartTime:t,...e}},R=async(e,t)=>{const o=await s.XCetusModule.getVeNFTDividendInfo(t.venft_dividends.id,e);return{rewards:o&&o.rewards||[]}},O=async e=>{const t=await s.XCetusModule.getDividendManager();if(console.log("dividendManager: ",t),t.bonus_types.length>0){const o=await s.XCetusModule.redeemDividendPayload(e,t.bonus_types);return u(o)}},L=e=>{const t=new Set;return e.forEach(o=>{o.rewards.forEach(n=>{n.amount>0&&t.add(n.coin_type)})}),Array.from(t)},F=async e=>{const t=await s.XCetusModule.getDividendManager(),o=await s.XCetusModule.getVeNFTDividendInfo(t.venft_dividends.id,e);console.log("veNFTDividendInfo: ",o);const n=L(o.rewards);console.log(n,"===>bonus_types");const r={venft_id:e,bonus_types:n,xTokenType:[s.XCetusModule.buileXTokenCoinType()]},d=await s.XCetusModule.redeemDividendV2Payload(r.venft_id,r.bonus_types,r.xTokenType),V={action:"xCETUSClaimStakingRwewards",txbParams:r};return{txb:u(d),payloadParams:V}},E=async e=>{console.log(e,"==>accountAddress");try{const t=await s.XCetusModule.getOwnerVeNFT(e);if(console.log("nfts: ",t),t){const o=await s.XCetusModule.getXcetusManager();console.log("xcetusManager: ",o);const n=new l(t.xcetus_balance).div(o.treasury).mul(100).toString();return console.log("rate: ",n),Number(n)>0&&Number(n)<.001?"<0.001":g(n,3)}else return 0}catch{return"--"}},U=async()=>{const e=await s.XCetusModule.getXcetusManager();return console.log("xcetusManager: ",e),e},u=e=>({transactionBlock:e,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}}),v=e=>{const t=Date.now()/1e3,{start_time:o,interval_day:n}=e;console.log(e,"#dividendManager");const r=N=="test"?Math.ceil((t-o)/(n*60)):Math.ceil((t-o)/(n*24*3600));return console.log(t,"===>currentTime"),console.log(o,"===>start_time"),console.log(t-o,"===>currentTime-start_time"),console.log((t-o)/(n*60),"(currentTime - start_time) / (interval_day * 60)"),r};return{getOwnerLockCetuss:y,getOwnerCetusCoins:S,getOwnerVeNFT:x,depositCetus:D,getMintVeNFTPayload:P,redeemNum:b,getRedeemLockPayload:k,getAvailableXCetus:M,getLockingCetuss:T,getCancelRedeemPayload:_,getVeNFTDividendInfo:R,reverseRedeemNum:X,getRedeemPayload:h,getRedeemDividendPayload:O,getMyShare:E,getDividendManager:I,getPeriod:v,getRedeemDividendV2Payload:F,getPhaseDividendInfo:async e=>{const t=v(e);console.log("🚀🚀🚀 ~ file: useWhale.ts:320 ~ getPhaseDividendInfo ~ dividendManager:",e),console.log(t,"getPhaseDividendInfo period");let o=await s.XCetusModule.getPhaseDividendInfo(String(t));console.log(!o,"==>phaseDividendInfo");let n;if(!o){if(n=await s.XCetusModule.getPhaseDividendInfo(e.dividends.size),n)o=n;else for(let r=e.dividends.size;r>1;r--)if(n=await s.XCetusModule.getPhaseDividendInfo(String(r)),console.log("🚀🚀🚀 ~ file: useWhale.ts:327 ~ getPhaseDividendInfo ~ lastPhaseDividendInfo:",n),n){o=n;break}}return console.log("🚀🚀🚀 ~ file: useWhale.ts:336 ~ getPhaseDividendInfo ~ phaseDividendInfo:",o),o},getXcetusManager:U}}export{Q as u};
