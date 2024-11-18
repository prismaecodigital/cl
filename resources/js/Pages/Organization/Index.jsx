import React from 'react';
import { Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { databaseBreadcrumb } from '@/utils/breadcrumbContent';
import MyTable from '@/Components/Table/MyTable';
import createColumn from './data/createColumn';

function Index({ organizations }) {
  const columns = createColumn();
  
  return (
    <div className='content-box'>
      <Breadcrumb pageName='Organization' prevPage={databaseBreadcrumb} />
      <Link className='btn btn--primary' href={route('organizations.create')}> Create </Link>

      <MyTable data={organizations.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Organization' children={page} />
);

export default Index;
