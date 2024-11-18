import React from 'react';
import { Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { authorizationBreadcrumb } from '@/utils/breadcrumbContent';
import MyTable from '@/Components/Table/MyTable';
import createColumn from './data';

function Index({ permissions }) {
  const columns = createColumn();

  return (
    <div className='content-box'>
      <Breadcrumb pageName='Permission' prevPage={authorizationBreadcrumb} />
      <Link className='btn btn--primary' href={route('permissions.create')}> Create </Link>

      <MyTable data={permissions.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Permission' children={page} />
);

export default Index;
