import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

function Index({ users }) {
  console.log(users, 'data user');
  
  return (
    <div className='content-box'>
      <h1 className='text--title'>User</h1>
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='User' children={page} />
);

export default Index;
