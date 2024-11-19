import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { roleBreadcrumb } from '@/utils/breadcrumbContent';
import RoleForm from './component/RoleForm';
import convertOptions from '@/utils/convertOptions';

function Edit({ permissions, role }) {
  const { name, has_permissions } = role
  const data = {
    permission: has_permissions.map(item => item.id),
    permissionSelected: convertOptions(has_permissions),
		name: name,
	};

  return (
    <div className='content-box'>
			<Breadcrumb title='Role Edit' pageName='Edit' prevPage={roleBreadcrumb} />
      
      <RoleForm 
        method='patch'
        initialValues={data}
        permissions={permissions}
        routeName='roles.update'
        role={role}
      />
    </div>
  );
}

Edit.layout = page => (
  <DashboardLayout title='Room Edit' children={page} />
);

export default Edit;
