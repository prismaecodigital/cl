import{c as i}from"./createLucideIcon-2e9d75c9.js";import{j as t,y as l}from"./app-66a2c661.js";import{w as c,S as m}from"./sweetalert2-react-content.es-9259e178.js";import{T as u}from"./trash-2-e45ac675.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=i("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),d=c(m),k=({id:o,routeName:n,className:r="",withText:e=!0})=>{const a=()=>{d.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#64748b",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&l.delete(route(n,o))})};return t.jsxs("button",{className:"text-red-600 ml-2 "+r,onClick:a,children:[t.jsx(u,{className:"inline-block mb-1",size:e?14:16,strokeWidth:e?1:3}),e&&"Delete"]})};export{k as D,b as P};
