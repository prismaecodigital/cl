import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';

function DashboardPage() {
  return (
    <div className='content-box'>
      <h1 className='text--title'>Dashboard</h1>

      <div className='flex flex-row items-center gap-2'>
        <span>Total CL</span>
        <span>Start Date</span>
        <span>End Date</span>
        <span>Sales</span>
      </div>
    </div>
  );
}

DashboardPage.layout = page => (
  <DashboardLayout title='Dashboard' children={page} />
);

export default DashboardPage;
