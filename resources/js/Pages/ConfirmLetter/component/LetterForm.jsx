import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import Select from 'react-select';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { letterBreadcrumb } from '@/utils/breadcrumbContent';
import LoadingButton from '@/Components/Button/LoadingButton';
import convertOptions from '@/utils/convertOptions';

export default function LetterForm({ selectOption, initialValues, letter='' }){
  const { organizations, events, rooms } = selectOption;
  const fieldData = {...initialValues};
  const { data, setData, post, patch, errors, processing } = useForm({
    ...fieldData
  });

  const [address, setAddress] = useState('');
  const [contacts, setContact] = useState([]);
  const [phone, setPhone] = useState('');
  const handleOrganizationChange = async (option) => {
    const organizationId = option.value;
    
    setData((prevData) => ({
      ...prevData,
			organization: organizationId,
			organizationSelected: option,
      contact: '',
      contactSelected: '',
		}));
    setPhone('');
    setContact([]);
    setAddress(organizations.find(item => item.id === organizationId)?.address);

    try {
      const response = await axios.get(route('contactOrganization'), {
        params: {organizationId: organizationId},
      });

      if(response.status === 200) {
        setContact(response.data);
      }
    } catch (error) {
      console.error(error, 'There\'s something was wrong when organization change');
    }
  }

  const handleContactChange = (option) => {
    const contactId = option.value;
    
    setData((prevData) => ({
      ...prevData,
			contact: contactId,
			contactSelected: option,
		}));
    setPhone(contacts.find(item => item.id === contactId)?.phone);
  }

  const handleEventChange = (option) => {
    setData((prevData) => ({
			...prevData,
			event: option.value,
			eventSelected: option,
		}));
  }

  const handleRoomChange = (option) => {
    setData((prevData) => ({
			...prevData,
			room: option.value,
			roomSelected: option,
		}));
  }

  const submit = (e) => {
    e.preventDefault();
    if (method === 'post') {
      post(route(routeName));
    } else if (method === 'patch') {
      patch(route(routeName, letter));
    }
  };

  return (
    <form onSubmit={submit} className='w-full'>
      {/* Main field */}
      <div className='content-box mb-2'>
        <Breadcrumb title='Create Confirm Letter' pageName='Create' prevPage={letterBreadcrumb} />

        {/* Organization */}
        <FieldGroup
          label='Organization'
          name='organization'
          error={errors.organization}
          isPrimary={true}
        >
          <Select
            options={convertOptions(organizations)}
            value={data.organizationSelected}
            onChange={handleOrganizationChange}
            className='mt-1 block w-full'
            required
            menuPortalTarget={document.body} 
            menuPosition={'fixed'}
          />
        </FieldGroup>

        {/* Address */}
        <FieldGroup
          label='Address'
          name='address'
        >
          <TextInput
            id='address'
            name='address'
            value={address}
            disabled={true}
            className='mt-1 block w-full'
            placeholder='Organization address...'
          />
        </FieldGroup>

        {/* PIC */}
        <FieldGroup
          label='PIC'
          name='pic'
          error={errors.contact}
          isPrimary={true}
        >
          <Select
            options={convertOptions(contacts)}
            value={data.contactSelected}
            onChange={handleContactChange}
            className='mt-1 block w-full'
            required
            menuPortalTarget={document.body} 
            menuPosition={'fixed'}
          />
        </FieldGroup>

        {/* Phone */}
        <FieldGroup
          label='Phone'
          name='phone'
        >
          <TextInput
            id='phone'
            name='phone'
            value={phone}
            disabled={true}
            className='mt-1 block w-full'
            placeholder='PIC phone...'
          />
        </FieldGroup>

        {/* Event */}
        <FieldGroup
          label='Event'
          name='event'
          error={errors.event}
          isPrimary={true}
        >
          <Select
            options={events}
            value={data.eventSelected}
            onChange={handleEventChange}
            className='mt-1 block w-full'
            required
            menuPortalTarget={document.body} 
            menuPosition={'fixed'}
          />
        </FieldGroup>

        {/* Room */}
        <FieldGroup
          label='Room'
          name='room'
          error={errors.room}
          isPrimary={true}
        >
          <Select
            options={rooms}
            value={data.roomSelected}
            onChange={handleRoomChange}
            className='mt-1 block w-full'
            required
            menuPortalTarget={document.body} 
            menuPosition={'fixed'}
          />
        </FieldGroup>
      </div>

      {/* Note field */}
      <div className='content-box mb-2 z-0'>
        <h2 className='text--sub-heading'>Notes</h2>
      </div>

      {/* Schedule field */}
      <div className='content-box mb-2 z-0'>
        <h2 className='text--sub-heading'>Food & Beverage Schedules</h2>

        <LoadingButton disabled={processing}>
          Submit
        </LoadingButton>
      </div>
    </form>
  );
}