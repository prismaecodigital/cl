import{j as a}from"./app-66a2c661.js";import{D as s}from"./DashboardLayout-6755273a.js";import{B as d}from"./Breadcrumb-7c4540a4.js";import{p as c}from"./breadcrumbContent-e73bf562.js";import l from"./ContactForm-43d9ebe9.js";import"./createLucideIcon-2e9d75c9.js";import"./mails-9dcc1bee.js";import"./FieldGroup-fbb64179.js";import"./TextInput-a083b950.js";import"./react-select.esm-c59424fd.js";import"./LoadingButton-ff8df0b9.js";function u({contact:t,organizations:i}){const{name:r,phone:e,fax:m,email:n,organization:o}=t,p={organization:o.id,organizationSelected:{value:o.id,label:o.name},name:r,phone:e,fax:m,email:n};return a.jsxs("div",{className:"content-box",children:[a.jsx(d,{title:"Contact Edit",pageName:"Edit",prevPage:c}),a.jsx(l,{method:"patch",initialValues:p,routeName:"contacts.update",organizations:i,contact:t})]})}u.layout=t=>a.jsx(s,{title:"Contact Edit",children:t});export{u as default};