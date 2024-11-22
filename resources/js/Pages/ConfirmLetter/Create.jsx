import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import LetterForm from './component/LetterForm';

function Create({ auth, organizations, events, rooms, packages }) {
  const selectOption = { organizations, events, rooms, packages };
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
    sales: auth.user.id,
    notes: [{
      start_date: '',
      end_date: '',
      lists: [{
        package: '',
        packageSelected: '',
        qty: '',
        price: '',
        note: '',
      }],
    }],
    schedule: [{
      date: '',
      breakfast: '',
      cb_morning: '',
      lunch: '',
      cb_evening: '',
      dinner: '',
      cb_night: '',
    }],
  };

  return (
    <LetterForm
      method='post'
      selectOption={selectOption}
      initialValues={data}
      routeName='confirm-letter.store'
    />
  );
}

Create.layout = page => (
  <DashboardLayout title='Confirm Letter' children={page} />
);

export default Create;
