import{W as f,j as e}from"./app-d24c5eb2.js";import{F as m}from"./FieldGroup-de18e160.js";import{T as g}from"./TextInput-65f7bbdd.js";import{T as h}from"./TextArea-c2b89c45.js";import{L as x}from"./LoadingButton-be6e30be.js";function L({method:s,initialValues:l,routeName:t,organization:i=""}){const{data:r,setData:n,post:d,patch:u,errors:o,processing:p}=f({...l}),c=a=>{a.preventDefault(),s==="post"?d(route(t)):s==="patch"&&u(route(t,i))};return e.jsxs("form",{onSubmit:c,className:"w-full",children:[e.jsx(m,{label:"Name",name:"name",error:o.name,isPrimary:!0,maxLength:"100",valueLength:r.name.length,children:e.jsx(g,{id:"name",name:"name",className:"mt-1 block w-full",value:r.name,required:!0,isFocused:!0,autoComplete:"name",placeholder:"Organization Name...",onChange:a=>n("name",a.target.value)})}),e.jsx(m,{label:"Address",name:"address",error:o.address,isPrimary:!0,children:e.jsx(h,{id:"address",name:"address",className:"mt-1 block w-full",value:r.address,required:!0,autoComplete:"address",placeholder:"Organization Address...",onChange:a=>n("address",a.target.value)})}),e.jsx(x,{disabled:p,children:"Submit"})]})}export{L as default};