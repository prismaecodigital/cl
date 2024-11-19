import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { permissionBreadcrumb } from '@/utils/breadcrumbContent';
import PermissionForm from './component/PermissionForm';

function Edit({ permission }) {
  const data = {
		name: permission.name,
	};

  return (
    <div className='content-box'>
			<Breadcrumb title='Permission Edit' pageName='Edit' prevPage={permissionBreadcrumb} />
      
      <PermissionForm
        method='patch'
        initialValues={data}
        routeName='permissions.update'
        permission={permission}
      />
    </div>
  );
}

Edit.layout = page => (
  <DashboardLayout title='Permission Edit' children={page} />
);

export default Edit;
