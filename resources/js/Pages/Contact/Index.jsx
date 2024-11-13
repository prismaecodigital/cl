import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

function Index() {
  return (
    <div className='content-box'>
      <h1 className='text--title'>Contact</h1>
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Contact' children={page} />
);

export default Index;
