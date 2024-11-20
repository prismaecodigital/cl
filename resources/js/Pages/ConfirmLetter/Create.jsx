import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import LetterForm from './component/LetterForm';

function Create({ organizations, events, rooms }) {
  const selectOption = { organizations, events, rooms };
  const data = {
    organization: '',
    organizationSelected: '',
    contact: '',
    contactSelected: '',
    event: '',
    eventSelected: '',
    room: '',
    roomSelected: '',
    check_in: '',
    check_out: '',
    attendance: '',
    payment: '',
    paymentSelected: '',
  };

  return (
    <LetterForm
      method='post'
      selectOption={selectOption}
      initialValue={data}
      routeName='confirm_letter.store'
    />
  );
}

Create.layout = page => (
  <DashboardLayout title='Confirm Letter' children={page} />
);

export default Create;
