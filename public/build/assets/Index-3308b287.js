import{j as r,a as e}from"./app-17e9f1c4.js";import{D as o}from"./DashboardLayout-2d1d7f91.js";import{B as m}from"./Breadcrumb-ffbd4dda.js";import{d as s}from"./breadcrumbContent-e73bf562.js";import{M as i}from"./MyTable-7e157bac.js";import n from"./createColumn-b3f65943.js";import"./createLucideIcon-29b2380b.js";import"./mails-e875ca7a.js";import"./ButtonDelete-55e9aa93.js";import"./confirmDelete-361476fa.js";import"./trash-2-56e0bb0f.js";function p({events:t}){const a=n();return r.jsxs("div",{className:"content-box",children:[r.jsx(m,{pageName:"Event",prevPage:s}),r.jsx(e,{className:"btn btn--primary",href:route("events.create"),children:" Create "}),r.jsx(i,{data:t.data,columns:a})]})}p.layout=t=>r.jsx(o,{title:"Event",children:t});export{p as default};