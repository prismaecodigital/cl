import{q as l,j as e,a as r}from"./app-d04e10d1.js";import{P as d,D as m}from"./DeleteConfirmation-77a8b1bd.js";import"./createLucideIcon-3cfc8a37.js";const b=()=>{const{permissions:a}=l().props.auth,t=a.includes("package_edit"),n=a.includes("package_delete"),c=[{key:"id",label:"No.",classHead:"table--number",classBody:"text-center",render:(s,o)=>o+1},{key:"name",label:"Name"},{key:"unit",label:"Unit",classHead:"text-center",classBody:"text-center"}],i={key:"actions",label:"Action",classHead:"table--action",classBody:"table--action",render:s=>e.jsxs(e.Fragment,{children:[t&&e.jsxs(r,{href:route("packages.edit",s.id),className:"text-warning",children:[e.jsx(d,{className:"inline-block mb-1",size:14})," Edit"]}),n&&s.canDelete&&e.jsx(m,{id:s.id,routeName:"packages.destroy"})]})};return(t||n)&&c.push(i),c};export{b as default};