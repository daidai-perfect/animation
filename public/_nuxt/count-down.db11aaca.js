import{r as p,y as B,D as T,$ as L,m as y,b as P,e as j,o as k,f as q,j as m,v as _,x as A,p as R,k as V,h}from"./entry.7427f084.js";import{a as C}from"./pool.04cdd6ce.js";import{u as M}from"./launchpad.bdd5b938.js";const E={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0},isProject:{type:Boolean,require:!1,default:!1},isShow:{type:Boolean,require:!1,default:!0}},setup(e){const S=p("--"),u=p("--"),a=p("--"),v=p("--");let n=null;B(()=>{i()}),T(e,t=>{t&&e.isProject&&i()}),L(()=>{window.clearInterval(n)});const i=()=>{const t=new Date().getTime()/1e3;parseInt(String(t))<Number(e.startTime)&&g(e.startTime),parseInt(String(t))>=Number(e.startTime)&&parseInt(String(t))<Number(e.endTime)&&g(e.endTime)},x=C();y(()=>x);const d=M(),b=y(()=>d),w=P();T(()=>b.value.currentTab,t=>{t&&(clearInterval(n),window.clearInterval(n),i())});const g=t=>{n=setInterval(()=>{let D=new Date().getTime()/1e3,r=t-parseInt(String(D));if(clearInterval(n),window.clearInterval(n),n=null,i(),r==0){const I=w.currentRoute.value.path,N=w.currentRoute.value.params.id||"";I.includes("/launchpad")&&d.setLaunchpadAllPools(),(I.includes("/launchpad-detail")||I.includes("/launchpad-project-detail"))&&(d.setLaunchpadPoolsLoading(!0),d.getCurrentLaunchpadPoolInfo(N));return}r--;let o=parseInt(String(r/60/60/24));o=o<10?"0"+o:o;let s=parseInt(String(r/60/60%24));s=s<10?"0"+s:s;let c=parseInt(String(r/60%60));c=c<10?"0"+c:c;let l=parseInt(String(r%60));l=l<10?"0"+l:l,S.value=o,u.value=s,a.value=c,v.value=l},1e3)};return{day:S,hour:u,min:a,sec:v}}};const f=e=>(R("data-v-1403cbe3"),e=e(),V(),e),H={key:0,class:"count-down"},U=f(()=>h("span",null,"D : ",-1)),W=f(()=>h("span",null,"H : ",-1)),z=f(()=>h("span",null,"M : ",-1)),F=f(()=>h("span",null,"S",-1));function G(e,S,u,a,v,n){return u.isShow?(k(),q("div",H,[m(_(a.day)+" ",1),U,m(" "+_(a.hour)+" ",1),W,m(" "+_(a.min)+" ",1),z,m(" "+_(a.sec)+" ",1),F])):A("",!0)}const X=j(E,[["render",G],["__scopeId","data-v-1403cbe3"]]);export{X as _};
