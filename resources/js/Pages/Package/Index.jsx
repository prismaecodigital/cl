import React from 'react';
import { Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import MyTable from '@/Components/Table/MyTable';
import createColumn from './data';
import { databaseBreadcrumb } from '@/utils/breadcrumbContent';

function Index({ packages }) {
  const columns = createColumn();
  
  return (
    <div className='content-box'>
      <Breadcrumb pageName='Package' prevPage={databaseBreadcrumb} />
      <Link className='btn btn--primary' href={route('packages.create')}> Create </Link>

      <MyTable data={packages.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Package' children={page} />
);

export default Index;
