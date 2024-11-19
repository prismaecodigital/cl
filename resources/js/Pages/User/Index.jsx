import React from 'react';
import { Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { authorizationBreadcrumb } from '@/utils/breadcrumbContent';
import MyTable from '@/Components/Table/MyTable';
import createColumn from './data/createColumn';

function Index({ users }) {
  const columns = createColumn();
  
  return (
    <div className='content-box'>
      <Breadcrumb pageName='User' prevPage={authorizationBreadcrumb} />
      <Link className='btn btn--primary' href={route('users.create')}> Create </Link>

      <MyTable data={users.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='User' children={page} />
);

export default Index;
