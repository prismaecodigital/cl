import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { userBreadcrumb } from '@/utils/breadcrumbContent';
import UserForm from './component/UserForm';

function Create({ roles }) {
  const data = {
		username: '',
		fullname: '',
    email: '',
    phone: '',
    password: '',
    role: '',
    roleSelected: '',
	};

  return (
    <div className='content-box'>
			<Breadcrumb title='User Create' pageName='Create' prevPage={userBreadcrumb} />

      <UserForm
        method='post'
        initialValues={data}
        routeName='users.store'
        roles={roles}
      />
    </div>
  );
}

Create.layout = page => (
  <DashboardLayout title='User Create' children={page} />
);

export default Create;
