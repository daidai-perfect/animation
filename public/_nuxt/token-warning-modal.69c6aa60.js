import{i as T}from"./import-icon.de3e6c66.js";import{e as j,a as M,R as B,r as O,m as p,T as N,q as V,o as a,c as q,w as b,h as e,f as r,t as w,v as k,x as v,i as y,j as $,S as D,B as W,p as P,k as R}from"./entry.7427f084.js";/* empty css              */import{b as A,u as E,d as L}from"./pool.04cdd6ce.js";import{_ as F}from"./icon-selected_3x.09e9a6f0.js";const U=M({components:{Modal:B},props:{fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},isImportModal:{type:Boolean,require:!1,default:!1}},setup(o,s){const g=A(),S=O(!1),l=p(()=>g),I=t=>{var i;return(t==null?void 0:t.logoURI)||(t==null?void 0:t.logo_url)||((i=u.value.tokensObj[t==null?void 0:t.address])==null?void 0:i.logo_url)||(l.value.theme==="default"?T("/image/coins/unknown.png"):T("/image/coins/sui-unknown.png"))},C=E(),u=p(()=>C),h=p(()=>u.value.tokensWarningObj),c=t=>!L(t)&&!h.value[t.address];return{store:g,isSelect:S,getCoinIcon:I,getTokenSource:c,clickContinue:()=>{var t,i;if(c(o.fromCoin)&&(localStorage.setItem(`${o.fromCoin.address}`,!0),o.isImportModal)){let n=(t=l.value)==null?void 0:t.importTokenList;console.log("🚀 ~ clickContinue ~ existingList:",n),n.push(o==null?void 0:o.fromCoin),l.value.setImportTokenList(n)}if(c(o.toCoin)&&(localStorage.setItem(`${o.toCoin.address}`,!0),o.isImportModal)){let n=(i=l.value)==null?void 0:i.importTokenList;console.log("🚀 ~ clickContinue ~ existingList:",n),n.push(o==null?void 0:o.toCoin),l.value.setImportTokenList(n)}s.emit("clickContinue",o.fromCoin&&!L(o.fromCoin)?o.fromCoin:o.toCoin)}}}}),d=o=>(P("data-v-a074931f"),o=o(),R(),o),z={class:"token-waring-conetnt"},G=d(()=>e("div",{class:"tips-text"}," The token is not on the Frequently Traded List. Please note that anyone can create a token on Sui blockchain with any name, including creating fake versions of existing tokens or tokens that claim to represent projects that do not have a token. Always conduct your own research before trading. ",-1)),H={class:"coin"},J={key:0,class:"coin-a"},K={class:"logo"},Q={alt:""},X=d(()=>e("div",{class:"warning-img"},null,-1)),Y={class:"info"},Z={class:"symbol"},x={class:"coin-info"},oo={class:"address"},eo=d(()=>e("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),to=[eo],so={key:1,class:"coin-b"},no={class:"logo"},io={alt:""},ao=d(()=>e("div",{class:"warning-img"},null,-1)),lo={class:"info"},co={class:"symbol"},ro={class:"coin-info"},uo={class:"address"},mo=d(()=>e("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),_o=[mo],ko={key:2,class:"token-loading"},vo={class:"read-text"},go={key:0,src:F},Co=d(()=>e("span",null," I acknowledge the risk ",-1)),ho={class:"btn-box"};function fo(o,s,g,S,l,I){const C=D,u=W,h=N("Modal"),c=V("image");return a(),q(h,{width:"440px",visible:!0,footer:null,title:o.isImportModal?"Import Token":"Tips","mask-closable":!0,onCancel:s[4]||(s[4]=_=>o.$emit("close"))},{default:b(()=>{var _,t,i,n;return[e("div",z,[G,e("div",H,[o.getTokenSource(o.fromCoin)?(a(),r("div",J,[e("div",K,[w(e("img",Q,null,512),[[c,o.getCoinIcon(o.fromCoin)]]),X]),e("div",Y,[e("div",Z,k((_=o.fromCoin)==null?void 0:_.symbol),1),e("div",x,[e("div",oo,k((t=o.fromCoin)==null?void 0:t.address),1),(a(),r("svg",{class:"icon","aria-hidden":"true",onClick:s[0]||(s[0]=f=>{var m;return o.store.copy(o.fromCoin&&((m=o.fromCoin)==null?void 0:m.address))})},to))])])])):v("",!0),o.getTokenSource(o.toCoin)?(a(),r("div",so,[e("div",no,[w(e("img",io,null,512),[[c,o.getCoinIcon(o.toCoin)]]),ao]),e("div",lo,[e("div",co,k((i=o.toCoin)==null?void 0:i.symbol),1),e("div",ro,[e("div",uo,k((n=o.toCoin)==null?void 0:n.address),1),(a(),r("svg",{class:"icon","aria-hidden":"true",onClick:s[1]||(s[1]=f=>{var m;return o.store.copy(o.toCoin&&((m=o.toCoin)==null?void 0:m.address))})},_o))])])])):v("",!0),!o.getTokenSource(o.fromCoin)&&!o.getTokenSource(o.toCoin)?(a(),r("div",ko,[y(C)])):v("",!0)]),e("div",vo,[e("div",{class:"radio",onClick:s[2]||(s[2]=f=>o.isSelect=!o.isSelect)},[o.isSelect?(a(),r("img",go)):v("",!0)]),Co]),e("div",ho,[y(u,{class:"cancel btn",onClick:s[3]||(s[3]=f=>o.$emit("close"))},{default:b(()=>[$("Cancel")]),_:1}),y(u,{disabled:!o.isSelect,class:"continue btn",onClick:o.clickContinue},{default:b(()=>[$("Continue")]),_:1},8,["disabled","onClick"])])])]}),_:1},8,["title"])}const To=j(U,[["render",fo],["__scopeId","data-v-a074931f"]]);export{To as _};
