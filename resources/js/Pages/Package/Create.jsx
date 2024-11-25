import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { packageBreadcrumb } from '@/utils/breadcrumbContent';
import PackageForm from './component/PackageForm';

function Create() {
  const data ={
		name: '',
		uom: ''
	};

  return (
    <div className='content-box'>
			<Breadcrumb title='Package Create' pageName='Create' prevPage={packageBreadcrumb} />
      
      <PackageForm 
        method='post'
        initialValues={data}
        routeName='packages.store'
      />
    </div>
  );
}

Create.layout = page => (
  <DashboardLayout title='Package Create' children={page} />
);

export default Create;
