import{_ as Ie,a as Ne}from"./img-no-Positions_2x.286a62b4.js";import{b as Ae,a as je,u as Ue,c as Oe,n as we,o as se,q as ne,h as y,l as f,r as Ce,d as c,v as Se,f as w,e as Ee,p as pe,s as Be}from"./pool.72e6880c.js";import{a as Le,r as O,m as _,K as Te,D as x,y as me,W as De,e as Re,q as qe,o as s,f as n,i as h,x as m,h as o,F as q,s as P,z as C,v as t,O as ee,w as $,u as l,t as A,j as E,S as $e,U as Ve,N as Me,V as oe,p as Pe,k as Fe}from"./entry.a800e351.js";import"./index.b6cdaf66.js";/* empty css              *//* empty css              */import{i as ve}from"./import-icon.de3e6c66.js";import{D as j}from"./decimal.0bdeb344.js";import{g as ze}from"./common-fun.05c61395.js";import{_ as We}from"./img-no-Positions_2x.7650d657.js";import"./lodash.5bbb4764.js";import"./precision.a7a6c57b.js";const Ke=Le({setup(){const e=O(!0),k=O(!1),B=O([]),Q=O("vol"),X=Ae(),p=_(()=>X),F=je();_(()=>F);const Y=Ue(),I=_(()=>Y),u=Te();_(()=>Ee[p.value.chainName]);const g=_(()=>p.value.chainName),z=g.value=="Sui"?[{label:"Volume",value:"vol"},{label:"TVL",value:"tvl"},{label:"Fees",value:"fee"}]:[{label:"Volume",value:"vol"},{label:"TVL",value:"tvl"},{label:"Fees",value:"fee"}],W=d=>{Q.value=d.value},L=O(0),K=()=>{k.value=!0,L.value=L.value+1,p.value.getTransactionList(g.value,u.query.poolAddress,L.value)},T=O(!1),G=()=>{T.value=!0,e.value=!0,B.value=[],I.value.setPoolConfigList(p.value.chainName,p.value.filterCoinsObj),p.value.getTransactionList(g.value,u.query.poolAddress,0),X.getStatsData(p.value.chainName,p.value.filterCoinsObj),setTimeout(()=>{T.value=!1},1e3)},a=_(()=>{const d=u.query.poolAddress;return I.value.poolConfigObj[d]}),i=O({}),D=_(()=>ze(a.value,I,p));x(()=>u,d=>{e.value=!0,B.value=[],p.value.getTransactionList(g.value,u.query.poolAddress,0)},{immediate:!0,deep:!0});const S=Oe(p.value.chainName),N=_(()=>p.value.isShowLoadMore);x(()=>[p.value.liquiditytransactionList,a.value,N.value],async([d,v,U])=>{v&&(p.value.chainName&&p.value.chainName.includes("Aptos")&&(i.value=await S.getPool(v.address)),d?(B.value=d,e.value=!1,k.value=!1):U==!1&&(B.value=[],e.value=!1,k.value=!1))},{immediate:!0,deep:!0}),me(()=>{e.value=!0}),De(()=>{p.value.setClearLiquiditytransactionList()});const V=d=>{var U;let v;return(d==null?void 0:d.address)=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?v="0x2::sui::SUI":v=d==null?void 0:d.address,(d==null?void 0:d.logoURI)||(d==null?void 0:d.logo_url)||((U=I.value.tokensObj[v])==null?void 0:U.logo_url)||(d==null?void 0:d.url)||(p.value.theme==="default"?ve("/image/coins/unknown.png"):ve("/image/coins/sui-unknown.png"))},fe=d=>{switch(d){case"add_liquidity_event":return"Add liquidity";case"swap_event":return"Swap";case"remove_liquidity_event":return"Remove liquidity";case"collect_reward_event":return"Claim Rewards";case"collect_fee_event":return"Claim Fees"}},le=_(()=>{let d;return p.value.chainName=="Sui"?d=(a==null?void 0:a.value)&&(a==null?void 0:a.value.object)&&(a==null?void 0:a.value.object.coin_a):d=(i==null?void 0:i.value)&&(i==null?void 0:i.value.coinAmountA),pe(d,(a==null?void 0:a.value)&&(a==null?void 0:a.value.coinA)&&(a==null?void 0:a.value.coinA.decimals))}),ie=_(()=>{let d;return p.value.chainName=="Sui"?d=(a==null?void 0:a.value)&&(a==null?void 0:a.value.object)&&(a==null?void 0:a.value.object.coin_b):d=(i==null?void 0:i.value)&&(i==null?void 0:i.value.coinAmountB),pe(d,(a==null?void 0:a.value)&&(a==null?void 0:a.value.coinB)&&(a==null?void 0:a.value.coinB.decimals))}),ae=_(()=>{var d;if(I.value.RATES){const v=new j(le.value),U=new j(((d=I.value.RATES[(a==null?void 0:a.value)&&(a==null?void 0:a.value.coinA)&&a.value.coinA.address])==null?void 0:d.price)||0);return v.mul(U).toString()}else return"--"}),te=_(()=>{var d;if(I.value.RATES){const v=new j(ie.value),U=new j(((d=I.value.RATES[(a==null?void 0:a.value)&&(a==null?void 0:a.value.coinB)&&a.value.coinB.address])==null?void 0:d.price)||0);return v.mul(U).toString()}else return"--"}),de=O(),re=O(),ke=(d,v)=>{var ue,he;console.log(d,v,"###usdA usdB");const U=[];let R=new j(0);const be=new j(d).plus(new j(v));[{amount:d,name:"usdA"},{amount:v,name:"usdB"}].forEach(b=>{const J=b.amount,_e=new j(J).gt(0)?new j(J).div(be).mul(100).toString():0,Z=Be(_e,2);R=R.plus(Z);const ye=Z.split(".");U.push({value:Z,decimal:ye[1],name:b.name})});let H=new j(100).minus(R).toNumber();const M=U.sort((b,J)=>Number(J.decimal)-Number(b.decimal));if(H&&R.gt(0))for(let b=0;b<M.length&&H;b++)M[b].value=new j(M[b].value).plus(.01).toString(),H=new j(H).minus(.01).toNumber();de.value=(ue=M.find(b=>b.name=="usdA"))==null?void 0:ue.value,re.value=(he=M.find(b=>b.name=="usdB"))==null?void 0:he.value};x(()=>[ae.value,te.value],([d,v])=>{d&&v&&ke(d,v)},{immediate:!0});const ce=O(!0);me(()=>{const d=we();ce.value=d==="Sui Explorer"});const ge=_(()=>p.value.currentExplorer);return{isShowLoadMore:N,formatNumberDecimal:se,getTimeDifferenceString:ne,isTracitionLoading:k,poolStatsInfo:D,chainName:g,loadMore:K,poolMoreInfo:i,addCommom:y,decimalUi:f,route:u,timeFormat:Ce,amountAUSD:ae,amountBUSD:te,amountA:le,amountB:ie,tokena_ratio:de,tokenb_ratio:re,poolInfo:a,getType:fe,getCoinIcon:V,transactionList:B,refresh:T,clickRefresh:G,changeMode:W,modeList:z,mode:Q,checkNullObj:c,store:p,isLoading:e,getSuicanExplorerUrl:Se,getExplorerUrl:w,isSuiExplorer:ce,currentExplorer:ge}}});const r=e=>(Pe("data-v-b2255fdd"),e=e(),Fe(),e),Ge={key:0,class:"loading-spin-liquidity loading-global"},He={class:"analytics-container"},Je={class:"mode-tab"},Qe=["onClick"],Xe=r(()=>o("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Ye=[Xe],Ze={class:"poolInfo"},xe={class:"info"},eo=r(()=>o("div",{class:"page-tit"},"Pool Info",-1)),oo={class:"info-detail"},so={class:"top"},no=r(()=>o("p",null,"Pool Address",-1)),lo={class:"copy-address"},io=r(()=>o("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),ao=[io],to={class:"pc-tooltip"},ro=["href"],co=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),uo=[co],ho={class:"h5-tooltip"},po=["href"],mo=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),vo=[mo],fo={class:"center"},ko={class:"item"},go=r(()=>o("p",null,"Pool ID",-1)),bo={class:"item"},_o=r(()=>o("p",null,"Tick Spacing",-1)),yo={class:"item"},Io=r(()=>o("p",null,"Fee Tier",-1)),No={key:0},Ao={key:1},jo={class:"item"},Uo={class:"left"},Oo={alt:""},wo={class:"right"},Co=r(()=>o("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),So=[Co],Eo={key:0,class:"pc-tooltip"},Bo=["href"],Lo=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),To=[Lo],Do={key:1,class:"h5-tooltip"},Ro=["href"],qo=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),$o=[qo],Vo={class:"item"},Mo={class:"left"},Po={alt:""},Fo={class:"right"},zo=r(()=>o("use",{"xlink:href":"#icon-icon_copy1"},null,-1)),Wo=[zo],Ko={key:0,class:"pc-tooltip"},Go=["href"],Ho=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),Jo=[Ho],Qo={key:1,class:"h5-tooltip"},Xo=["href"],Yo=r(()=>o("svg",{class:"icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon-link1"})],-1)),Zo=[Yo],xo={class:"composition"},es=r(()=>o("div",{class:"page-tit"},"Pool Composition",-1)),os={class:"table-info table-composition"},ss={class:"table"},ns=r(()=>o("thead",{class:"table-header"},[o("tr",{class:"table-tr"},[o("th",null,"Token"),o("th",null,"Amount"),o("th",null,"Amount (USD)"),o("th",null,"Token Ratio")])],-1)),ls={key:0,class:"table-tr"},is={key:0},as={class:"skeleton-box"},ts={key:1},ds={alt:""},rs={key:2},cs={class:"skeleton-box"},us={key:3},hs={key:4},ps={class:"skeleton-box"},ms={key:5},vs={key:6},fs={class:"skeleton-box"},ks={key:7},gs={class:"table-tr"},bs={key:0},_s={class:"skeleton-box"},ys={key:1},Is={alt:""},Ns={key:2},As={class:"skeleton-box"},js={key:3},Us={key:4},Os={class:"skeleton-box"},ws={key:5},Cs={key:6},Ss={class:"skeleton-box"},Es={key:7},Bs={key:1,class:"table-tr"},Ls={key:0},Ts={class:"skeleton-box"},Ds={key:1},Rs={alt:""},qs={key:2},$s={class:"skeleton-box"},Vs={key:3},Ms={key:4},Ps={class:"skeleton-box"},Fs={key:5},zs={key:6},Ws={class:"skeleton-box"},Ks={key:7},Gs={class:"card"},Hs={class:"token"},Js={alt:""},Qs={class:"name"},Xs={class:"symbol"},Ys={class:"label"},Zs={class:"bottom"},xs={class:"row"},en=r(()=>o("div",{class:"left"},"Amount",-1)),on={key:0,class:"skeleton-box"},sn={key:1,class:"right"},nn={class:"row"},ln=r(()=>o("div",{class:"left"},"Amount (USD)",-1)),an={key:0,class:"skeleton-box"},tn={key:1,class:"right"},dn={class:"row"},rn=r(()=>o("div",{class:"left"},"Token Ratio",-1)),cn={key:0,class:"skeleton-box"},un={key:1,class:"right"},hn={class:"card"},pn={class:"token"},mn={alt:""},vn={class:"name"},fn={class:"symbol"},kn={class:"label"},gn={class:"bottom"},bn={class:"row"},_n=r(()=>o("div",{class:"left"},"Amount",-1)),yn={key:0,class:"skeleton-box"},In={key:1,class:"right"},Nn={class:"row"},An=r(()=>o("div",{class:"left"},"Amount (USD)",-1)),jn={key:0,class:"skeleton-box"},Un={key:1,class:"right"},On={class:"row"},wn=r(()=>o("div",{class:"left"},"Token Ratio",-1)),Cn={key:0,class:"skeleton-box"},Sn={key:1,class:"right"},En={class:"transactions"},Bn=r(()=>o("div",{class:"page-tit"},"Transactions",-1)),Ln={class:"table-info table-transactions"},Tn=r(()=>o("thead",{class:"table-header"},[o("tr",{class:"table-tr"},[o("th",null,"Event"),o("th",null,"Amounts"),o("th",null,"Transactions"),o("th",null,"Time")])],-1)),Dn={key:0,class:"loading-global"},Rn={key:1,class:"table-body"},qn={key:0,class:"icon swap-icon","aria-hidden":"true"},$n=r(()=>o("use",{"xlink:href":"#icon-tx_swap"},null,-1)),Vn=[$n],Mn={key:1,class:"icon add-icon","aria-hidden":"true"},Pn=r(()=>o("use",{"xlink:href":"#icon-tx_add"},null,-1)),Fn=[Pn],zn={key:2,class:"icon remove-icon","aria-hidden":"true"},Wn=r(()=>o("use",{"xlink:href":"#icon-tx_remove"},null,-1)),Kn=[Wn],Gn={alt:""},Hn={key:0,class:"jiantou"},Jn=["href"],Qn={key:2,class:"noData"},Xn={key:0,src:Ie},Yn={key:1,src:We},Zn={class:"h5-table-info h5-transactions-table-info"},xn={class:"row"},el=r(()=>o("div",{class:"left"},"Event",-1)),ol={class:"right"},sl={key:0,class:"icon swap-icon","aria-hidden":"true"},nl=r(()=>o("use",{"xlink:href":"#icon-tx_swap"},null,-1)),ll=[nl],il={key:1,class:"icon add-icon","aria-hidden":"true"},al=r(()=>o("use",{"xlink:href":"#icon-tx_add"},null,-1)),tl=[al],dl={key:2,class:"icon remove-icon","aria-hidden":"true"},rl=r(()=>o("use",{"xlink:href":"#icon-tx_remove"},null,-1)),cl=[rl],ul={class:"row"},hl=r(()=>o("div",{class:"left"},"Amounts",-1)),pl={class:"right"},ml={alt:""},vl={key:0,class:"jiantou"},fl={class:"row"},kl=r(()=>o("div",{class:"left"},"Transactions",-1)),gl={class:"right"},bl=["href"],_l={class:"row"},yl=r(()=>o("div",{class:"left"},"Time (UTC)",-1)),Il={class:"right"};function Nl(e,k,B,Q,X,p){var z,W,L,K,T,G,a;const F=$e,Y=Ne,I=Ve,u=Me,g=qe("image");return s(),n(q,null,[e.isLoading?(s(),n("div",Ge,[h(F)])):m("",!0),o("div",He,[o("div",Je,[o("div",null,[(s(!0),n(q,null,P(e.modeList,i=>(s(),n("div",{key:i,class:C(["title",e.mode==i.value?"title-active":""]),onClick:D=>e.changeMode(i)},t(i.label),11,Qe))),128))]),(s(),n("svg",{"aria-hidden":"true",class:C(e.refresh?"refresh refresh-icon":"refresh-icon"),onClick:k[0]||(k[0]=(...i)=>e.clickRefresh&&e.clickRefresh(...i))},Ye,2))]),o("div",Ze,[h(Y,{"pool-info":e.poolStatsInfo,mode:e.mode,address:e.route.query.poolAddress},null,8,["pool-info","mode","address"]),o("div",xe,[eo,o("div",oo,[o("div",so,[no,o("div",lo,[o("span",null,t(e.poolInfo&&e.poolInfo.address),1),(s(),n("svg",{class:"icon","aria-hidden":"true",onClick:k[1]||(k[1]=ee(i=>e.store.copy(e.poolInfo&&e.poolInfo.address),["stop"]))},ao)),o("div",to,[h(I,{placement:"top","arrow-point-at-center":""},{title:$(()=>[E(" View on Explorer ")]),default:$(()=>[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"poolAddress",e.poolInfo.address),target:"_blank"},uo,8,ro)]),_:1})]),o("div",ho,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"poolAddress",e.poolInfo.address),target:"_blank"},vo,8,po)])])]),o("div",fo,[o("div",ko,[go,o("span",null,"#"+t(e.poolInfo&&e.poolInfo.object&&((z=e.poolInfo)==null?void 0:z.object.index)),1)]),o("div",bo,[_o,o("span",null,t(e.poolInfo&&((W=e.poolInfo)==null?void 0:W.tick_spacing)),1)]),o("div",yo,[Io,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("span",No,"--%")):(s(),n("span",Ao,t(e.poolInfo&&((L=e.poolInfo)==null?void 0:L.fee)*100)+"%",1))])]),o("div",{class:C(["bottom",(K=e.poolInfo)!=null&&K.needReverse?"bottom-reserve":""])},[o("div",jo,[o("div",Uo,[A(o("img",Oo,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("span",null,t(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1)]),o("div",wo,[o("span",null,t(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address.substr(0,6)),1),E(" ... "),o("span",null,t(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address.substr(e.poolInfo.coinA.address.length-6,6)),1),(s(),n("svg",{class:"icon","aria-hidden":"true",onClick:k[2]||(k[2]=ee(i=>e.store.copy(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.address),["stop"]))},So)),e.isSuiExplorer?m("",!0):(s(),n("div",Eo,[h(I,{placement:"top",trigger:"hover","arrow-point-at-center":""},{title:$(()=>[E(" View on Explorer ")]),default:$(()=>[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinA.address),target:"_blank"},To,8,Bo)]),_:1})])),e.isSuiExplorer?m("",!0):(s(),n("div",Do,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinA.address),target:"_blank"},$o,8,Ro)]))])]),o("div",Vo,[o("div",Mo,[A(o("img",Po,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),o("span",null,t(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1)]),o("div",Fo,[o("span",null,t(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address.substr(0,6)),1),E(" ... "),o("span",null,t(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address.substr(e.poolInfo.coinB.address.length-6,6)),1),(s(),n("svg",{class:"icon","aria-hidden":"true",onClick:k[3]||(k[3]=ee(i=>e.store.copy(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.address),["stop"]))},Wo)),e.isSuiExplorer?m("",!0):(s(),n("div",Ko,[h(I,{placement:"top","arrow-point-at-center":""},{title:$(()=>[E(" View on Explorer ")]),default:$(()=>[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinB.address),target:"_blank"},Jo,8,Go)]),_:1})])),e.isSuiExplorer?m("",!0):(s(),n("div",Qo,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"coin",e.poolInfo.coinB.address),target:"_blank"},Zo,8,Xo)]))])])],2)])])]),o("div",xo,[es,o("div",os,[o("table",ss,[ns,o("tbody",{class:C(["table-body",e.poolInfo&&e.poolInfo.needReverse?"reserve-th":""])},[(T=e.poolInfo)!=null&&T.needReverse?m("",!0):(s(),n("tr",ls,[("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("td",is,[o("div",as,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ts,[A(o("img",ds,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("div",null,[o("p",null,t(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1),o("span",null,t(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.name),1)])])),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",rs,[o("div",cs,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",us,t(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountA,e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.decimals))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",hs,[o("div",ps,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ms,"$"+t(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountAUSD,2))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",vs,[o("div",fs,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ks,t(("decimalUi"in e?e.decimalUi:l(f))(e.tokena_ratio,2))+"%",1))])),o("tr",gs,[("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("td",bs,[o("div",_s,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ys,[A(o("img",Is,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),o("div",null,[o("p",null,t(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1),o("span",null,t(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.name),1)])])),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Ns,[o("div",As,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",js,t(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountB,e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.decimals))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Us,[o("div",Os,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",ws,"$"+t(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountBUSD,2))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Cs,[o("div",Ss,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Es,t(("decimalUi"in e?e.decimalUi:l(f))(e.tokenb_ratio,2))+"%",1))]),(G=e.poolInfo)!=null&&G.needReverse?(s(),n("tr",Bs,[("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("td",Ls,[o("div",Ts,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Ds,[A(o("img",Rs,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("div",null,[o("p",null,t(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1),o("span",null,t(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.name),1)])])),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",qs,[o("div",$s,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Vs,t(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountA,e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.decimals))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",Ms,[o("div",Ps,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Fs,"$"+t(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountAUSD,2))),1)),(e.store.theme=="default"?("checkNullObj"in e?e.checkNullObj:l(c))(e.poolMoreInfo||{}):("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{}))?(s(),n("td",zs,[o("div",Ws,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(s(),n("td",Ks,t(("decimalUi"in e?e.decimalUi:l(f))(e.tokena_ratio,2))+"%",1))])):m("",!0)],2)])]),o("div",{class:C(["h5-table-info",(a=e.poolInfo)!=null&&a.needReverse?"h5-table-info-reserve":""])},[o("div",Gs,[o("div",Hs,[A(o("img",Js,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinA)]]),o("div",Qs,[o("div",Xs,t(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.symbol),1),o("div",Ys,t(e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.name),1)])]),o("div",Zs,[o("div",xs,[en,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",on,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",sn,t(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountA,e.poolInfo&&e.poolInfo.coinA&&e.poolInfo.coinA.decimals))),1))]),o("div",nn,[ln,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",an,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",tn,"$"+t(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountAUSD,2))),1))]),o("div",dn,[rn,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",cn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",un,t(("decimalUi"in e?e.decimalUi:l(f))(e.tokena_ratio,2))+"%",1))])])]),o("div",hn,[o("div",pn,[A(o("img",mn,null,512),[[g,e.getCoinIcon(e.poolInfo&&e.poolInfo.coinB)]]),o("div",vn,[o("div",fn,t(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.symbol),1),o("div",kn,t(e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.name),1)])]),o("div",gn,[o("div",bn,[_n,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",yn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",In,t(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountB,e.poolInfo&&e.poolInfo.coinB&&e.poolInfo.coinB.decimals))),1))]),o("div",Nn,[An,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",jn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",Un,"$"+t(("addCommom"in e?e.addCommom:l(y))(("decimalUi"in e?e.decimalUi:l(f))(e.amountBUSD,2))),1))]),o("div",On,[wn,("checkNullObj"in e?e.checkNullObj:l(c))(e.poolInfo||{})?(s(),n("div",Cn,[h(u,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(s(),n("div",Sn,t(("decimalUi"in e?e.decimalUi:l(f))(e.tokenb_ratio,2))+"%",1))])])])],2)]),o("div",En,[Bn,o("div",Ln,[o("table",{class:C(["table",e.transactionList&&e.transactionList.length>0?"":"no-date-table"])},[Tn,e.isTracitionLoading?(s(),n("div",Dn,[h(F)])):m("",!0),e.transactionList&&e.transactionList.length>0?(s(),n("tbody",Rn,[(s(!0),n(q,null,P(e.transactionList,(i,D)=>{var S;return s(),n("tr",{key:D,class:"table-tr"},[o("td",null,[i.type=="swap_event"?(s(),n("svg",qn,Vn)):m("",!0),i.type=="add_liquidity_event"?(s(),n("svg",Mn,Fn)):m("",!0),i.type=="remove_liquidity_event"||i.type=="collect_reward_event"||i.type=="collect_fee_event"?(s(),n("svg",zn,Kn)):m("",!0),E(" "+t(e.getType(i.type)),1)]),o("td",null,[o("div",{class:C(["item-box",(i.type=="add_liquidity_event"||i.type=="remove_liquidity_event")&&((S=e.poolInfo)!=null&&S.needReverse)?"reserve-item-box":""])},[(s(!0),n(q,null,P(i.items,(N,V)=>A((s(),n("div",{key:V,class:"item"},[A(o("img",Gn,null,512),[[g,e.getCoinIcon(N)]]),o("p",null,t(("addCommom"in e?e.addCommom:l(y))(("formatNumberDecimal"in e?e.formatNumberDecimal:l(se))(N.amount,2))),1),o("span",null,t(N.symbol),1),i.type=="swap_event"?(s(),n("p",Hn,"→")):m("",!0)])),[[oe,Number(N.amount)!==0]])),128))],2)]),o("td",null,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"tx",i.tx),target:"_blank"},[o("span",null,t(i.tx.substr(0,6))+" ... "+t(i.tx.substr(i.tx.length-4,4)),1)],8,Jn)]),o("td",null,t(("getTimeDifferenceString"in e?e.getTimeDifferenceString:l(ne))(Date.parse(i.block_time))),1)])}),128))])):m("",!0),e.transactionList&&e.transactionList.length<=0&&!e.isLoading?(s(),n("div",Qn,[e.store.theme=="default"?(s(),n("img",Xn)):(s(),n("img",Yn)),o("p",null,t(e.$t("newAdd.noTransactions")),1)])):m("",!0)],2)]),o("div",Zn,[(s(!0),n(q,null,P(e.transactionList,(i,D)=>{var S;return A((s(),n("div",{key:D,class:"card"},[o("div",xn,[el,o("div",ol,[i.type=="swap_event"?(s(),n("svg",sl,ll)):m("",!0),i.type=="add_liquidity_event"?(s(),n("svg",il,tl)):m("",!0),i.type=="remove_liquidity_event"||i.type=="collect_reward_event"||i.type=="collect_fee_event"?(s(),n("svg",dl,cl)):m("",!0),E(" "+t(e.getType(i.type)),1)])]),o("div",ul,[hl,o("div",pl,[o("div",{class:C(["item-box",(i.type=="add_liquidity_event"||i.type=="remove_liquidity_event")&&((S=e.poolInfo)!=null&&S.needReverse)?"reserve-item-box":""])},[(s(!0),n(q,null,P(i.items,(N,V)=>A((s(),n("div",{key:V,class:"item"},[o("div",null,[o("div",null,[A(o("img",ml,null,512),[[g,e.getCoinIcon(N)]]),o("p",null,t(("addCommom"in e?e.addCommom:l(y))(("formatNumberDecimal"in e?e.formatNumberDecimal:l(se))(N.amount,2))),1),o("span",null,t(N.symbol),1)]),i.type=="swap_event"?(s(),n("p",vl,"→")):m("",!0)])])),[[oe,Number(N.amount)!==0]])),128))],2)])]),o("div",fl,[kl,o("div",gl,[o("a",{href:("getExplorerUrl"in e?e.getExplorerUrl:l(w))(e.currentExplorer,"tx",i.tx),target:"_blank"},[o("span",null,t(i.tx.substr(0,6))+" ... "+t(i.tx.substr(i.tx.length-4,4)),1)],8,bl)])]),o("div",_l,[yl,o("div",Il,t(("getTimeDifferenceString"in e?e.getTimeDifferenceString:l(ne))(Date.parse(i.block_time))),1)])])),[[oe,e.transactionList&&e.transactionList.length>0]])}),128))]),e.transactionList&&e.transactionList.length>=10&&!e.isLoading&&e.isShowLoadMore?(s(),n("div",{key:0,class:"load-more",onClick:k[4]||(k[4]=i=>e.loadMore())}," Load More ")):m("",!0)])])],64)}const ql=Re(Ke,[["render",Nl],["__scopeId","data-v-b2255fdd"]]);export{ql as default};
