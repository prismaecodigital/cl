import{W as x,j as e}from"./app-672f5ccc.js";import{D as b}from"./DashboardLayout-09ac5ec3.js";import{B as h}from"./Breadcrumb-1ddc2b7e.js";import{F as m,L as f}from"./LoadingButton-74f782ba.js";import{T as j}from"./TextInput-59c79eb0.js";import{S as g}from"./react-select.esm-288ee4f1.js";import"./mails-665721e7.js";function C({permissions:a}){const n=[{link:route("dashboard"),text:"Dashboard"},{link:route("roles.index"),text:"Role"}],{data:t,setData:o,post:l,errors:i,processing:u}=x({permission:"",permissionSelected:"",name:""}),d=r=>{const c=r.map(s=>s.value);o(s=>({...s,permission:c,permissionSelected:r}))},p=r=>{r.preventDefault(),l(route("roles.store"))};return e.jsxs("div",{className:"content-box",children:[e.jsx(h,{title:"Role Create",pageName:"Create",prevPage:n}),e.jsxs("form",{onSubmit:p,className:"w-full",children:[e.jsx(m,{label:"Name",name:"name",error:i.name,isPrimary:!0,maxLength:"20",children:e.jsx(j,{id:"name",name:"name",className:"mt-1 block w-full",value:t.name,autoComplete:"name",placeholder:"Role Name...",onChange:r=>o("name",r.target.value)})}),e.jsx(m,{label:"Permission",name:"permission",error:i.permission,isPrimary:!0,children:e.jsx(g,{id:"permission",options:a,value:t.permissionSelected,onChange:d,className:"mt-1 block w-full",isMulti:!0,required:!0})}),e.jsx(f,{disabled:u,children:"Submit"})]})]})}C.layout=a=>e.jsx(b,{title:"Room Create",children:a});export{C as default};