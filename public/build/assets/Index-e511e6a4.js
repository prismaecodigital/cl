import{j as a,a as t}from"./app-d04e10d1.js";import{D as o}from"./DashboardLayout-27e94e7f.js";import{B as m}from"./Breadcrumb-ab0efeff.js";import{d as s}from"./breadcrumbContent-64718ab7.js";import{M as i}from"./MyTable-30aa7beb.js";import c from"./createColumn-0eb7ee31.js";import"./createLucideIcon-3cfc8a37.js";import"./mails-ed366b3c.js";import"./DeleteConfirmation-77a8b1bd.js";function n({packages:r}){const e=c();return a.jsxs("div",{className:"content-box",children:[a.jsx(m,{pageName:"Package",prevPage:s}),a.jsx(t,{className:"btn btn--primary",href:route("packages.create"),children:" Create "}),a.jsx(i,{data:r.data,columns:e})]})}n.layout=r=>a.jsx(o,{title:"Package",children:r});export{n as default};