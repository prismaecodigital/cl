import{W as d,j as e}from"./app-66a2c661.js";import{F as f}from"./FieldGroup-fbb64179.js";import{T as x}from"./TextInput-a083b950.js";import{L as h}from"./LoadingButton-ff8df0b9.js";function v({method:r,initialValues:s,routeName:t,permission:o=""}){const{data:m,setData:n,post:i,patch:l,errors:u,processing:p}=d({...s}),c=a=>{a.preventDefault(),r==="post"?i(route(t)):r==="patch"&&l(route(t,o))};return e.jsxs("form",{onSubmit:c,className:"w-full",children:[e.jsx(f,{label:"Name",name:"name",error:u.name,isPrimary:!0,maxLength:"100",children:e.jsx(x,{id:"name",name:"name",className:"mt-1 block w-full",value:m.name,required:!0,isFocused:!0,autoComplete:"name",placeholder:"Permission Name...",onChange:a=>n("name",a.target.value)})}),e.jsx(h,{disabled:p,children:"Submit"})]})}export{v as default};