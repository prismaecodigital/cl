import React from 'react';
import { Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { databaseBreadcrumb } from '@/utils/breadcrumbContent';
import MyTable from '@/Components/Table/MyTable';
import createColumn from './data/createColumn';

function Index({ events }) {
  const columns = createColumn();
  
  return (
    <div className='content-box'>
      <Breadcrumb pageName='Event' prevPage={databaseBreadcrumb} />
      <Link className='btn btn--primary' href={route('events.create')}> Create </Link>

      <MyTable data={events.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Event' children={page} />
);

export default Index;
