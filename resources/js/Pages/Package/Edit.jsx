import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { packageBreadcrumb } from '@/utils/breadcrumbContent';
import PackageForm from './component/PackageForm';

function Edit({ packageData }) {
  const { name, uom } = packageData;
  const data ={
		name: name,
		uom: uom
	};

  return (
    <div className='content-box'>
			<Breadcrumb title='Package Edit' pageName='Edit' prevPage={packageBreadcrumb} />
      
      <PackageForm 
        method='patch'
        initialValues={data}
        routeName='packages.update'
        packageData={packageData}
      />
    </div>
  );
}

Edit.layout = page => (
  <DashboardLayout title='Package Edit' children={page} />
);

export default Edit;
