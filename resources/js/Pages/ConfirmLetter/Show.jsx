import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import LetterForm from './component/LetterForm';

function Show({ letter, organizations, events, rooms, packages }) {
  const selectOption = { organizations, events, rooms, packages };
  const data = {...letter.data}

  return (
    <LetterForm
      pageName='Detail'
      method='read-only'
      selectOption={selectOption}
      initialValues={data}
      readOnly={true}
    />
  );
}

Show.layout = page => (
  <DashboardLayout title='Confirm Letter' children={page} />
);

export default Show;
