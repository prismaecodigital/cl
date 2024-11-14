import React from 'react';
import createColumn from './data';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import MyTable from '@/Components/Table/MyTable';

function Index({ auth, contacts }) {
  const columns = createColumn();
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
		{ link: '#', text: 'Database' },
  ];

  return (
    <div className='content-box'>
      <Breadcrumb pageName='PIC' prevPage={breadcrumb} />

      <MyTable data={contacts.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='PIC' children={page} />
);

export default Index;
