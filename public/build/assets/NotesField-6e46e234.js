import{j as e}from"./app-17e9f1c4.js";import{F as n}from"./FieldGroup-647263f2.js";import{S as P}from"./react-select.esm-915f92dd.js";import{T as h}from"./TextInput-27379eee.js";import{T as _}from"./TextArea-06a46c53.js";import{D as f,F as p}from"./DateFormatFlatpickr-dcaeceb1.js";import{C as N}from"./confirmDelete-361476fa.js";import{c as x}from"./convertOptions-49a86ad9.js";import{P as C}from"./plus-fd8584cc.js";import{c as j}from"./createLucideIcon-29b2380b.js";import{T as S}from"./trash-2-56e0bb0f.js";/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=j("PackageMinus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=j("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);function M(o){return o?o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."):""}function G({data:o,setData:y,errors:d,selectOption:$,readOnly:c=!1}){const{packages:b}=$,m=a=>{const s=a([...o.notes]);y("notes",s)},k=()=>{m(a=>[...a,{start_date:"",end_date:"",lists:[{package:"",packageSelected:"",uom:"",qty:"",price:"",note:""}]}])},v=async a=>{await N()&&m(r=>r.filter((l,t)=>t!==a))},w=a=>{m(s=>(s[a].lists.push({package:"",packageSelected:"",qty:"",price:"",note:""}),s))},g=async(a,s)=>{await N()&&m(l=>(l[a].lists=l[a].lists.filter((t,i)=>i!==s),l))},D=(a,s,r)=>{var t;const l=((t=b.find(i=>i.id===a.value))==null?void 0:t.uom)||"";m(i=>(i[s].lists[r].package=a.value,i[s].lists[r].packageSelected=a,i[s].lists[r].uom=l,i))};return e.jsxs("div",{className:"content-box mb-2 z-0",children:[e.jsxs("div",{className:"flex flex-row items-center justify-between gap-2 mb-3",children:[e.jsx("h2",{className:"text--sub-heading",children:"Notes"}),!c&&e.jsx("span",{className:"btn btn--sm btn--primary",onClick:k,children:e.jsx(C,{strokeWidth:3,size:16})})]}),o.notes.map((a,s)=>e.jsxs("div",{className:"py-4 px-4 mb-4 shadow-md rounded-md border border-slate-200",children:[e.jsxs("div",{className:"flex flex-row gap-2 items-start",children:[e.jsx(n,{label:"Start Date",name:`notes.${s}.start_date`,error:d[`notes.${s}.start_date`],className:"flex-1 !mb-0",children:e.jsx(f,{minDate:o.check_in,maxDate:o.check_out,name:`notes.${s}.start_date`,value:a.start_date?new Date(a.start_date):"",onChange:r=>{const l=p(r);m(t=>(t[s].start_date=l=="1970-01-01"?"":l,t))},className:"mt-1 block w-full",placeholder:"Start Date...",withTime:!1,isDisable:c})}),e.jsx(n,{label:"End Date",name:`notes.${s}.end_date`,error:d[`notes.${s}.end_date`],className:"flex-1 !mb-0",children:e.jsx(f,{minDate:o.check_in,maxDate:o.check_out,name:`notes.${s}.end_date`,value:a.end_date,onChange:r=>{const l=p(r);m(t=>(t[s].end_date=l=="1970-01-01"?"":l,t))},className:"mt-1 block w-full",placeholder:"End Date...",withTime:!1,isDisable:c})})]}),e.jsx("div",{className:"flex justify-end my-2",children:!c&&e.jsxs("span",{className:"btn btn--sm btn--success py-3",onClick:()=>w(s),children:[e.jsx(q,{className:"inline-block mb-1",strokeWidth:3,size:18})," Add Package"]})}),a.lists.map((r,l)=>e.jsxs("div",{className:"flex flex-col shadow-md rounded-md border border-slate-200 bg-gray-50 p-4 mb-3",children:[e.jsxs("div",{className:"flex flex-row gap-2",children:[e.jsx(n,{label:"Packages",name:`notes.${s}.lists.${l}.package`,error:d[`notes.${s}.lists.${l}.package`],className:"flex-[1-1-33.333333%] w-1/3",children:e.jsx(P,{options:x(b),value:r.packageSelected,className:"mt-1 block w-full",menuPortalTarget:document.body,menuPosition:"fixed",onChange:t=>D(t,s,l),isDisabled:c})}),e.jsx(n,{label:"Qty",name:`notes.${s}.lists.${l}.qty`,error:d[`notes.${s}.lists.${l}.qty`],className:"flex-[1-1-16.666667%] w-1/6",children:e.jsx(h,{id:`notes.${s}.lists.${l}.qty`,name:`notes.${s}.lists.${l}.qty`,className:"mt-1 block w-full",value:r.qty||"",autoComplete:"name",placeholder:"Qty...",onChange:t=>{m(i=>(i[s].lists[l].qty=t.target.value,i))},isDisabled:c})}),e.jsx(n,{label:"Unit",name:"unit",className:"flex-[1-1-16.666667%] w-1/6",children:e.jsx(h,{value:r.uom||"",isDisabled:!0,className:"mt-1 block w-full",placeholder:"Unit..."})}),e.jsxs("div",{className:"flex-[1-1-33.333333%] w-1/3",children:[e.jsx("label",{className:"form--label",htmlFor:`notes.${s}.lists.${l}.price`,children:"Price"}),e.jsxs("div",{className:"flex items-end",children:[e.jsx("span",{className:"rounded-l-md px-3 py-2 bg-gray-100 border border-gray-300 text-gray-500",children:"Rp."}),e.jsx(n,{error:d[`notes.${s}.lists.${l}.price`],className:"flex-1 !mb-0",children:e.jsx(h,{type:"text",id:`notes.${s}.lists.${l}.price`,name:`notes.${s}.lists.${l}.price`,className:"mt-1 block w-full !rounded-l-none !rounded-r-md",value:r.priceValue,placeholder:"Package Price...",onChange:t=>{const i=t.target.value.replace(/\./g,"");m(u=>(u[s].lists[l].price=i,u[s].lists[l].priceValue=M(i),u))},isDisabled:c})})]})]})]}),e.jsx(n,{label:"Notes",name:`notes.${s}.lists.${l}.note`,error:d[`notes.${s}.lists.${l}.note`],className:"!mb-0",children:e.jsx(_,{id:`notes.${s}.lists.${l}.note`,name:`notes.${s}.lists.${l}.note`,className:"mt-1 block w-full",value:r.note||"",placeholder:"Package Note...",onChange:t=>{m(i=>(i[s].lists[l].note=t.target.value,i))},isDisabled:c})}),!c&&e.jsxs("span",{className:"btn btn--sm btn--danger py-3 mt-4 inline-block max-w-fit flex-none",onClick:()=>g(s,l),children:[e.jsx(T,{strokeWidth:3,size:18,className:"mb-1 inline-block"})," Delete Package"]})]},l)),!c&&e.jsx("div",{className:"flex justify-end",children:e.jsxs("span",{className:"btn btn--sm btn--danger py-3 mt-4",onClick:()=>v(s),children:[e.jsx(S,{strokeWidth:3,size:18,className:"mb-1 inline-block"})," Delete Note"]})})]},s))]})}export{G as default};