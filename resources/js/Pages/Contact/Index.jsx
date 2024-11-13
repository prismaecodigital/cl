import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

function Index({ contacts }) {
  console.log(contacts, 'data contacts');

  return (
    <div className='content-box'>
      <h1 className='text--title'>PIC</h1>
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='PIC' children={page} />
);

export default Index;
