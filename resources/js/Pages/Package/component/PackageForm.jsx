import React from 'react';
import { useForm } from '@inertiajs/react';
import FieldGroup from '@/Components/Form/FieldGroup';
import TextInput from '@/Components/Form/TextInput';
import LoadingButton from '@/Components/Button/LoadingButton';

export default function PackageForm ({ method, initialValues, routeName, packageData='' }) {
  const { data, setData, post, patch, errors, processing } = useForm({
    ...initialValues
  });

  const submit = (e) => {
    e.preventDefault();
    if (method === 'post') {
      post(route(routeName));
    } else if (method === 'patch') {
      patch(route(routeName, { package: packageData }));
    }
  };

  return (
    <form onSubmit={submit} className='w-full'>
      {/* Name */}
      <FieldGroup
          label='Name'
					name='name'
					error={errors.name}
					isPrimary={true}
          maxLength='70'
          valueLength={data.name.length}
        >
          <TextInput
            id='name'
            name='name'
            className='mt-1 block w-full'
            value={data.name}
						required
						isFocused
						autoComplete="name"
						placeholder="Package Name..."
            onChange={(e) => setData('name', e.target.value)}
          />
        </FieldGroup>

        {/* UOM */}
        <FieldGroup
          label='Unit'
					name='uom'
					error={errors.uom}
					isPrimary={true}
          maxLength='10'
          valueLength={data.uom.length}
        >
          <TextInput
            id='uom'
            name='uom'
            className='mt-1 block w-full'
            value={data.uom}
						required
						autoComplete="uom"
						placeholder="Package Unit..."
            onChange={(e) => setData('uom', e.target.value)}
          />
        </FieldGroup>

        {/* <input type="submit" value="submit" /> */}
        <LoadingButton disabled={processing}>
          Submit
        </LoadingButton>
    </form>
  );
}