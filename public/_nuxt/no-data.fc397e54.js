import{a as u,e as p,o as a,f as d,h as c,v as y,x as o,c as n,w as i,j as l,B as _}from"./entry.ad32dc49.js";import{b as f}from"./sha256.de7acfa8.js";const m=u({props:{noDataImg:{type:String,default:""},desc:{type:String,default:""},type:{type:String,default:""},addLiquidityUrl:{type:String,default:""}},setup(){return{walletStore:f()}}});const S={class:"no-data"},g=["src"],k={key:0,class:"desc"};function v(t,e,q,$,w,B){const s=_;return a(),d("div",S,[c("img",{src:t.noDataImg,alt:""},null,8,g),t.desc?(a(),d("div",k,y(t.desc),1)):o("",!0),t.type=="addLiquidity"?(a(),n(s,{key:1,class:"add-liquidity-btn",onClick:e[0]||(e[0]=r=>t.addLiquidityUrl?t.$router.push(t.addLiquidityUrl):"")},{default:i(()=>[l("Add Liquidity")]),_:1})):o("",!0),t.type=="connectWallet"?(a(),n(s,{key:2,class:"add-liquidity-btn",onClick:e[1]||(e[1]=r=>t.walletStore.setIsShowWalletModal(!0))},{default:i(()=>[l("Connect Wallet")]),_:1})):o("",!0)])}const L=p(m,[["render",v],["__scopeId","data-v-130f9462"]]);export{L as N};
