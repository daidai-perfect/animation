import{u as a,c as n}from"./sha256.de7acfa8.js";import{a as c,l,e as i,o,f as t,h as u,u as s,v as p,x as d}from"./entry.ad32dc49.js";import{_}from"./img-lock_2x.a28135f4.js";import{_ as m}from"./img-lock_2x.d1f48e3b.js";const f=c({props:{fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},poolInfo:{type:Object,default:()=>({})}},setup(){const e=a();return{storeIndex:l(()=>e),checkNullObj:n}}});const h={class:"unilateral"},k={key:0,src:_,alt:""},b={key:1,src:m,alt:""},j={key:2};function O(e,r,y,N,I,v){return o(),t("div",h,[u("div",null,[e.storeIndex.theme=="default"?(o(),t("img",k)):(o(),t("img",b)),!("checkNullObj"in e?e.checkNullObj:s(n))(e.fromCoin)&&!("checkNullObj"in e?e.checkNullObj:s(n))(e.toCoin)&&!("checkNullObj"in e?e.checkNullObj:s(n))(e.poolInfo)?(o(),t("p",j,p(e.$t("tips.marketprice")),1)):d("",!0)])])}const S=i(f,[["render",O],["__scopeId","data-v-ea3d03a6"]]);export{S as _};
