(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(97)}])},97:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return o},default:function(){return d}});var s=t(5893),r=t(3110);async function i(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;arguments.length>3&&void 0!==arguments[3]&&arguments[3];let s=null;return s={method:n,headers:{Accept:"application/json","Content-Type":"application/json"},body:t},fetch(e,s).then(e=>e.json())}var l=t(7294),a=t(9734),c=t(1163);let h=e=>i(e,"get");var o=!0,d=function(){let e=(0,c.useRouter)(),{data:n,error:t,isLoading:o}=(0,a.ZP)("/api/deployment/get-updated-branch-list",h),[d,u]=(0,l.useState)({virtualHost:"",repoBranch:"",responseMessage:""}),[x,p]=Object.keys(d),m=e=>{u({...d,responseMessage:"",[e.target.name]:e.target.value})};return t?(0,s.jsx)("section",{id:"homepage-error",children:(0,s.jsx)("div",{className:"text-center",children:(0,s.jsxs)("p",{children:["Failed to load. ",t]})})}):o?(0,s.jsx)("section",{id:"homepage-error",children:(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)("p",{children:"Loading..."})})}):(0,s.jsxs)("section",{id:"deployment-page",children:[n.isRepoBranchUpdated?e.reload():null,(0,s.jsxs)("div",{className:"text-center p-3",children:[(0,s.jsx)("h1",{children:"Deployment Page"}),(0,s.jsx)("p",{children:"Select a virtual host and a repository branch to deploy"})]}),(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row justify-content-center text-center",children:(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)("form",{onSubmit:async e=>{e.preventDefault();let n=await i("/api/deployment/deploy","post",JSON.stringify(d));u({...d,responseMessage:n.data.message})},children:(0,s.jsxs)("div",{className:"d-flex-column align-items-center justify-content-center text-center",children:[(0,s.jsx)("div",{className:"p-4",children:(0,s.jsxs)("select",{className:"form-input d-inline-block",id:x,name:x,onChange:m,children:[(0,s.jsx)("option",{value:"",className:"text-center",children:"Select a Virtual Host"}),(0,s.jsx)("option",{value:"/usr/share/nginx/html/t1",children:"/usr/share/nginx/html/t1"}),(0,s.jsx)("option",{value:"/usr/share/nginx/html/t2",children:"/usr/share/nginx/html/t2"}),(0,s.jsx)("option",{value:"/usr/share/nginx/html/t3",children:"/usr/share/nginx/html/t3"}),(0,s.jsx)("option",{value:"/usr/share/nginx/html/t4",children:"/usr/share/nginx/html/t4"}),(0,s.jsx)("option",{value:"/usr/share/nginx/html/t5",children:"/usr/share/nginx/html/t5"}),(0,s.jsx)("option",{value:"/usr/share/nginx/html/t6",children:"/usr/share/nginx/html/t6"}),(0,s.jsx)("option",{value:"/usr/share/nginx/html/t7",children:"/usr/share/nginx/html/t7"}),(0,s.jsx)("option",{value:"/usr/share/nginx/html/t8",children:"/usr/share/nginx/html/t8"}),(0,s.jsx)("option",{value:"/usr/share/nginx/html/t9",children:"/usr/share/nginx/html/t9"}),(0,s.jsx)("option",{value:"/usr/share/nginx/html/t10",children:"/usr/share/nginx/html/t10"})]})}),(0,s.jsx)("div",{className:"p-4",children:(0,s.jsxs)("select",{className:"form-input d-inline-block",id:p,name:p,onChange:m,children:[(0,s.jsx)("option",{value:"",className:"text-center",children:"Select a Branch"}),n.repoBranchList.map((e,n)=>(0,s.jsx)("option",{value:e,children:e},n))]})}),d.virtualHost&&d.repoBranch?(0,s.jsx)(r.Z,{type:"submit",children:"Deploy"}):null,(0,s.jsx)("div",{className:"pt-3",children:(0,s.jsx)("p",{children:(0,s.jsx)("b",{children:d.responseMessage})})})]})})})})})]})}}},function(e){e.O(0,[585,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);