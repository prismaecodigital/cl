import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

function Index({ organizations }) {
  console.log(organizations, 'data organization');
  
  return (
    <div className='content-box'>
      <h1 className='text--title'>Organization</h1>
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Organization' children={page} />
);

export default Index;