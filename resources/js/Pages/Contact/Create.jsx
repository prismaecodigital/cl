import React from 'react';
import { useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import Select from 'react-select';
import LoadingButton from '@/Components/Button/LoadingButton';

function Create({ organization }) {
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
		{ link: route('contacts.index'), text: 'Contact' },
  ];

  const { data, setData, post, errors, processing } = useForm({
    organization: '',
    organizationSelected: '',
		name: '',
    phone: '',
    fax: '',
    email: ''
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
		post(route('contacts.store'));
	}

  return (
    <div className='content-box'>
			<Breadcrumb title='Room Create' pageName='Create' prevPage={breadcrumb} />
      
      <form onSubmit={submit} className='w-full'>
        {/* Organization */}
        <FieldGroup
          label='Organization'
					name='organization'
					error={errors.organization}
					isPrimary={true}
        >
          <Select
            options={organization}
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
        >
          <TextInput
            id='email'
            name='email'
            type='email'
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
    </div>
  );
}

Create.layout = page => (
  <DashboardLayout title='Room Create' children={page} />
);

export default Create;
