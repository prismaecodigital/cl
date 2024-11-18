import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import ContactForm from './component/ContactForm';

function Create({ organizations }) {
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
		{ link: route('contacts.index'), text: 'Contact' },
  ];

  const data = {
    organization: '',
    organizationSelected: '',
		name: '',
    phone: '',
    fax: '',
    email: ''
	};

  return (
    <div className='content-box'>
			<Breadcrumb title='Room Create' pageName='Create' prevPage={breadcrumb} />
      
      <ContactForm
        method='post'
        initialValues={data}
        routeName='contacts.store'
        organizations={organizations}
      />
    </div>
  );
}

Create.layout = page => (
  <DashboardLayout title='Room Create' children={page} />
);

export default Create;
