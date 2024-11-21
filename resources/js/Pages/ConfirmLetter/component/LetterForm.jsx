import React, { useState } from 'react';
import { usePage, useForm } from '@inertiajs/react';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import TextArea from '@/Components/Form/TextArea';
import Select from 'react-select';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import { letterBreadcrumb } from '@/utils/breadcrumbContent';
import DateTimePicker from '@/Components/Form/DateTimePicker';
import LoadingButton from '@/Components/Button/LoadingButton';
import convertOptions from '@/utils/convertOptions';
import { PackagePlus, Plus, Trash2 } from 'lucide-react';

export default function LetterForm({ selectOption, initialValues, letter='' }){
  const { user } = usePage().props.auth;
  const { organizations, events, rooms, packages } = selectOption;
  
  const { data, setData, post, patch, errors, processing } = useForm({
    ...initialValues,
  });

  const [uom, setUom] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [contacts, setContact] = useState([]);

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
            onChange={(value) => setData('check_in', value)}
            className='mt-1 block w-full'
            name='check_in'
            placeholder='Check In...'
            required
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
            onChange={(value) => setData('check_out', value)}
            className='mt-1 block w-full'
            name='check_in'
            placeholder='Check Out...'
            required
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
          />
        </FieldGroup>

        {/* Sales */}
        <FieldGroup
          label='Sales'
          name='sales'
        >
          <TextInput
            id='sales'
            name='sales'
            value={user.fullname}
            disabled={true}
            className='mt-1 block w-full'
          />
        </FieldGroup>
      </div>

      {/* Note field */}
      <div className='content-box mb-2 z-0'>
        {/* Section Title */}
        <div className='flex flex-row items-center justify-between gap-2'>
          <h2 className='text--sub-heading'>Notes</h2>
          <span className='btn btn--sm btn--primary'>
            <Plus strokeWidth={3} size={16} />
          </span>
        </div>
        
        {/* Notes */}
        {data.notes.map((note, noteIndex) => (
          <div 
            key={noteIndex} 
            className='pt-2 pb-3 border-b-2 border-slate-200'
          >
            <div className='flex flex-row gap-2 items-end'>
              {/* Start Date */}
              <FieldGroup 
                label='Start Date'
                name={`notes.${noteIndex}.start_date`}
                error={errors[`notes.${noteIndex}.start_date`]}
                isPrimary={true}
                className='flex-1 !mb-0'
              >
                <DateTimePicker
                  minDate='today'
                  name={`notes.${noteIndex}.start_date`}
                  value={note.start_date}
                  onChange={(value) => {
                    const notes = [...data.notes];
                    notes[noteIndex].start_date = value;
                    setData('notes', notes);
                  }}
                  className='mt-1 block w-full'
                  placeholder='Start Date...'
                  required
                />
              </FieldGroup>

              {/* End Date */}
              <FieldGroup 
                label='End Date'
                name={`notes.${noteIndex}.end_date`}
                error={errors[`notes.${noteIndex}.start_date`]}
                className='flex-1 !mb-0'
              >
                <DateTimePicker
                  minDate='today'
                  name={`notes.${noteIndex}.end_date`}
                  value={note.end_date}
                  onChange={(value) => {
                    const notes = [...data.notes];
                    notes[noteIndex].end_date = value;
                    setData('notes', notes);
                  }}
                  className='mt-1 block w-full'
                  placeholder='End Date...'
                />
              </FieldGroup>
              <span className='btn btn--sm btn--success py-3'>
                <PackagePlus strokeWidth={3} size={18}/>
              </span>
              <span className='btn btn--sm btn--danger py-3'>
                <Trash2 strokeWidth={3} size={18}/>
              </span>
              
            </div>
                
            {/* Package Lists */}
            {note.lists.map((packageItem, packageIndex) => (
              <div key={packageIndex} className='flex flex-row gap-2 pt-3'>
                {/* Packages */}
                <FieldGroup
                  label='Packages'
                  name={`notes.${noteIndex}.lists.${packageIndex}.package`}
                  error={errors[`notes.${noteIndex}.lists.${packageIndex}.package`]}
                >
                  <Select
                    options={convertOptions(packages)}
                    value={packageItem.packageSelected}
                    className='mt-1 block w-full'
                    menuPortalTarget={document.body} 
                    menuPosition={'fixed'}
                    onChange={(option) => {
                      const notes = [...data.notes];
                      notes[noteIndex].lists[packageIndex].package = option.value;
                      notes[noteIndex].lists[packageIndex].packageSelected = option;
                      setData('notes', notes);
                      setUom(packages.find(item => item.id === option.value)?.uom);
                    }}
                  />
                </FieldGroup>

                {/* Qty */}
                <FieldGroup
                  label='QTY'
                  name={`notes.${noteIndex}.lists.${packageIndex}.qty`}
                  error={errors[`notes.${noteIndex}.lists.${packageIndex}.qty`]}
                >
                  <TextInput
                    id={`notes.${noteIndex}.lists.${packageIndex}.qty`}
                    name={`notes.${noteIndex}.lists.${packageIndex}.qty`}
                    className='mt-1 block w-full'
                    value={packageItem.qty}
                    isFocused
                    autoComplete='name'
                    placeholder='Organization Name...'
                    onChange={(e) => setData('name', e.target.value)}
                  />
                </FieldGroup>

                {/* Unit */}
                <FieldGroup
                  label='Unit'
                  name='unit'
                >
                  <TextInput
                    value={uom}
                    disabled={true}
                    className='mt-1 block w-full'
                    placeholder='Unit...'
                  />
                </FieldGroup>

                {/* Price */}
                <FieldGroup
                  label='Price'
                  name='name'
                  error={errors.name}
                >
                  <TextInput
                    id='name'
                    name='name'
                    className='mt-1 block w-full'
                    value={data.name}
                    required
                    isFocused
                    autoComplete='name'
                    placeholder='Organization Name...'
                    onChange={(e) => setData('name', e.target.value)}
                  />
                </FieldGroup>

                {/* Note */}
                <FieldGroup
                  label='Notes'
                  name={`notes.${noteIndex}.lists.${packageIndex}.note`}
                  error={errors[`notes.${noteIndex}.lists.${packageIndex}.note`]}
                  className='basis-1'
                >
                  <TextArea
                    id={`notes.${noteIndex}.lists.${packageIndex}.note`}
                    name={`notes.${noteIndex}.lists.${packageIndex}.note`}
                    className='mt-1 block w-full'
                    value={packageItem.note}
                    required
                    autoComplete='note'
                    placeholder='Package Note...'
                    onChange={(e) => {
											const notes = [...data.notes];
											notes[noteIndex].lists[packageIndex].note = e.target.value;
											setData('notes', notes);
										}}
                  />
                </FieldGroup>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Schedule field */}
      <div className='content-box mb-2 z-0'>
        {/* Section Title */}
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text--sub-heading'>Food & Beverage Schedules</h2>
          <span className='btn btn--sm btn--primary'>
            <Plus strokeWidth={3} size={16} />
          </span>
        </div>

        <LoadingButton disabled={processing}>
          Submit
        </LoadingButton>
      </div>
    </form>
  );
}