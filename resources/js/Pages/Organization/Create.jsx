import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import OrganizationForm from './component/OrganizationForm';

function Create () {
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
    { link: route('organizations.index'), text: 'Organization' },
  ];

  const data = {
    name: '',
    address: '',
  };

  return (
    <div className='content-box'>
      <Breadcrumb title='Create Organization' pageName='Create' prevPage={breadcrumb} />

      <OrganizationForm
        method='post'
        initialValues={data}
        routeName='organizations.store'
      />
    </div>
  );
}

Create.layout = page => (
  <DashboardLayout title='Organization Create' children={page} />
);

export default Create;
