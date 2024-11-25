import React from 'react';
import { useForm } from '@inertiajs/react';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import TextArea from '@/Components/Form/TextArea';
import LoadingButton from '@/Components/Button/LoadingButton';

export default function OrganizationForm ({ method, initialValues, routeName, organization='' }) {
  const { data, setData, post, patch, errors, processing } = useForm({
    ...initialValues
  });

  const submit = (e) => {
    e.preventDefault();
    if (method === 'post') {
      post(route(routeName));
    } else if (method === 'patch') {
      patch(route(routeName, organization));
    }
  };

  return (
    <form onSubmit={submit} className='w-full'>
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
          autoComplete='name'
          placeholder='Organization Name...'
          onChange={(e) => setData('name', e.target.value)}
        />
      </FieldGroup>

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
          autoComplete='address'
          placeholder='Organization Address...'
          onChange={(e) => setData('address', e.target.value)}
        />
      </FieldGroup>

      <LoadingButton disabled={processing}>
        Submit
      </LoadingButton>
    </form>
  );
}