import{c as n}from"./createLucideIcon-29b2380b.js";import{j as t,y as c}from"./app-17e9f1c4.js";import{C as m}from"./confirmDelete-361476fa.js";import{T as i}from"./trash-2-56e0bb0f.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),y=({id:o,routeName:s,className:a="",withText:e=!0})=>{const r=async()=>{await m()&&c.delete(route(s,o))};return t.jsxs("button",{className:"text-red-600 ml-2 "+a,onClick:r,children:[t.jsx(i,{className:"inline-block mb-1",size:e?14:16,strokeWidth:e?2:3}),e&&" Delete"]})};export{y as B,k as P};
