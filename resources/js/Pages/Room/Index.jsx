import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

function Index({ rooms }) {
  console.log(rooms);
  
  return (
    <div className='content-box'>
      <h1 className='text--title'>Room</h1>
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Room' children={page} />
);

export default Index;
