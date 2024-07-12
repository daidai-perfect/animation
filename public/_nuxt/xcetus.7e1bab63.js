import{_ as pt}from"./xwhale-header.61d50a56.js";import{r as b,$ as qe,D as V,e as q,o as d,f as p,h as n,v as S,j as E,l as ve,m as i,q as ze,x as F,t as ke,c as U,N as Ge,p as te,k as ne,i as O,F as Pe,s as Ee,w as X,B as ge,T as Je,u as De,z as ie,a as Le,J as _t,L as ft,P as wt,R as bt,y as Ct,C as yt,aa as Xe,a9 as St}from"./entry.ceb807d2.js";import"./index.63a5acc4.js";import{a as re,h as D,s as Te,b as he,c as Ue,u as We,d as ee,p as Q,C as Se}from"./pool.8123a9d1.js";import{u as Me}from"./xcetus.38e7f579.js";import{i as Z}from"./import-icon.de3e6c66.js";import{u as Oe}from"./useWhale.713b4be5.js";import{_ as Ke}from"./xWHALE-icon.2df34cd4.js";import{_ as Qe}from"./WHALE-icon.28f954ba.js";import{_ as Tt}from"./head-switch.7b3e4138.js";/* empty css              */import{_ as kt}from"./icon-selected_3x.09e9a6f0.js";/* empty css              *//* empty css              */import{D as Ye}from"./decimal.0bdeb344.js";import{u as $t}from"./useTheme.95d8cd30.js";import{_ as je}from"./img-leverage_2x.1c577303.js";const It={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=b("--"),a=b("--"),k=b("--"),y=b("--");let c=null;qe(()=>{window.clearInterval(c)});const C=()=>{const _=new Date().getTime()/1e3;Number(_)<=Number(e.startTime)&&T(e.startTime),Number(_)>Number(e.startTime)&&Number(_)<=Number(e.endTime)&&T(e.endTime)},T=_=>{clearInterval(c),window.clearInterval(c),c=setInterval(()=>{let h=new Date().getTime()/1e3,m=_-parseInt(String(h));if(m==0){t.emit("countDown"),clearInterval(c),window.clearInterval(c),c=null;return}else m<0&&(clearInterval(c),window.clearInterval(c),t.emit("countDown"),c=null);m--;let v=parseInt(String(m/60/60/24));v=(v<10,v);let l=parseInt(String(m/60/60%24));l=(l<10,l);let $=parseInt(String(m/60%60));$=($<10,$);let P=parseInt(String(m%60));P=P<10?+P:P,s.value=v,a.value=l,k.value=$,y.value=P},1e3)};return V(()=>e.startTime,(_,h)=>{_!==h&&C()},{immediate:!0}),{day:s,hour:a,min:k,sec:y}}};const xt={class:"count-time"};function At(e,t,s,a,k,y){return d(),p("div",xt,[n("p",null,S(a.day)+"d",1),E(" : "),n("p",null,S(a.hour)+"h",1),E(" : "),n("p",null,S(a.min)+"m",1),E(" : "),n("p",null,S(a.sec)+"s",1)])}const Bt=q(It,[["render",At],["__scopeId","data-v-ce10c596"]]),Nt={props:{titleText:{type:String,default:""},tipsText:{type:String,default:""},imgIcon:{type:String,default:""},value:{type:String,default:"--"},tokenSymbol:{type:String,default:""},logo:{type:String,default:""}},setup(e){const{t}=ve(),s=re(),a=i(()=>s);return{t,wallet:a}}};const Rt=e=>(te("data-v-8a513e95"),e=e(),ne(),e),Pt={class:"table-rewards"},Et={key:0,class:"logo"},Dt=["src"],Lt={class:"text-top-all"},Ut={key:0,class:"icon-hover-box"},Wt=Rt(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-information"})],-1)),Mt={class:"tips-text-box"},Ot={key:0},Vt={key:0,alt:""},Ft={key:2};function Ht(e,t,s,a,k,y){const c=Ge,C=ze("image");return d(),p("div",Pt,[s.logo?(d(),p("div",Et,[n("img",{src:s.logo,alt:""},null,8,Dt)])):F("",!0),n("div",null,[n("div",Lt,[n("p",null,S(s.titleText),1),s.tipsText?(d(),p("div",Ut,[Wt,n("div",Mt,S(s.titleText=="est.APR"?"Estimated APR of the current epoch for all xCETUS holders.":"The number of qualified positions in this epoch."),1)])):F("",!0)]),n("span",null,[s.value!=="--"?(d(),p("p",Ot,[s.imgIcon?ke((d(),p("img",Vt,null,512)),[[C,s.imgIcon]]):F("",!0),E(S(s.value)+" ",1),n("span",null,S(s.tokenSymbol),1)])):s.value=="--"&&a.wallet&&a.wallet.address?(d(),U(c,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(d(),p("p",Ft,"--"))])])])}const Xt=q(Nt,[["render",Ht],["__scopeId","data-v-8a513e95"]]),Yt={setup(e){const{t}=ve(),s=Me(),a=i(()=>s),k=i(()=>a.value.pendingAmount),y=i(()=>a.value.newPendingAmount),c=i(()=>a.value.rewardCoinAmount),C=i(()=>a.value.nextStartTime),T=i(()=>1683094391),_=i(()=>a.value.xcetusShare&&D(a.value.xcetusShare,3)),h=re(),r=i(()=>h),m=i(()=>a.value.cetusApr&&a.value.cetusApr>.01?D(Te(a.value.cetusApr,2),2):D(a.value.cetusApr,2)),v=i(()=>a.value.pendingCoinInfo),l=i(()=>a.value.newPendingCoinInfo),$=i(()=>a.value.rewardCoin),P=b("");V(()=>v.value,w=>{w&&ee(w),P.value="Pending yield"},{immediate:!0});const ue=b("");V(()=>l.value,w=>{w&&!ee(w)?ue.value=`Pending yield (${w.symbol})`:ue.value="Pending yield"},{immediate:!0});const de=b();V(()=>$.value,w=>{w&&!ee(w)?de.value=`Pending yield (${w.symbol})`:de.value="Pending yield"},{immediate:!0});const Ie=()=>{setTimeout(()=>{s.getDividendManager()},3e3)},_e=i(()=>a.value.dividendManagerInfo),xe=i(()=>{const w=parseInt(String(new Date().getTime()/1e3)),L=_e.value.interval_day,B=(w-Number(_e.value.start_time))/(L*60);return parseInt(String(B))>0}),j=he(),fe=i(()=>j),{setIsShowSuccess:z,setIsShowRejected:we,setIsShowWaiting:oe,setTransactionDesc:N,setTransactionTxid:G}=j,Ae=Oe("Sui"),J=b(!1),Be=i(()=>a.value.venft_id),A=i(()=>fe.value.chainName?Ue(fe.value.chainName):{}),Y=async()=>{J.value=!0,oe(!0),G("");let w=`${t("tips.claimingPendingYield")} `,L="";x.value.forEach((B,I)=>{L=L+`${D(B.amount)} ${B.symbol} ${I==x.value.length-1?"":"and "}`}),N(w+L);try{let B;const I=await Ae.getRedeemDividendV2Payload(Be.value),K=await A.value.signAndExecuteTransactionBlock(r.value.currentWallet,I.txb,I.payloadParams);if(B=A.value.handleTx(K),B&&B.hash){G(B.hash),oe(!1),z(!0);const W={title:"Claim",desc:`Claimed ${L} successfully.`,hash:B.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:v.value.symbol,numa:`+ ${k.value}`,logoa:v.value.logo_url}};A.value.showTransitionPending(W);const le=await A.value.watchTransaction(W);console.log("0221###swap###transitionStatus####",le),le&&setTimeout(()=>{s.getVeNFTDividendInfo(),J.value=!1},3e3),s.getOwnerLockCetuss(r.value.address)}else oe(!1),we(!0),J.value=!1}catch(B){oe(!1),we(!0),J.value=!1,console.log(B,"error===>")}},be=We(),f=i(()=>be),Ce=w=>{var L;return(w==null?void 0:w.logoURI)||(w==null?void 0:w.logo_url)||((L=f.value.tokensObj[w==null?void 0:w.address])==null?void 0:L.logo_url)},x=i(()=>a.value.xcetusRewardList);return{t,pendingAmount:k,nextStartTime:C,wallet:r,myShare:_,importIcon:Z,nextEndTime:T,pendingYieldText:P,cetusApr:m,pendingCoinInfo:v,getNextEpoch:Ie,canClaim:xe,claimPendingYield:Y,claimLoading:J,addCommom:D,newPendingCoinInfo:l,newPendingAmount:y,newPendingYieldText:ue,rewardCoin:$,rewardCoinAmount:c,rewardCoinYieldText:de,getCoinIcon:Ce,xcetusRewardList:x}}},jt=""+new URL("staking-rewards-banner-h5.1c7401db.png",import.meta.url).href,qt=""+globalThis.__publicAssetsURL("sui-image/icon_pendingyield@2x.png");const pe=e=>(te("data-v-788866e7"),e=e(),ne(),e),zt={class:"top-banner"},Gt=pe(()=>n("img",{src:jt,alt:""},null,-1)),Jt=pe(()=>n("p",null,"Convert CETUS to xCETUS to start earning",-1)),Kt={class:"bot-count"},Qt=pe(()=>n("span",null,"Reward distribution in ",-1)),Zt={class:"holder-rewards"},en=pe(()=>n("div",{class:"title"},[n("div",{class:"left"},[n("span",null,"xCETUS Staking Rewards")])],-1)),tn={class:"rewards-value"},nn={key:0,class:"pending-yield"},an=pe(()=>n("div",{class:"pending-yield-title"},[n("img",{src:qt,alt:""}),n("span",null,"Pending Yield")],-1)),on={class:"pending-yield-list"},ln={alt:""},sn={class:"claim-btn-box"};function rn(e,t,s,a,k,y){const c=Bt,C=Xt,T=ge,_=ze("image");return d(),p("div",null,[n("div",zt,[Gt,Jt,n("div",Kt,[Qt,O(c,{"start-time":a.nextStartTime,onCountDown:t[0]||(t[0]=h=>e.$emit("getNextEpoch"))},null,8,["start-time"])])]),n("div",Zt,[en,n("div",tn,[O(C,{"title-text":"est.APR","tips-text":"good",value:"≈"+a.cetusApr+"%",logo:"/sui-image/icon_estapr@2x.png"},null,8,["title-text","value"]),O(C,{"title-text":"My share",value:a.myShare!=="--"?"≈"+a.myShare+"%":"--",logo:"/sui-image/icon_myshare@2x.png"},null,8,["value"]),a.xcetusRewardList&&a.xcetusRewardList.length==0?(d(),U(C,{key:0,"title-text":"Pending yield",value:a.wallet&&a.wallet.address?"0":"--",logo:"/sui-image/icon_pendingyield@2x.png"},null,8,["value"])):F("",!0)]),a.wallet&&a.wallet.address&&a.xcetusRewardList&&a.xcetusRewardList.length>0?(d(),p("div",nn,[an,n("div",on,[(d(!0),p(Pe,null,Ee(a.xcetusRewardList,(h,r)=>(d(),p("div",{key:r,class:"pending-yield-item"},[n("div",null,[ke(n("img",ln,null,512),[[_,a.getCoinIcon(h)]]),n("span",null,S(h.symbol),1)]),n("div",null,S(a.addCommom(h.amount,6)),1)]))),128)),n("div",sn,[a.wallet&&a.wallet.address&&a.xcetusRewardList&&a.xcetusRewardList.length>0?(d(),U(T,{key:0,class:"claim-btn",loading:a.claimLoading,disabled:!a.canClaim||a.xcetusRewardList&&a.xcetusRewardList.length==0,onClick:a.claimPendingYield},{default:X(()=>[E(" Claim ")]),_:1},8,["loading","disabled","onClick"])):F("",!0)])])])):F("",!0)])])}const un=q(Yt,[["render",rn],["__scopeId","data-v-788866e7"]]),dn={props:{startTime:{type:String,require:!0,default:""},endTime:{type:Number,require:!0,default:0}},setup(e,t){const s=b("--"),a=b("--"),k=b("--"),y=b("--");let c=null;qe(()=>{window.clearInterval(c)});const C=()=>{const _=new Date().getTime()/1e3;Number(_)<=Number(e.startTime)&&T(e.startTime),Number(_)>Number(e.startTime)&&Number(_)<=Number(e.endTime)&&T(e.endTime)},T=_=>{c=setInterval(()=>{let h=new Date().getTime()/1e3,m=_-parseInt(String(h));if(m==0){t.emit("countDown"),clearInterval(c),window.clearInterval(c),c=null;return}else m<0&&(clearInterval(c),window.clearInterval(c),t.emit("countDown"),c=null);m--;let v=parseInt(String(m/60/60/24));v=v<10?"0"+v:v;let l=parseInt(String(m/60/60%24));l=l<10?"0"+l:l;let $=parseInt(String(m/60%60));$=$<10?"0"+$:$;let P=parseInt(String(m%60));P=P<10?"0"+P:P,s.value=v,a.value=l,k.value=$,y.value=P},1e3)};return V(()=>e.startTime,(_,h)=>{_!==h&&C()},{immediate:!0}),{day:s,hour:a,min:k,sec:y}}};const $e=e=>(te("data-v-131b3f4e"),e=e(),ne(),e),cn={class:"count-down"},mn=$e(()=>n("span",null,"D : ",-1)),vn=$e(()=>n("span",null,"H : ",-1)),gn=$e(()=>n("span",null,"M : ",-1)),hn=$e(()=>n("span",null,"S",-1));function pn(e,t,s,a,k,y){return d(),p("div",cn,[E(S(a.day)+" ",1),mn,E(" "+S(a.hour)+" ",1),vn,E(" "+S(a.min)+" ",1),gn,E(" "+S(a.sec)+" ",1),hn])}const _n=q(dn,[["render",pn],["__scopeId","data-v-131b3f4e"]]),fn={components:{WcountDown:_n},props:{vItem:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1}},setup(e,t){const{t:s}=ve(),a=Me(),k=he(),y=i(()=>k),c=v=>{t.emit("claim",v),a.setClaimLoading(v.id)},C=i(()=>a),T=i(()=>new Date().getTime()/1e3>e.vItem.locked_until_time),_=v=>{t.emit("cancelRedeemPayload",v),a.setClaimLoading(v.id)};i(()=>y.value.chainName),Oe("Sui");const h=re();return i(()=>h),i(()=>C.value.venft_id),i(()=>y.value.chainName?Ue(y.value.chainName):{}),{t:s,prettyAmount:Q,claimBoolean:T,toClaim:c,toCancel:_,claimWhale:v=>{t.emit("claimWhale",v)},cancelRedeemPayload:v=>{t.emit("cancelRedeemPayload",v)}}}};const Ve=e=>(te("data-v-67fc6972"),e=e(),ne(),e),wn={class:"vesting-box"},bn={class:"left"},Cn=Ve(()=>n("img",{src:Ke,alt:""},null,-1)),yn=Ve(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-swap2"})],-1)),Sn=Ve(()=>n("img",{src:Qe,alt:""},null,-1)),Tn={class:"available-all"},kn={class:"available"},$n={key:0},In={key:1};function xn(e,t,s,a,k,y){const c=Je("WcountDown"),C=ge;return d(),p("div",wn,[n("div",bn,[n("p",null,[n("span",null,[Cn,E(" "+S(("addCommom"in e?e.addCommom:De(D))(a.prettyAmount(s.vItem.xcetus_amount,9),9))+" xCETUS ",1)]),yn,n("span",null,[Sn,E(" "+S(("addCommom"in e?e.addCommom:De(D))(a.prettyAmount(s.vItem.cetus_amount,9),9))+" CETUS ",1)])]),n("div",Tn,[n("div",kn,[n("span",null,S(a.claimBoolean?"Available":"Available in"),1),a.claimBoolean?F("",!0):(d(),U(c,{key:0,"start-time":s.vItem.locked_start_time,"end-time":s.vItem.locked_until_time,onCountDown:t[0]||(t[0]=T=>e.$emit("countDown"))},null,8,["start-time","end-time"]))]),n("div",{class:ie(a.claimBoolean?"highlight right-h5":"right-h5")},[a.claimBoolean?(d(),p("span",$n,"Claim")):(d(),p("span",In,"Cancel"))],2)])]),a.claimBoolean?(d(),U(C,{key:0,disabled:!a.claimBoolean||s.loading,loading:s.loading,onClick:t[1]||(t[1]=T=>a.claimWhale(s.vItem))},{default:X(()=>[E(S(a.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"])):(d(),U(C,{key:1,type:"text",class:"right",disabled:s.loading,loading:s.loading,onClick:t[2]||(t[2]=T=>a.cancelRedeemPayload(s.vItem))},{default:X(()=>[E(S(a.claimBoolean?"Claim":"Cancel"),1)]),_:1},8,["disabled","loading"]))])}const An=q(fn,[["render",xn],["__scopeId","data-v-67fc6972"]]),Bn=Le({props:{inputValue:{type:String,default:""},coinSymbol:{type:String,default:""},whaleDirection:{type:String,default:""},address:{type:String,default:""},balance:{type:String,default:""}},setup(e,t){const{t:s,locale:a}=ve(),k=he(),y=i(()=>k),c=_t(ft,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0}),C=re(),T=i(()=>C),_=We(),h=i(()=>_),r=v=>{const $=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,9})?).*$");v.target.value=v.target.value.replace($,"$1")},m=i(()=>{var v;return h.value.tokensObj&&e.address&&h.value.tokensObj[e.address]&&((v=h.value.tokensObj[e.address])==null?void 0:v.decimals)});return V(()=>h.value.RATES,v=>{},{immediate:!0}),{pool:h,t:s,addCommom:D,store:y,wallet:T,indicator:c,inputChange:r,importIcon:Z,coinDecimals:m}}});const Nn=e=>(te("data-v-a22ce706"),e=e(),ne(),e),Rn={class:"card"},Pn={class:"top"},En={class:"left"},Dn={class:"loading-token"},Ln={key:0,src:Qe,alt:""},Un={key:1,src:Ke,alt:""},Wn={class:"bottom"},Mn=Nn(()=>n("div",null,null,-1)),On={class:"top"},Vn={class:"right"},Fn={key:0,class:"balance"},Hn={key:2,class:"balance"};function Xn(e,t,s,a,k,y){var _,h;const c=wt,C=Ge,T=ge;return d(),p("div",Rn,[n("div",Pn,[O(c,{value:e.inputValue,placeholder:"0.0",onChange:e.inputChange,onInput:t[0]||(t[0]=r=>e.$emit("onInput",r.target.value)),onFocus:t[1]||(t[1]=r=>e.$emit("onFocus"))},null,8,["value","onChange"]),n("div",En,[n("div",Dn,[e.coinSymbol=="CETUS"?(d(),p("img",Ln)):(d(),p("img",Un)),n("div",null,[n("p",null,S(e.coinSymbol?e.coinSymbol:e.$t("modal.selectTokenModalTitle")),1)])])])]),n("div",Wn,[Mn,n("div",On,[n("div",Vn,[n("span",null,S(e.$t("common.balance")),1),e.balance!=="--"?(d(),p("span",Fn,S(e.balance>1?("addCommom"in e?e.addCommom:De(D))(e.balance):e.balance),1)):e.balance=="--"&&e.wallet&&e.wallet.address?(d(),U(C,{key:1,loading:!0,class:"loading-token-skeleton",active:"",paragraph:!1})):(d(),p("span",Hn,"--")),e.whaleDirection=="From"?(d(),U(T,{key:3,class:"max-btn",disabled:!e.balance||e.balance==0||!((_=e.wallet)!=null&&_.address),onClick:t[2]||(t[2]=r=>e.$emit("halfBalanne"))},{default:X(()=>[E(S("Half"))]),_:1},8,["disabled"])):F("",!0),e.whaleDirection=="From"?(d(),U(T,{key:4,class:"max-btn",disabled:!e.balance||e.balance==0||!((h=e.wallet)!=null&&h.address),onClick:t[3]||(t[3]=r=>e.$emit("maxBalanne"))},{default:X(()=>[E(S(e.$t("button.max")),1)]),_:1},8,["disabled"])):F("",!0)])])])])}const Yn=q(Bn,[["render",Xn],["__scopeId","data-v-a22ce706"]]);const jn=Le({components:{Modal:bt},setup(e,t){const s=he(),a=b(!1);i(()=>s);const k=re(),y=i(()=>k);return{store:s,isSelect:a,clickConvert:()=>{a.value&&localStorage.setItem(`notRemind${y.value.address}`,!0),t.emit("clickConvert")}}}}),Fe=e=>(te("data-v-ee04003a"),e=e(),ne(),e),qn=Fe(()=>n("use",{"xlink:href":"#icon-a-icon-Shutdown"},null,-1)),zn=[qn],Gn={class:"token-waring-conetnt"},Jn=Fe(()=>n("div",{class:"tips-text"},[E(" Please note that after conversion, if you want to convert xCETUS back to CETUS, a vesting period will be applied & different vesting durations correspond to different redeem ratios. "),n("a",{href:"https://cetus-1.gitbook.io/cetus-docs/tokenomics/xcetus",target:"_blank"}," Learn more")],-1)),Kn={class:"read-text"},Qn={key:0,src:kt},Zn=Fe(()=>n("span",null," Do not remind again. ",-1));function ea(e,t,s,a,k,y){const c=ge,C=Je("Modal");return d(),U(C,{width:"440px",visible:!0,footer:null,title:null,"mask-closable":!0,onCancel:t[3]||(t[3]=T=>e.$emit("close"))},{closeIcon:X(()=>[(d(),p("svg",{class:"icon modal-icon-close","aria-hidden":"true",onClick:t[0]||(t[0]=T=>e.$emit("close"))},zn))]),default:X(()=>[n("div",Gn,[Jn,n("div",Kn,[n("div",{class:"radio",onClick:t[1]||(t[1]=T=>e.isSelect=!e.isSelect)},[e.isSelect?(d(),p("img",Qn)):F("",!0)]),Zn]),O(c,{class:"big-btn continue",onClick:t[2]||(t[2]=()=>e.clickConvert())},{default:X(()=>[E("Convert")]),_:1})])]),_:1})}const ta=q(jn,[["render",ea],["__scopeId","data-v-ee04003a"]]),na=Le({setup(){const e=Me(),t=i(()=>e),s=i(()=>t.value.venft_id),a=i(()=>t.value.venftInfo),k=We(),y=i(()=>k),c=he(),C=i(()=>c),T=$t();i(()=>y.value.tokensObj&&y.value.tokensObj["0x2a4f647bc73f070182436658bff75060246019857c769ad9268c22c4472bca7f::cetus::CETUS"]);const _=b("");let h=b(!1);const r=b(""),m=b(""),v=b(!1),l=b("convert"),{t:$}=ve(),P=b([{time:"15 D",num:15},{time:"30 D",num:30},{time:"90 D",num:90},{time:"180 D",num:180}]),ue=b([{name:"est.APR",value:"100.12%"},{name:"My share",value:"<0.1%"},{name:"Pending yield (USDC)",value:0}]),de=b([{name:"My total locked",value:"$100.12"},{name:"Pending rewards (xCETUS)",value:"100.12"},{name:"",value:""}]),Ie=b([{name:"My positions",value:"12"},{name:"My qualified positions",value:"0"},{name:"Pending rewards (xCETUS)",value:"100.12"}]),_e=window.setInterval(()=>{e.getXcetusApr(),f.value.address&&(e.getMyShare(f.value.address),e.getVeNFTDividendInfo())},6e4),xe=window.setInterval(async()=>{await e.getAccountWhaleBalance(f.value.address)},1e4);Ct(()=>{document.addEventListener("visibilitychange",()=>{document.hidden||e.getDividendManager()}),e.getDividendManager()}),yt(()=>{window.clearInterval(_e),window.clearInterval(xe),document.removeEventListener("visibilitychange",()=>{console.log("removeEventListener visibilitychange")})}),V(()=>C.value.theme,(o,u)=>{o!=="sui"&&T.selectSuiTheme(),u&&o!==u&&k.setChainPoolConfigList([])},{immediate:!0});const j=i(()=>(console.log(t.value.whaleBalance,"==>xcetus.value.whaleBalance"),t.value.whaleBalance)),fe=i(()=>t.value.xWhaleBalance),z=i(()=>t.value.availableXwhale),we=i(()=>t.value.redeemingXwhale),oe=i(()=>{if(l.value=="convert"){if(Number(r.value)>Number(j.value))return!0}else if(Number(r.value)>Number(z.value))return!0;return!r.value||!m.value||Number(r.value)==0||Number(m.value)==0}),N=b("180"),G=i(()=>(console.log(l.value=="convert","===>1212211"),l.value=="convert"&&Number(r.value)>Number(j.value)?$("button.insufficientBalance",{name:"CETUS"}):l.value!=="convert"&&Number(r.value)>Number(z.value)?$("button.insufficientBalance",{name:"xCETUS"}):Number(N.value)<15?"Minimum vesting duration is 15 days":l.value=="convert"&&s?"Convert":l.value!=="convert"&&s?"Redeem":"Convert"));console.log(G.value,"btnText.value===>");const Ae=o=>{r.value="",m.value="",l.value=o},J=()=>{h.value=!0,setTimeout(()=>{h.value=!1},300)},Be=o=>{N.value=o},A=b(!1),Y=Oe("Sui"),be=re(),f=i(()=>be),Ce=i(()=>t.value.ownerLocks);V(()=>f.value.address,o=>{o?(e.getOwnerVeNFT(o),e.getAccountWhaleBalance(o),e.getOwnerLockCetuss(o),e.getMyShare(o),e.getAccountWhaleBalance(o)):e.loginOut()},{immediate:!0});const x=i(()=>C.value.chainName?Ue(C.value.chainName):{}),w=i(()=>C.value.chainName),{setIsShowSuccess:L,setIsShowRejected:B,setIsShowWaiting:I,setTransactionDesc:K,setTransactionTxid:W}=c,le=async()=>{A.value=!0,I(!0),W(""),K($("tips.converting",{from:`${D(r.value,9)} CETUS`,and:"to",to:`${D(r.value,9)} xCETUS`}));try{let o;const u=Se(r.value,9);console.log(s.value,"===>venft_id.value");const g=await Y.depositCetus(u,s.value);console.log(g,"payload==>");const M=await x.value.signAndExecuteTransactionBlock(f.value.currentWallet,g.txb,g.payloadParams);if(o=x.value.handleTx(M),o&&o.hash){W(o.hash),I(!1),L(!0);const R={title:"Converted",desc:`Converted ${D(r.value,9)} xCETUS successfully`,hash:o.hash,tit:"Converted",icon:"icon-icon-Swap",tokenInfo:{tokena:"CETUS",numa:`- ${r.value}`,logoa:Z("/sui-image/WHALE-icon.png"),tokenb:"xCETUS",numb:`+ ${r.value}`,logob:Z("/sui-image/xWHALE-icon.png")}};w.value!=="Aptos"&&(R.res=o.res),x.value.showTransitionPending(R);const H=await x.value.watchTransaction(R);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getAccountWhaleBalance(f.value.address),e.getOwnerVeNFT(f.value.address),e.getOwnerLockCetuss(f.value.address),e.getMyShare(f.value.address)},3e3),A.value=!1}else I(!1),B(!0),A.value=!1;r.value=""}catch(o){I(!1),B(!0),A.value=!1,r.value="",console.log(o,"error===>")}},se=b(!0),Ne=b("0"),Ze=async()=>{const o=Se(r.value,9),u=await Y.redeemNum(o,Number(N.value));m.value=Q(u.amountOut,9),console.log("===>amount2222"),Ne.value=u.percent},et=async()=>{const o=Se(m.value,9),u=await Y.reverseRedeemNum(o,Number(N.value));console.log(u,"===>amount111"),r.value=Q(u.amountOut,9),Ne.value=u.percent};V(()=>[r.value,N.value,se.value],([o,u,g])=>{console.log(o,"===>>>>>>>fromCoinAmount",typeof o),o&&u&&g&&Number(u)>=15&&Ze(),!o&&g&&(m.value="")},{immediate:!0}),V(()=>[m.value,N.value,se.value],([o,u,g])=>{o&&u&&!g&&Number(u)>=15&&(et(),console.log(o,"===>toCoinAmount")),!o&&!g&&(r.value="")},{immediate:!0}),V(()=>[N.value,se.value],([o,u])=>{Number(o)>180?N.value="180":Number(o)<15?u?m.value="":r.value="":o||(u?r.value="":m.value="")},{immediate:!0});const tt=()=>{se.value=!0,r.value=Te(new Ye(l.value!=="convert"?z.value:j.value).div(new Ye(2)).toString(),9)},nt=()=>{se.value=!0,r.value=l.value!=="convert"?Te(z.value,9):Te(j.value,9)},He=async()=>{A.value=!0,I(!0),W(""),K($("tips.redeeming",{from:`${D(r.value,9)} xCETUS`,to:`${D(m.value,9)} CETUS`}));try{let o;const u=Se(r.value,9);console.log(u.toString(),"538====>");const g=await Y.getRedeemLockPayload(u,s.value,Number(N.value));console.log(g,"payload==>");const M=await x.value.signAndExecuteTransactionBlock(f.value.currentWallet,g.txb,g.payloadParams);if(o=x.value.handleTx(M),o&&o.hash){W(o.hash),I(!1),L(!0);const R={title:"Redemption",desc:"Redemption transaction submitted successfully.",hash:o.hash,tit:"Vesting",icon:"icon-icon-Removed",tokenInfo:{tokena:"xCETUS",numa:`- ${r.value}`,logoa:Z("/sui-image/xWHALE-icon.png")}};w.value!=="Aptos"&&(R.res=o.res),x.value.showTransitionPending(R);const H=await x.value.watchTransaction(R);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getAccountWhaleBalance(f.value.address),e.getOwnerVeNFT(f.value.address),e.getOwnerLockCetuss(f.value.address),e.getMyShare(f.value.address)},3e3),A.value=!1}else I(!1),B(!0),A.value=!1;r.value="",m.value=""}catch(o){I(!1),B(!0),A.value=!1,r.value="",m.value="",console.log(o,"error===>")}};V(()=>[s.value,Ce.value,a.value,f.value.address],([o,u,g,M])=>{M&&(o&&e.getVeNFTDividendInfo(),o&&!ee(g)&&e.getAvailableXCetus())},{immediate:!0,deep:!0});const at=async o=>{A.value=!0,I(!0),W(""),K("");try{let u;console.log(o.id,"==>vItem.id");const g=await Y.getCancelRedeemPayload(o.id,s.value);console.log(g,"payload==>");const M=await x.value.signAndExecuteTransactionBlock(f.value.currentWallet,g==null?void 0:g.txb,g==null?void 0:g.payloadParams);if(u=x.value.handleTx(M),u&&u.hash){W(u.hash),I(!1),L(!0);const R={title:"Cancelled Redemption",desc:"Cancelled redemption successfully.",hash:u.hash,tit:"Cancelled Redemption",icon:"icon-a-icon-Shutdown",tokenInfo:{tokena:"xCETUS",numa:`+ ${Q(o.xcetus_amount,9)}`,logoa:Z("/sui-image/xWHALE-icon.png")}};w.value!=="Aptos"&&(R.res=u.res),x.value.showTransitionPending(R);const H=await x.value.watchTransaction(R);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getOwnerVeNFT(f.value.address),e.getOwnerLockCetuss(f.value.address),A.value=!1},3e3)}else I(!1),B(!0),A.value=!1;r.value="",m.value=""}catch(u){I(!1),B(!0),A.value=!1,r.value="",m.value="",e.setClaimLoading(""),console.log(u,"error===>")}},ot=b({}),lt=()=>{e.getOwnerLockCetuss(f.value.address)},st=async o=>{console.log(o,"vItem===>"),A.value=!0,I(!0),W(""),K(`${$("tips.claimingPendingYield")} ${D(Q(o.cetus_amount,9),9)} CETUS`);try{let u;const g=await Y.getRedeemPayload(o.id,s.value);console.log(g,"payload==>");const M=await x.value.signAndExecuteTransactionBlock(f.value.currentWallet,g==null?void 0:g.txb,g==null?void 0:g.payloadParams);if(u=x.value.handleTx(M),u&&u.hash){W(u.hash),I(!1),L(!0);const R={title:"Claimed",desc:`Claimed ${D(Q(o.cetus_amount,9),9)} CETUS successfully.`,hash:u.hash,tit:"CETUS Claimed",icon:"icon-icon-Removed",tokenInfo:{tokena:"CETUS",numa:`+ ${Q(o.cetus_amount,9)}`,logoa:Z("/sui-image/WHALE-icon.png")}};w.value!=="Aptos"&&(R.res=u.res),x.value.showTransitionPending(R);const H=await x.value.watchTransaction(R);console.log("0221###swap###transitionStatus####",H),H&&setTimeout(()=>{e.getOwnerLockCetuss(f.value.address),e.getAccountWhaleBalance(f.value.address),e.getOwnerVeNFT(f.value.address),e.getMyShare(f.value.address),e.getAvailableXCetus(),A.value=!1},3e3)}else I(!1),B(!0),A.value=!1;r.value="",m.value=""}catch(u){I(!1),B(!0),A.value=!1,r.value="",m.value="",e.setClaimLoading(""),console.log(u,"error===>")}},Re=b(!1),it=()=>{!localStorage.getItem(`notRemind${f.value.address}`)&&G.value=="Convert"?Re.value=!0:G.value=="Redeem"?He():le()},rt=()=>{Re.value=!1,le()},ce=i(()=>t.value.pendingCoinInfo),me=i(()=>t.value.pendingAmount),ye=b(!1),ut=async()=>{ye.value=!0,I(!0),W(""),K(`${$("tips.claimingPendingYield")} ${me.value} ${ce.value.symbol}`),console.log(`${$("tips.claimingPendingYield")} ${me.value} ${ce.value.symbol}`,"dsadas");try{let o;const u=await Y.getRedeemDividendV2Payload(s.value);console.log(u,"payload==>");const g=await x.value.signAndExecuteTransactionBlock(f.value.currentWallet,u.txb,u.payloadParams);if(o=x.value.handleTx(g),o&&o.hash){W(o.hash),I(!1),L(!0);const M={title:"Claim",desc:`Claimed ${me.value} ${ce.value.symbol} successfully.`,hash:o.hash,tit:"Claimed Rewards",icon:"icon-icon-Removed",tokenInfo:{tokena:ce.value.symbol,numa:`+ ${me.value}`,logoa:ce.value.logo_url}};w.value!=="Aptos"&&(M.res=o.res),x.value.showTransitionPending(M);const R=await x.value.watchTransaction(M);console.log("0221###swap###transitionStatus####",R),R&&setTimeout(()=>{e.getVeNFTDividendInfo(),ye.value=!1},3e3),e.getOwnerLockCetuss(f.value.address)}else I(!1),B(!0),ye.value=!1,A.value=!1}catch(o){I(!1),B(!0),ye.value=!1,console.log(o,"error===>")}},dt=()=>{Number(N.value)<15&&(N.value="15")},ct=()=>{N.value&&(N.value=N.value.replace(/[^\d]/g,""),N.value.charAt(0)==="0"&&(N.value=N.value.slice(1)))},mt=()=>{e.getDividendManager()},vt=i(()=>y.value.tokensObj||{}),gt=i(()=>y.value.RATES||{}),ht=i(()=>t.value.dividendManagerInfo||{});return V(()=>[vt.value,gt.value,ht.value],([o,u,g])=>{!ee(o)&&!ee(u)&&!ee(g)&&e.getXcetusApr()},{immediate:!0}),{clickModalConvert:rt,openConfirmModal:Re,validateInput:ct,countDown:lt,value:_,change:h,clickExchange:J,fromCoinAmount:r,toCoinAmount:m,showCoinSelect:v,headSwitchValue:l,headSwitchChange:Ae,vestingDateList:P,vestingParameter:N,vestingTab:Be,holderList:ue,lockupList:de,leaderboardList:Ie,whaleBalance:j,depositCetus:le,btnText:G,loading:A,redeemRatio:Ne,halfBalanne:tt,maxBalanne:nt,xWhaleBalance:fe,availableXwhale:z,redeemingXwhale:we,withdrawWhale:He,ownerLocks:Ce,cancelRedeemPayload:at,holderInfo:ot,btnDisabled:oe,fixedFromCoin:se,walletStore:be,claimWhale:st,wallet:f,depositOrWithdraw:it,pendingAmount:me,claimPendingYield:ut,inputBlur:dt,getNextEpoch:mt}}});const ae=e=>(te("data-v-72e2ec7f"),e=e(),ne(),e),aa={class:"dashboard-all"},oa={class:"dashboard-content"},la={class:"content-left"},sa={key:0,class:"vesting"},ia=ae(()=>n("p",null,"Vesting",-1)),ra={class:"content-right"},ua={key:0,class:"card-container"},da={class:"card-item"},ca={class:"card-item"},ma={class:"exchange"},va=ae(()=>n("use",{"xlink:href":"#icon-icon-swap2"},null,-1)),ga=[va],ha={key:1,class:"card-redeem"},pa={class:"card-item"},_a={class:"vesting-duration"},fa={class:"vesting-title"},wa=ae(()=>n("p",null,"Vesting duration",-1)),ba={class:"vesting-left h5-vesting-left"},Ca={class:"value-days"},ya=ae(()=>n("span",null,"days",-1)),Sa={class:"vesting-content"},Ta={class:"vesting-left pc-vesting-left"},ka={class:"value-days"},$a=ae(()=>n("span",null,"days",-1)),Ia={class:"vesting-right"},xa=["onClick"],Aa={class:"card-item"},Ba={class:"redeem-ratio"},Na=ae(()=>n("span",null,"Redeem ratio",-1)),Ra={class:"exchange"},Pa=ae(()=>n("use",{"xlink:href":"#icon-icon-swap2"},null,-1)),Ea=[Pa];function Da(e,t,s,a,k,y){const c=pt,C=un,T=An,_=Tt,h=Yn,r=St,m=ge,v=ta;return d(),p("div",aa,[O(c,{title:"Dashboard","total-xwhale":e.xWhaleBalance,"available-xwhale":e.availableXwhale,"redeeming-xwhale":e.redeemingXwhale},null,8,["total-xwhale","available-xwhale","redeeming-xwhale"]),n("div",oa,[n("div",la,[O(C,{"holder-info":e.holderInfo,"pending-amount":e.pendingAmount,"claim-loading":e.claimLoading,onClaimPendingYield:e.claimPendingYield,onGetNextEpoch:e.getNextEpoch},null,8,["holder-info","pending-amount","claim-loading","onClaimPendingYield","onGetNextEpoch"]),e.ownerLocks&&e.ownerLocks.length>0?(d(),p("div",sa,[ia,(d(!0),p(Pe,null,Ee(e.ownerLocks,l=>(d(),U(T,{key:l,"v-item":l,loading:e.loading,onCountDown:e.countDown,onClaimWhale:e.claimWhale,onCancelRedeemPayload:e.cancelRedeemPayload},null,8,["v-item","loading","onCountDown","onClaimWhale","onCancelRedeemPayload"]))),128))])):F("",!0)]),n("div",ra,[O(_,{"head-switch-value":e.headSwitchValue,"left-text":"Get xCETUS","right-text":"Redeem CETUS",onHeadSwitchChange:t[0]||(t[0]=l=>{e.headSwitchChange(l)})},null,8,["head-switch-value"]),e.headSwitchValue=="convert"?(d(),p("div",ua,[n("div",da,[O(h,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[1]||(t[1]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"CETUS","whale-direction":"From",balance:e.whaleBalance,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[2]||(t[2]=l=>{e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),n("div",ca,[O(h,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[3]||(t[3]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"To",balance:e.availableXwhale,onOnInput:t[4]||(t[4]=l=>{e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance"])]),n("img",{class:ie(e.change?"gang animationex":"gang"),src:je,alt:""},null,2),n("div",ma,[(d(),p("svg",{class:ie(e.change?"icon animationex":"icon"),"aria-hidden":"true"},ga,2))])])):(d(),p("div",ha,[n("div",pa,[O(h,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[5]||(t[5]=l=>e.fromCoinAmount=l),"input-value":e.fromCoinAmount,"coin-symbol":"xCETUS","whale-direction":"From",balance:e.availableXwhale,onHalfBalanne:e.halfBalanne,onMaxBalanne:e.maxBalanne,onOnInput:t[6]||(t[6]=l=>{e.fixedFromCoin=!0,e.fromCoinAmount=l})},null,8,["modelValue","input-value","balance","onHalfBalanne","onMaxBalanne"])]),n("div",_a,[n("div",fa,[wa,n("div",ba,[n("div",Ca,[ke(n("input",{"onUpdate:modelValue":t[7]||(t[7]=l=>e.vestingParameter=l),onInput:t[8]||(t[8]=(...l)=>e.validateInput&&e.validateInput(...l)),onBlur:t[9]||(t[9]=(...l)=>e.inputBlur&&e.inputBlur(...l))},null,544),[[Xe,e.vestingParameter]])]),ya])]),n("div",Sa,[n("div",Ta,[n("div",ka,[ke(n("input",{"onUpdate:modelValue":t[10]||(t[10]=l=>e.vestingParameter=l),onInput:t[11]||(t[11]=(...l)=>e.validateInput&&e.validateInput(...l)),onBlur:t[12]||(t[12]=(...l)=>e.inputBlur&&e.inputBlur(...l))},null,544),[[Xe,e.vestingParameter]])]),$a]),n("div",Ia,[(d(!0),p(Pe,null,Ee(e.vestingDateList,l=>(d(),p("div",{key:l.time,class:ie(["box-table",{"box-table-active":l.num===Number(e.vestingParameter)}]),onClick:$=>e.vestingTab(l.num)},S(l.time),11,xa))),128))])]),O(r,{value:e.vestingParameter,"onUpdate:value":t[13]||(t[13]=l=>e.vestingParameter=l),max:180,min:15},null,8,["value"])]),n("div",Aa,[O(h,{modelValue:e.toCoinAmount,"onUpdate:modelValue":t[14]||(t[14]=l=>e.toCoinAmount=l),"input-value":e.toCoinAmount,"coin-symbol":"CETUS","whale-direction":"To",balance:e.whaleBalance,onOnInput:t[15]||(t[15]=l=>{e.fixedFromCoin=!1,e.toCoinAmount=l})},null,8,["modelValue","input-value","balance"])]),n("div",Ba,[Na,n("p",null,S(e.redeemRatio)+"%",1)]),n("img",{class:ie(e.change?"gang animationex":"gang"),src:je,alt:""},null,2),n("div",Ra,[(d(),p("svg",{class:ie(e.change?"icon animationex":"icon"),"aria-hidden":"true"},Ea,2))])])),e.wallet&&e.wallet.address?(d(),U(m,{key:2,class:"big-btn",loading:e.loading,disabled:e.btnDisabled,onClick:e.depositOrWithdraw},{default:X(()=>[n("span",null,S(e.btnText),1)]),_:1},8,["loading","disabled","onClick"])):(d(),U(m,{key:3,class:"big-btn",onClick:t[16]||(t[16]=l=>e.walletStore.setIsShowWalletModal(!0))},{default:X(()=>[n("span",null,S(e.$t("button.connectWallet")),1)]),_:1}))])]),e.openConfirmModal?(d(),U(v,{key:0,onClickConvert:e.clickModalConvert,onClose:t[17]||(t[17]=()=>e.openConfirmModal=!e.openConfirmModal)},null,8,["onClickConvert"])):F("",!0)])}const Za=q(na,[["render",Da],["__scopeId","data-v-72e2ec7f"]]);export{Za as default};
