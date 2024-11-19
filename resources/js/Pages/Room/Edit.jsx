import React from 'react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { roomBreadcrumb } from '@/utils/breadcrumbContent';
import RoomForm from './component/RoomForm';

function Edit({ room }) {
  const data = {
		name: room.name,
	};
  
  return (
    <div className='content-box'>
			<Breadcrumb title='Room Edit' pageName='Edit' prevPage={roomBreadcrumb} />
      
      <RoomForm
        method='patch'
        initialValues={data}
        routeName='rooms.update'
        room={room}
      />
    </div>
  );
}

Edit.layout = page => (
  <DashboardLayout title='Room Edit' children={page} />
);

export default Edit;
