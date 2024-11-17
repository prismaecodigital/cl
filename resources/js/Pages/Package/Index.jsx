import React from 'react';
import createColumn from './data';
import { Link } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import MyTable from '@/Components/Table/MyTable';

function Index({ auth, packages }) {
  const columns = createColumn();
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
		{ link: '#', text: 'Database' },
  ];
  
  return (
    <div className='content-box'>
      <Breadcrumb pageName='Package' prevPage={breadcrumb} />
      <Link className='btn btn--primary' href={route('packages.create')}> Create </Link>

      <MyTable data={packages.data} columns={columns} />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Package' children={page} />
);

export default Index;
