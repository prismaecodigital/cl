import{W as l,j as e}from"./app-672f5ccc.js";import{D as u}from"./DashboardLayout-09ac5ec3.js";import{B as d}from"./Breadcrumb-1ddc2b7e.js";import{F as c,L as p}from"./LoadingButton-74f782ba.js";import{T as x}from"./TextInput-59c79eb0.js";import"./mails-665721e7.js";function b(){const a=[{link:route("dashboard"),text:"Dashboard"},{link:route("permissions.index"),text:"Permission"}],{data:t,setData:s,post:o,errors:m,processing:n}=l({name:""}),i=r=>{r.preventDefault(),o(route("permissions.store"))};return e.jsxs("div",{className:"content-box",children:[e.jsx(d,{title:"Permission Create",pageName:"Create",prevPage:a}),e.jsxs("form",{onSubmit:i,className:"w-full",children:[e.jsx(c,{label:"Name",name:"name",error:m.name,isPrimary:!0,maxLength:"30",children:e.jsx(x,{id:"name",name:"name",className:"mt-1 block w-full",value:t.name,isFocused:!0,autoComplete:"name",placeholder:"Permission Name...",onChange:r=>s("name",r.target.value)})}),e.jsx(p,{disabled:n,children:"Submit"})]})]})}b.layout=a=>e.jsx(u,{title:"Room Create",children:a});export{b as default};