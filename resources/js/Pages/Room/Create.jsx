import React from 'react';
import { useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import LoadingButton from '@/Components/Button/LoadingButton';

function Create() {
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
		{ link: route('rooms.index'), text: 'Room' },
  ];

  const { data, setData, post, errors, processing } = useForm({
		name: '',
	});

  const submit = (e) => {
		e.preventDefault();
		post(route('rooms.store'));
	}

  return (
    <div className='content-box'>
			<Breadcrumb title='Room Create' pageName='Create' prevPage={breadcrumb} />
      
      <form onSubmit={submit} className="w-full">
        {/* Name */}
        <FieldGroup
          label='Name'
					name='name'
					error={errors.name}
					isPrimary={true}
          maxLength='70'
        >
          <TextInput
            id='name'
            name='name'
            className='mt-1 block w-full'
            value={data.name}
						isFocused
						autoComplete="name"
						placeholder="Room Name..."
            onChange={(e) => setData('name', e.target.value)}
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
  <DashboardLayout title='Room Create' children={page} />
);

export default Create;
