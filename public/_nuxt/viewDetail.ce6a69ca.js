import{_ as Q}from"./status-block.09182fae.js";import{b as W,e as X,u as Y,f as Z,h as f,l as x,d as S,j as c}from"./pool.8123a9d1.js";import{a as oo,R as eo,m as r,r as no,b as io,e as so,T as to,q as ao,o as t,c as y,w as h,h as e,z as ro,t as G,v as n,i as lo,f as l,u as a,j as H,B as mo,p as uo,k as po}from"./entry.ceb807d2.js";import{i as $}from"./import-icon.de3e6c66.js";import{_ as J}from"./icon-arrow_2x.948aedb2.js";import{_ as K}from"./icon-arrow_2x.4ffddb8e.js";const fo=oo({components:{Modal:eo},props:{positionInfo:{type:Object,default:()=>({})},poolInfo:{type:Object,required:!0},farmPoolInfo:{type:Object,default:()=>({})},isAutoStakeFarming:{type:Boolean,default:!0}},setup(o){console.log("🚀🚀🚀 ~ file: viewDetail.vue:218 ~ setup ~ props:",o);const s=W(),d=r(()=>s),g=r(()=>d.value.chainName),N=r(()=>X[g.value]);let _=no(!0);const b=Y(),m=r(()=>b),C=io(),I=r(()=>o.poolInfo.needResever),u=r(()=>o.farmPoolInfo&&o.isAutoStakeFarming?`/new-position-detail?position_nft_id=${o.positionInfo.id}&positionSource=farming`:`/new-position-detail?collect=${o.positionInfo.collectionName}&&token=${o.positionInfo.tokenName}&&address=${o.positionInfo.pool}&pos=${o.positionInfo.pos_object_id}`),v=i=>{var p;return(i==null?void 0:i.logoURI)||(i==null?void 0:i.logo_url)||((p=m.value.tokensObj[i==null?void 0:i.address])==null?void 0:p.logo_url)||(d.value.theme==="default"?$("/image/coins/unknown.png"):$("/image/coins/sui-unknown.png"))},k=r(()=>d.value.currentExplorer);return{getExplorerUrl:Z,addCommom:f,router:C,pools:m,decimalFormat:x,rateChange:_,config:N,importIcon:$,store:d,chainName:g,checkNullObj:S,needReverse:I,getCoinIcon:v,decimalUi:c,currentExplorer:k,positionDetailUrl:u}}});const w=o=>(uo("data-v-9a9a42f6"),o=o(),po(),o),co=w(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Io={class:"rejected-container"},vo=w(()=>e("div",{class:"coin-pair"},null,-1)),ko={class:"coin-pair"},ho={class:"fee"},go={class:"status"},bo={class:"min-and-max"},Co={key:0},yo={class:"text"},$o={key:0,src:J,alt:""},So={key:1,src:K,alt:""},wo={class:"text"},No={key:1},_o={class:"text"},jo={key:0,src:J,alt:""},Oo={key:1,src:K,alt:""},Uo={class:"text"},Po=w(()=>e("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),Ro=[Po];function Do(o,s,d,g,N,_){const b=Q,m=mo,C=to("Modal"),I=ao("image");return t(),y(C,{visible:!0,class:"transiaction-rejected",centered:"",title:o.$t("newAdd.openPositionSuccessful"),width:"340px",footer:null,onCancel:s[3]||(s[3]=u=>o.$emit("onClose"))},{closeIcon:h(()=>[co]),default:h(()=>{var u,v,k,i,p,j,O,U,P,R,D,B,E,A,F,M,V,q,z,T;return[e("div",Io,[vo,e("div",{class:ro(["left",`position-status-${o.positionInfo&&o.positionInfo.currentStatus&&o.positionInfo.currentStatus.toLowerCase()}`])},[e("div",ko,[e("div",null,[G(e("img",null,null,512),[[I,o.getCoinIcon(o.needReverse?(v=o.positionInfo)==null?void 0:v.token_b:(u=o.positionInfo)==null?void 0:u.token_a)]]),G(e("img",null,null,512),[[I,o.getCoinIcon(o.needReverse?(i=o.positionInfo)==null?void 0:i.token_a:(k=o.positionInfo)==null?void 0:k.token_b)]])]),e("span",null,n(o.needReverse?(U=(O=o.positionInfo)==null?void 0:O.token_b)==null?void 0:U.symbol:(j=(p=o.positionInfo)==null?void 0:p.token_a)==null?void 0:j.symbol)+" - "+n(o.needReverse?(B=(D=o.positionInfo)==null?void 0:D.token_a)==null?void 0:B.symbol:(R=(P=o.positionInfo)==null?void 0:P.token_b)==null?void 0:R.symbol),1)]),e("div",ho,n(o.$t("common.fee"))+" "+n(o.poolInfo.fee*100)+"%",1)],2),e("div",go,[lo(b,{"current-status":o.positionInfo.currentStatus||""},null,8,["current-status"])]),e("div",bo,[(o.needReverse?!o.rateChange:o.rateChange)?(t(),l("div",Co,[e("div",yo,n(("addCommom"in o?o.addCommom:a(f))(("decimalUi"in o?o.decimalUi:a(c))(String(o.positionInfo&&o.positionInfo.minPrice),6))),1),o.store.theme=="default"?(t(),l("img",$o)):(t(),l("img",So)),e("div",wo,n(o.positionInfo&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:a(f))(("decimalUi"in o?o.decimalUi:a(c))(String(o.positionInfo&&o.positionInfo.maxPrice),6)))+" "+n((A=(E=o.positionInfo)==null?void 0:E.token_b)==null?void 0:A.symbol)+" per "+n((M=(F=o.positionInfo)==null?void 0:F.token_a)==null?void 0:M.symbol),1)])):(t(),l("div",No,[e("div",_o,n(("addCommom"in o?o.addCommom:a(f))(("decimalUi"in o?o.decimalUi:a(c))(String(1/Number(o.positionInfo&&o.positionInfo.maxPrice)),6))),1),o.store.theme=="default"?(t(),l("img",jo)):(t(),l("img",Oo)),e("div",Uo,n(o.positionInfo&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:a(f))(("decimalUi"in o?o.decimalUi:a(c))(String(1/Number(o.positionInfo&&o.positionInfo.minPrice)),6)))+" "+n((q=(V=o.positionInfo)==null?void 0:V.token_a)==null?void 0:q.symbol)+" per "+n((T=(z=o.positionInfo)==null?void 0:z.token_b)==null?void 0:T.symbol),1)])),(t(),l("svg",{class:"icon-change","aria-hidden":"true",onClick:s[0]||(s[0]=L=>o.rateChange=!o.rateChange)},Ro))])]),o.chainName=="Sui"?(t(),y(m,{key:0,disabled:("checkNullObj"in o?o.checkNullObj:a(S))(o.positionInfo)||o.isAutoStakeFarming&&!o.positionInfo.clmm_pool_id,onClick:s[1]||(s[1]=L=>o.router.push(o.positionDetailUrl))},{default:h(()=>[H(n(o.$t("newAdd.viewDetail")),1)]),_:1},8,["disabled"])):(t(),y(m,{key:1,disabled:("checkNullObj"in o?o.checkNullObj:a(S))(o.positionInfo),onClick:s[2]||(s[2]=L=>o.router.push(`/new-position-detail?collect=${o.positionInfo.collectionName}&&token=${o.positionInfo.tokenName}&&address=${o.positionInfo.pool}&pos=${o.positionInfo.pos_object_id}`))},{default:h(()=>[H(n(o.$t("newAdd.viewDetail")),1)]),_:1},8,["disabled"]))]}),_:1},8,["title"])}const qo=so(fo,[["render",Do],["__scopeId","data-v-9a9a42f6"]]);export{qo as _};
