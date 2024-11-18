import React from 'react';
import { useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import Select from 'react-select';
import LoadingButton from '@/Components/Button/LoadingButton';

function Create({ permissions }) {
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
		{ link: route('roles.index'), text: 'Role' },
  ];

  const { data, setData, post, errors, processing } = useForm({
    permission: '',
    permissionSelected: '',
		name: '',
	});

  const handlePermissionChange = (option) => {
    const permissionId = option.map(item => item.value);
		setData((prevData) => ({
			...prevData,
			permission: permissionId,
			permissionSelected: option,
		}));
	}

  const submit = (e) => {
		e.preventDefault();
		post(route('roles.store'));
	}

  return (
    <div className='content-box'>
			<Breadcrumb title='Role Create' pageName='Create' prevPage={breadcrumb} />
      
      <form onSubmit={submit} className='w-full'>
        {/* Name */}
        <FieldGroup
          label='Name'
					name='name'
					error={errors.name}
					isPrimary={true}
          maxLength='20'
        >
          <TextInput
            id='name'
            name='name'
            className='mt-1 block w-full'
            value={data.name}
						autoComplete='name'
						placeholder='Role Name...'
            onChange={(e) => setData('name', e.target.value)}
          />
        </FieldGroup>

        {/* Permission */}
        <FieldGroup
          label='Permission'
					name='permission'
					error={errors.permission}
					isPrimary={true}
        >
          <Select
            id='permission'
            options={permissions}
            value={data.permissionSelected}
            onChange={handlePermissionChange}
						className="mt-1 block w-full"
            isMulti
						required
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
