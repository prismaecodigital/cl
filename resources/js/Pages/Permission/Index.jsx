import React from 'react';
import createColumn from './data';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import MyTable from '@/Components/Table/MyTable';
function Index({ auth, permissions }) {
  const columns = createColumn();
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
  ];

  return (
    <div className='content-box'>
      <Breadcrumb pageName='Authorization' prevPage={breadcrumb} />

      <MyTable data={permissions.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Permission' children={page} />
);

export default Index;
