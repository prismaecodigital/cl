import React from 'react';
import createColumn from './data';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import MyTable from '@/Components/Table/MyTable';

function Index({ auth, users }) {
  const columns = createColumn();
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
    { link: '#', text: 'Authorization' },
  ];
  
  return (
    <div className='content-box'>
      <Breadcrumb pageName='User' prevPage={breadcrumb} />

      <MyTable data={users.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='User' children={page} />
);

export default Index;
