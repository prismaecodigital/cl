import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { organizationBreadcrumb } from '@/utils/breadcrumbContent';
import OrganizationForm from './component/OrganizationForm';

function Edit({ organization }) {
  const { id, name, address } = organization;
  const data = {
		name: name,
		address: address
	};
  
  return (
    <div className='content-box'>
			<Breadcrumb title='Organization Edit' pageName='Edit' prevPage={organizationBreadcrumb} />
      
      <OrganizationForm
        method='patch'
        initialValues={data}
        routeName='organizations.update'
        organization={organization}
      />
    </div>
  );
}

Edit.layout = page => (
  <DashboardLayout title='Organization Edit' children={page} />
);

export default Edit;
