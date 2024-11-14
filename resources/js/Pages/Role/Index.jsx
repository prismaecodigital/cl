import React from 'react';
import createColumn from './data';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import MyTable from '@/Components/Table/MyTable';

function Index({ auth, roles }) {
  const columns = createColumn();
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
    { link: '#', text: 'Authorization' },
  ];
  
  return (
    <div className='content-box'>
      <Breadcrumb pageName='Role' prevPage={breadcrumb} />

      <MyTable data={roles.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Role' children={page} />
);

export default Index;
