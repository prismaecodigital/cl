import{j as o}from"./app-17e9f1c4.js";import{D as a}from"./DashboardLayout-2d1d7f91.js";import{B as p}from"./Breadcrumb-ffbd4dda.js";import{r as n}from"./breadcrumbContent-e73bf562.js";import d from"./RoleForm-817ae68e.js";import{c}from"./convertOptions-49a86ad9.js";import"./createLucideIcon-29b2380b.js";import"./mails-e875ca7a.js";import"./FieldGroup-647263f2.js";import"./TextInput-27379eee.js";import"./react-select.esm-915f92dd.js";import"./LoadingButton-7640098f.js";function l({permissions:t,role:r}){const{name:e,has_permissions:i}=r,m={permission:i.map(s=>s.id),permissionSelected:c(i),name:e};return o.jsxs("div",{className:"content-box",children:[o.jsx(p,{title:"Role Edit",pageName:"Edit",prevPage:n}),o.jsx(d,{method:"patch",initialValues:m,permissions:t,routeName:"roles.update",role:r})]})}l.layout=t=>o.jsx(a,{title:"Room Edit",children:t});export{l as default};