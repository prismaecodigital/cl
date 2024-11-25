import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import LetterForm from './component/LetterForm';

function Show({ letter, organizations, events, rooms, packages }) {
  const selectOption = { organizations, events, rooms, packages };
  const {organization, address, pic, phone, check_in, check_out, room, event, attendance, payment, sales} = letter.data;
  const data = {
    organization: '',
    organizationSelected: organization,
    address: address,
    contact: '',
    contactSelected: pic,
    phone: phone,
    event: '',
    eventSelected: event,
    room: '',
    roomSelected: room,
    check_in: check_in,
    check_out: check_out,
    attendance: attendance,
    payment: '',
    paymentSelected: payment,
    sales: sales,
    notes: [{
      start_date: '',
      end_date: '',
      lists: [{
        package: '',
        packageSelected: '',
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
