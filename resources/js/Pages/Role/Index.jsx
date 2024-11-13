import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

function Index() {
  return (
    <div className='content-box'>
      <h1 className='text--title'>Role</h1>
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Role' children={page} />
);

export default Index;
