import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import UserForm from '../User/component/UserForm';

const Index = ({ user }) => {
  const prevPage = [{ link: route('dashboard'), text: 'Dashboard' }];
  const { username, fullname, email, phone } = user;
  const data = {
    username: username,
    fullname: fullname,
    email: email,
    phone: phone,
  };

  return (
    <div className='content-box'>
      <Breadcrumb title='My Profile' pageName='Profile' prevPage={prevPage} />
      <UserForm
        
      />
    </div>
  );
}

Index.layout = (page) => (
  <DashboardLayout title='My Profile' children={page} />
);

export default Index;