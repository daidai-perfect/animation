import{_ as fe}from"./upgrade-select-input.e48505c3.js";import{_ as be}from"./upgrade-loading.67acc941.js";import{_ as ke}from"./apr-tips.28f11b14.js";import{_ as we}from"./token-warning.ecf8eb6d.js";import{_ as ye}from"./coin-tips.ca93be1b.js";import{_ as me}from"./nuxt-link.95a5dde5.js";import{_ as Ms,a as Ae,b as Ce,c as zs,d as Hs}from"./pools-list-item.15dbd752.js";import{u as Le,b as Se,q as Es,h as j,P as Ie,d as z,j as Y,m as Ns,e as bs,Q as qs,l as ys}from"./pool.8123a9d1.js";import{i as as}from"./import-icon.de3e6c66.js";import{a as Ne,l as Oe,b as $e,r as f,m as A,y as Fe,D as is,K as je,$ as Re,e as Te,q as De,o as a,f as l,h as o,F as V,s as q,x as g,i as p,z as M,O as es,v as _,j as F,c as ms,S as Be,t as X,w as os,u as v,p as Ue,k as Ve,N as Pe}from"./entry.ceb807d2.js";/* empty css              */import"./index.63a5acc4.js";import{p as Ee}from"./precision.a7a6c57b.js";import{u as qe}from"./autoPool.aac732e6.js";import{D as As}from"./decimal.0bdeb344.js";import{_ as Js}from"./icon-selected_3x.09e9a6f0.js";import{_ as Ks}from"./icon_on_2x.5e96733d.js";import{_ as Ws}from"./icon_farms_2x.c1577c9c.js";import{_ as Qs}from"./farms.920e94ab.js";import{_ as Me}from"./img-no-Positions_2x.bd39b783.js";import{_ as ze}from"./img-no-Positions_2x.7f8f9e58.js";import"./coin-select.c1146c37.js";/* empty css              */import"./token-warning_2x.50f43e07.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./farms.9ef36835.js";import"./icon_rewards_2x.3b77d9d4.js";const He=Ne({setup(){const{t:e,locale:C}=Oe(),K=$e(),Os=f(!1),ks=f(!1),Z=f(!1),cs=f(!1),us=f(!1),H=f("VOL"),W=f(["APR","TVL"]),Q=f(!1),R=f(e("tab.all")),ls=f([e("tab.wormhole"),e("tab.celer")]),P=A(()=>{const n=Array.from(new Set(h.value.poolConfigList.flatMap(d=>!d.category||d.category==""?"All":d.category)));return console.log(n,"newArr"),n.length<=1?[]:n}),hs=n=>{h.value.setCurrentPoolTab(n)},T=f([]),N=f(""),s=f(["pools"]),L=Le(),w=Se(),y=f(!0),O=f(!1),vs=f(!1),ps=f(!1),ws=f([]),S=f(""),k=A(()=>w),Xs=A(()=>w.theme),h=A(()=>L),Ys=A(()=>w.statsData),Cs=A(()=>h.value.tokensObj),Ls=f(!1);Fe(async()=>{var t,I,m;const n=(m=(I=(t=K==null?void 0:K.currentRoute)==null?void 0:t.value)==null?void 0:I.query)==null?void 0:m.language;n&&xs(n),S.value=C.value,document.addEventListener("click",()=>{us.value=!1,Q.value=!1,ps.value=!1});const d=localStorage.getItem(`pools-${ns.value}-selectall`),r=localStorage.getItem(`pools-${ns.value}-farms`),b=localStorage.getItem(`pools-${ns.value}-viewCard`);O.value=d==="true",vs.value=r==="true",Z.value=b==="true";const c=localStorage.getItem("selectIncentiveTypeList"),i=c&&JSON.parse(c);c&&i.length>0?$.value=i:$.value=["Mining","Farming","No incentives"],await Es(1e3),Ls.value=!0}),is(()=>Z.value,async(n,d)=>{n!==d&&(cs.value=!0,await Es(1500),cs.value=!1)});const{setLang:Zs}=w,xs=n=>{Zs(n),C.value=n},se=(n,d)=>n&&d?Ee.plus(Ns(n),Ns(d)):n||0,Ss=n=>{let d=0;return n&&n.forEach(r=>{d+=Ns(String(r))}),String(Y(String(d),2))},ee=(n=[])=>{const d=n&&n.length>0?n:Object.values(h.value.poolsObj),r=[];d.filter(i=>!i.is_closed).forEach(i=>{var gs,fs,Rs,Ts,Ds,Bs,Us,Vs,Ps;const t=k.value.addressLpTokens[i.address],I=h.value.poolsObj[i.address];let m,E,G,U,rs,J;t&&(m=t.rewarder_apr[0]?Number(t.rewarder_apr[0].substring(0,t.rewarder_apr[0].length-1)):0,E=t.rewarder_apr[1]?Number(t.rewarder_apr[1].substring(0,t.rewarder_apr[1].length-1)):0,G=t.rewarder_apr[2]?Number(t.rewarder_apr[2].substring(0,t.rewarder_apr[2].length-1)):0,U=m+E+G,t.stable_farming&&t.stable_farming.stable_rewarder.map(ge=>{ge.amount_second>0&&(J=!0)}),rs=t.stable_farming&&t.stable_farming.apr*100);const ts=i.needReverse?((fs=h.value.tokensObj[i.coinB.address])==null?void 0:fs.labels)||[]:((gs=h.value.tokensObj[i.coinA.address])==null?void 0:gs.labels)||[],ds=i.needReverse?((Rs=h.value.tokensObj[i.coinA.address])==null?void 0:Rs.labels)||[]:((Ts=h.value.tokensObj[i.coinB.address])==null?void 0:Ts.labels)||[],ss=[...new Set(ts.concat(ds))];r.push({...i,liqidity:t?t.pure_tvl_in_usd:"0",...t,vol:t?t.vol_in_usd_24h:"0",apr:t&&t.apr_7day?(Ds=t.apr_7day)==null?void 0:Ds.replace("%",""):"--",fee:i.fee?i.fee:I!=null&&I.fee?I.fee:"--",aprNum:t&&t.apr_7day?String(Number(t.apr_7day.substring(0,t.apr_7day.length-1))+U):"0",rewarder_apr:Ss(t&&t.rewarder_apr),aprTotal:se(t&&t.apr_7day,t&&Ss(t.rewarder_apr)),rewarders0:t&&t.rewarder_apr[0],rewarders1:t&&t.rewarder_apr[1],rewarders2:t&&t.rewarder_apr[2],labels:ss,isFarming:i==null?void 0:i.isFarming,fee_24_h:t&&t.fee_24_h?t.fee_24_h:0,isAuthorized:!!((Us=Cs.value[(Bs=i==null?void 0:i.token_a)==null?void 0:Bs.address])!=null&&Us.is_trusted&&((Ps=Cs.value[(Vs=i==null?void 0:i.token_b)==null?void 0:Vs.address])!=null&&Ps.is_trusted)),isStableFarming:J,stableFarmingApr:rs,isVaults:t&&t.auto_pool})});let b=[];if(H.value=="APR"?b=r.sort((i,t)=>t.aprNum-i.aprNum):H.value=="VOL"?b=r.sort((i,t)=>t.vol-i.vol):b=r.sort((i,t)=>t.liqidity-i.liqidity),R.value!=e("tab.all")){const i=[];b.forEach(t=>{t.labels.indexOf(R.value)!==-1&&i.push(t)}),T.value=i}else T.value=b;if(N.value){var c=new RegExp("[\\u4E00-\\u9FFF]+","g");if(c.test(N.value)){N.value="";return}const i=T.value.filter(t=>t.symbol.toLowerCase().includes(N.value.toLowerCase()));T.value=i}y.value=!1},_s=A(()=>{if(h.value.tokens&&h.value.tokens.length>0){const n={};return h.value.tokens.forEach(d=>{n[d.address]={...d}}),n}return null}),oe=A(()=>k.value.getStatsError);is(()=>[_s.value,h.value.poolConfigList,k.value.chainName,k.value.addressLpTokens,oe.value,Ls.value,N.value,H.value,R.value],([n,d,r,b,c,i])=>{i&&n&&d&&(d==null?void 0:d.length)>0&&d[0]&&r&&r!=null&&r.toLowerCase().includes(d[0].chain)&&(!c&&!z(b)||c)&&ee(d)},{immediate:!0,deep:!0}),je(),qe();const $s=()=>{y.value=!0,ks.value=!0,w.getStatsData(k.value.chainName,k.value.filterCoinsObj),L.setPoolConfigList(k.value.chainName,k.value.filterCoinsObj),setTimeout(()=>{ks.value=!1},1e3)};is(()=>k.value.isRefresh,n=>{var r;const d=(r=K==null?void 0:K.currentRoute)==null?void 0:r.value.name.split("-")[1];n&&(!d||d=="list"||d=="")&&$s()});const ae=n=>{const d=[];d.push(H.value),W.value.forEach((r,b)=>{r!=n&&d.push(r)}),W.value=d,H.value=n},le=n=>{const d=[];ls.value.forEach((r,b)=>{r==n?d[b]=R.value:d[b]=r}),ls.value=d,R.value=n};is(()=>w.lang,n=>{S.value=n});const ne=A(()=>bs[k.value.chainName]);is(()=>k.value.isSelect,n=>{n!=="pools"&&(us.value=!1,Q.value=!1)});const re=A(()=>h.value.poolConfigList.filter(d=>d.address==bs[k.value.chainName].newPositionAddress)[0]),te=A(()=>bs[k.value.chainName].hasCreatePool),ns=A(()=>k.value.chainName),de=()=>{localStorage.setItem(`pools-${ns.value}-selectall`,O.value?"":"true"),O.value=!O.value},ie=()=>{localStorage.setItem(`pools-${ns.value}-viewCard`,Z.value?"":"true"),Z.value=!Z.value},ce=n=>{var d;return(n==null?void 0:n.logoURI)||(n==null?void 0:n.logo_url)||((d=h.value.tokensObj[n==null?void 0:n.address])==null?void 0:d.logo_url)||(k.value.theme==="default"?as("/image/coins/unknown.png"):as("/image/coins/sui-unknown.png"))},x=f(null),D=A(()=>x.value&&x.value.firstToken?x.value.firstToken:null),B=A(()=>x.value&&x.value.lastToken?x.value.lastToken:null),Fs=A(()=>{if(k.value.chainName!=="Sui")return T.value;if(console.log(T.value,"list.value##"),_s.value&&T.value&&T.value.length>0){console.log("🚀🚀🚀 ~ file: list.vue:1471 ~ authorizedpoolList ~ authorizedTokensObj.value:",_s.value);const n=[];return T.value.forEach(r=>{var b,c;if(_s.value[qs((b=r==null?void 0:r.token_a)==null?void 0:b.address)]&&_s.value[qs((c=r==null?void 0:r.token_b)==null?void 0:c.address)])if($.value.includes("Mining")&&r.rewarderInfo&&r.rewarderInfo.length>0){const i=[];r.rewarderInfo.forEach((m,E)=>{var ts,ds,ss;const G=(ts=h.value.tokensObj[m.coinAddress])==null?void 0:ts.decimals,U=ys(new As(m.emissionsEveryDay/Math.pow(10,G)).toDP(2,As.ROUND_HALF_UP).toString(),4),rs=Number(U)>0?j(U):U,J=ys(Number(U)*h.value.RATES[m.coinAddress]&&h.value.RATES[m.coinAddress].price,4);i.push({...m,logoUrl:(ds=h.value.tokensObj[m.coinAddress])==null?void 0:ds.logoURI,day:rs,dayUSD:J,symbol:(ss=h.value.tokensObj[m.coinAddress])==null?void 0:ss.symbol,rewarders:r[`rewarders${E}`]&&r[`rewarders${E}`].replace("%",""),rewarder_display:r[`rewarder_display${E+1}`],resultDay:U})});const t=i.filter(m=>m.rewarder_display);let I=[];(!r.rewarderInfo||r.rewarderInfo.length<1||JSON.stringify(r.rewarderInfo)!==JSON.stringify(n))&&(I=t),n.push({...r,rewardes:I})}else($.value.includes("Farming")&&r.isStableFarming||$.value.includes("No incentives")&&r.rewarderInfo&&r.rewarderInfo.length<=0&&!r.isStableFarming)&&n.push(r)}),n.filter((r,b)=>D.value&&B.value?r.coinA.address==D.value.address&&r.coinB.address==B.value.address||r.coinA.address==B.value.address&&r.coinB.address==D.value.address:D.value?r.coinA.address.toLowerCase().includes(D.value.address.toLowerCase())||r.coinB.address.toLowerCase().includes(D.value.address.toLowerCase()):B.value?r.coinA.address.toLowerCase().includes(B.value.address.toLowerCase())||r.coinB.address.toLowerCase().includes(B.value.address.toLowerCase()):n)}return[]}),Is=f([]),ue=["Mining","Farming","No incentives"],$=f(),he=n=>{if($.value.includes(n)){const d=$.value.indexOf(n);$.value.splice(d,1),console.log(d,"index###")}else $.value.push(n);localStorage.setItem("selectIncentiveTypeList",JSON.stringify($.value))},js=A(()=>h.value.poolListPageSize),ve=A(()=>h.value.poolListLoading),pe=()=>{var b;let n=[];n=T.value,console.log(n,"##pageList");const d=n.filter((c,i)=>D.value&&B.value?c.coinA.address==D.value.address&&c.coinB.address==B.value.address||c.coinA.address==B.value.address&&c.coinB.address==D.value.address:D.value?c.coinA.address.toLowerCase().includes(D.value.address.toLowerCase())||c.coinB.address.toLowerCase().includes(D.value.address.toLowerCase()):B.value?c.coinA.address.toLowerCase().includes(B.value.address.toLowerCase())||c.coinB.address.toLowerCase().includes(B.value.address.toLowerCase()):n);let r=[];d.forEach((c,i)=>{if(c.isPoolsInfoError)r.push({...c,isAuthorized:!0});else if($.value.includes("Mining")&&c.rewarderInfo&&c.rewarderInfo.length>0){const t=[];if(c.rewarderInfo&&c.rewarderInfo.length>0){c.rewarderInfo.forEach((E,G)=>{var ss,gs,fs;const U=E.coinAddress,rs=(ss=h.value.tokensObj[U])==null?void 0:ss.decimals,J=ys(new As(E.emissionsEveryDay/Math.pow(10,rs)).toDP(2,As.ROUND_HALF_UP).toString(),4),ts=Number(J)>0?j(J):J,ds=ys(Number(J)*h.value.RATES[U]&&h.value.RATES[U].price,4);t.push({...E,logoUrl:(gs=h.value.tokensObj[U])==null?void 0:gs.logo_url,day:ts,dayUSD:ds,symbol:(fs=h.value.tokensObj[U])==null?void 0:fs.symbol,rewarders:c[`rewarders${G}`]&&c[`rewarders${G}`].replace("%",""),rewarder_display:c[`rewarder_display${G+1}`],resultDay:J})});const I=t.filter(E=>E.rewarder_display);let m=[];(!c.rewarderInfo||c.rewarderInfo.length<1||JSON.stringify(c.rewarderInfo)!==JSON.stringify(I))&&(m=I),r.push({...c,rewardes:m})}}else($.value.includes("Farming")&&c.isStableFarming||$.value.includes("No incentives")&&c.rewarderInfo&&c.rewarderInfo.length<=0&&!c.isStableFarming)&&r.push(c)}),Is.value=r.slice(0,js.value),r&&r.length>0&&((b=r[0])!=null&&b.isPoolsInfoError)?w.setPoolAmount(r.length):y.value||(O.value?w.setPoolAmount(r.length):(console.log("🚀🚀🚀 ~ file: list.vue:1760 ~ updateLpList ~ authorizedpoolList.value.length:",Fs.value.length),w.setPoolAmount(Fs.value.length)))};Re(()=>{w.setPoolAmount("--")}),is(()=>[D.value,B.value,T.value,O.value,h.value.currentPoolTab,Ls.value,$.value,js.value],([n,d,r,b,c,i])=>{var t,I;i&&((n&&((t=h==null?void 0:h.value.tokensObj[n.address])!=null&&t.isSelfBuilt)||d&&((I=h==null?void 0:h.value.tokensObj[d.address])!=null&&I.isSelfBuilt))&&!b?(Is.value=[],w.setPoolAmount(0)):(n||d||r)&&pe())},{deep:!0});const _e=A(()=>k.value.poolAmount!=="--"?4-Number(k.value.poolAmount)%4:0);return{tokensObj:Cs,isCheckOpen:ps,selectedIncentiveType:he,selectIncentiveTypeList:$,selectedOptions:ws,tabArr:P,changeTab:hs,getLabel:n=>h.value.tokensObj&&h.value.tokensObj[n]&&h.value.tokensObj[n].labels,patchNumber:_e,getRewarderApr:Ss,childTokenSelectRef:x,firstToken:D,lastToken:B,showList:Is,isFarms:vs,getCoinIcon:ce,isViewCard:Z,clickDisplayAll:de,clickViewCard:ie,isSelectAll:O,chainName:ns,hasCreatePool:te,store:k,lpInfo:re,config:ne,t:e,router:K,loading:Os,clickRefresh:$s,refresh:ks,searchKey:N,current:s,addCommom:j,list:T,theme:Xs,statsData:Ys,pools:h,select:us,selectValue:H,selectList:W,label:Q,labelValue:R,labelList:ls,changeSort:ae,changeSortLabel:le,listLoading:y,languageValue:S,isSwitchDisplayMode:cs,formatNumberAddCommom:Ie,checkNullObj:z,importIcon:as,decimalUi:Y,incentiveTypesList:ue,poolListLoading:ve}}}),Gs=""+globalThis.__publicAssetsURL("sui-image/icon_autopools@2x.gif");const u=e=>(Ue("data-v-037cd95b"),e=e(),Ve(),e),Je={class:"upgrade-pools-list-container"},Ke={class:"content-top"},We={class:"content-top-left"},Qe={key:0,class:"tag-list"},Ge=["onClick"],Xe={class:"content-top-right"},Ye={class:"radio"},Ze={key:0,src:Js},xe=u(()=>o("span",null,"Display all pools",-1)),so={class:"check-box"},eo=u(()=>o("span",null,"Incentive types",-1)),oo=u(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),ao=[oo],lo={key:0,class:"select-list"},no=["onClick"],ro={class:"radio"},to={key:0,src:Js},io={class:"search-select-box"},co=u(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),uo=[co],ho={key:0,class:"select-list"},vo=["onClick"],po={class:"search-select-box"},_o=u(()=>o("img",{src:Ks,alt:""},null,-1)),go=u(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),fo=[go],bo={key:0,class:"select-list"},ko=["onClick"],wo=u(()=>o("img",{src:Ks,alt:""},null,-1)),yo={key:0,"aria-hidden":"true",class:"cardIcon"},mo=u(()=>o("use",{"xlink:href":"#icon-icon-card"},null,-1)),Ao=[mo],Co={key:1,"aria-hidden":"true",class:"listIcon"},Lo=u(()=>o("use",{"xlink:href":"#icon-icon-list1"},null,-1)),So=[Lo],Io={key:0,class:"upgrade-loading"},No={key:1,class:"table-contianer"},Oo={class:"table"},$o={class:"table-header"},Fo={class:"table-tr"},jo=u(()=>o("th",null,"Pools",-1)),Ro=u(()=>o("th",null,"Liquidity",-1)),To=u(()=>o("th",null,"Volume (24H)",-1)),Do=u(()=>o("th",null,"Fees (24H)",-1)),Bo=u(()=>o("th",null,"Mining Rewards",-1)),Uo={class:"hover-box"},Vo={class:"apr-hover-content"},Po=u(()=>o("th",null,"Action",-1)),Eo={class:"table-body"},qo=["onClick"],Mo={class:"token"},zo={class:"img-box"},Ho={class:"img-box img-last-box"},Jo={class:"name"},Ko={class:"top"},Wo={class:"token-name"},Qo={class:"tokena"},Go={class:"tokenb"},Xo={class:"fee-tier-top"},Yo={key:0,class:"isFarming farming-logo"},Zo=u(()=>o("img",{class:"default-img",src:zs,alt:""},null,-1)),xo=u(()=>o("img",{class:"hover-img",src:Hs,alt:""},null,-1)),sa=u(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),ea=[Zo,xo,sa],oa={key:1,class:"isFarming vault-logo"},aa=u(()=>o("img",{class:"default-img",src:Ws,alt:""},null,-1)),la=u(()=>o("img",{class:"hover-img",src:Qs,alt:""},null,-1)),na=u(()=>o("div",{class:"hover-text"},"Farm rewards available",-1)),ra={key:2,class:"isFarming vault-logo"},ta=u(()=>o("img",{class:"default-img",src:Ms,alt:""},null,-1)),da=u(()=>o("img",{class:"hover-img",src:Gs,alt:""},null,-1)),ia=u(()=>o("div",{class:"hover-text"},"Vault available",-1)),ca={class:"label-all"},ua={key:0},ha={key:0},va={class:"skeleton-box"},pa={key:1},_a={key:2},ga={class:"skeleton-box"},fa={key:3},ba={key:4},ka={class:"skeleton-box"},wa={key:5},ya={key:6},ma={class:"skeleton-box"},Aa={key:7},Ca={class:"reward-token-box"},La={class:"rewards-hover"},Sa={alt:""},Ia={key:8},Na={key:9},Oa={class:"skeleton-box"},$a={class:"hover-box"},Fa={class:"apr"},ja={key:0,class:"farming-apr"},Ra=u(()=>o("br",null,null,-1)),Ta={key:1,class:"apr-hover-content"},Da={class:"action"},Ba={key:0},Ua={colspan:"7"},Va={class:"loading-box"},Pa={key:2,class:"item-container"},Ea={class:"loading-box"},qa={class:"h5-pool-item"},Ma={class:"token"},za={class:"token"},Ha={class:"img-box"},Ja={class:"img-box img-last-box"},Ka={class:"name"},Wa={class:"top"},Qa={class:"token-name"},Ga={class:"tokena"},Xa={class:"tokenb"},Ya={class:"fee-tier-top"},Za={key:0,class:"isFarming farming-logo"},xa=u(()=>o("img",{class:"default-img",src:zs,alt:""},null,-1)),sl=u(()=>o("img",{class:"hover-img",src:Hs,alt:""},null,-1)),el=u(()=>o("div",{class:"hover-text"},"Mining rewards available",-1)),ol=[xa,sl,el],al={key:1,class:"isFarming vault-logo"},ll=u(()=>o("img",{class:"default-img",src:Ws,alt:""},null,-1)),nl=u(()=>o("img",{class:"hover-img",src:Qs,alt:""},null,-1)),rl=u(()=>o("div",{class:"hover-text"},"Farm rewards available",-1)),tl={key:2,class:"isFarming vault-logo"},dl=u(()=>o("img",{class:"default-img",src:Ms,alt:""},null,-1)),il=u(()=>o("img",{class:"hover-img",src:Gs,alt:""},null,-1)),cl=u(()=>o("div",{class:"hover-text"},"Vault available",-1)),ul={class:"label-all"},hl={key:0},vl={class:"bottom"},pl={class:"row"},_l=u(()=>o("div",{class:"left"},"APR (24H)",-1)),gl={key:0,class:"right"},fl={style:{color:"#fff"}},bl={key:0},kl={class:"apr-hover-content"},wl={class:"row"},yl=u(()=>o("div",{class:"left"},"Liquidity",-1)),ml={key:0,class:"right"},Al={key:1,class:"right"},Cl={class:"row"},Ll=u(()=>o("div",{class:"left"},"Volume (24H)",-1)),Sl={key:0,class:"right"},Il={key:1,class:"right"},Nl={class:"row"},Ol=u(()=>o("div",{class:"left"},"Fees (24H)",-1)),$l={key:0,class:"right"},Fl={key:1,class:"right"},jl={key:0,class:"row"},Rl=u(()=>o("div",{class:"left"},"Mining Rewards",-1)),Tl={key:0,class:"right"},Dl={key:1,class:"right reward-right"},Bl={class:"rewards-hover"},Ul={alt:""},Vl={key:0,class:"loading-box"},Pl={key:3,class:"no-data"},El={key:0,src:Me},ql={key:1,src:ze};function Ml(e,C,K,Os,ks,Z){const cs=fe,us=be,H=ke,W=we,Q=ye,R=me,ls=Ae,P=Pe,hs=Be,T=Ce,N=De("image");return a(),l("div",Je,[o("div",Ke,[o("div",We,[e.tabArr.length>1?(a(),l("div",Qe,[(a(!0),l(V,null,q(e.tabArr,(s,L)=>(a(),l("div",{key:L,class:M(["tag-item",s==e.pools.currentPoolTab?`tag-active tab-num-${e.tabArr.length}`:`tab-num-${e.tabArr.length}`]),onClick:w=>e.changeTab(s)},_(s),11,Ge))),128))])):g("",!0),p(cs,{ref:"childTokenSelectRef"},null,512)]),o("div",Xe,[o("div",{class:M(["tab-item",e.isSelectAll?"tab-item-active":""]),onClick:C[0]||(C[0]=es(s=>e.clickDisplayAll(),["stop"]))},[o("div",Ye,[e.isSelectAll&&e.store.theme=="sui"?(a(),l("img",Ze)):g("",!0)]),xe],2),o("div",so,[o("div",{class:"search-select search-label",onClick:C[1]||(C[1]=es(()=>{e.isCheckOpen=!e.isCheckOpen,e.label=!1,e.select=!1},["stop"]))},[eo,(a(),l("svg",{"aria-hidden":"true",class:M(e.isCheckOpen?"show-icon icon":"icon")},ao,2)),e.isCheckOpen?(a(),l("div",lo,[(a(!0),l(V,null,q(e.incentiveTypesList,s=>(a(),l("div",{key:s,class:"select-menu-item",onClick:es(L=>e.selectedIncentiveType(s),["stop"])},[o("div",ro,[e.selectIncentiveTypeList.includes(s)?(a(),l("img",to)):g("",!0)]),o("span",null,_(s),1)],8,no))),128))])):g("",!0)])]),o("div",io,[o("div",{class:"search-select search-label",onClick:C[2]||(C[2]=es(()=>{e.store.setIsSelect("pools"),e.isCheckOpen=!1,e.label=!e.label,e.select=!1},["stop"]))},[o("span",null,_(e.$t("newAdd.label")),1),o("div",null,[F(_(e.labelValue)+" ",1),(a(),l("svg",{"aria-hidden":"true",class:M(e.label?"show-icon icon":"icon")},uo,2))]),e.label?(a(),l("div",ho,[(a(!0),l(V,null,q(e.labelList,(s,L)=>(a(),l("div",{key:L,class:"select-menu-item",onClick:w=>e.changeSortLabel(s)},_(s),9,vo))),128))])):g("",!0)])]),o("div",po,[o("div",{class:"search-select",onClick:C[3]||(C[3]=es(()=>{e.store.setIsSelect("pools"),e.isCheckOpen=!1,e.select=!e.select,e.label=!1},["stop"]))},[o("span",null,_(e.$t("newAdd.sortBy")),1),o("div",null,[F(_(e.selectValue)+" ",1),_o,(a(),l("svg",{"aria-hidden":"true",class:M(e.select?"show-icon icon":"icon")},fo,2))]),e.select?(a(),l("div",bo,[(a(!0),l(V,null,q(e.selectList,(s,L)=>(a(),l("div",{key:L,class:"select-menu-item",onClick:w=>e.changeSort(s)},[F(_(s)+" ",1),wo],8,ko))),128))])):g("",!0)])]),o("div",{class:"change-view",onClick:C[4]||(C[4]=s=>e.clickViewCard())},[e.isViewCard&&e.current[0]=="pools"?(a(),l("svg",yo,Ao)):(a(),l("svg",Co,So))])])]),e.listLoading||e.isSwitchDisplayMode?(a(),l("div",Io,[p(us,{loading:e.listLoading||e.isSwitchDisplayMode,type:e.isViewCard?"poolsCard":"poolsList"},null,8,["loading","type"])])):g("",!0),!e.isSwitchDisplayMode&&!e.isViewCard&&!e.listLoading?(a(),l("div",No,[o("table",Oo,[o("thead",$o,[o("tr",Fo,[jo,Ro,To,Do,Bo,o("th",null,[o("span",Uo,[F(" APR (24H) "),o("div",Vo,[p(H,{class:"noHover apr-hover-con"})])])]),Po])]),o("tbody",Eo,[(a(!0),l(V,null,q(e.showList,s=>{var L,w,y,O,vs,ps,ws;return a(),l("tr",{key:s.address,class:M(["table-tr",e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none"]),onClick:S=>s.needReverse?e.router.push(`/liquidity/deposit?poolAddress=${s.address}`):e.router.push(`/liquidity/deposit?poolAddress=${s.address}`)},[o("td",null,[o("div",Mo,[o("div",zo,[X(o("img",null,null,512),[[N,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),p(W,{address:s.needReverse?(w=s.coinB)==null?void 0:w.address:(L=s.coinA)==null?void 0:L.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",Ho,[X(o("img",null,null,512),[[N,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),p(W,{address:s.needReverse?(O=s.coinA)==null?void 0:O.address:(y=s.coinB)==null?void 0:y.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",Jo,[o("div",Ko,[o("p",Wo,[o("span",Qo,[F(_(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),p(Q,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),F(" - "),o("span",Go,[F(_(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),p(Q,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Xo,_((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),l("div",Yo,ea)):g("",!0),s.isStableFarming?(a(),l("div",oa,[p(R,{to:"/farms",onClick:C[5]||(C[5]=es(()=>{},["stop"]))},{default:os(()=>[aa,la]),_:1}),na])):g("",!0),e.chainName=="Sui"&&s.isVaults&&("config"in e?e.config:v(bs)).hasVault?(a(),l("div",ra,[p(R,{to:"/vaults",onClick:C[6]||(C[6]=es(()=>{},["stop"]))},{default:os(()=>[ta,da]),_:1}),ia])):g("",!0),p(ls,{"token-a":s.coinA.address,"token-b":s.coinB.address},null,8,["token-a","token-b"])]),o("div",ca,[(a(!0),l(V,null,q(s.labels,(S,k)=>(a(),l("div",{key:k,class:M(["label",S])},[S!=="Native"?(a(),l("span",ua,_(S),1)):g("",!0)],2))),128))])])])]),("checkNullObj"in e?e.checkNullObj:v(z))(e.store.statsData)?(a(),l("td",ha,[o("div",va,[p(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),l("td",pa,_(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(j))(("decimalUi"in e?e.decimalUi:v(Y))(s.liqidity,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:v(z))(e.store.statsData)?(a(),l("td",_a,[o("div",ga,[p(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),l("td",fa,_(Number(s.vol)!==0&&Number(s.vol)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(j))(("decimalUi"in e?e.decimalUi:v(Y))(s.vol,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:v(z))(e.store.statsData)?(a(),l("td",ba,[o("div",ka,[p(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),l("td",wa,_(Number(s.fee_24_h)!==0&&Number(s.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(j))(("decimalUi"in e?e.decimalUi:v(Y))(s.fee_24_h,2),2)}`),1)),("checkNullObj"in e?e.checkNullObj:v(z))(e.store.statsData)?(a(),l("td",ya,[o("div",ma,[p(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),l("td",Aa,[o("div",Ca,[(a(!0),l(V,null,q(s.rewardes,S=>(a(),l("div",{key:S.address,class:M(["rewarder-token",S.day===0?"reward-none":""])},[X(o("img",null,null,512),[[N,S.logoUrl]]),o("div",La,[X(o("img",Sa,null,512),[[N,S.logoUrl?S.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:v(as))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:v(as))("/image/coins/sui-unknown.png")]]),o("span",null,_(`${S.day} ${S.symbol} per day`),1)])],2))),128))])])):(a(),l("td",Ia," ")),("checkNullObj"in e?e.checkNullObj:v(z))(e.store.statsData)?(a(),l("td",Na,[o("div",Oa,[p(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(a(),l("td",{key:10,class:M(s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(vs=s==null?void 0:s.stable_farming)!=null&&vs.stable_farming_pool?"":"noCursor")},[o("span",$a,[o("i",Fa,_(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:v(j))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:v(j))(s.apr,2))+"%",1),(ps=s==null?void 0:s.stable_farming)!=null&&ps.stable_farming_pool?(a(),l("i",ja,[Ra,F(" "+_(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:v(j))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)])):g("",!0),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(ws=s==null?void 0:s.stable_farming)!=null&&ws.stable_farming_pool?(a(),l("div",Ta,[p(H,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])):g("",!0)])],2)),o("td",null,[o("div",Da,[s.needReverse?(a(),ms(R,{key:0,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:os(()=>[F("+")]),_:2},1032,["to"])):(a(),ms(R,{key:1,class:"action-add",to:`/liquidity/deposit?poolAddress=${s.address}`},{default:os(()=>[F("+")]),_:2},1032,["to"]))])])],10,qo)}),128)),e.poolListLoading?(a(),l("tr",Ba,[o("td",Ua,[o("div",Va,[p(hs)])])])):g("",!0)])])])):g("",!0),!e.isSwitchDisplayMode&&e.isViewCard&&!e.listLoading?(a(),l("div",Pa,[e.showList&&e.showList.length>0?(a(),l(V,{key:0},[(a(!0),l(V,null,q(e.showList,(s,L)=>(a(),ms(T,{key:L,"l-item":s,"is-select-all":e.isSelectAll,"is-farms":e.isFarms},null,8,["l-item","is-select-all","is-farms"]))),128)),(a(!0),l(V,null,q(e.patchNumber,s=>(a(),l("div",{key:s,class:"patch-item"}))),128))],64)):g("",!0),o("div",Ea,[e.poolListLoading?(a(),ms(hs,{key:0})):g("",!0)])])):g("",!0),o("div",qa,[(a(!0),l(V,null,q(e.showList,s=>{var L,w;return a(),l("div",{key:s.address,class:M([e.isSelectAll||s!=null&&s.isAuthorized?e.isFarms?s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?"":"none":"":"none","item"])},[o("div",Ma,[o("div",za,[o("div",Ha,[X(o("img",null,null,512),[[N,e.getCoinIcon(s.needReverse?s.coinB:s.coinA)]]),p(W,{address:s.needReverse?s.coinB.address:s.coinA.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",Ja,[X(o("img",null,null,512),[[N,e.getCoinIcon(s.needReverse?s.coinA:s.coinB)]]),p(W,{address:s.needReverse?s.coinA.address:s.coinB.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),o("div",Ka,[o("div",Wa,[o("p",Qa,[o("span",Ga,[F(_(s.needReverse?s.coinB.symbol:s.coinA.symbol)+" ",1),p(Q,{"coin-info":s.needReverse?s==null?void 0:s.coinB:s==null?void 0:s.coinA},null,8,["coin-info"])]),F(" - "),o("span",Xa,[F(_(s.needReverse?s.coinA.symbol:s.coinB.symbol)+" ",1),p(Q,{"coin-info":s.needReverse?s==null?void 0:s.coinA:s==null?void 0:s.coinB},null,8,["coin-info"])])]),o("div",Ya,_((s==null?void 0:s.fee)*100)+"%",1),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),l("div",Za,ol)):g("",!0),s.isStableFarming?(a(),l("div",al,[p(R,{to:"/farms"},{default:os(()=>[ll,nl]),_:1}),rl])):g("",!0),e.chainName=="Sui"&&s.isVaults&&("config"in e?e.config:v(bs)).hasVault?(a(),l("div",tl,[p(R,{to:"/vaults"},{default:os(()=>[dl,il]),_:1}),cl])):g("",!0),p(ls,{"token-a":s.coinA.address,"token-b":s.coinB.address},null,8,["token-a","token-b"])]),o("div",ul,[(a(!0),l(V,null,q(s.labels,(y,O)=>(a(),l("div",{key:O,class:M(["label",y])},[y!=="Native"?(a(),l("span",hl,_(y),1)):g("",!0)],2))),128))])])])]),o("div",vl,[o("div",pl,[_l,("checkNullObj"in e?e.checkNullObj:v(z))(e.store.statsData)?(a(),l("div",gl,[p(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),l("div",{key:1,class:M(["right theme-right",s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0||(L=s==null?void 0:s.stable_farming)!=null&&L.stable_farming_pool?"":"noCursor"])},[o("div",null,[o("span",fl,_(s.is_display_rewarder?s.aprTotal>0&&s.aprTotal<.01?"<0.01":("addCommom"in e?e.addCommom:v(j))(s.aprTotal,2):s.apr>0&&s.apr<.01?"<0.01":("addCommom"in e?e.addCommom:v(j))(s.apr,2))+"% ",1),F("   "),(w=s==null?void 0:s.stable_farming)!=null&&w.stable_farming_pool?(a(),l("span",bl,_(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"<0.01":`+${("addCommom"in e?e.addCommom:v(j))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):g("",!0)]),o("div",kl,[p(H,{"l-item":s,"rewarder-info":s.rewardes,class:"noHover apr-hover-con"},null,8,["l-item","rewarder-info"])])],2))]),o("div",wl,[yl,("checkNullObj"in e?e.checkNullObj:v(z))(e.store.statsData)?(a(),l("div",ml,[p(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),l("div",Al,_(Number(s.liqidity)!==0&&Number(s.liqidity)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(j))(("decimalUi"in e?e.decimalUi:v(Y))(s.liqidity,2),2)}`),1))]),o("div",Cl,[Ll,("checkNullObj"in e?e.checkNullObj:v(z))(e.store.statsData)?(a(),l("div",Sl,[p(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),l("div",Il,_(Number(s.vol)!==0&&Number(s.vol)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(j))(("decimalUi"in e?e.decimalUi:v(Y))(s.vol,2),2)}`),1))]),o("div",Nl,[Ol,("checkNullObj"in e?e.checkNullObj:v(z))(e.store.statsData)?(a(),l("div",$l,[p(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(a(),l("div",Fl,_(Number(s.fee_24_h)!==0&&Number(s.fee_24_h)<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:v(j))(("decimalUi"in e?e.decimalUi:v(Y))(s.fee_24_h,2),2)}`),1))]),s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),l("div",jl,[Rl,("checkNullObj"in e?e.checkNullObj:v(z))(e.store.statsData)?(a(),l("div",Tl,[p(P,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):s.isFarming&&s.rewarderInfo&&s.rewarderInfo.length>0?(a(),l("div",Dl,[(a(!0),l(V,null,q(s.rewardes,y=>{var O;return a(),l("div",{key:y.address,class:"rewarder-token"},[X(o("img",null,null,512),[[N,e.getCoinIcon((O=e.pools)==null?void 0:O.tokensObj[y.coinAddress])]]),o("div",Bl,[X(o("img",Ul,null,512),[[N,y.logoUrl?y.logoUrl:e.theme==="default"?("importIcon"in e?e.importIcon:v(as))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:v(as))("/image/coins/sui-unknown.png")]]),o("span",null,_(`${y.day} ${y.symbol} per day`),1)])])}),128))])):g("",!0)])):g("",!0)]),p(R,{to:`/liquidity/deposit?poolAddress=${s.address}`,class:"add-btn"},{default:os(()=>[F("+ Add Liquidity")]),_:2},1032,["to"])],2)}),128)),e.poolListLoading?(a(),l("div",Vl,[p(hs)])):g("",!0)]),!e.isSwitchDisplayMode&&e.store.poolAmount!=="--"&&e.store.poolAmount<=0&&!e.listLoading?(a(),l("div",Pl,[e.theme=="default"?(a(),l("img",El)):(a(),l("img",ql)),o("span",null,_(e.$t("common.poolsNotFound")),1)])):g("",!0)])}const kn=Te(He,[["render",Ml],["__scopeId","data-v-037cd95b"]]);export{kn as default};
