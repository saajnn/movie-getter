import{S as m}from"./public.613a64e4.js";import{p as D}from"./path.24f64c8f.js";import{s as r}from"./data.cf237ba2.js";import{G as s,H as x,C as v,D as F}from"./api.f438cff9.js";import{F as k,A as B,R as S}from"./RefreshCircleOutline.81936af7.js";import{d as E,r as N,Q as z,Z as A,T as a,b7 as b,S as n,X as i,U as d,bm as o,h as l}from"./index.7431aa93.js";import{N as V}from"./Switch.2e2b731f.js";import{u as O}from"./use-notification.26939fce.js";import{N as U,_ as p}from"./Space.7751e613.js";import{_ as G}from"./Input.5baf0b28.js";import{_ as $}from"./DataTable.10dc5da0.js";import"./Checkbox.38ad5681.js";import"./Dropdown.6a65d68c.js";import"./next-frame-once.da993024.js";const H={style:{display:"flex","align-items":"center",height:"100%"}},I={style:{display:"flex","align-items":"center",height:"100%"}},ee=E({__name:"PanelSource",setup(R){D.value=[{name:"\u91C7\u96C6\u6E90",params:null,to:""}];const _=N([{title:"ID",key:"id",width:100,align:"center"},{title:"\u8D44\u6E90\u5E93\u540D",key:"name",width:150,align:"center",render(e,t){return l(m,{value:e.name,onUpdateValue(u){r.value[t].name=u}})}},{title:"\u5730\u5740",key:"url",align:"center",render(e,t){return l(m,{value:e.url,onUpdateValue(u){r.value[t].url=u}})}},{title:"\u91C7\u96C6\u8FDB\u5EA6",key:"complete",align:"center",width:100,render(e,t){return l("div",e.complete?"\u5DF2\u5B8C\u6210":"\u672A\u5B8C\u6210")}},{title:"\u91C7\u96C6\u60C5\u51B5",key:"getting",align:"center",width:100,render(e,t){return l(V,{value:e.getting,onUpdateValue:u=>{x(e.id,e.getting).then(()=>{e.getting=!e.getting})}})}},{title:"\u64CD\u4F5C",key:"action",width:"300px",align:"center",render(e,t){return l(p,{justify:"center"},()=>[l(o,{secondary:!0,type:"info",size:"small"},()=>"\u91CD\u65B0\u91C7\u96C6"),[e.create?l(o,{secondary:!0,type:"info",size:"small",onClick:()=>{v(e.name,e.url).then(()=>{s(),c.success({duration:2e3,content:"\u4FDD\u5B58",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u4FDD\u5B58"):null,,l(o,{secondary:!0,type:"error",size:"small",onClick:()=>{F(e.id).then(()=>{s(),c.success({duration:2e3,content:"\u5220\u9664",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u5220\u9664")]])}}]),c=O();function f(){r.value.push({id:0,name:"\u65B0\u5EFA\u91C7\u96C6\u6E90",url:"\u5F85\u6DFB\u52A0",getting:!1,complete:!1,create:!0})}return(e,t)=>{const u=U,C=G,g=$,y=b;return z(),A(y,{title:"\u91C7\u96C6\u6E90",size:"small"},{"header-extra":a(()=>[n(i(p),null,{default:a(()=>[n(C,{placeholder:"\u641C\u7D22",disabled:!0,round:""},{prefix:a(()=>[n(u,{component:i(k)},null,8,["component"])]),_:1}),d("div",H,[n(i(o),{text:"",type:"primary",style:{"font-size":"24px"},onClick:t[0]||(t[0]=h=>f())},{default:a(()=>[n(u,null,{default:a(()=>[n(i(B))]),_:1})]),_:1})]),d("div",I,[n(i(o),{text:"",type:"info",style:{"font-size":"24px"},onClick:t[1]||(t[1]=h=>i(s)())},{default:a(()=>[n(u,null,{default:a(()=>[n(i(S))]),_:1})]),_:1})])]),_:1})]),default:a(()=>[n(g,{columns:_.value,data:i(r),bordered:!1,"single-line":!1},null,8,["columns","data"])]),_:1})}}});export{ee as default};
