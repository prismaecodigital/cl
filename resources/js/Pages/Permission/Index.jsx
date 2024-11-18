import React from 'react';
import createColumn from './data';
import { Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import MyTable from '@/Components/Table/MyTable';

function Index({ auth, permissions }) {
  const columns = createColumn();
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
    { link: '#', text: 'Authorization' },
  ];

  return (
    <div className='content-box'>
      <Breadcrumb pageName='Permission' prevPage={breadcrumb} />
      <Link className='btn btn--primary' href={route('permissions.create')}> Create </Link>

      <MyTable data={permissions.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Permission' children={page} />
);

export default Index;
