import{q as l,j as e,a as c}from"./app-66a2c661.js";import{P as m,D as d}from"./DeleteConfirmation-172a66cd.js";import"./createLucideIcon-2e9d75c9.js";import"./sweetalert2-react-content.es-9259e178.js";import"./trash-2-e45ac675.js";const j=()=>{const{permissions:i}=l().props.auth,t=i.includes("permission_edit"),n=i.includes("permission_delete"),o=[{key:"id",label:"No.",classHead:"table--number",classBody:"text-center",render:(s,r)=>r+1},{key:"name",label:"Name"}],a={key:"actions",label:"Action",classHead:"table--action",classBody:"table--action",render:s=>e.jsxs(e.Fragment,{children:[t&&e.jsxs(c,{href:route("permissions.edit",s.id),className:"text-warning",children:[e.jsx(m,{className:"inline-block mb-1",size:14})," Edit"]}),n&&s.canDelete&&e.jsx(d,{id:s.id,routeName:"permissions.destroy"})]})};return(t||n)&&o.push(a),o};export{j as default};