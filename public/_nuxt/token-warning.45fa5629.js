import{u as l,d as a}from"./pool.04cdd6ce.js";import{e as p,a as u,m as r,u as c,o as d,f as i,G as m,x as _}from"./entry.7427f084.js";const f=u({props:{styleParams:{type:Object,default:()=>({width:"16px",height:"16px",left:"",bottom:""})},address:{type:String,default:""}},setup(e){const s=l(),t=r(()=>s),o=r(()=>t.value.tokensObj);return{checkNullObj:a,tokensObj:o}}});function k(e,s,t,o,b,j){var n;return e.address&&e.tokensObj&&!("checkNullObj"in e?e.checkNullObj:c(a))(e.tokensObj)&&((n=e.tokensObj[e.address])!=null&&n.isSelfBuilt)?(d(),i("div",{key:0,class:"token-warning",style:m(e.styleParams)},null,4)):_("",!0)}const h=p(f,[["render",k],["__scopeId","data-v-c2678e00"]]);export{h as _};
