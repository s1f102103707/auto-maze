(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(85)}])},85:function(e,n,a){"use strict";a.r(n);var t=a(5893),r=a(7294),o=a(2729),l=a.n(o);let s=()=>{let e=[[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,0]],[n,a]=(0,r.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),o=[[-1,0],[0,1],[1,0],[0,-1]],[s,c]=(0,r.useState)({x:0,y:0,forward:[1,0]}),i=()=>{let t=JSON.parse(JSON.stringify(e));for(let e=0;e<n.length;e++)for(let a=0;a<n[e].length;a++)if(1===t[a][e]){let n=Math.floor(Math.random()*o.length),[r,l]=o[n],s=e+r,c=a+l;t[c][s]=2}a(t);let r=JSON.parse(JSON.stringify(t));r.map((e,n)=>{e.map((e,a)=>{2===e&&(r[n][a]=1)})}),a(r),console.log("map"),console.table(r)},_=()=>{let{x:e,y:n,forward:a}=s,[t,r]=a,o=[0,0];o=1===t?[r,t]:-1===r?[-r,t]:-1===t?[r,t]:[-r,t],c({x:e+t,y:n+r,forward:o}),console.log(s)};return(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)("button",{className:l().generate,onClick:()=>i(),children:"生成"}),(0,t.jsx)("button",{className:l().search,onClick:()=>_(),children:"探索"}),(0,t.jsx)("div",{className:l().board,style:{backgroundColor:"#000"},children:n.map((e,n)=>(0,t.jsx)("div",{className:l().row,children:e.map((e,a)=>(0,t.jsx)("div",{className:l().cell,style:{backgroundColor:0===e?"#fff":"#000"}},"".concat(n,"-").concat(a)))},n))})]})};n.default=s},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",row:"index_row__aE42G",generate:"index_generate__aUiEK",search:"index_search__DO3fa"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);