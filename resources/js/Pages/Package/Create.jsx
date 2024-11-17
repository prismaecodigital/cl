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
		{ link: route('packages.index'), text: 'Package' },
  ];

  const { data, setData, post, errors, processing } = useForm({
		name: '',
		uom: ''
	});

  const submit = (e) => {
		e.preventDefault();
		post(route('packages.store'));
	}
  
  return (
    <div className='content-box'>
			<Breadcrumb title='Package Create' pageName='Create' prevPage={breadcrumb} />
      
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
    </div>
  );
}

Create.layout = page => (
  <DashboardLayout title='Organization Create' children={page} />
);

export default Create;
