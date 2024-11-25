import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { roomBreadcrumb } from '@/utils/breadcrumbContent';
import RoomForm from './component/RoomForm';

function Create() {
  const data = {
		name: '',
	};

  return (
    <div className='content-box'>
			<Breadcrumb title='Room Create' pageName='Create' prevPage={roomBreadcrumb} />
      
      <RoomForm
        method='post'
        initialValues={data}
        routeName='rooms.store'
      />
    </div>
  );
}

Create.layout = page => (
  <DashboardLayout title='Room Create' children={page} />
);

export default Create;
