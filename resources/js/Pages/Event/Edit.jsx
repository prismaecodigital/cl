import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { eventBreadcrumb } from '@/utils/breadcrumbContent';
import EventForm from './component/EventForm';

function Edit({ event }) {
  const data = {
		name: event.name,
	};
  
  return (
    <div className='content-box'>
			<Breadcrumb title='Event Edit' pageName='Edit' prevPage={eventBreadcrumb} />
      
      <EventForm
        method='patch'
        initialValues={data}
        routeName='events.update'
        event={event}
      />
    </div>
  );
}

Edit.layout = page => (
  <DashboardLayout title='Organization Edit' children={page} />
);

export default Edit;
