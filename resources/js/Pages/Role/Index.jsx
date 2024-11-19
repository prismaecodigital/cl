import React from 'react';
import { Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import MyTable from '@/Components/Table/MyTable';
import createColumn from './data/createColumn';
import { authorizationBreadcrumb } from '@/utils/breadcrumbContent';

function Index({ roles }) {
  const columns = createColumn();
  
  return (
    <div className='content-box'>
      <Breadcrumb pageName='Role' prevPage={authorizationBreadcrumb} />
      <Link className='btn btn--primary' href={route('roles.create')}> Create </Link>

      <MyTable data={roles.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Role' children={page} />
);

export default Index;
