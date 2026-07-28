import{g as e,h as t}from"./src-LNG7c90j.js";import{H as n,K as r,U as i,a,c as o,f as s,v as c,w as l,x as u,y as d}from"./chunk-CSCIHK7Q-CCDYj_Yj.js";import{t as f}from"./ordinal-C1FS1Sfe.js";import{n as p}from"./path-DL_QDy2X.js";import{m}from"./dist-BpG8etSj.js";import{t as h}from"./arc-BnUDI-Fg.js";import{t as g}from"./array-B57E4cSs.js";import{i as _,p as v}from"./chunk-5ZQYHXKU-B8dUewbt.js";import{t as y}from"./chunk-WU5MYG2G-9aqEosNQ.js";import{t as b}from"./chunk-4BX2VUAB-C0cAwlpm.js";import{t as x}from"./mermaid-parser.core-9CWiVzjW.js";function S(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function C(e){return e}function w(){var e=C,t=S,n=null,r=p(0),i=p(m),a=p(0);function o(o){var s,c=(o=g(o)).length,l,u,d=0,f=Array(c),p=Array(c),h=+r.apply(this,arguments),_=Math.min(m,Math.max(-m,i.apply(this,arguments)-h)),v,y=Math.min(Math.abs(_)/c,a.apply(this,arguments)),b=y*(_<0?-1:1),x;for(s=0;s<c;++s)(x=p[f[s]=s]=+e(o[s],s,o))>0&&(d+=x);for(t==null?n!=null&&f.sort(function(e,t){return n(o[e],o[t])}):f.sort(function(e,n){return t(p[e],p[n])}),s=0,u=d?(_-c*b)/d:0;s<c;++s,h=v)l=f[s],x=p[l],v=h+(x>0?x*u:0)+b,p[l]={data:o[l],index:s,value:x,startAngle:h,endAngle:v,padAngle:y};return p}return o.value=function(t){return arguments.length?(e=typeof t==`function`?t:p(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:p(+e),o):r},o.endAngle=function(e){return arguments.length?(i=typeof e==`function`?e:p(+e),o):i},o.padAngle=function(e){return arguments.length?(a=typeof e==`function`?e:p(+e),o):a},o}var T=s.pie,E={sections:new Map,showData:!1,config:T},D=E.sections,O=E.showData,k=structuredClone(T),A={getConfig:t(()=>structuredClone(k),`getConfig`),clear:t(()=>{D=new Map,O=E.showData,a()},`clear`),setDiagramTitle:r,getDiagramTitle:l,setAccTitle:i,getAccTitle:d,setAccDescription:n,getAccDescription:c,addSection:t(({label:t,value:n})=>{if(n<0)throw Error(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);D.has(t)||(D.set(t,n),e.debug(`added new section: ${t}, with value: ${n}`))},`addSection`),getSections:t(()=>D,`getSections`),setShowData:t(e=>{O=e},`setShowData`),getShowData:t(()=>O,`getShowData`)},j=t((e,t)=>{b(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),M={parse:t(async t=>{let n=await x(`pie`,t);e.debug(n),j(n,A)},`parse`)},N=t(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),P=t(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return w().value(e=>e.value).sort(null)(n)},`createPieArcs`),F={parser:M,db:A,renderer:{draw:t((t,n,r,i)=>{var a;e.debug(`rendering pie chart
`+t);let s=i.db,c=u(),l=_(s.getConfig(),c.pie),d=y(n),p=d.append(`g`);p.attr(`transform`,`translate(225,225)`);let{themeVariables:m}=c,[g]=v(m.pieOuterStrokeWidth);g??=2;let b=l.textPosition,x=h().innerRadius(0).outerRadius(185),S=h().innerRadius(185*b).outerRadius(185*b);p.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+g/2).attr(`class`,`pieOuterCircle`);let C=s.getSections(),w=P(C),T=[m.pie1,m.pie2,m.pie3,m.pie4,m.pie5,m.pie6,m.pie7,m.pie8,m.pie9,m.pie10,m.pie11,m.pie12],E=0;C.forEach(e=>{E+=e});let D=w.filter(e=>(e.data.value/E*100).toFixed(0)!==`0`),O=f(T).domain([...C.keys()]);p.selectAll(`mySlices`).data(D).enter().append(`path`).attr(`d`,x).attr(`fill`,e=>O(e.data.label)).attr(`class`,`pieCircle`),p.selectAll(`mySlices`).data(D).enter().append(`text`).text(e=>(e.data.value/E*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+S.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`);let k=p.append(`text`).text(s.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`),A=[...C.entries()].map(([e,t])=>({label:e,value:t})),j=p.selectAll(`.legend`).data(A).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*A.length/2;return`translate(216,`+(t*22-n)+`)`});j.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>O(e.label)).style(`stroke`,e=>O(e.label)),j.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>s.getShowData()?`${e.label} [${e.value}]`:e.label);let M=512+Math.max(...j.selectAll(`text`).nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),N=((a=k.node())==null?void 0:a.getBoundingClientRect().width)??0,F=450/2-N/2,I=450/2+N/2,L=Math.min(0,F),R=Math.max(M,I)-L;d.attr(`viewBox`,`${L} 0 ${R} 450`),o(d,450,R,l.useMaxWidth)},`draw`)},styles:N};export{F as diagram};