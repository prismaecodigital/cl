import React from 'react';
import { router, Link } from '@inertiajs/react';
import createColumn from './data/createColumn';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import MyTable from '@/Components/Table/MyTable';

function Index({ auth, letters }) {
  const { permissions } = auth;
  const columns = createColumn();
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' }
  ];
  
  return (
    <div className='content-box'>
      <Breadcrumb pageName='Confirmation Letter' prevPage={breadcrumb} />
      <Link className='btn btn--primary' href={route('confirm-letter.create')}> Create </Link>

      <MyTable
        data={letters.data}
        columns={columns}
        {...(permissions.includes('letter_show') && {
          handleClick: item => {
            router.visit(route('confirm-letter.show', item.id));
          },
        })}
      />
    </div>
  );
}

Index.layout = page => (
  <DashboardLayout title='Confirm Letter' children={page} />
);

export default Index;
