import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import LetterForm from './component/LetterForm';

function Edit({ letter, organizations, events, rooms, packages }) {
  const selectOption = { organizations, events, rooms, packages };
  const data = {...letter.data}
  
  return (
    <LetterForm
      pageName='Edit'
      method='patch'
      selectOption={selectOption}
      initialValues={data}
      routeName='confirm-letter.update'
      letter={letter.data}
    />
  );
}

Edit.layout = page => (
  <DashboardLayout title='Confirm Letter' children={page} />
);

export default Edit;
