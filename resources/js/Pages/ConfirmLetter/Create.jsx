import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import LetterForm from './component/LetterForm';

function Create({ auth, organizations, events, rooms, packages }) {
  const selectOption = { organizations, events, rooms, packages };
  const data = {
    code: '',
    sales: auth.user.id,
    organization: '',
    organizationSelected: '',
    address: '',
    contact: '',
    contactSelected: '',
    phone: '',
    event: '',
    eventSelected: '',
    hotel: '',
    hotelSelected: '',
    room: '',
    roomSelected: '',
    check_in: '',
    check_out: '',
    attendance: '',
    payment: '',
    paymentSelected: '',
    deposit: '',
    depositValue: '',
    notes: [{
      start_date: '',
      end_date: '',
      lists: [{
        package: '',
        packageSelected: '',
        uom: '',
        qty: '',
        price: '',
        priceValue: '',
        note: '',
      }],
    }],
    schedules: [{
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
      pageName='Create'
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
