import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import ContactForm from './component/ContactForm';

function Edit({ contact, organizations }) {
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
		{ link: route('contacts.index'), text: 'Contact' },
  ];

  console.log(contact);
  const { name, phone, fax, email, organization } = contact;
  const data = {
    organization: organization.id,
    organizationSelected: {
      value: organization.id,
      label: organization.name,
    },
		name: name,
    phone: phone,
    fax: fax,
    email: email
	};
  
  return (
    <div className='content-box'>
			<Breadcrumb title='Contact Edit' pageName='Edit' prevPage={breadcrumb} />
      
      <ContactForm
        method='patch'
        initialValues={data}
        routeName='contacts.update'
        organizations={organizations}
        contact={contact}
      />
    </div>
  );
}

Edit.layout = page => (
  <DashboardLayout title='Contact Edit' children={page} />
);

export default Edit;
