import React from 'react';
import { useForm } from '@inertiajs/react';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import Select from 'react-select';
import LoadingButton from '@/Components/Button/LoadingButton';
import FileInput from '@/Components/Form/FileInput';

export default function UserForm({ method, initialValues, routeName, roles, user='' }) {
  const { data, setData, post, errors, processing } = useForm({
    ...initialValues
  });

  const handleRoleChange = (option) => {
    const roleId = option.map(item => item.value);
		setData((prevData) => ({
			...prevData,
			role: roleId,
			roleSelected: option,
		}));
	}

  const handleFileChange = (file, preview) => {
    setData((prevData) => ({
			...prevData,
			sign: file,
			signPreview: preview,
		}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (method === 'post') {
      post(route(routeName));
    } else if (method === 'patch') {
      post(route(routeName, user));
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      {/* Username */}
      <FieldGroup
        label='Username'
        name='username'
        error={errors.username}
        isPrimary={true}
        maxLength='25'
        valueLength={data.username.length}
      >
        <TextInput
          id='username'
          name='username'
          className='mt-1 block w-full'
          value={data.username}
          isFocused
          required
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
        valueLength={data.fullname.length}
      >
        <TextInput
          id='fullname'
          name='fullname'
          className='mt-1 block w-full'
          value={data.fullname}
          autoComplete='fullname'
          placeholder='Fullname...'
          onChange={(e) => setData('fullname', e.target.value)}
          required
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
          type='email'
          className='mt-1 block w-full'
          value={data.email}
          autoComplete='email'
          placeholder='User email...'
          onChange={(e) => setData('email', e.target.value)}
          required
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
          placeholder='User phone...'
          onChange={(e) => setData('phone', e.target.value)}
          required
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

      {/* Sign */}
      <FieldGroup
        label='Sign'
        name='sign'
        error={errors.sign}
      >
        <FileInput
          id='sign'
          name='sign'
          accept="image/*"
          onFileChange={handleFileChange}
          currentPreview={data.signPreview}
        />
      </FieldGroup>

      <LoadingButton
        type='submit'
        disabled={processing}
      >
        Submit
      </LoadingButton>
    </form>
  );
}
