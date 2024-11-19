import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { picBreadcrumb } from '@/utils/breadcrumbContent';
import ContactForm from './component/ContactForm';

function Create({ organizations }) {
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
			<Breadcrumb title='Room Create' pageName='Create' prevPage={picBreadcrumb} />
      
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
