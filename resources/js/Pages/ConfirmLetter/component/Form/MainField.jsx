import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { letterBreadcrumb } from '@/utils/breadcrumbContent';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import Select from 'react-select';
import DateTimePicker from '@/Components/Form/DateTimePicker';
import convertOptions from '@/utils/convertOptions';

export default function MainField({ data, setData, errors, pageName, selectOption, readOnly=false }) {
  const { user } = usePage().props.auth;
  const [ phone, setPhone ] = useState(data.phone);
  const [ address, setAddress ] = useState(data.address);
  const [ contacts, setContact ] = useState([]);
  const { organizations, events, rooms } = selectOption;

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

  const handleAttendanceChange = (e) => {
    const value = e.target.value;

    // Set data if value matches the regex, otherwise do nothing
    /^[0-9]{0,10}$/.test(value) && setData('attendance', value ? parseInt(value, 10) : '');
  };

  const handlePaymentChange = (option) => {
    setData((prevData) => ({
			...prevData,
			payment: option.value,
			paymentSelected: option,
		}));
  }

  return (
    <div className='content-box mb-2'>
      <Breadcrumb title={`${pageName} Confirm Letter`} pageName={pageName} prevPage={letterBreadcrumb} />

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
          isDisabled={readOnly}
        />
      </FieldGroup>

      {/* Address */}
      <FieldGroup
        label='Address'
        name='address'
      >
        <TextInput
          name='address'
          value={address}
          isDisabled={true}
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
          isDisabled={readOnly}
        />
      </FieldGroup>

      {/* Phone */}
      <FieldGroup
        label='Phone'
        name='phone'
      >
        <TextInput
          name='phone'
          value={phone}
          isDisabled={true}
          className='mt-1 block w-full'
          placeholder='PIC phone...'
        />
      </FieldGroup>
      
      {/* Check In */}
      <FieldGroup 
        label='Check In'
        name='check_in'
        error={errors.check_in}
        isPrimary={true}
      >
        <DateTimePicker
          minDate='today'
          value={data.check_in}
          onChange={(value) => {
            const dateValue = new Date(value);
            setData('check_in', dateValue.toISOString());
          }}
          className='mt-1 block w-full'
          name='check_in'
          placeholder='Check In...'
          required
          isDisable={readOnly}
        />
      </FieldGroup>

      {/* Check Out */}
      <FieldGroup 
        label='Check Out'
        name='check_out'
        error={errors.check_out}
        isPrimary={true}
      >
        <DateTimePicker
          minDate='today'
          value={data.check_out}
          onChange={(value) => {
            const dateValue = new Date(value);
            setData('check_out', dateValue.toISOString());
          }}
          className='mt-1 block w-full'
          name='check_in'
          placeholder='Check Out...'
          required
          isDisable={readOnly}
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
          isDisabled={readOnly}
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
          isDisabled={readOnly}
        />
      </FieldGroup>

      {/* Attendance */}
      <FieldGroup 
        label='Attendance'
        name='attendance'
        error={errors.attendance}
        isPrimary={true}
        required
      >
        <TextInput
          name='attendance'
          type='text'
          value={data.attendance || ''}
          className='mt-1 block w-full'
          required
          autoComplete='attendance'
          placeholder='Estimated Attendance...'
          pattern='^[0-9]{0,10}$'
          onChange={handleAttendanceChange}
          isDisabled={readOnly}
        />
      </FieldGroup>

      {/* Payment */}
      <FieldGroup
        label='Payment'
        name='payment'
        error={errors.payment}
        isPrimary={true}
      >
        <Select
          options={[
            {value: 'cash', label: 'Cash' },
            {value: 'transfer', label: 'Transfer' },
          ]}
          value={data.paymentSelected}
          onChange={handlePaymentChange}
          className='mt-1 block w-full'
          required
          menuPortalTarget={document.body} 
          menuPosition={'fixed'}
          isDisabled={readOnly}
        />
      </FieldGroup>

      {/* Sales */}
      <FieldGroup
        label='Sales'
        name='sales'
      >
        <TextInput
          name='sales'
          value={user.fullname}
          isDisabled={true}
          className='mt-1 block w-full'
        />
      </FieldGroup>
    </div>
  );
}