import{j as a}from"./app-d24c5eb2.js";import{D as m}from"./DashboardLayout-9f3e496f.js";import{B as i}from"./Breadcrumb-fef84490.js";import{a as s}from"./breadcrumbContent-e73bf562.js";import p from"./PackageForm-aef24aac.js";import"./createLucideIcon-50db9300.js";import"./mails-3a358043.js";import"./FieldGroup-de18e160.js";import"./TextInput-65f7bbdd.js";import"./LoadingButton-be6e30be.js";function c({packageData:t}){const{name:o,uom:r}=t,e={name:o,uom:r};return a.jsxs("div",{className:"content-box",children:[a.jsx(i,{title:"Package Edit",pageName:"Edit",prevPage:s}),a.jsx(p,{method:"patch",initialValues:e,routeName:"packages.update",packageData:t})]})}c.layout=t=>a.jsx(m,{title:"Package Edit",children:t});export{c as default};