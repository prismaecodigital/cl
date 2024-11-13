import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

function Index({ permissions }) {
  console.log(permissions, 'data permission');
  
  return (
    <div className='content-box'>
      <h1 className='text--title'>Permission</h1>
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Permission' children={page} />
);

export default Index;
