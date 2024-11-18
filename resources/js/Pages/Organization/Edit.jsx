import React from 'react';
import { useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import OrganizationForm from './component/OrganizationForm';

function Edit({ organization }) {
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
		{ link: route('organizations.index'), text: 'Organization' },
  ];

  const { id, name, address } = organization;
  const data = {
    id: id,
		name: name,
		address: address
	};
  
  return (
    <div className='content-box'>
			<Breadcrumb title='Organization Edit' pageName='Edit' prevPage={breadcrumb} />
      
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
