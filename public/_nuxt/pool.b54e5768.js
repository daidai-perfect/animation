import{_ as te}from"./nuxt-link.b088d993.js";import{u as se,b as ne,a as ae,h as R}from"./sha256.de7acfa8.js";import{a as re,y as le,b as ie,r as s,l as r,H as ue,q as E,m as ce,e as pe,Q as N,o as p,f as d,h as m,i,w as c,A as P,u as T,v as $,x as C,Y as de,j as O,Z as me,p as fe,k as ve}from"./entry.ad32dc49.js";/* empty css              *//* empty css              */import{u as ge}from"./pool.f9585ea2.js";import"./decimal.0bdeb344.js";const he=re({setup(e,n){const{t:I,locale:A}=le(),o=ie(),D=s(!1),f=s(!1),v=s(!1),w=s("TVL"),b=s(["APR","VOL"]),q=s([]),g=s(["pools"]),l=ge(),h=se(),B=s(!0),j=s(!1),F=s(!1),H=s(!1),V=s(""),S=r(()=>l),Q=r(()=>{const t=Array.from(new Set(S.value.poolConfigList.flatMap(a=>!a.category||a.category==""?"All":a.category)));return t.length<=1?[]:t}),U=t=>{S.value.setCurrentPoolTab(t)},L=r(()=>h),W=r(()=>h.theme),Y=r(()=>R[L.value.chainName]),Z=r(()=>h.statsData);ue(()=>{var y,_,k,u;const t=(y=o==null?void 0:o.currentRoute)==null?void 0:y.value.name.split("-")[1];g.value=!t||t=="list"||t==""?["pools"]:[`${t}`];const a=(u=(k=(_=o==null?void 0:o.currentRoute)==null?void 0:_.value)==null?void 0:k.query)==null?void 0:u.language;a&&K(a),V.value=A.value,document.addEventListener("click",()=>{v.value=!1})}),E(()=>o,t=>{var a,y,_,k;if(t){const u=(a=o==null?void 0:o.currentRoute)==null?void 0:a.value.name.split("-")[1];g.value=!u||u=="list"||u==""?["pools"]:[`${u}`];const z=(k=(_=(y=o==null?void 0:o.currentRoute)==null?void 0:y.value)==null?void 0:_.query)==null?void 0:k.language;z&&K(z),V.value=A.value}},{deep:!0});const{setLang:G}=h,K=t=>{G(t),A.value=t},J=()=>{B.value=!0,f.value=!0,h.setisRefresh(),setTimeout(()=>{f.value=!1},1e3)},X=ne(),x=r(()=>X),ee=r(()=>S.value.autoPoolNum),M=r(()=>L.value.chainName),oe=ce();return E(()=>M.value,t=>{t=="Aptos"&&oe.name=="pool-list"&&o.replace("/pools")},{immediate:!0}),{autoPoolNum:ee,tabArr:Q,changeTab:U,isViewCard:H,isDisplayAll:j,isFarms:F,clickRefresh:J,store:L,config:Y,t:I,router:o,loading:D,refresh:f,current:g,addCommom:ae,list:q,theme:W,statsData:Z,pools:S,isOpenSort:v,selectValue:w,selectList:b,listLoading:B,languageValue:V,wallet:x,chainName:M}}});const ye=e=>(fe("data-v-e339cafc"),e=e(),ve(),e),_e={class:"upgrade-pools-header"},ke={class:"header-left"},$e={key:0},Ce={key:0},Ae=["href"],we=ye(()=>m("svg",{"aria-hidden":"true",class:"refresh-icon"},[m("use",{"xlink:href":"#icon-icon-refresh2"})],-1)),Se=[we];function Re(e,n,I,A,o,D){const f=N("mail-outlined"),v=te,w=me,b=N("appstore-outlined"),q=de,g=N("router-view");return p(),d("div",{class:P(["upgrade-pools-container",e.$route.name=="pool-position"?"":"container-bg"])},[m("div",_e,[m("div",ke,[i(q,{selectedKeys:e.current,"onUpdate:selectedKeys":n[1]||(n[1]=l=>e.current=l),mode:"horizontal"},{default:c(()=>[i(w,{key:"pools"},{default:c(()=>[i(v,{to:"/pool/list"},{icon:c(()=>[i(f)]),default:c(()=>[O(" "+$(e.$t("menu.pools"))+" ",1),e.store.poolAmount!=="--"?(p(),d("i",$e,$(e.store.poolAmount),1)):C("",!0)]),_:1})]),_:1}),i(w,{key:"position",onClick:n[0]||(n[0]=l=>e.current=["position"])},{default:c(()=>[i(v,{to:"/pool/position"},{icon:c(()=>[i(b)]),default:c(()=>[O(" "+$(e.$t("common.myPosition"))+" ",1),e.store.positionAmount!=="--"&&e.wallet.connected?(p(),d("i",Ce,$(e.store.positionAmount),1)):C("",!0)]),_:1})]),_:1})]),_:1},8,["selectedKeys"])]),m("div",{class:P(["header-right",e.$route.name=="pool-vaults"?"header-none":""])},[e.store.theme=="default"?(p(),d("a",{key:0,class:"quickly-enter-link quickly-enter",href:`${("config"in e?e.config:T(R)).ammSite}/pools?language=${e.languageValue}&chain=aptos`},$(e.$t("common.ammPools")),9,Ae)):C("",!0),e.$route.name!=="pool-vaults"?(p(),d("div",{key:1,class:"quickly-enter",onClick:n[2]||(n[2]=l=>e.router.push(`/liquidity/create?toCoin=${("config"in e?e.config:T(R)).currentChainTokenAddress}`))}," Create Pool ")):C("",!0),e.$route.name!=="pool-vaults"?(p(),d("div",{key:2,class:"quickly-enter",onClick:n[3]||(n[3]=l=>e.router.push(`/liquidity/deposit?action=newposition&toCoin=${("config"in e?e.config:T(R)).currentChainTokenAddress}`))}," + Add Liquidity ")):C("",!0),m("div",{class:P(e.refresh?"refresh fresh-box":"fresh-box"),onClick:n[4]||(n[4]=(...l)=>e.clickRefresh&&e.clickRefresh(...l))},Se,2)],2)]),i(g)],2)}const Ie=pe(he,[["render",Re],["__scopeId","data-v-e339cafc"]]);export{Ie as default};
