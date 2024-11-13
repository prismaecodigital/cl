import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

function Index({ letters }) {
  console.log(letters, 'data confirmation letter');
  
  return (
    <div className='content-box'>
      <h1 className='text--title'>Confirmation Letter</h1>
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Confirm Letter' children={page} />
);

export default Index;
