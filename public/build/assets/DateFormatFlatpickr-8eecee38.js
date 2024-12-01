import{c as o}from"./createLucideIcon-2e9d75c9.js";import{w as a,S as r}from"./sweetalert2-react-content.es-9259e178.js";import{f as n}from"./DateTimePicker-5f6ffdc5.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=o("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),c=a(r);async function u(){return(await c.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#64748b",confirmButtonText:"Yes, delete it!"})).isConfirmed}function d(t){const e=new Date(t);return n.formatDate(e,"Y-m-d")}export{u as C,d as F,m as P};
