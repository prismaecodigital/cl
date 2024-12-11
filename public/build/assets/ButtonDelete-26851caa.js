import{c}from"./createLucideIcon-3d038f78.js";import{j as t,y as m}from"./app-e30449fd.js";import{C as i}from"./confirmDelete-73dd4073.js";import{T as l}from"./trash-2-242c2d35.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=c("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),h=({id:o,routeName:s,className:a="",withText:e=!0,name:r=""})=>{const n=async()=>{await i(r)&&m.delete(route(s,o))};return t.jsxs("button",{className:"text-red-600 ml-2 "+a,onClick:n,children:[t.jsx(l,{className:"inline-block mb-1",size:e?14:16,strokeWidth:e?2:3}),e&&" Delete"]})};export{h as B,y as P};
