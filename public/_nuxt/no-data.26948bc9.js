import{a as u,e as p,o as a,f as d,h as c,v as y,x as o,c as n,w as l,j as i,z as f,B as m}from"./entry.7427f084.js";import{a as _}from"./pool.04cdd6ce.js";const S=u({props:{noDataImg:{type:String,default:""},desc:{type:String,default:""},type:{type:String,default:""},addLiquidityUrl:{type:String,default:""}},setup(){return{walletStore:_()}}});const g=["src"],k={key:0,class:"desc"};function v(e,t,q,C,$,w){const s=m;return a(),d("div",{class:f(["no-data",e.type=="dca"?"dca-no-data":""])},[c("img",{src:e.noDataImg,alt:""},null,8,g),e.desc?(a(),d("div",k,y(e.desc),1)):o("",!0),e.type=="addLiquidity"?(a(),n(s,{key:1,class:"add-liquidity-btn",onClick:t[0]||(t[0]=r=>e.addLiquidityUrl?e.$router.push(e.addLiquidityUrl):"")},{default:l(()=>[i("Add Liquidity")]),_:1})):o("",!0),e.type=="connectWallet"?(a(),n(s,{key:2,class:"add-liquidity-btn",onClick:t[1]||(t[1]=r=>e.walletStore.setIsShowWalletModal(!0))},{default:l(()=>[i("Connect Wallet")]),_:1})):o("",!0)],2)}const L=p(S,[["render",v],["__scopeId","data-v-efa76634"]]);export{L as N};
