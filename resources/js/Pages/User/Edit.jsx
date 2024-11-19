import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { userBreadcrumb } from '@/utils/breadcrumbContent';
import UserForm from './component/UserForm';
import convertOptions from '@/utils/convertOptions';

function Edit({ roles, user }) {
  const { username, fullname, email, phone, has_roles } = user;
  const data = {
		username: username,
		fullname: fullname,
    email: email,
    phone: phone,
    password: '',
    role: has_roles.map(item => item.value),
    roleSelected: convertOptions(has_roles),
	};

  return (
    <div className='content-box'>
			<Breadcrumb title='User Edit' pageName='Edit' prevPage={userBreadcrumb} />

      <UserForm
        method='patch'
        initialValues={data}
        routeName='users.update'
        roles={roles}
        user={user}
      />
    </div>
  );
}

Edit.layout = page => (
  <DashboardLayout title='User Edit' children={page} />
);

export default Edit;
