import{q as l,j as e,a as r}from"./app-6530793c.js";import{P as d,D as m}from"./DeleteConfirmation-bf014a17.js";import"./createLucideIcon-4b149397.js";const x=()=>{const{permissions:t}=l().props.auth,a=t.includes("pic_edit"),n=t.includes("pic_delete"),o=[{key:"id",label:"No.",classHead:"table--number",classBody:"text-center",render:(s,c)=>c+1},{key:"organization",label:"Organization"},{key:"name",label:"Name"},{key:"phone",label:"Phone"}],i={key:"actions",label:"Action",classHead:"table--action",classBody:"table--action",render:s=>e.jsxs(e.Fragment,{children:[a&&e.jsxs(r,{href:route("contacts.edit",s.id),className:"text-warning",children:[e.jsx(d,{className:"inline-block mb-1",size:14})," Edit"]}),n&&s.canDelete&&e.jsx(m,{id:s.id,routeName:"contacts.destroy"})]})};return(a||n)&&o.push(i),o};export{x as default};