import React from 'react';
import { useForm } from '@inertiajs/react';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import LoadingButton from '@/Components/Button/LoadingButton';

export default function RoomForm ({ method, initialValues, routeName, room='' }) {
  const { name } = initialValues;
  const { data, setData, post, patch, errors, processing } = useForm({
    name: name || '',
  });

  const submit = (e) => {
    e.preventDefault();
    if (method === 'post') {
      post(route(routeName));
    } else if (method === 'patch') {
      patch(route(routeName, room));
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
          placeholder='Room Name...'
          onChange={(e) => setData('name', e.target.value)}
        />
      </FieldGroup>

      <LoadingButton disabled={processing}>
        Submit
      </LoadingButton>
    </form>
  );
}