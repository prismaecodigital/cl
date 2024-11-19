import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { organizationBreadcrumb } from '@/utils/breadcrumbContent';
import OrganizationForm from './component/OrganizationForm';

function Create () {
  const data = {
    name: '',
    address: '',
  };

  return (
    <div className='content-box'>
      <Breadcrumb title='Create Organization' pageName='Create' prevPage={organizationBreadcrumb} />

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
