import{j as t}from"./app-6530793c.js";import{D as o}from"./DashboardLayout-4eb18031.js";import{B as e}from"./Breadcrumb-294a3bd5.js";import i from"./OrganizationForm-80c2f551.js";import"./createLucideIcon-4b149397.js";import"./mails-8c628d0c.js";import"./LoadingButton-fd81157f.js";import"./TextInput-29922f1a.js";import"./TextArea-0b2b65fc.js";function n(){const a=[{link:route("dashboard"),text:"Dashboard"},{link:route("organizations.index"),text:"Organization"}],r={name:"",address:""};return t.jsxs("div",{className:"content-box",children:[t.jsx(e,{title:"Create Organization",pageName:"Create",prevPage:a}),t.jsx(i,{method:"post",initialValues:r,routeName:"organizations.store"})]})}n.layout=a=>t.jsx(o,{title:"Organization Create",children:a});export{n as default};