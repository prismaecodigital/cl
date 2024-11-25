import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { permissionBreadcrumb } from '@/utils/breadcrumbContent';
import PermissionForm from './component/PermissionForm';

function Create() {
  const data = {
		name: '',
	};

  return (
    <div className='content-box'>
			<Breadcrumb title='Permission Create' pageName='Create' prevPage={permissionBreadcrumb} />
      
      <PermissionForm
        method='post'
        initialValues={data}
        routeName='permissions.store'
      />
    </div>
  );
}

Create.layout = page => (
  <DashboardLayout title='Permission Create' children={page} />
);

export default Create;
