import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import UserForm from '../User/component/UserForm';

const Index = ({ user }) => {
  const prevPage = [{ link: route('dashboard'), text: 'Dashboard' }];
  const { username, fullname, email, phone, has_roles } = user;
  const data = {
    username: username,
    fullname: fullname,
    email: email,
    phone: phone,
    password: '',
    role: has_roles.map(item => item.id),
  };

  return (
    <div className='content-box'>
      <Breadcrumb title='My Profile' pageName='Profile' prevPage={prevPage} />
      <UserForm
        method='put'
        initialValues={data}
        routeName='users.update'
        user={user}
        page='Profile'
      />
    </div>
  );
}

Index.layout = (page) => (
  <DashboardLayout title='My Profile' children={page} />
);

export default Index;