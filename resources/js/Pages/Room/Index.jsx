import React from 'react';
import { Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { databaseBreadcrumb } from '@/utils/breadcrumbContent';
import MyTable from '@/Components/Table/MyTable';
import createColumn from './data';

function Index({ rooms }) {
  const columns = createColumn();
  
  return (
    <div className='content-box'>
      <Breadcrumb pageName='Room' prevPage={databaseBreadcrumb} />
      <Link className='btn btn--primary' href={route('rooms.create')}> Create </Link>

      <MyTable data={rooms.data} columns={columns} />
    </div>
  ); 
}

Index.layout = page => (
  <DashboardLayout title='Room' children={page} />
);

export default Index;
