import{j as r,a as t}from"./app-e22f8d1b.js";import{D as e}from"./DashboardLayout-cdde236e.js";import{B as m}from"./Breadcrumb-cc80998e.js";import{d as s}from"./breadcrumbContent-0609c32d.js";import{M as i}from"./MyTable-d5d4eabc.js";import n from"./createColumn-371fdaf0.js";import"./createLucideIcon-e88b960d.js";import"./mails-352c400b.js";import"./DeleteConfirmation-f30a0406.js";function p({rooms:a}){const o=n();return r.jsxs("div",{className:"content-box",children:[r.jsx(m,{pageName:"Room",prevPage:s}),r.jsx(t,{className:"btn btn--primary",href:route("rooms.create"),children:" Create "}),r.jsx(i,{data:a.data,columns:o})]})}p.layout=a=>r.jsx(e,{title:"Room",children:a});export{p as default};