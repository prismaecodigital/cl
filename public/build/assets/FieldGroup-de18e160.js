import{r as x,j as s,m as v}from"./app-d24c5eb2.js";function C({label:t,name:c,isPrimary:u,children:n,className:m="",error:l="",maxLength:e="",valueLength:p=0}){const[d,f]=x.useState(p),h=r=>{var o,i;const a=r.target.value;(!e||a.length<=e)&&(f(a.length),(i=(o=n.props).onChange)==null||i.call(o,r))},j=()=>{var r;return e?v.cloneElement(n,{onChange:h,value:(r=n.props.value)==null?void 0:r.slice(0,e)}):n};return s.jsxs("div",{className:"mb-3 "+m,children:[s.jsxs("div",{className:"flex flex-row items-end justify-between",children:[t&&s.jsxs("label",{className:"form--label",htmlFor:c,children:[t," ",u&&s.jsx("span",{className:"form--primary",children:"*"})]}),e&&s.jsxs("span",{className:"form--max-length",children:[" ",d,"/",e]})]}),j(),l!=""&&s.jsx("div",{className:"form--error",children:l})]})}export{C as F};