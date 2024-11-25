import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { eventBreadcrumb } from '@/utils/breadcrumbContent';
import EventForm from './component/EventForm';

function Create() {
  const data = {
		name: '',
	};

  return (
    <div className='content-box'>
			<Breadcrumb title='Event Create' pageName='Create' prevPage={eventBreadcrumb} />
      
      <EventForm
        method='post'
        initialValues={data}
        routeName='events.store'
      />
    </div>
  );
}

Create.layout = page => (
  <DashboardLayout title='Event Create' children={page} />
);

export default Create;
