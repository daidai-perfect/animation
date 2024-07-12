import{_ as ra,a as Ko,b as Qo,c as sa,d as ca}from"./new-liquidity-title.e28a8d14.js";import{i as Je}from"./import-icon.de3e6c66.js";import{a as Yo,m as I,r as L,K as Zo,l as va,D as ne,a5 as da,J as De,e as xo,T as ea,o as S,f as F,i as se,h as t,x as $,v as Ce,c as qe,w as zo,B as ma,j as be,p as oa,k as aa,b as pa,C as fa,q as ga,G as ka,z as ge,t as ba,u as Ca,P as wa}from"./entry.ceb807d2.js";/* empty css              */import{a as ha,b as ta,u as na,s as Ho,h as Xo,d as Go,o as je,c as la,p as Jo,e as ua,l as ya,j as Sa}from"./pool.8123a9d1.js";import{a as Na}from"./new-add-or-create.5db6ffeb.js";import{_ as Pa,a as Ta,s as _a}from"./poolFee.d6b3b1d6.js";import{D as u}from"./decimal.0bdeb344.js";import{amountLock as ke,fromCoinAmount as l,toCoinAmount as i,fromCoin as p,toCoin as m,showFromCoinLock as K,showToCoinLock as Q,fixedFromCoin as T,createPoolInfo as s,minPrice as g,maxPrice as d,currentPriceReverse as Ke,currentPrice as le,initPrice as pe,direction as k,createPoolFromCoin as ae,createPoolToCoin as te,isFullRange as oe,resetData as Aa,defaultMinPrice as Xe,defaultMaxPrice as Ge}from"./create-pool-data.57f7a47a.js";import{_ as qa,a as Ra}from"./icon-Add-Liquidity_2x.0acb06cb.js";import{_ as Ia}from"./icon-selected_3x.09e9a6f0.js";import"./img-lock_2x.a28135f4.js";import"./lock.f6725c72.js";import"./index.63a5acc4.js";import"./token-warning.ecf8eb6d.js";/* empty css              *//* empty css              */import"./swap-setting.8f5c266b.js";/* empty css              */import"./icon-warning_2x.1be9ce38.js";import"./icon-error_2x.a33223f7.js";import"./status-block.09182fae.js";import"./notifi.08e9e938.js";import"./useWhale.713b4be5.js";const $a=Yo({components:{NewLiquidityTile:ra,NewLiquidityDepositRatio:Ko},setup(e,n){const ye=ha(),we=ta(),j=I(()=>we),X=I(()=>j.value.chainName),V=I(()=>ye),b=L(!1);L(),L(),L(),L(!1);const C=Zo(),{t:z,locale:ve}=va(),N=I(()=>X.value?la(X.value):{}),H=na(),r=I(()=>H),Z=I(()=>j.value.theme),B=I(()=>V.value.assets&&p.value&&V.value.assets[p.value.address]?Jo(V.value.assets[p.value.address].balance,p.value.decimals):"0"),E=I(()=>V.value.assets&&m.value&&V.value.assets[m.value.address]?Jo(V.value.assets[m.value.address].balance,m.value.decimals):"0"),Ve=o=>{o==="fromCoin"?(T.value=!0,X.value==="Aptos"?l.value=Number(B.value)>0?p.value.symbol=="APT"?new u(Number(B.value)).sub(new u(.1)).lt(new u(0))?"0":new u(Number(B.value)).sub(new u(.1)).toString():String(B.value):"":l.value=Number(B.value)>0?p.value.symbol=="SUI"?new u(Number(B.value)).sub(new u(.05)).lt(new u(0))?"0":new u(Number(B.value)).sub(new u(.05)).toString():String(B.value):""):(T.value=!1,X.value==="Aptos"?i.value=Number(E.value)>0?m.value.symbol=="APT"?new u(Number(E.value)).sub(new u(.1)).lt(new u(0))?"0":new u(Number(E.value)).sub(new u(.1)).toString():String(E.value):"":i.value=Number(E.value)>0?m.value.symbol=="SUI"?new u(Number(E.value)).sub(new u(.05)).lt(new u(0))?"0":new u(Number(E.value)).sub(new u(.05)).toString():String(E.value):"")},Ee=o=>{o==="fromCoin"?(T.value=!0,l.value=Number(B.value)>0?Ho(new u(Number(B.value)).div(2).toString(),p.value.decimals).toString():""):(T.value=!1,i.value=Number(E.value)>0?Ho(new u(Number(E.value)).div(2).toString(),m.value.decimals).toString():"")};ne(()=>[r.value.tokensObj,C.query],async([o])=>{if(o){const v=o;if(C&&C.query&&C.query.fromCoin&&C.query.fromCoin){const c=v[C.query.fromCoin]||await N.value.getTokenBySymbol(v,C.query.fromCoin);p.value=c,ae.value=c}if(C&&C.query&&C.query.toCoin&&C.query.toCoin){const c=v[C.query.toCoin]||await N.value.getTokenBySymbol(v,C.query.toCoin);m.value=c,te.value=c}}},{immediate:!0,deep:!0});const G=L("--"),Se=I(()=>j.value.slippage),We=L(),de=async()=>{if(!g.value&&!d.value)return!1;if(!l.value&&!i.value&&!g.value&&!d.value)return;const o=s.value||{};if(Go(o))return;const{TickUtil:v,TickMath:c,getNearestTickByTick:f}=N.value,P=o==null?void 0:o.token_a.decimals,O=o==null?void 0:o.token_b.decimals;let h,q,_,y,R,U,D=o.current_tick_index,x;if(o.token_a.address.toLowerCase()===p.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===m.value.address.toLowerCase()?x=!0:x=!1,g.value==="0"&&d.value==="∞")_=v.getMinIndex(Number(o.tickSpacing)),y=v.getMaxIndex(Number(o.tickSpacing));else{x?(h=Number(g.value),q=Number(d.value)):(h=new u(1).div(d.value).toString(),q=new u(1).div(g.value).toString());try{R=h==0?-443636:c.priceToTickIndex(new u(h),P,O)}catch{R=-443636}try{U=c.priceToTickIndex(new u(q),P,O)}catch{U=443636}_=f(R,Number(o.tickSpacing)),y=f(U,Number(o.tickSpacing))}if(d.value!=="∞"&&_>=y){K.value=!0,l.value="",Q.value=!0,i.value="";return}if(D==y||D==_){K.value=!0,Q.value=!0;return}if(d.value==="∞"||D>=_&&D<=y){K.value=!1,Q.value=!1;let ee;if(l.value||i.value){if(T.value){const he=new u(l.value).mul(Math.pow(10,p.value.decimals)).toString();ee=new je(he)}else{const he=new u(i.value).mul(Math.pow(10,m.value.decimals)).toString();ee=new je(he)}const{liquidityAmount:J,tokenMaxA:Y,tokenMaxB:ie,tokenMaxAOrigin:Oe,tokenMaxBOrigin:Ue}=N.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:o.token_a,tokenB:o.token_b,lowerTick:_,upperTick:y,coinAmount:ee,iscoinA:x?T.value:!T.value,roundUp:!0,slippage:Number(Se.value)/100,curSqrtPrice:new je(o.current_sqrt_price)});We.value={liquidityAmount:J,tokenMaxA:Y,tokenMaxB:ie,tokenMaxAOrigin:Oe,tokenMaxBOrigin:Ue},x?T.value?i.value=Number(ie)>0?ie:"":l.value=Number(Y)>0?Y:"":T.value?i.value=Y:l.value=ie}}else D>y?(K.value=!0,Q.value=!0):D<_?(K.value=!0,Q.value=!0):(K.value=!0,l.value="",Q.value=!0,i.value="")};ne(()=>pe.value,o=>{o&&de()},{immediate:!0}),ne(l,(o,v)=>{o==""&&T.value&&(i.value=""),o&&T.value&&!b.value&&de()}),ne(i,(o,v)=>{o==""&&!T.value&&(l.value=""),o&&!T.value&&!b.value&&de()}),ne(()=>oe.value,o=>{de()},{immediate:!0});const ze=o=>{const v=o.replace(/[^\d.]/g,""),c="$"+Xo(v);b.value=!0,G.value=c,o>0?w():(l.value="",i.value="")};ne([g,d],([o,v])=>{Number(o)!==0&&Number(v)!==0&&!b.value?de():Number(o)!==0&&Number(v)!==0&&b.value?w():de()},{immediate:!0});const Qe=()=>{const o=a.value&&a.value[p.value.address]&&a.value[p.value.address].price,v=a.value&&a.value[m.value.address]&&a.value[m.value.address].price;if(o&&v){const c=new u(l.value>0?l.value:0).mul(o),f=new u(i.value>0?i.value:0).mul(v),P=c.add(f).toNumber();G.value=P>0&&P<.01?"$<0.01":"$"+Xo(P,2)}else G.value="--"};ne(()=>[l.value,i.value,b.value],([o,v,c])=>{(o||v)&&!c?Qe():(!o||!v)&&!c&&(G.value="--")},{immediate:!0});const a=I(()=>r.value.RATES),A=L(),w=async()=>{if(!g.value&&!d.value)return!1;if(!l.value&&!i.value&&!g.value&&!d.value)return;const o=s.value||{};if(Go(o))return;const{TickUtil:v,TickMath:c,getNearestTickByTick:f}=N.value,P=o==null?void 0:o.token_a.decimals,O=o==null?void 0:o.token_b.decimals;let h,q,_,y,R,U,D;if(o.token_a.address.toLowerCase()===p.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===m.value.address.toLowerCase()?D=!0:D=!1,g.value==="0"&&d.value==="∞")_=v.getMinIndex(Number(o.tickSpacing)),y=v.getMaxIndex(Number(o.tickSpacing));else{D?(h=Number(g.value),q=Number(d.value)):(h=new u(1).div(d.value).toString(),q=new u(1).div(g.value).toString());try{R=h==0?-443636:c.priceToTickIndex(new u(h),P,O)}catch{R=-443636}try{U=c.priceToTickIndex(new u(q),P,O)}catch{U=443636}_=f(R,Number(o.tickSpacing)),y=f(U,Number(o.tickSpacing))}const x=a.value[o==null?void 0:o.token_a.address].price,ee=a.value[o==null?void 0:o.token_b.address].price;try{const{amountA:J,amountB:Y,tokenAmountsInfo:ie}=await N.value.estCoinAmountsFromTotalAmount({lowerTick:_,upperTick:y,decimalsA:P,decimalsB:O,curSqrtPrice:new je(o.current_sqrt_price),totalAmount:G.value,tokenPriceA:x,tokenPriceB:ee});A.value=ie,o.needReverse?k.value?(l.value=J,i.value=Y):(l.value=Y,i.value=J):(l.value=J,i.value=Y)}catch(J){console.log(J,"e===>")}},ue=I(()=>{var c,f,P,O,h,q;const o=(P=a.value[(f=(c=p)==null?void 0:c.value)==null?void 0:f.address])==null?void 0:P.price,v=(q=a.value[(h=(O=m)==null?void 0:O.value)==null?void 0:h.address])==null?void 0:q.price;return!!(o&&v)}),M=()=>{n.emit("toggle")},W=L(!1),me=I(()=>{var o;return!p.value||!m.value?z("modal.selectTokenModalTitle"):!((o=C.query)!=null&&o.fee)&&ua[X.value].hasCreatePool?"Select fee tier":!Number(l.value)&&!Number(i.value)?z("button.enterAmount"):Number(l.value)>Number(B.value)?z("button.insufficientBalance",{name:p.value.symbol}):Number(i.value)>Number(E.value)?z("button.insufficientBalance",{name:m.value.symbol}):d.value!=="∞"&&Number(g.value)>=Number(d.value)?z("newAdd.invalidRange"):z("newAdd.preview")}),Re=o=>{const v=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,2})?).*$");o.target.value=o.target.value.replace(v,"$1")},Ie=I(()=>{var o;return!!(!l.value&&!i.value||Number(l.value)>Number(B.value)||Number(i.value)>Number(E.value)||me.value!==z("newAdd.preview")||!s.value&&!((o=s.value)!=null&&o.currentPrice)||Number(l.value)<=0&&Number(i.value)<=0||K.value||Q.value)}),{setTransactionTxid:Ne,setTransactionDesc:$e,setIsShowWaiting:fe,setIsShowSuccess:Pe,setIsShowRejected:Te,setPositiomNum:Le}=we,Be=()=>{X.value=="Sui"&&Fe()},{$notify:Me}=da(),_e=L(!1),Fe=async()=>{var x,ee,J,Y,ie,Oe,Ue,he,Ye,Ze,xe,eo,oo,ao,to,no,lo,uo,io,ro,so,co,vo,mo,po,fo,go,ko,bo,Co,wo,ho,yo,So,No,Po,To,_o,Ao,qo,Ro,Io,$o,Lo,Bo,Mo,Fo,Oo,Uo,Do,jo,Vo,Eo,Wo;W.value=!1;let o=!1;N.value.getIsSortedSymbols(ae.value.address,te.value.address)&&(o=!0),Ne("");const v=K.value?"":`${l.value} ${(x=p.value)==null?void 0:x.symbol}`,c=Q.value?"":`${i.value} ${(ee=m.value)==null?void 0:ee.symbol}`;$e(z("tips.increaseLiquiditySuccess",{from:!o&&!((Y=(J=s)==null?void 0:J.value)!=null&&Y.needReverse)||o&&((Oe=(ie=s)==null?void 0:ie.value)!=null&&Oe.needReverse)?v:c,and:!K.value&&!Q.value?"and":"",to:!o&&!((he=(Ue=s)==null?void 0:Ue.value)!=null&&he.needReverse)||o&&((Ze=(Ye=s)==null?void 0:Ye.value)!=null&&Ze.needReverse)?c:v})),fe(!0);let f="",P="",O="",h="",q="",_="",y=0,R=0,U=!1,D;if(o||(eo=(xe=s)==null?void 0:xe.value)!=null&&eo.needReverse){const re=o&&!((ao=(oo=s)==null?void 0:oo.value)!=null&&ao.needReverse);f=re?(ro=(io=(uo=s)==null?void 0:uo.value)==null?void 0:io.token_b)==null?void 0:ro.address:(lo=(no=(to=s)==null?void 0:to.value)==null?void 0:no.token_a)==null?void 0:lo.address,P=re?(fo=(po=(mo=s)==null?void 0:mo.value)==null?void 0:po.token_a)==null?void 0:fo.address:(vo=(co=(so=s)==null?void 0:so.value)==null?void 0:co.token_b)==null?void 0:vo.address,O=re?(ho=(wo=(Co=s)==null?void 0:Co.value)==null?void 0:wo.token_b)==null?void 0:ho.decimals:(bo=(ko=(go=s)==null?void 0:go.value)==null?void 0:ko.token_a)==null?void 0:bo.decimals,h=re?(_o=(To=(Po=s)==null?void 0:Po.value)==null?void 0:To.token_a)==null?void 0:_o.decimals:(No=(So=(yo=s)==null?void 0:yo.value)==null?void 0:So.token_b)==null?void 0:No.decimals,(qo=(Ao=s)==null?void 0:Ao.value)!=null&&qo.needReverse?(q=k.value?l.value:i.value,_=k.value?i.value:l.value,y=k.value?Number(g.value):1/Number(d.value),R=k.value?Number(d.value):1/Number(g.value),U=k.value?T.value:!T.value,D=k.value?le.value:1/Number(le.value)):(q=k.value?i.value:l.value,_=k.value?l.value:i.value,y=k.value?1/Number(d.value):Number(g.value),R=k.value?1/Number(g.value):Number(d.value),U=k.value?!T.value:T.value,D=k.value?1/Number(le.value):le.value)}else f=($o=(Io=(Ro=s)==null?void 0:Ro.value)==null?void 0:Io.token_a)==null?void 0:$o.address,P=(Mo=(Bo=(Lo=s)==null?void 0:Lo.value)==null?void 0:Bo.token_b)==null?void 0:Mo.address,O=(Uo=(Oo=(Fo=s)==null?void 0:Fo.value)==null?void 0:Oo.token_a)==null?void 0:Uo.decimals,h=(Vo=(jo=(Do=s)==null?void 0:Do.value)==null?void 0:jo.token_b)==null?void 0:Vo.decimals,q=k.value?l.value:i.value,_=k.value?i.value:l.value,y=k.value?Number(g.value):1/Number(d.value),R=k.value?Number(d.value):1/Number(g.value),U=k.value?T.value:!T.value,D=k.value?le.value:1/Number(le.value);try{console.log("0501###toCreatePool###params###",{coinTypeA:f,coinTypeB:P,decimalsA:O,decimalsB:h,amountA:q,amountB:_,minPrice:y,maxPrice:R,fix_amount_a:U,tick_spacing:Number(s.value.tickSpacing),slippage:Number(Se.value)/100,price:D});const re=await N.value.getCreatPoolTransactionPayload({coinTypeA:f,coinTypeB:P,decimalsA:O,decimalsB:h,amountA:q,amountB:_,minPrice:g.value=="0"&&d.value=="∞"?"0":y,maxPrice:g.value=="0"&&d.value=="∞"?"∞":R,fix_amount_a:U,tick_spacing:Number(s.value.tickSpacing),slippage:Number(Se.value)/100,price:D}),ia=await N.value.signAndExecuteTransactionBlock(V.value.currentWallet,re),Ae=N.value.handleTx(ia);if(Ae&&Ae.hash){Ne(Ae.hash),fe(!1),Pe(!0);const He={title:"Created pool",desc:"Pool created successfully ",hash:Ae.hash,tit:"Pool Created",icon:"icon-icon-Position-Created",tokenInfo:{tokena:`${(Eo=p.value)==null?void 0:Eo.address}`,numa:K.value?"":`- ${l.value}`,logoa:r.value.tokensObj&&p.value&&p.value.address&&r.value.tokensObj[p.value.address]&&r.value.tokensObj[p.value.address].logoURI,tokenb:`${(Wo=m.value)==null?void 0:Wo.address}`,numb:Q.value?"":`- ${i.value}`,logob:r.value.tokensObj&&m.value&&m.value.address&&r.value.tokensObj[m.value.address]&&r.value.tokensObj[m.value.address].logoURI},text:"Pool created successfully"};X.value!=="Aptos"&&(He.res=Ae.res),N.value.showTransitionPending(He),(await N.value.watchTransaction(He,!0)).status&&(Pe(!1),_e.value=!0,setTimeout(()=>{H.setPoolConfigList(X.value,j.value.filterCoinsObj),N.value.getAccount(V.value.address)},1e3)),Le()}else fe(!1),Te(!0);l.value="",i.value=""}catch(re){console.log("0407###createPool###error##",String(re)),String(re).indexOf('Some("create_pool_internal") }, 1')>-1&&Me.error({icon:De("svg",{class:{icon:!0},"aria-hidden":!0},[De("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:De("div",{class:"notification-title"},[De("span",{innerHTML:"Pool already exists"},null)]),duration:4.5,description:"Something went wrong",class:"ant-notification-copy ant-notification-error"}),W.value=!1,H.setPoolConfigList(X.value,j.value.filterCoinsObj),l.value="",i.value="",fe(!1),Te(!0)}};return{amountLock:ke,wallet:V,inputChange:Re,fromCoinAmount:l,toCoinAmount:i,fromCoin:p,toCoin:m,maxBtnSelect:Ve,halfBtnSelect:Ee,showFromCoinLock:K,showToCoinLock:Q,fromCoinBlance:B,toCoinBlance:E,fixedFromCoin:T,isInputTotalAmount:b,toggle:M,theme:Z,liquidityTotalAmount:G,createPoolInfo:s,minPrice:g,maxPrice:d,currentPriceReverse:Ke,currentPrice:le,onInput:ze,initPrice:pe,isShowtotalAmount:ue,direction:k,isShowLiquidityModal:W,createPoolBtnText:me,createPoolBtnDisabled:Ie,toCreatePool:Be,isCreateSuccess:_e}}});const La=e=>(oa("data-v-e6292c1d"),e=e(),aa(),e),Ba={class:"create-pool-right"},Ma={class:"card-container"},Fa={key:0,class:"lock"},Oa={class:"card-item"},Ua={class:"card-item"},Da={key:0,class:"total-amount"},ja=La(()=>t("span",null,"Total Amount",-1));function Va(e,n,ye,we,j,X){const V=ea("NewLiquidityTile"),b=Qo,C=sa,z=Ko,ve=Na,N=ma,H=Pa;return S(),F("div",Ba,[se(V),t("div",Ma,[e.amountLock||e.showFromCoinLock||e.showToCoinLock?(S(),F("div",Fa,[se(b)])):$("",!0),t("div",Oa,[se(C,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":n[0]||(n[0]=r=>e.fromCoinAmount=r),"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direct":"From","import-page":"deposit","has-arrow":!1,onOnMax:n[1]||(n[1]=r=>e.maxBtnSelect("fromCoin")),onOnHalf:n[2]||(n[2]=r=>e.halfBtnSelect("fromCoin")),onOnInput:n[3]||(n[3]=r=>{e.fromCoinAmount=r,e.fixedFromCoin=!0,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),t("div",Ua,[se(C,{modelValue:e.toCoinAmount,"onUpdate:modelValue":n[4]||(n[4]=r=>e.toCoinAmount=r),"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direct":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"","import-page":"deposit","has-arrow":!1,onOnMax:n[5]||(n[5]=r=>e.maxBtnSelect("toCoin")),onOnHalf:n[6]||(n[6]=r=>e.halfBtnSelect("toCoin")),onOnInput:n[7]||(n[7]=r=>{e.toCoinAmount=r,e.fixedFromCoin=!1,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme=="default"?(S(),F("img",{key:1,class:"add",src:qa,alt:"",onClick:n[8]||(n[8]=(...r)=>e.toggle&&e.toggle(...r))})):$("",!0),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme!=="default"?(S(),F("img",{key:2,class:"add",src:Ra,alt:"",onClick:n[9]||(n[9]=(...r)=>e.toggle&&e.toggle(...r))})):$("",!0)]),e.isShowtotalAmount?(S(),F("div",Da,[ja,t("span",null,Ce(e.liquidityTotalAmount)+" ",1)])):$("",!0),e.initPrice?(S(),qe(z,{key:1,"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"fixed-from-coin":e.fixedFromCoin,"is-input-total-amount":e.isInputTotalAmount,"create-pool-info":e.createPoolInfo,"min-price":e.minPrice,"max-price":e.maxPrice,"current-price-tab":"custom","current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse},null,8,["from-coin","to-coin","from-coin-amount","to-coin-amount","fixed-from-coin","is-input-total-amount","create-pool-info","min-price","max-price","current-price","current-price-reverse"])):$("",!0),e.isShowLiquidityModal?(S(),qe(ve,{key:2,"pool-info":e.createPoolInfo,title:e.$t("newAdd.preview"),"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"from-coin":e.fromCoin,"to-coin":e.toCoin,"fixed-from-coin":e.fixedFromCoin,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"current-price-tab":"custom","min-price":e.minPrice,"max-price":e.maxPrice,"show-from-coin-lock":e.showFromCoinLock,"show-to-coin-lock":e.showToCoinLock,"current-direct":e.direction,"is-increase":!1,"is-create":!0,onCreatePool:e.toCreatePool,onOnClose:n[10]||(n[10]=r=>e.isShowLiquidityModal=!1)},null,8,["pool-info","title","from-coin-amount","to-coin-amount","from-coin","to-coin","fixed-from-coin","current-price","current-price-reverse","min-price","max-price","show-from-coin-lock","show-to-coin-lock","current-direct","onCreatePool"])):$("",!0),e.wallet.connected?(S(),qe(N,{key:4,class:"add-liquidity-btn",disabled:e.wallet.connected?e.createPoolBtnDisabled:!1,onClick:n[12]||(n[12]=r=>e.isShowLiquidityModal=!0)},{default:zo(()=>[be(Ce(e.createPoolBtnText),1)]),_:1},8,["disabled"])):(S(),qe(N,{key:3,class:"add-liquidity-btn",onClick:n[11]||(n[11]=r=>e.wallet.setIsShowWalletModal(!0))},{default:zo(()=>[be(Ce(e.$t("button.connectWallet")),1)]),_:1})),e.isCreateSuccess?(S(),qe(H,{key:5,onOnClose:n[13]||(n[13]=r=>e.isCreateSuccess=!1)})):$("",!0)])}const Ea=xo($a,[["render",Va],["__scopeId","data-v-e6292c1d"]]),Wa=Yo({components:{CreatePoolRight:Ea},setup(){const e=L(!0),n=L(!0),ye=L(!0),we=L(!1),j=L("1"),X=L(!0),V=L(""),b=Zo(),C=pa(),z=ta(),ve=I(()=>z),N=na(),H=I(()=>N),r=I(()=>ve.value.chainName),Z=I(()=>r.value?la(r.value):{}),B=L("");ne(()=>[C,H.value.tokensObj],async([a,A])=>{var w,ue,M;((w=C==null?void 0:C.currentRoute)==null?void 0:w.value.name)=="liquidity-create"&&A&&(p.value=H.value.tokensObj[b.query.fromCoin]||await Z.value.getTokenBySymbol(A,b.query.fromCoin),m.value=H.value.tokensObj[b.query.toCoin]||await Z.value.getTokenBySymbol(A,b.query.toCoin),B.value=b.query.fee!=="null"&&b.query.fee?b.query.fee:""),((ue=C==null?void 0:C.currentRoute)==null?void 0:ue.value.name)=="liquidity-create"&&((M=b==null?void 0:b.query)!=null&&M.fee)&&(pe.value="",l.value="",i.value="",oe.value=!0)},{immediate:!0,deep:!0}),ne(()=>[p.value,m.value,pe.value,B.value,g.value,d.value,l.value,i.value],([a,A,w,ue,M,W,me])=>{!a||!A?(j.value="1",e.value=!0,n.value=!0,ke.value=!0):ue?w?!M||!W?(j.value="4",e.value=!1,n.value=!1,ke.value=!0):me||(j.value="5",e.value=!1,n.value=!1,ke.value=!1):(j.value="3",e.value=!1,n.value=!0,ke.value=!0):(j.value="2",e.value=!0,n.value=!0,ke.value=!0)},{immediate:!0}),ne(()=>j.value,a=>{Number(a)<5&&(l.value="",i.value="")});const E=a=>{pe.value=a},Ve=a=>{var A;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((A=H.value.tokensObj[a==null?void 0:a.address])==null?void 0:A.logo_url)||(ve.value.theme==="default"?Je("/image/coins/unknown.png"):Je("/image/coins/sui-unknown.png"))},Ee=a=>{switch(a){case"1":return{top:"10%"};case"2":return{top:"29%"};case"3":return{top:"48%"};case"4":return{top:"67%"};case"5":return{top:"87%"}}};I(()=>ua[r.value].hasCreatePool);const G=async a=>{var Re,Ie,Ne,$e,fe,Pe,Te,Le,Be,Me,_e,Fe,o,v;console.log("#####emitCurrentPrice",a),a?(pe.value=a,le.value=a,Ke.value=new u(1).div(new u(a)).toString()):(pe.value="",le.value="",Ke.value="");let A,w;const ue=H.value.poolConfigList;for(let c=0;c<ue.length;c++){const f=ue[c];if(f.token_a.address.toUpperCase()===((Ne=(Ie=(Re=ae)==null?void 0:Re.value)==null?void 0:Ie.address)==null?void 0:Ne.toUpperCase())&&f.token_b.address.toUpperCase()===((Pe=(fe=($e=te)==null?void 0:$e.value)==null?void 0:fe.address)==null?void 0:Pe.toUpperCase())){A=f.needReverse,w=f;break}else if(f.token_b.address.toUpperCase()===((Be=(Le=(Te=ae)==null?void 0:Te.value)==null?void 0:Le.address)==null?void 0:Be.toUpperCase())&&f.token_a.address.toUpperCase()===((Fe=(_e=(Me=te)==null?void 0:Me.value)==null?void 0:_e.address)==null?void 0:Fe.toUpperCase())){A=f.needReverse,w=f;break}}let M=!1;await Z.value.getIsSortedSymbols((o=ae.value)==null?void 0:o.address,(v=te.value)==null?void 0:v.address)&&(M=!0);let W;console.log(M,"###changeCurrentPrice createPoolNeedReverse 289"),console.log(k.value,"####changeCurrentPrice direction.value 290"),M&&!k.value?W=!0:M&&k.value||!M&&k.value?W=!1:W=!0,console.log(W,"###changeCurrentPrice newDirect 298");const me=r.value=="Aptos"?Ta:_a;if(p.value&&m.value&&a){const c=w?w==null?void 0:w.token_a.decimals:M?te.value.decimals:ae.value.decimals,f=w?w==null?void 0:w.token_b.decimals:M?ae.value.decimals:te.value.decimals,P=a&&Z.value.TickMath.priceToSqrtPriceX64(W?new u(1/a):new u(a),c,f);console.log(P.toString(),"===>current_sqrt_price"),console.log(a&&a>0,"## emitCurrentPrice &&emitCurrentPrice>0");const O=a&&a>0&&Z.value.TickMath.priceToSqrtPriceX64(new u(1).div(a),p.value.decimals,m.value.decimals);console.log(!W,a,"===>!newDirect"),console.log(c,f,"decimalsA,decimalsB===>");const h=a&&a>0&&Z.value.TickMath.priceToTickIndex(W?new u(1).div(a):new u(a),c,f);console.log(h,"==>currentTickIndex");const q=h-me[b.query.fee]*5,_=h+me[b.query.fee]*5,y=Z.value.TickMath.tickIndexToPrice(q,c,f).toString(),R=Z.value.TickMath.tickIndexToPrice(_,c,f).toString();oe.value?(g.value="0",d.value="∞"):W?(g.value=String(1/R),d.value=String(1/y),Xe.value=String(1/R),Ge.value=String(1/y)):(g.value=y,d.value=R,Xe.value=y,Ge.value=R),console.log("0518###c####createPoolFromCoin.value####",ae.value),console.log("0518###c####createPoolToCoin.value####",te.value),console.log("0518###c####createPoolNeedReverse####",M);const U={token_a:w?w.token_a:M?te.value:ae.value,token_b:w?w.token_b:M?ae.value:te.value,isCreate:!0,tickSpacing:me[b.query.fee],currentPrice:a,current_sqrt_price:P,tick_lower:q,tick_upper:_,current_tick_index:h,currentPriceReverse:ya(String(1/a),6),reverse_current_sqrt_price:O,needReverse:A,fee:b.query.fee};s.value=U,console.log("0518###c####poolInfos####",U)}else s.value=null,g.value="",d.value=""},Se=()=>{oe.value=!oe.value,G(s.value.currentPrice)},We=a=>{console.log(a,"####0731 priceRangeChangeMin"),oe.value?(oe.value=!1,G(s.value.currentPrice)):g.value=a},de=a=>{oe.value?(oe.value=!1,G(s.value.currentPrice)):a=="0"?d.value="∞":d.value=a},ze=()=>{var A,w;console.log(s.value,"==>createPoolInfo.value"),k.value=!k.value;const a=p.value;p.value=m.value,m.value=a,s.value&&(G(Sa(new u(1).div(s.value.currentPrice).toString(),(w=(A=m)==null?void 0:A.value)==null?void 0:w.decimals)),T.value?l.value=i.value:i.value=l.value),console.log(k.value,"####toggle direction.value")};return fa(()=>{Aa()}),{amountLock:ke,currentStep:j,sliderStyle:Ee,coinAmount:we,pricerange:V,fromCoin:p,toCoin:m,fee:B,direct:X,getCoinIcon:Ve,isSelectFullRange:ye,onInput:E,store:ve,initPrice:pe,inputPriceLock:e,specifyPriceLock:n,changeCurrentPrice:G,minPrice:g,maxPrice:d,defaultMinPrice:Xe,defaultMaxPrice:Ge,clickFullRange:Se,createPoolInfo:s,isFullRange:oe,priceRangeChangeMin:We,priceRangeChangeMax:de,fromCoinAmount:l,toggle:ze,showFromCoinLock:K,showToCoinLock:Q,inputChange:a=>{const A=k.value?m.value.decimals:p.value.decimals,w=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${A}})?).*$`);a.target.value=a.target.value.replace(w,"$1")},currentPrice:le}}});const ce=e=>(oa("data-v-22d1195c"),e=e(),aa(),e),za={class:"creat-pool-container"},Ha={class:"creat-pool-left"},Xa={class:"progress"},Ga=ce(()=>t("div",{class:"slider-ratio-content"},null,-1)),Ja=[Ga],Ka={class:"progress-text"},Qa={key:0},Ya={key:0},Za={key:0},xa={key:0},et={key:0},ot={class:"creat-pool-center"},at={class:"title"},tt=ce(()=>t("div",{class:"left"},"Set Initial Price",-1)),nt={class:"right"},lt={key:0,class:"token-box"},ut=ce(()=>t("div",null,[t("svg",{class:"icon icon-up","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),it=ce(()=>t("div",null,[t("svg",{class:"icon icon-down","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),rt=[ut,it],st={class:"content top-content"},ct=ce(()=>t("div",{class:"top"},[t("span",null,"💡"),t("span",null,"Please set an initial price for this new pool to start.")],-1)),vt={class:"bottom"},dt={class:"input-div"},mt={key:0,class:"lock"},pt={class:"title"},ft=ce(()=>t("div",{class:"left"},"Set Price Range",-1)),gt={class:"right"},kt={key:0,src:Ia},bt=ce(()=>t("span",null,"Full Range",-1)),Ct={class:"content bottom-content"},wt=ce(()=>t("span",null,"💡",-1)),ht=ce(()=>t("span",null,"Please specify a price range that you want to provide your liquidity within.",-1)),yt=[wt,ht],St={class:"bottom"},Nt={class:"set-price-box"},Pt={key:0,class:"lock"},Tt={key:1,class:"create-pool-warning"},_t={key:2,class:"position-tips"},At=["src"],qt={class:"error"},Rt={class:"creat-pool-right-container"};function It(e,n,ye,we,j,X){var N,H;const V=wa,b=Qo,C=ca,z=ea("CreatePoolRight"),ve=ga("image");return S(),F("div",za,[t("div",Ha,[t("div",Xa,[t("div",{class:"slider-ratio",style:ka(e.sliderStyle(e.currentStep))},Ja,4)]),t("div",Ka,[t("div",{class:ge(["row",Number(e.currentStep)>=1?"":"color-text"])},[e.currentStep>=1&&e.fromCoin&&e.toCoin?(S(),F("span",Qa,"✓")):$("",!0),be(" Select Tokens ")],2),t("div",{class:ge(["row",Number(e.currentStep)>=2?"":"color-text"])},[e.currentStep>=2&&e.fee?(S(),F("span",Ya,"✓")):$("",!0),be(" Select Fee Tier ")],2),t("div",{class:ge(["row",Number(e.currentStep)>=3?"":"color-text"])},[e.currentStep>=3&&e.initPrice?(S(),F("span",Za,"✓")):$("",!0),be(" Set Initial Price ")],2),t("div",{class:ge(["row",Number(e.currentStep)>=4?"":"color-text"])},[e.currentStep>=4&&e.minPrice&&e.maxPrice?(S(),F("span",xa,"✓")):$("",!0),be(" Select Price Range ")],2),t("div",{class:ge(["row",Number(e.currentStep)>=5?"":"color-text"])},[e.currentStep>=5&&e.fromCoinAmount?(S(),F("span",et,"✓")):$("",!0),be(" Confirm Liquidity ")],2)])]),t("div",ot,[t("div",at,[tt,t("div",nt,[e.fromCoin&&e.toCoin?(S(),F("div",lt,[ba(t("img",null,null,512),[[ve,(N=e.fromCoin)==null?void 0:N.logo_url]]),t("span",null,Ce((H=e.fromCoin)==null?void 0:H.symbol),1),t("div",{class:"icon-change",onClick:n[0]||(n[0]=(...r)=>e.toggle&&e.toggle(...r))},rt)])):$("",!0)])]),t("div",st,[ct,t("div",vt,[t("div",dt,[se(V,{value:e.initPrice,type:"text",placeholder:"0.0",onChange:e.inputChange,onInput:n[1]||(n[1]=r=>e.changeCurrentPrice(r.target.value))},null,8,["value","onChange"]),t("span",null,Ce(e.toCoin&&e.toCoin.symbol)+" per "+Ce(e.fromCoin&&e.fromCoin.symbol),1)]),e.inputPriceLock?(S(),F("div",mt,[se(b)])):$("",!0)])]),t("div",pt,[ft,t("div",gt,[t("div",{class:ge(["radio",e.isFullRange?"active-radio":""]),onClick:n[2]||(n[2]=(...r)=>e.clickFullRange&&e.clickFullRange(...r))},[e.isFullRange?(S(),F("img",kt)):$("",!0)],2),bt])]),t("div",Ct,[t("div",{class:ge(["top",e.specifyPriceLock?"":"no-border"])},yt,2),t("div",St,[t("div",Nt,[se(C,{min:e.minPrice,max:e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,direct:e.direct,"default-min-price":e.defaultMinPrice,"default-max-price":e.defaultMaxPrice,"pool-info":e.createPoolInfo,loading:!1,"current-price-tab":"custom",onOnChangeMinPrice:e.priceRangeChangeMin,onOnChangeMaxPrice:e.priceRangeChangeMax},null,8,["min","max","from-coin","to-coin","direct","default-min-price","default-max-price","pool-info","onOnChangeMinPrice","onOnChangeMaxPrice"])]),e.specifyPriceLock?(S(),F("div",Pt,[se(b)])):$("",!0),e.currentStep>=4&&(e.showFromCoinLock||e.showToCoinLock)&&Number(e.maxPrice)>Number(e.minPrice)?(S(),F("div",Tt," To create a new pool, the initial price you set must be within your price range. ")):$("",!0),e.currentStep>=4&&Number(e.minPrice)>Number(e.maxPrice)?(S(),F("div",_t,[t("img",{src:("importIcon"in e?e.importIcon:Ca(Je))("/image/icon-tips-error@2x.png"),alt:""},null,8,At),t("p",qt,Ce(e.$t("tips.positionError")),1)])):$("",!0)])])]),t("div",Rt,[se(z,{"create-pool-info":e.createPoolInfo,onToggle:e.toggle},null,8,["create-pool-info","onToggle"])])])}const tn=xo(Wa,[["render",It],["__scopeId","data-v-22d1195c"]]);export{tn as default};
