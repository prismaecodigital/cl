import{j as a,a as s}from"./app-672f5ccc.js";import n from"./index-4d4b09d3.js";import{D as i}from"./DashboardLayout-09ac5ec3.js";import{B as m}from"./Breadcrumb-1ddc2b7e.js";import{M as c}from"./MyTable-85064ae2.js";import"./mails-665721e7.js";function d({auth:t,organizations:r}){const e=n(),o=[{link:route("dashboard"),text:"Dashboard"},{link:"#",text:"Database"}];return a.jsxs("div",{className:"content-box",children:[a.jsx(m,{pageName:"Organization",prevPage:o}),a.jsx(s,{className:"btn btn--primary",href:route("organizations.create"),children:" Create "}),a.jsx(c,{data:r.data,columns:e})]})}d.layout=t=>a.jsx(i,{title:"Organization",children:t});export{d as default};