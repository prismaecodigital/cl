import{j as a}from"./app-17e9f1c4.js";import{D as m}from"./DashboardLayout-2d1d7f91.js";import{B as i}from"./Breadcrumb-ffbd4dda.js";import{a as s}from"./breadcrumbContent-e73bf562.js";import p from"./PackageForm-857fcea2.js";import"./createLucideIcon-29b2380b.js";import"./mails-e875ca7a.js";import"./FieldGroup-647263f2.js";import"./TextInput-27379eee.js";import"./LoadingButton-7640098f.js";function c({packageData:t}){const{name:o,uom:r}=t,e={name:o,uom:r};return a.jsxs("div",{className:"content-box",children:[a.jsx(i,{title:"Package Edit",pageName:"Edit",prevPage:s}),a.jsx(p,{method:"patch",initialValues:e,routeName:"packages.update",packageData:t})]})}c.layout=t=>a.jsx(m,{title:"Package Edit",children:t});export{c as default};