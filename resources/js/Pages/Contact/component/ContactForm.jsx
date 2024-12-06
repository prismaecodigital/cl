import React from 'react';
import { useForm } from '@inertiajs/react';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import Select from 'react-select';
import LoadingButton from '@/Components/Button/LoadingButton';

export default function ContactForm({ method, initialValues, routeName, organizations, contact='' }) {
  const { data, setData, post, patch, errors, processing } = useForm({
    ...initialValues
  });

  const handleOrganizationChange = (option) => {
		setData((prevData) => ({
			...prevData,
			organization: option.value,
			organizationSelected: option,
		}));
	}

  const submit = (e) => {
    e.preventDefault();
    if (method === 'post') {
      post(route(routeName));
    } else if (method === 'patch') {
      patch(route(routeName, contact));
    }
  };

  return (
    <form onSubmit={submit} className='w-full'>
      {/* Organization */}
      <FieldGroup
        label='Organization'
        name='organization'
        error={errors.organization}
        isPrimary={true}
      >
        <Select
          options={organizations}
          value={data.organizationSelected}
          onChange={handleOrganizationChange}
          className="mt-1 block w-full"
          required
        />
      </FieldGroup>

      {/* Name */}
      <FieldGroup
        label='Name'
        name='name'
        error={errors.name}
        isPrimary={true}
        maxLength='60'
        valueLength={data.name.length}
      >
        <TextInput
          id='name'
          name='name'
          className='mt-1 block w-full'
          value={data.name}
          autoComplete='name'
          placeholder='PIC Name...'
          onChange={(e) => setData('name', e.target.value)}
        />
      </FieldGroup>

      {/* Phone */}
      <FieldGroup
        label='Phone'
        name='phone'
        error={errors.phone}
        isPrimary={true}
        maxLength='16'
        valueLength={data.phone.length}
      >
        <TextInput
          id='phone'
          name='phone'
          className='mt-1 block w-full'
          value={data.phone}
          autoComplete='phone'
          placeholder='Phone Number...'
          onChange={(e) => setData('phone', e.target.value)}
        />
      </FieldGroup>

      {/* FAX */}
      <FieldGroup
        label='FAX'
        name='fax'
        error={errors.fax}
        isPrimary={true}
        maxLength='25'
        valueLength={data.fax.length}
      >
        <TextInput
          id='fax'
          name='fax'
          className='mt-1 block w-full'
          value={data.fax}
          autoComplete='fax'
          placeholder='FAX...'
          onChange={(e) => setData('fax', e.target.value)}
        />
      </FieldGroup>

      {/* Email */}
      <FieldGroup
        label='Email'
        name='email'
        error={errors.email}
        isPrimary={true}
        maxLength='50'
        valueLength={data.email.length}
      >
        <TextInput
          id='email'
          name='email'
          type={data.email === '-' ? 'text' : 'email'}
          className='mt-1 block w-full'
          value={data.email}
          autoComplete='email'
          placeholder='PIC Email...'
          onChange={(e) => setData('email', e.target.value)}
        />
      </FieldGroup>

      <LoadingButton disabled={processing}>
        Submit
      </LoadingButton>
    </form>
  );
}