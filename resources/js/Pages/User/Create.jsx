import React from 'react';
import { useForm } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import Select from 'react-select';
import LoadingButton from '@/Components/Button/LoadingButton';

function Create({ roles }) {
  const breadcrumb = [
    { link: route('dashboard'), text: 'Dashboard' },
		{ link: route('users.index'), text: 'User' },
  ];

  const { data, setData, post, errors, processing } = useForm({
		username: '',
		fullname: '',
    email: '',
    phone: '',
    password: '',
    role: '',
    roleSelected: '',
	});

  const handleRoleChange = (option) => {
    const roleId = option.map(item => item.value);
		setData((prevData) => ({
			...prevData,
			role: roleId,
			roleSelected: option,
		}));
	}

  const submit = (e) => {
		e.preventDefault();
		post(route('users.store'));
	}

  return (
    <div className='content-box'>
			<Breadcrumb title='User Create' pageName='Create' prevPage={breadcrumb} />
      
      <form onSubmit={submit} className='w-full'>
        {/* Username */}
        <FieldGroup
          label='Username'
					name='username'
					error={errors.username}
					isPrimary={true}
          maxLength='25'
        >
          <TextInput
            id='username'
            name='username'
            className='mt-1 block w-full'
            value={data.username}
						isFocused
						autoComplete='username'
						placeholder='Username...'
            onChange={(e) => setData('username', e.target.value)}
          />
        </FieldGroup>

        {/* Role */}
        <FieldGroup
          label='Role'
					name='role'
					error={errors.role}
					isPrimary={true}
        >
          <Select
            id='role'
            options={roles}
            value={data.roleSelected}
            onChange={handleRoleChange}
						className="mt-1 block w-full"
            isMulti
						required
          />
        </FieldGroup>

        {/* Fullname */}
        <FieldGroup
          label='Fullname'
					name='fullname'
					error={errors.fullname}
					isPrimary={true}
          maxLength='60'
        >
          <TextInput
            id='fullname'
            name='fullname'
            className='mt-1 block w-full'
            value={data.fullname}
						autoComplete='fullname'
						placeholder='Fullname...'
            onChange={(e) => setData('fullname', e.target.value)}
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
						placeholder='User email...'
            onChange={(e) => setData('email', e.target.value)}
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
						placeholder='User phone...'
            onChange={(e) => setData('phone', e.target.value)}
          />
        </FieldGroup>

        {/* Password */}
        <FieldGroup
          label='Password'
					name='password'
					error={errors.password}
					isPrimary={true}
        >
          <TextInput
            id='password'
            name='password'
            type='password'
            className='mt-1 block w-full'
            value={data.password}
						autoComplete='password'
						placeholder='User password...'
            onChange={(e) => setData('password', e.target.value)}
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
  <DashboardLayout title='User Create' children={page} />
);

export default Create;
