import{_ as ie,a as te,b as ue,c as ve}from"./stats-echarts-aptos.409e2f67.js";import{_ as pe}from"./apr-tips.15fae95c.js";import{_ as he}from"./upgrade-loading.6dc96b67.js";import{_ as ce}from"./token-warning.25c15a3a.js";import{i as P}from"./import-icon.de3e6c66.js";import{u as _e,a as k,d as E,p as ge,c as N,t as ys,j as js,s as As}from"./sha256.de7acfa8.js";import{a as ke,y as fe,l as M,b as me,r as v,H as be,q as gs,e as we,s as Te,o as r,f as d,h as a,v as n,A as y,i as m,j as C,F as ss,E as es,x as w,a3 as ye,t as is,u as i,w as ks,p as Ce,k as $e,B as Oe}from"./entry.ad32dc49.js";/* empty css              */import{u as je,p as Ls}from"./pool.f9585ea2.js";import{p as Ae}from"./precision.a7a6c57b.js";import{_ as fs}from"./icon_on_stats.cdf13a69.js";/* empty css              */import"./index.31084607.js";import"./index.fb6eb370.js";import"./lodash.1ae2ad4e.js";import"./decimal.0bdeb344.js";import"./farms.42704ce8.js";import"./icon_rewards_2x.2d4d63c1.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const Le=ke({setup(){const s=je(),{t:p,locale:Hs}=fe(),_=M(()=>s),Cs=M(()=>_.value.allTokenObj||{}),$s=M(()=>_.value.tokensObj||{}),_s=_e(),V=M(()=>_s),os=me();let ms=v("big");const R=v(1),F=v(1);let S=v(!1);be(()=>{_s.getStatsData(V.value.chainName,V.value.filterCoinsObj);const o=document.body.clientWidth;o<750?S.value=!1:S.value=!0,window.onresize=()=>{o<750?S.value=!1:S.value=!0},S.value,ps(R.value,10),hs(F.value,10)});let A=v(null);const B=M(()=>V.value.topPoolsList),O=o=>(l,t)=>{let h=l[o],u=t[o];return h-u},e=o=>(l,t)=>{let h=l[o];return t[o]-h},f=v(!1),T=v(!1),L=v(!1),H=v(!1),j=v(!1),D=v(!1),G=v(!0),J=v(!1),K=v(!1),rs=v(!1),Q=v(!1),X=v(!1),Y=v(!1),q=v(!1),as=v(!1),ls=v(!1),ns=v(!0),Z=v(!1),ts=v(!1),bs=v("Volume (24H)"),us=v(["TVL","Volume (7D)","APR","Fees (24h)"]),Os=M(()=>V.value.chainName);gs(()=>Os.value,o=>{o=="Sui"?us.value=["TVL","Volume (7D)","APR","Fees (24h)"]:us.value=["TVL","Volume (7D)","APR"]},{immediate:!0});const vs=v(!1),ws=v("Volume (24H)"),Ts=v(["Price","TVL","Price Change"]),Is=o=>{const l=B;if(o=="tvl_in_usd"?(D.value?(f.value=!f.value,l.value.sort(f.value?O(o):e(o))):l.value.sort(e(o)),T.value=!1,L.value=!1,H.value=!1,j.value=!1,D.value=!0,G.value=!1,J.value=!1,K.value=!1,rs.value=!1):o=="vol_in_usd_24h"?(G.value?(T.value=!T.value,l.value.sort(T.value?O(o):e(o))):l.value.sort(e(o)),f.value=!1,L.value=!1,H.value=!1,j.value=!1,D.value=!1,G.value=!0,J.value=!1,K.value=!1,rs.value=!1):o=="vol_in_usd_7_day"?(J.value?(L.value=!L.value,l.value.sort(L.value?O(o):e(o))):l.value.sort(e(o)),f.value=!1,T.value=!1,H.value=!1,j.value=!1,D.value=!1,G.value=!1,J.value=!0,K.value=!1):o=="total_apr"?(K.value?(H.value=!H.value,l.value.sort(H.value?O(o):e(o))):l.value.sort(e(o)),f.value=!1,T.value=!1,L.value=!1,j.value=!1,D.value=!1,G.value=!1,J.value=!1,K.value=!0,rs.value=!1):o=="fee_24_h"&&(rs.value?(j.value=!j.value,l.value.sort(j.value?O(o):e(o))):l.value.sort(e(o)),f.value=!1,T.value=!1,L.value=!1,H.value=!1,D.value=!1,G.value=!1,J.value=!1,K.value=!1,rs.value=!0),l.value.length<10)A.value=l.value.slice(0,10);else{const t=R.value*10;A.value=l.value.slice(t-10,t)}},Ps=o=>{const l=ds;if(o=="price"?(as.value?(Q.value=!Q.value,l.value.sort(Q.value?O(o):e(o))):l.value.sort(e(o)),X.value=!1,Y.value=!1,q.value=!1,as.value=!0,ls.value=!1,ns.value=!1,Z.value=!1):o=="vol_in_usd_24h"?(ns.value?(Y.value=!Y.value,l.value.sort(Y.value?O(o):e(o))):l.value.sort(e(o)),Q.value=!1,X.value=!1,q.value=!1,as.value=!1,ls.value=!1,ns.value=!0,Z.value=!1):o=="tvl_in_usd"?(Z.value?(q.value=!q.value,l.value.sort(q.value?O(o):e(o))):l.value.sort(e(o)),Q.value=!1,X.value=!1,Y.value=!1,as.value=!1,ls.value=!1,ns.value=!1,Z.value=!0):o=="priceHour"&&(ls.value?(X.value=!X.value,l.value.sort(X.value?O(o):e(o))):l.value.sort(e(o)),Q.value=!1,Y.value=!1,q.value=!1,as.value=!1,ls.value=!0,ns.value=!1,Z.value=!1),l.value.length<10)x.value=l.value.slice(0,10);else{const t=F.value*10;x.value=l.value.slice(t-10,t)}},Vs=o=>{o=="label"?(vs.value=!vs.value,ts.value=!1):o=="select"?(ts.value=!ts.value,vs.value=!1):(ts.value=!1,vs.value=!1)},Ss=o=>{const l=[];l.push(bs.value),us.value.forEach((t,h)=>{t!=o&&l.push(t)}),us.value=l,bs.value=o,o=="TVL"?A.value.sort(e("tvl_in_usd")):o=="Volume (24H)"?A.value.sort(e("vol_in_usd_24h")):o=="APR"?A.value.sort(e("aprNum")):o=="Fees (24h)"?A.value.sort(e("fee_24_h")):o=="Volume (7D)"?A.value.sort(e("vol_in_usd_7_day")):o=="APR"&&A.value.sort(e("total_apr"))},Ds=o=>{const l=[];l.push(ws.value),Ts.value.forEach((t,h)=>{t!=o&&l.push(t)}),Ts.value=l,ws.value=o,o=="TVL"?x.value.sort(e("tvl_in_usd")):o=="Volume (24H)"?x.value.sort(e("vol_in_usd_24h")):o=="Price"?x.value.sort(e("price")):o=="Price Change"&&x.value.sort(e("priceHour"))};gs(B,()=>{S.value,ps(R.value,10)});const ps=(o,l)=>{R.value=o;const t=l*o-l;let h=l*o;h=h>B.value.length?B.value.length:h;const u=B.value;if(u.length>0){D.value&&!f.value?u.sort(Us):D.value&&f.value?u.sort(Es):G.value?T.value?u.sort(Ws):u.sort(Fs):J.value?L.value?u.sort(Bs):u.sort(Rs):K.value&&(H.value?u.sort(qs):u.sort(Ns));const g=u.filter((c,b)=>b>=t&&b<h);A.value=g}return u},Us=(o,l)=>l.tvl_in_usd-o.tvl_in_usd,Fs=(o,l)=>l.vol_in_usd_24h-o.vol_in_usd_24h,Rs=(o,l)=>l.vol_in_usd_7_day-o.vol_in_usd_7_day,Ns=(o,l)=>l.total_apr-o.total_apr,Es=(o,l)=>o.tvl_in_usd-l.tvl_in_usd,Ws=(o,l)=>o.vol_in_usd_24h-l.vol_in_usd_24h,Bs=(o,l)=>o.vol_in_usd_7_day-l.vol_in_usd_7_day,qs=(o,l)=>o.total_apr-l.total_apr;let x=v(null);const ds=M(()=>{const o=V.value.topTokensList,l=[];for(let t=0;t<o.length;t++){const h=o[t];l.push({...h,priceHour:h?Number(h.price_rate_24h.substring(0,h.price_rate_24h.length-1)):"0",address:h.symbol=="SUI"?"0x2::sui::SUI":h.address})}return l});gs(ds,()=>{S.value,hs(F.value,10)});const hs=(o,l)=>{F.value=o;const t=l*o-l;let h=l*o;h=h>ds.value.length?ds.value.length:h;const u=ds.value;if(u.length>0){Z.value&&!q.value?u.sort(zs):Z.value&&q.value?u.sort(Ks):as.value?Q.value?u.sort(Qs):u.sort(Ms):ls.value?X.value?u.sort(Xs):u.sort(Gs):ns.value&&(Y.value?u.sort(Ys):u.sort(Js));const g=u.filter((c,b)=>b>=t&&b<h);x.value=g}return u},zs=(o,l)=>l.tvl_in_usd-o.tvl_in_usd,Ms=(o,l)=>l.price-o.price,Gs=(o,l)=>l.priceHour-o.priceHour,Js=(o,l)=>l.vol_in_usd_24h-o.vol_in_usd_24h,Ks=(o,l)=>o.tvl_in_usd-l.tvl_in_usd,Qs=(o,l)=>o.price-l.price,Xs=(o,l)=>o.priceHour-l.priceHour,Ys=(o,l)=>o.vol_in_usd_24h-l.vol_in_usd_24h,Zs=o=>{const l=o.swap_account;return _.value.addressLpTokens&&_.value.addressLpTokens[l]&&_.value.addressLpTokens[l].rewarder_infos},xs=o=>{var l,t,h,u,g,c;if(V.value.theme=="sui"){const b=o.needReverse?((t=_.value.tokensObj[o.token_b_address])==null?void 0:t.labels)||[]:((l=_.value.tokensObj[o.token_a_address])==null?void 0:l.labels)||[],W=o.needReverse?((h=_.value.tokensObj[o.token_a_address])==null?void 0:h.labels)||[]:((u=_.value.tokensObj[o.token_b_address])==null?void 0:u.labels)||[],U=b.concat(W);return[...new Set(U)]}else{const b=((g=_.value.tokensObj[o.token_a_address])==null?void 0:g.labels)||[],W=((c=_.value.tokensObj[o.token_b_address])==null?void 0:c.labels)||[],U=b.concat(W);return[...new Set(U)]}},se=o=>{if(!N(o)&&!N(_.value.addressLpTokens)&&!N(_.value.tokensObj)){const l=_.value.addressLpTokens[o.swap_account];return l==null?void 0:l.is_display_rewarder}else return!1},ee=o=>{if(!N(o)&&!N(_.value.addressLpTokens)&&!N(_.value.tokensObj)){const l=o.swap_account,t=_.value.addressLpTokens[l];let h=(t==null?void 0:t.rewarder_infos)||[];const u=[];for(let c=0;c<h.length;c++){const b=h[c];_.value.tokensObj[b==null?void 0:b.coinAddress]&&u.push({...b,symbol:_.value.tokensObj[b.coinAddress].symbol,rewarderApr:o.rewarder_apr[c],logoUrl:_.value.tokensObj[b.coinAddress].logoURI,rewarder_display:t[`rewarder_display${c+1}`]})}let g=[];return g=u.filter(c=>c.rewarder_display),g}},oe=(o,l)=>o&&l?Ae.plus(ys(o),ys(l)):o>0&&o<.01?"<0.01":0,ae=o=>{let l=0;return o&&o.forEach(t=>{t.rewarder_display&&(l+=ys(String(t.rewarders)))}),String(l)},le=()=>{os&&os.push("/stats-pools")},ne=()=>{os&&os.push("/stats-tokens")},cs=v({});gs(()=>[_.value.poolConfigObj,_.value.tokensObj,V.value.topPoolsList,V.value.chainName,_.value.addressLpTokens],([o,l,t,h,u])=>{h=="Sui"?o&&!N(o)&&t&&t.length>0&&l&&!N(l)&&t.forEach(g=>{var W;const c=o[g.swap_account],b=(W=c==null?void 0:c.rewarderInfo)==null?void 0:W.map((U,I)=>{const z=l[U.coinAddress];return{...U,emissionsEveryDay:Ls(U.emissionsEveryDay,z==null?void 0:z.decimals),rewarder_display:c[`rewarder_display${I+1}`],rewarders:g.rewarder_apr[I]&&g.rewarder_apr[I].replace("%",""),logoUrl:z==null?void 0:z.logo_url,symbol:z==null?void 0:z.symbol,rewarderApr:g.rewarder_apr[I]&&g.rewarder_apr[I].replace("%","")}});c!=null&&c.is_display_rewarder&&(cs.value={...cs.value,[g.swap_account]:b})}):o&&!N(o)&&t&&t.length>0&&l&&!N(l)&&u&&!N(u)&&t.forEach(g=>{const c=u[g.swap_account];if(c){const b=c.rewarder_infos.map((W,U)=>{const I=l[W.coinAddress];return{...W,emissionsEveryDay:Ls(W.emissionsEveryDay,I==null?void 0:I.decimals),rewarder_display:c[`rewarder_display${U+1}`],rewarders:js(g.rewarder_apr[U]&&g.rewarder_apr[U].replace("%",""),2),logoUrl:I==null?void 0:I.logo_url,symbol:I==null?void 0:I.symbol,rewarderApr:js(g.rewarder_apr[U]&&g.rewarder_apr[U].replace("%",""),2)}});c!=null&&c.is_display_rewarder&&(cs.value={...cs.value,[g.swap_account]:b})}})},{immediate:!0,deep:!0});const re=o=>{var l;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((l=_.value.tokensObj[o==null?void 0:o.address])==null?void 0:l.logo_url)||(V.value.theme==="default"?P("/image/coins/unknown.png"):P("/image/coins/sui-unknown.png"))},de=M(()=>V.value.theme);return{tokensWarningObj:M(()=>_.value.tokensWarningObj),theme:de,getCoinIcon:re,getRewarderInfo:Zs,addCommom:k,store:V,importIcon:P,topPoolsList:B,addressTokens:Cs,showEcharts:ms,currentPools:R,onChangePools:ps,currentTopPoolsList:A,onChangeTokens:hs,currentTokens:F,currentTopTokensList:x,topTokensList:ds,router:os,isPc:S,getAprTotal:oe,getRewarderApr:ae,toPoolsList:le,toTokensList:ne,changePoolsList:Is,changeTokensList:Ps,tvlImprint:f,volHImprint:T,volDImprint:L,aprImprint:H,tokensPriceImprint:Q,tokensPriceHImprint:X,tokensVolHImprint:Y,tokensTvlImprint:q,fees24hImprint:j,labelToken:vs,select:ts,selectValue:bs,selectList:us,reviseValue:Vs,changeSort:Ss,tokenValue:ws,tokensList:Ts,changeSortLabel:Ds,tvlImprintHighlight:D,volHImprintHighlight:G,volDImprintHighlight:J,aprImprintHighlight:K,fees24hHighlight:rs,tokensPriceImprintHighlight:as,tokensPriceHImprintHighlight:ls,tokensVolHImprintHighlight:ns,tokensTvlImprintHighlight:Z,getLabel:xs,rewardApr:ee,tokensObj:$s,rewardDisplay:se,rewardObj:cs,t:p,decimalUi:E,chainName:Os,formatNumberAddCommom:ge}}});const $=s=>(Ce("data-v-6f7fa8fb"),s=s(),$e(),s),He={class:"stats-container"},Ie={key:0,class:"select-mask select-mask-sui"},Pe={key:1,class:"select-mask"},Ve={key:2,class:"sui-banner"},Se={class:"echart-box"},De={key:3,class:"sui-banner"},Ue={class:"top-pools-new"},Fe={class:"title"},Re={class:"sort-by"},Ne=$(()=>a("img",{src:fs,alt:""},null,-1)),Ee=$(()=>a("use",{"xlink:href":"#icon-icon_on"},null,-1)),We=[Ee],Be={key:0,class:"select-item"},qe=["onClick"],ze=$(()=>a("img",{src:fs,alt:""},null,-1)),Me={class:"content"},Ge={class:"item"},Je=$(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ke=[Je],Qe=$(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Xe=[Qe],Ye=$(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ze=[Ye],xe=$(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),so=[xe],eo={class:"apr-hover-content"},oo=$(()=>a("span",null," ",-1)),ao={key:0,class:"upgrade-loading"},lo={class:"token"},no=["onerror"],ro=["onerror"],io={class:"name"},to={class:"token-name"},uo={class:"fee-tier-top"},vo={class:"label-all"},po={key:0},ho={class:"tvl"},co={class:"volume-hour"},_o={key:0,class:"fees-24h"},go=$(()=>a("br",null,null,-1)),ko={key:0,class:"farming-apr"},fo={key:1,class:"apr-hover-content"},mo={class:"btn-box"},bo={key:2,class:"upgrade-loading"},wo={class:"top"},To={class:"token"},yo=["onerror"],Co=["onerror"],$o={class:"name"},Oo={class:"token-name"},jo={class:"label-all"},Ao={key:0},Lo={class:"fee-tier-hint"},Ho={class:"middle"},Io={class:"item-pools"},Po={class:"item-pools"},Vo={key:0,class:"item-pools"},So=$(()=>a("span",null,"Fees (24h)",-1)),Do={key:0,class:"farming-apr"},Uo={key:0,class:"apr-hover-content"},Fo={class:"bottom"},Ro={class:"panation"},No={class:"top-tokens"},Eo={class:"title"},Wo={class:"sort-by"},Bo=$(()=>a("img",{src:fs,alt:""},null,-1)),qo=$(()=>a("use",{"xlink:href":"#icon-icon_on"},null,-1)),zo=[qo],Mo={key:0,class:"select-item"},Go=["onClick"],Jo=$(()=>a("img",{src:fs,alt:""},null,-1)),Ko={class:"content"},Qo={class:"item"},Xo=$(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Yo=[Xo],Zo=$(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),xo=[Zo],sa=$(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),ea=[sa],oa=$(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),aa=[oa],la=$(()=>a("span",null," ",-1)),na={key:0,class:"upgrade-loading"},ra={class:"token"},da={class:"left"},ia=["onerror"],ta={key:0,class:"pool-warning"},ua={class:"right"},va={class:"name"},pa={key:0,class:"label-all"},ha={class:"price onlyPrice"},ca={class:"price"},_a={class:"volume"},ga={class:"tvl"},ka={class:"btn-box"},fa={key:1,class:"upgrade-loading"},ma={class:"top"},ba={class:"token"},wa=["onerror"],Ta={key:0,class:"pool-warning"},ya={class:"right"},Ca={class:"name"},$a={key:0,class:"label-all"},Oa={class:"middle"},ja={class:"item-pools"},Aa={class:"price"},La={class:"item-pools"},Ha={class:"item-pools"},Ia={class:"item-pools"},Pa={class:"bottom"},Va={class:"panation"};function Sa(s,p,Hs,_,Cs,$s){const _s=ie,V=te,os=ue,ms=ve,R=pe,F=he,S=ce,A=Oe,B=ye,O=Te("image");return r(),d("div",He,[s.chainName=="Sui"?(r(),d("div",Ie)):(r(),d("div",Pe)),a("div",{class:y(["title",s.chainName=="Sui"?"title-sui":""])},n(s.$t("menu.stats")),3),s.chainName=="Sui"?(r(),d("div",Ve,[a("div",Se,[m(_s,{class:"title-overview","is-show":s.showEcharts},null,8,["is-show"]),m(V,{class:"title-overview","is-show":s.showEcharts},null,8,["is-show"])]),m(os)])):(r(),d("div",De,[m(ms,{class:"title-overview","is-show":s.showEcharts},null,8,["is-show"])])),a("div",Ue,[a("div",Fe,[a("div",null,n(s.$t("common.topPools")),1),a("div",{class:"view-all",onClick:p[0]||(p[0]=(...e)=>s.toPoolsList&&s.toPoolsList(...e))},n(s.$t("newAdd.viewAll"))+"   > ",1)]),a("div",Re,[a("div",null,n(s.$t("newAdd.sortBy")),1),a("div",{class:"search-select",onClick:p[1]||(p[1]=e=>s.reviseValue("select"))},[a("div",null,[C(n(s.selectValue)+" ",1),Ne]),(r(),d("svg",{"aria-hidden":"true",class:y(s.select?"show-icon icon":"icon")},We,2)),s.select?(r(),d("div",Be,[(r(!0),d(ss,null,es(s.selectList,(e,f)=>(r(),d("div",{key:f,class:"select-menu-item",onClick:T=>s.changeSort(e)},[C(n(e)+" ",1),ze],8,qe))),128))])):w("",!0)])]),a("div",Me,[a("div",Ge,[a("span",null,n(s.$t("menu.pools")),1),a("span",{onClick:p[2]||(p[2]=e=>s.changePoolsList("tvl_in_usd"))},[C(n(s.$t("common.tvl"))+" ",1),(r(),d("svg",{"aria-hidden":"true",class:y(["pools-icon",s.tvlImprint?s.tvlImprintHighlight?"selected highlight":"selected":s.tvlImprintHighlight?"highlight":""])},Ke,2))]),a("span",{onClick:p[3]||(p[3]=e=>s.changePoolsList("vol_in_usd_24h"))},[C(n(s.$t("common.volume24h"))+" ",1),(r(),d("svg",{"aria-hidden":"true",class:y(["pools-icon",s.volHImprint?s.volHImprintHighlight?"selected highlight":"selected":s.volHImprintHighlight?"highlight":""])},Xe,2))]),s.chainName=="Sui"?(r(),d("span",{key:0,onClick:p[4]||(p[4]=e=>s.changePoolsList("fee_24_h"))},[C(" Fees (24H) "),(r(),d("svg",{"aria-hidden":"true",class:y(["pools-icon",s.fees24hImprint?s.fees24hHighlight?"selected highlight":"selected":s.fees24hHighlight?"highlight":""])},Ze,2))])):w("",!0),a("span",{onClick:p[5]||(p[5]=e=>s.changePoolsList("total_apr"))},[C(n(s.$t("common.apr"))+" ",1),(r(),d("svg",{"aria-hidden":"true",class:y(["pools-icon",s.aprImprint?s.aprImprintHighlight?"selected highlight":"selected":s.aprImprintHighlight?"highlight":""])},so,2)),a("div",eo,[m(R,{class:"noHover apr-hover-con"})])]),oo]),s.currentTopPoolsList?(r(!0),d(ss,{key:1},es(s.currentTopPoolsList,(e,f)=>{var T,L,H;return r(),d("div",{key:f,class:"item pc-item"},[a("div",lo,[a("div",null,[e!=null&&e.token_a_address?is((r(),d("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:i(P))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:i(P))("/image/coins/sui-unknown.png")},null,8,no)),[[O,s.getCoinIcon(s.theme=="sui"?e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address])]]):w("",!0),m(S,{address:e.is_forward?e.token_a_address:e.token_b_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),a("div",null,[e!=null&&e.token_b_address?is((r(),d("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:i(P))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:i(P))("/image/coins/sui-unknown.png")},null,8,ro)),[[O,s.getCoinIcon(s.theme=="sui"?e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address])]]):w("",!0),m(S,{address:e.is_forward?e.token_b_address:e.token_a_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),a("div",io,[a("p",to,n(s.theme=="sui"?e.is_forward!==!1?e.token_a_reserves:e.token_b_reserves:e.token_a_reserves)+" - "+n(s.theme=="sui"?e.is_forward!==!1?e.token_b_reserves:e.token_a_reserves:e.token_b_reserves),1),a("div",uo,n((e==null?void 0:e.fee)*100)+"%",1),a("div",vo,[(r(!0),d(ss,null,es(s.getLabel(e),(j,D)=>(r(),d("div",{key:D,class:y(["label",j])},[j!=="Native"?(r(),d("span",po,n(j),1)):w("",!0)],2))),128))])])]),a("div",ho,n(e.tvl_in_usd>0&&e.tvl_in_usd<.01?"<$0.01":`$${("addCommom"in s?s.addCommom:i(k))(("decimalUi"in s?s.decimalUi:i(E))(e.tvl_in_usd,2),2)}`),1),a("div",co,n(e.vol_in_usd_24h>0&&e.vol_in_usd_24h<.01?"<$0.01":`$${("addCommom"in s?s.addCommom:i(k))(("decimalUi"in s?s.decimalUi:i(E))(e.vol_in_usd_24h,2),2)}`),1),s.chainName=="Sui"?(r(),d("div",_o,n(e.fee_24_h>0&&e.fee_24_h<.01?"<$0.01":`$${("addCommom"in s?s.addCommom:i(k))(("decimalUi"in s?s.decimalUi:i(E))(e.fee_24_h,2),2)}`),1)):w("",!0),a("div",{class:y(["apr",s.theme=="sui"&&e.isStableFarming||s.rewardObj&&((T=s.rewardObj[e.swap_account])==null?void 0:T.length)>0?"apr-mark":""])},[C(n(s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account]))>0&&s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account]))<.01?"<0.01":s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account]))==0?0:("sFixD"in s?s.sFixD:i(As))(s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account])),2))+"% ",1),go,(L=e==null?void 0:e.stable_farming)!=null&&L.stable_farming_pool?(r(),d("i",ko,n(e.stable_farming.apr>0&&e.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in s?s.addCommom:i(k))(e.stable_farming?(e==null?void 0:e.stable_farming.apr)*100:0,2)}`)+"% ",1)):w("",!0),s.theme=="sui"&&e.isStableFarming||s.rewardObj&&((H=s.rewardObj[e.swap_account])==null?void 0:H.length)>0&&s.rewardObj&&s.rewardObj[e.swap_account]?(r(),d("div",fo,[m(R,{class:"noHover apr-hover-con","l-item":{apr:e.apr_7day&&e.apr_7day.replace("%",""),aprTotal:s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account])),is_display_rewarder:s.rewardObj&&s.rewardObj[e.swap_account],rewarder_apr:s.getRewarderApr(s.rewardObj[e.swap_account]),isStableFarming:e.isStableFarming,stableFarmingApr:e.stableFarmingApr},"rewarder-info":s.rewardObj&&s.rewardObj[e.swap_account]},null,8,["l-item","rewarder-info"])])):w("",!0)],2),a("div",mo,[m(A,{class:"cancel-btn",onClick:()=>s.router.push(`/liquidity/deposit?poolAddress=${e==null?void 0:e.swap_account}`)},{default:ks(()=>[C(n(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(r(),d("div",ao,[m(F,{loading:!0,type:"statsPools"})])),s.currentTopPoolsList?(r(!0),d(ss,{key:3},es(s.currentTopPoolsList,(e,f)=>{var T,L,H;return r(),d("div",{key:f,class:"item h5-item"},[a("div",wo,[a("div",To,[a("div",null,[e!=null&&e.token_a_address?is((r(),d("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:i(P))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:i(P))("/image/coins/sui-unknown.png")},null,8,yo)),[[O,s.getCoinIcon(s.theme=="sui"?e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address])]]):w("",!0),m(S,{address:e.is_forward?e.token_a_address:e.token_b_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),a("div",null,[e!=null&&e.token_b_address?is((r(),d("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:i(P))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:i(P))("/image/coins/sui-unknown.png")},null,8,Co)),[[O,s.getCoinIcon(s.theme=="sui"?e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address])]]):w("",!0),m(S,{address:e.is_forward?e.token_b_address:e.token_a_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),a("div",$o,[a("p",Oo,n(s.theme=="sui"?e.is_forward!==!1?e.token_a_reserves:e.token_b_reserves:e.token_a_reserves)+" - "+n(s.theme=="sui"?e.is_forward!==!1?e.token_b_reserves:e.token_a_reserves:e.token_b_reserves),1),a("div",jo,[(r(!0),d(ss,null,es(s.getLabel(e),(j,D)=>(r(),d("div",{key:D,class:y(["label",j])},[j!=="Native"?(r(),d("span",Ao,n(j),1)):w("",!0)],2))),128))])])]),a("div",Lo,n((e==null?void 0:e.fee)*100)+"%",1)]),a("div",Ho,[a("div",Io,[a("span",null,n(s.$t("common.tvl")),1),a("p",null,n(e.tvl_in_usd>0&&e.tvl_in_usd<.01?"<$0.01":`$${("addCommom"in s?s.addCommom:i(k))(("decimalUi"in s?s.decimalUi:i(E))(e.tvl_in_usd,2),2)}`),1)]),a("div",Po,[a("span",null,n(s.$t("common.volume24h")),1),a("p",null,n(e.vol_in_usd_24h>0&&e.vol_in_usd_24h<.01?"<$0.01":`$${("addCommom"in s?s.addCommom:i(k))(("decimalUi"in s?s.decimalUi:i(E))(e.vol_in_usd_24h,2),2)}`),1)]),s.chainName=="Sui"?(r(),d("div",Vo,[So,a("p",null,n(e.fee_24_h>0&&e.fee_24_h<.01?"<$0.01":`$${("addCommom"in s?s.addCommom:i(k))(("decimalUi"in s?s.decimalUi:i(E))(e.fee_24_h,2),2)}`),1)])):w("",!0),a("div",{class:y(["item-pools",s.theme=="sui"&&e.isStableFarming||s.rewardObj&&((T=s.rewardObj[e.swap_account])==null?void 0:T.length)>0?"":"apr-mark-h5"])},[a("span",null,n(s.$t("common.apr")),1),a("p",null,[C(n(s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account]))>0&&s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account]))<.01?"<0.01":s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account]))==0?0:("sFixD"in s?s.sFixD:i(As))(s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account])),2))+"% ",1),(L=e==null?void 0:e.stable_farming)!=null&&L.stable_farming_pool?(r(),d("i",Do,n(e.stable_farming.apr>0&&e.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in s?s.addCommom:i(k))(e.stable_farming?(e==null?void 0:e.stable_farming.apr)*100:0,2)}`)+"% ",1)):w("",!0)]),s.theme=="sui"&&e.isStableFarming||s.rewardObj&&((H=s.rewardObj[e.swap_account])==null?void 0:H.length)>0&&s.rewardObj&&s.rewardObj[e.swap_account]?(r(),d("div",Uo,[m(R,{class:"noHover apr-hover-con","l-item":{apr:e.apr_7day&&e.apr_7day.replace("%",""),aprTotal:s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account])),is_display_rewarder:s.rewardDisplay(e),rewarder_apr:s.getRewarderApr(s.rewardObj[e.swap_account]),isStableFarming:e.isStableFarming,stableFarmingApr:e.stableFarmingApr},"rewarder-info":s.rewardObj&&s.rewardObj[e.swap_account]},null,8,["l-item","rewarder-info"])])):w("",!0)],2)]),a("div",Fo,[m(A,{class:"cancel-btn",onClick:()=>s.router.push(`/liquidity/deposit?poolAddress=${e==null?void 0:e.swap_account}`)},{default:ks(()=>[C(n(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(r(),d("div",bo,[m(F,{loading:!0,type:"statsPoolH5"})]))]),a("div",Ro,[m(B,{current:s.currentPools,"onUpdate:current":p[6]||(p[6]=e=>s.currentPools=e),"page-size":(s.isPc,10),simple:"",total:s.topPoolsList.length>20?20:s.topPoolsList.length,onChange:s.onChangePools},null,8,["current","page-size","total","onChange"])])]),a("div",No,[a("div",Eo,[a("div",null,n(s.$t("common.topTokens")),1),a("div",{class:"view-all",onClick:p[7]||(p[7]=(...e)=>s.toTokensList&&s.toTokensList(...e))},n(s.$t("newAdd.viewAll"))+"   > ",1)]),a("div",Wo,[a("div",null,n(s.$t("newAdd.sortBy")),1),a("div",{class:"search-select",onClick:p[8]||(p[8]=e=>s.reviseValue("label"))},[a("div",null,[C(n(s.tokenValue)+" ",1),Bo]),(r(),d("svg",{"aria-hidden":"true",class:y(s.labelToken?"show-icon icon":"icon")},zo,2)),s.labelToken?(r(),d("div",Mo,[(r(!0),d(ss,null,es(s.tokensList,(e,f)=>(r(),d("div",{key:f,class:"select-menu-item",onClick:T=>s.changeSortLabel(e)},[C(n(e)+" ",1),Jo],8,Go))),128))])):w("",!0)])]),a("div",Ko,[a("div",Qo,[a("span",null,n(s.$t("common.tokens")),1),a("span",{onClick:p[9]||(p[9]=e=>s.changeTokensList("price"))},[C(n(s.$t("common.price"))+" ",1),(r(),d("svg",{"aria-hidden":"true",class:y(["pools-icon",s.tokensPriceImprint?s.tokensPriceImprintHighlight?"selected highlight":"selected":s.tokensPriceImprintHighlight?"highlight":""])},Yo,2))]),a("span",{onClick:p[10]||(p[10]=e=>s.changeTokensList("priceHour"))},[C(n(s.$t("newAdd.priceChange"))+" ",1),(r(),d("svg",{"aria-hidden":"true",class:y(["pools-icon",s.tokensPriceHImprint?s.tokensPriceHImprintHighlight?"selected highlight":"selected":s.tokensPriceHImprintHighlight?"highlight":""])},xo,2))]),a("span",{onClick:p[11]||(p[11]=e=>s.changeTokensList("vol_in_usd_24h"))},[C(n(s.$t("common.volume24h"))+" ",1),(r(),d("svg",{"aria-hidden":"true",class:y(["pools-icon",s.tokensVolHImprint?s.tokensVolHImprintHighlight?"selected highlight":"selected":s.tokensVolHImprintHighlight?"highlight":""])},ea,2))]),a("span",{onClick:p[12]||(p[12]=e=>s.changeTokensList("tvl_in_usd"))},[C(n(s.$t("common.tvl"))+" ",1),(r(),d("svg",{"aria-hidden":"true",class:y(["pools-icon",s.tokensTvlImprint?s.tokensTvlImprintHighlight?"selected highlight":"selected":s.tokensTvlImprintHighlight?"highlight":""])},aa,2))]),la]),s.currentTopTokensList?w("",!0):(r(),d("div",na,[m(F,{loading:!0,type:"statsTokens"})])),(r(!0),d(ss,null,es(s.currentTopTokensList,(e,f)=>(r(),d("div",{key:f,class:"item pc-item"},[a("div",ra,[a("div",da,[a("div",null,[is(a("img",{onerror:s.theme=="default"?("importIcon"in s?s.importIcon:i(P))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:i(P))("/image/coins/sui-unknown.png"),alt:""},null,8,ia),[[O,s.getCoinIcon(s.addressTokens&&s.addressTokens[e.address])]]),s.tokensWarningObj&&!s.tokensWarningObj[e.address]?(r(),d("div",ta)):w("",!0)])]),a("div",ua,[a("div",va,[a("p",null,n(e.symbol),1),a("span",null,n(e.name)+" ",1)]),s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?(r(),d("div",pa,[a("div",{class:y(["label",s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]])},[a("span",null,n(s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?`${s.tokensObj[e.address].labels[0]}`:""),1)],2)])):w("",!0)])]),a("div",ha,[a("p",null,n(e.price?"$"+(Number(e.price)>1?("addCommom"in s?s.addCommom:i(k))(("decimalUi"in s?s.decimalUi:i(E))(e.price,2)):("addCommom"in s?s.addCommom:i(k))(("decimalUi"in s?s.decimalUi:i(E))(e.price,4))):"--"),1)]),a("div",ca,[a("p",{class:y(e.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},n(e.price_rate_24h!=="0%"&&!e.price_rate_24h.includes("-")?`+${e.price_rate_24h}`:e.price_rate_24h),3)]),a("div",_a," $"+n(("addCommom"in s?s.addCommom:i(k))(e.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in s?s.addCommom:i(k))(e.vol_in_usd_24h,2)?("addCommom"in s?s.addCommom:i(k))(e.vol_in_usd_24h,2):"--"),1),a("div",ga," $"+n(("addCommom"in s?s.addCommom:i(k))(e.tvl_in_usd,2)=="0.00"?0:("addCommom"in s?s.addCommom:i(k))(e.tvl_in_usd,2)?("addCommom"in s?s.addCommom:i(k))(e.tvl_in_usd,2):"--"),1),a("div",ka,[m(A,{class:"cancel-btn",onClick:T=>s.router.push(`/swap?to=${e.address}`)},{default:ks(()=>[C(n(s.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128)),s.currentTopTokensList?(r(!0),d(ss,{key:2},es(s.currentTopTokensList,(e,f)=>(r(),d("div",{key:f,class:"item h5-item"},[a("div",ma,[a("div",ba,[a("div",null,[is(a("img",{onerror:s.theme=="default"?("importIcon"in s?s.importIcon:i(P))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:i(P))("/image/coins/sui-unknown.png"),alt:""},null,8,wa),[[O,s.getCoinIcon(s.addressTokens&&s.addressTokens[e.address])]]),s.tokensWarningObj&&!s.tokensWarningObj[e.address]?(r(),d("div",Ta)):w("",!0)]),a("div",ya,[a("div",Ca,[a("p",null,n(s.addressTokens&&s.addressTokens[e.address]&&s.addressTokens[e.address].symbol),1),a("span",null,n(s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].name)+" ",1)]),s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?(r(),d("div",$a,[a("div",{class:y(["label",s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]])},[a("span",null,n(s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?`${s.tokensObj[e.address].labels[0]}`:""),1)],2)])):w("",!0)])])]),a("div",Oa,[a("div",ja,[a("span",null,n(s.$t("common.price")),1),a("div",Aa,[a("p",null,n(e.price?"$"+(Number(e.price)>1?("addCommom"in s?s.addCommom:i(k))(("decimalUi"in s?s.decimalUi:i(E))(e.price,2)):("addCommom"in s?s.addCommom:i(k))(("decimalUi"in s?s.decimalUi:i(E))(e.price,4))):"--"),1)])]),a("div",La,[a("span",null,n(s.$t("newAdd.priceChange")),1),a("p",{class:y(e.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},n(e.price_rate_24h),3)]),a("div",Ha,[a("span",null,n(s.$t("common.volume24h")),1),a("p",null," $"+n(("addCommom"in s?s.addCommom:i(k))(e.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in s?s.addCommom:i(k))(e.vol_in_usd_24h,2)),1)]),a("div",Ia,[a("span",null,n(s.$t("common.tvl")),1),a("p",null," $"+n(("addCommom"in s?s.addCommom:i(k))(e.tvl_in_usd,2)=="0.00"?0:("addCommom"in s?s.addCommom:i(k))(e.tvl_in_usd,2)),1)])]),a("div",Pa,[m(A,{class:"cancel-btn",onClick:T=>s.router.push(`/swap?to=${e.address}`)},{default:ks(()=>[C(n(s.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128)):(r(),d("div",fa,[m(F,{loading:!0,type:"statsTokenH5"})]))]),a("div",Va,[m(B,{current:s.currentTokens,"onUpdate:current":p[13]||(p[13]=e=>s.currentTokens=e),"page-size":(s.isPc,10),simple:"",total:s.topTokensList.length>20?20:s.topTokensList.length,onChange:s.onChangeTokens},null,8,["current","page-size","total","onChange"])])])])}const ol=we(Le,[["render",Sa],["__scopeId","data-v-6f7fa8fb"]]);export{ol as default};
