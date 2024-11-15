import React from 'react';
import { useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import LoadingButton from '@/Components/Button/LoadingButton';
import TextArea from '@/Components/Form/TextArea';

function Create() {
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
		{ link: route('organizations.index'), text: 'Organization' },
  ];

  const { data, setData, post, errors, processing } = useForm({
		name: '',
		address: ''
	});

  const submit = (e) => {
		e.preventDefault();
		post(route('organizations.store'));
	}
  
  return (
    <div className='content-box'>
			<Breadcrumb title='Organization Create' pageName='Create' prevPage={breadcrumb} />
      
      <form onSubmit={submit} className="w-full">
        {/* Name */}
        <FieldGroup
          label='Name'
					name='name'
					error={errors.name}
					isPrimary={true}
          maxLength='100'
        >
          <TextInput
            id='name'
            name='name'
            className='mt-1 block w-full'
            value={data.name}
						required
						isFocused
						autoComplete="name"
						placeholder="Organization Name..."
            onChange={(e) => setData('name', e.target.value)}
          />
        </FieldGroup>

        {/* Address */}
        <FieldGroup
          label='Address'
					name='address'
					error={errors.address}
					isPrimary={true}
        >
          <TextArea
            id='address'
            name='address'
            className='mt-1 block w-full'
            value={data.address}
						required
						autoComplete="addres"
						placeholder="Organization Address..."
            onChange={(e) => setData('address', e.target.value)}
          />
        </FieldGroup>

        {/* <input type="submit" value="submit" /> */}
        <LoadingButton disabled={processing}>
          Submit
        </LoadingButton>
      </form>
    </div>
  );
}

Create.layout = page => (
  <DashboardLayout title='Organization Create' children={page} />
);

export default Create;
