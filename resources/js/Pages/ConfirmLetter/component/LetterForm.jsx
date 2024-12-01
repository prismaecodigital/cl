import React from 'react';
import { useForm } from '@inertiajs/react';

import MainField from './Form/MainField';
import NotesField from './Form/NotesField';
import FnbField from './Form/FnbField';

export default function LetterForm({
  pageName,
  method, 
  initialValues, 
  letter='', 
  routeName='', 
  selectOption='', 
  readOnly=false 
}) {  
  const { data, setData, post, patch, errors, processing } = useForm({
    ...initialValues,
  });

  const submit = (e) => {
    e.preventDefault();
    if (method === 'post') {
      post(route(routeName));
    } else if (method === 'patch') {
      patch(route(routeName, letter));
    }
  };

  return (
    <form onSubmit={submit} className='w-full'>
      {/* Main field */}
      <MainField
        data={data}
        setData={setData}
        errors={errors}
        pageName={pageName}
        selectOption={selectOption}
        readOnly={readOnly}
      />

      {/* Note field */}
      <NotesField
        data={data}
        setData={setData}
        errors={errors}
        selectOption={selectOption}
        readOnly={readOnly}
      />

      {/* FnB field */}
      <FnbField
        data={data}
        setData={setData}
        errors={errors}
        processing={processing}
        readOnly={readOnly}
      />
    </form>
  );
}