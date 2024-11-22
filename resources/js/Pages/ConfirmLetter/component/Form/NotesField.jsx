import React, { useState } from 'react';
import FieldGroup from '@/Components/Form/FieldGroup';
import Select from 'react-select';
import TextInput from '@/Components/Form/TextInput';
import TextArea from '@/Components/Form/TextArea';
import DateTimePicker from '@/Components/Form/DateTimePicker';
import ConfirmDelete from '@/utils/confirmDelete';
import convertOptions from '@/utils/convertOptions';
import { PackageMinus, PackagePlus, Plus, Trash2 } from 'lucide-react';

export default function NotesField({ data, setData, errors, selectOption }) {
  const { packages } = selectOption;
  const [uom, setUom] = useState([]);

  // Reusable function to update `notes`
  const updateNotes = (updateFn) => {
    const notes = updateFn([...data.notes]);
    setData('notes', notes);
  };

  const handleAddNote = () => {
    updateNotes((notes) => [...notes, {
      start_date: '',
      end_date: '',
      lists: [{
        package: '',
        packageSelected: '',
        qty: '',
        price: '',
        note: ''
      }],
    }]);
  }

  const handleRemoveNote = async (noteIndex) => {
    const confirmed = await ConfirmDelete();
    if (confirmed) {
      updateNotes((notes) => notes.filter((_, i) => i !== noteIndex));
    }
  }

  const handleAddLists = (noteIndex) => {
    updateNotes((notes) => {
      notes[noteIndex].lists.push({
        package: '',
        packageSelected: '',
        qty: '',
        price: '',
        note: '',
      });

      return notes;
    });
  }

  const handleRemoveLists = async (noteIndex, packageIndex) => {
    const confirmed = await ConfirmDelete();
    if (confirmed) {
      updateNotes((notes) => {
        notes[noteIndex].lists = notes[noteIndex].lists.filter(
          (_, i) => i !== packageIndex
        );
        return notes;
      });
    }
  }

  const handlePackageChange = (option, noteIndex, packageIndex) => {
    // Update `notes` data
    updateNotes((notes) => {
      notes[noteIndex].lists[packageIndex].package = option.value;
      notes[noteIndex].lists[packageIndex].packageSelected = option;
      return notes;
    });

    // Update `uom` state in a single step
    setUom((prevUom) => ({
      ...prevUom,
      [noteIndex]: {
        ...(prevUom[noteIndex] || {}),
        [packageIndex]: packages.find(item => item.id === option.value)?.uom || '',
      },
    }));
  }

  return (
    <div className='content-box mb-2 z-0'>
      {/* Section Title */}
      <div className='flex flex-row items-center justify-between gap-2 mb-3'>
        <h2 className='text--sub-heading'>Notes</h2>
        <span className='btn btn--sm btn--primary' onClick={handleAddNote}>
          <Plus strokeWidth={3} size={16} />
        </span>
      </div>
      
      {/* Notes */}
      {data.notes.map((note, noteIndex) => (
        <div 
          key={noteIndex} 
          className='py-3 px-4 mb-4 shadow-md rounded-md border border-slate-200'
        >
          <div className='flex flex-row gap-2 items-end'>
            {/* Start Date */}
            <FieldGroup 
              label='Start Date'
              name={`notes.${noteIndex}.start_date`}
              error={errors[`notes.${noteIndex}.start_date`]}
              isPrimary={true}
              className='flex-1 !mb-0'
            >
              <DateTimePicker
                minDate='today'
                name={`notes.${noteIndex}.start_date`}
                value={note.start_date}
                onChange={(value) => {
                  updateNotes((notes) => {
                    notes[noteIndex].start_date = value;
                    return notes;
                  });
                }}
                className='mt-1 block w-full'
                placeholder='Start Date...'
                withTime={false}
                required
              />
            </FieldGroup>

            {/* End Date */}
            <FieldGroup 
              label='End Date'
              name={`notes.${noteIndex}.end_date`}
              error={errors[`notes.${noteIndex}.start_date`]}
              className='flex-1 !mb-0'
            >
              <DateTimePicker
                minDate='today'
                name={`notes.${noteIndex}.end_date`}
                value={note.end_date}
                onChange={(value) => {
                  const notes = [...data.notes];
                  notes[noteIndex].end_date = value;
                  setData('notes', notes);
                }}
                className='mt-1 block w-full'
                placeholder='End Date...'
                withTime={false}
              />
            </FieldGroup>
            <span className='btn btn--sm btn--success py-3' onClick={() => handleAddLists(noteIndex)}>
              <PackagePlus strokeWidth={3} size={18}/>
            </span>
          </div>
              
          {/* Package Lists */}
          {note.lists.map((packageItem, packageIndex) => (
            <div key={packageIndex} className='flex flex-col shadow-md rounded-md border border-slate-200 bg-gray-50 mt-4 p-4'>
              <div className='flex flex-row gap-2'>
                {/* Packages */}
                <FieldGroup
                  label='Packages'
                  name={`notes.${noteIndex}.lists.${packageIndex}.package`}
                  error={errors[`notes.${noteIndex}.lists.${packageIndex}.package`]}
                  className='flex-[1-1-33.333333%] w-1/3'
                >
                  <Select
                    options={convertOptions(packages)}
                    value={packageItem.packageSelected}
                    className='mt-1 block w-full'
                    menuPortalTarget={document.body} 
                    menuPosition={'fixed'}
                    onChange={(option) => handlePackageChange(option, noteIndex, packageIndex)}
                  />
                </FieldGroup>

                {/* Qty */}
                <FieldGroup
                  label='Qty'
                  name={`notes.${noteIndex}.lists.${packageIndex}.qty`}
                  error={errors[`notes.${noteIndex}.lists.${packageIndex}.qty`]}
                  className='flex-[1-1-16.666667%] w-1/6'
                >
                  <TextInput
                    id={`notes.${noteIndex}.lists.${packageIndex}.qty`}
                    name={`notes.${noteIndex}.lists.${packageIndex}.qty`}
                    className='mt-1 block w-full'
                    value={packageItem.qty}
                    autoComplete='name'
                    placeholder='Qty...'
                    onChange={(e) => {
                      updateNotes((notes) => {
                        notes[noteIndex].lists[packageIndex].qty = e.target.value;
                        return notes;
                      });
                    }}
                  />
                </FieldGroup>

                {/* Unit */}
                <FieldGroup
                  label='Unit'
                  name='unit'
                  className='flex-[1-1-16.666667%] w-1/6'
                >
                  <TextInput
                    value={uom?.[noteIndex]?.[packageIndex] || ''}
                    disabled={true}
                    className='mt-1 block w-full'
                    placeholder='Unit...'
                  />
                </FieldGroup>

                {/* Price */}
                <FieldGroup
                  label='Price'
                  name='name'
                  error={errors.name}
                  className='flex-[1-1-33.333333%] w-1/3'
                >
                  <TextInput
                    id='name'
                    name='name'
                    className='mt-1 block w-full'
                    value={packageItem.price}
                    autoComplete='name'
                    placeholder='Package Price...'
                    onChange={(e) => {
                      updateNotes((notes) => {
                        notes[noteIndex].lists[packageIndex].price = e.target.value;
                        return notes;
                      });
                    }}
                  />
                </FieldGroup>
              </div>

              {/* Note */}
              <FieldGroup
                label='Notes'
                name={`notes.${noteIndex}.lists.${packageIndex}.note`}
                error={errors[`notes.${noteIndex}.lists.${packageIndex}.note`]}
                className='!mb-0'
              >
                <TextArea
                  id={`notes.${noteIndex}.lists.${packageIndex}.note`}
                  name={`notes.${noteIndex}.lists.${packageIndex}.note`}
                  className='mt-1 block w-full'
                  value={packageItem.note}
                  autoComplete='note'
                  placeholder='Package Note...'
                  onChange={(e) => {
                    updateNotes((notes) => {
                      notes[noteIndex].lists[packageIndex].note = e.target.value;
                      return notes;
                    });
                  }}
                />
              </FieldGroup>

              <span className='btn btn--sm btn--danger py-3 mt-4 inline-block max-w-fit flex-none' onClick={() => handleRemoveLists(noteIndex, packageIndex)}>
                <PackageMinus strokeWidth={3} size={18} className='mb-1 inline-block'/> Remove Package
              </span>
            </div>
          ))}

          <span className='btn btn--sm btn--danger py-3 mt-4 block' onClick={() => handleRemoveNote(noteIndex)}>
            <Trash2 strokeWidth={3} size={18} className='mb-1 inline-block'/> Delete Note
          </span>
        </div>
      ))}
    </div>
  );
}