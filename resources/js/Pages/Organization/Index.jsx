import React from 'react';
import createColumn from './data';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import MyTable from '@/Components/Table/MyTable';

function Index({ auth, organizations }) {
  const columns = createColumn();
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
		{ link: '#', text: 'Database' },
  ];
  
  return (
    <div className='content-box'>
      <Breadcrumb pageName='Organization' prevPage={breadcrumb} />

      <MyTable data={organizations.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Organization' children={page} />
);

export default Index;
