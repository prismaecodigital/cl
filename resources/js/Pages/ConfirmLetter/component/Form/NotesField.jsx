import React, { useState } from 'react';
import FieldGroup from '@/Components/Form/FieldGroup';
import Select from 'react-select';
import TextInput from '@/Components/Form/TextInput';
import TextArea from '@/Components/Form/TextArea';
import DateTimePicker from '@/Components/Form/DateTimePicker';
import ConfirmDelete from '@/Components/Notification/confirmDelete';
import convertOptions from '@/utils/convertOptions';
import { PackageMinus, PackagePlus, Plus, Trash2 } from 'lucide-react';
import addDotsCurrency from '@/utils/addDotsCurrency';
import FormattedDateFlatpickr from '@/utils/DateFormatFlatpickr';

export default function NotesField({ data, setData, errors, selectOption, readOnly=false }) {
  const { packages } = selectOption;

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
        uom: '',
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
    const uom = packages.find(item => item.id === option.value)?.uom || '';
    // Update `notes` data
    updateNotes((notes) => {
      notes[noteIndex].lists[packageIndex].package = option.value;
      notes[noteIndex].lists[packageIndex].packageSelected = option;
      notes[noteIndex].lists[packageIndex].uom = uom;

      return notes;
    });
  }

  return (
    <div className='content-box mb-2 z-0'>
      {/* Section Title */}
      <div className='flex flex-row items-center justify-between gap-2 mb-3'>
        <h2 className='text--sub-heading'>Notes</h2>
        {!readOnly && 
          <span className='btn btn--sm btn--primary' onClick={handleAddNote}>
            <Plus strokeWidth={3} size={16} />
          </span>
        }
      </div>
      
      {/* Notes */}
      {data.notes.map((note, noteIndex) => (
        <div 
          key={noteIndex} 
          className='py-4 px-4 mb-4 shadow-md rounded-md border border-slate-200'
        >
          <div className='flex flex-row gap-2 items-start'>
            {/* Start Date */}
            <FieldGroup 
              label='Start Date'
              name={`notes.${noteIndex}.start_date`}
              error={errors[`notes.${noteIndex}.start_date`]}
              className='flex-1 !mb-0'
            >
              <DateTimePicker
                minDate={data.check_in}
                maxDate={data.check_out}
                name={`notes.${noteIndex}.start_date`}
                value={note.start_date}
                onChange={(value) => {
                  updateNotes((notes) => {
                    notes[noteIndex].start_date = FormattedDateFlatpickr(value);
                    return notes;
                  });
                }}
                className='mt-1 block w-full'
                placeholder='Start Date...'
                withTime={false}
                isDisable={readOnly}
              />
            </FieldGroup>

            {/* End Date */}
            <FieldGroup 
              label='End Date'
              name={`notes.${noteIndex}.end_date`}
              error={errors[`notes.${noteIndex}.end_date`]}
              className='flex-1 !mb-0'
            >
              <DateTimePicker
                minDate={data.check_in}
                maxDate={data.check_out}
                name={`notes.${noteIndex}.end_date`}
                value={note.end_date}
                onChange={(value) => {
                  updateNotes((notes) => {
                    notes[noteIndex].end_date = FormattedDateFlatpickr(value);
                    return notes;
                  });
                }}
                className='mt-1 block w-full'
                placeholder='End Date...'
                withTime={false}
                isDisable={readOnly}
              />
            </FieldGroup>
          </div>
          <div className='flex justify-end my-2'>
            {!readOnly && 
              <span className='btn btn--sm btn--success py-3' onClick={() => handleAddLists(noteIndex)}>
                <PackagePlus className='inline-block mb-1' strokeWidth={3} size={18}/> Add Package
              </span>
            }
          </div>
              
          {/* Package Lists */}
          {note.lists.map((packageItem, packageIndex) => (
            <div key={packageIndex} className='flex flex-col shadow-md rounded-md border border-slate-200 bg-gray-50 p-4 mb-3'>
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
                    isDisabled={readOnly}
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
                    isDisabled={readOnly}
                  />
                </FieldGroup>

                {/* Unit */}
                <FieldGroup
                  label='Unit'
                  name='unit'
                  className='flex-[1-1-16.666667%] w-1/6'
                >
                  <TextInput
                    value={packageItem.uom || ''}
                    isDisabled={true}
                    className='mt-1 block w-full'
                    placeholder='Unit...'
                  />
                </FieldGroup>

                {/* Price */}
                <div className='flex-[1-1-33.333333%] w-1/3'>
                  <label 
                    className='form--label' 
                    htmlFor={`notes.${noteIndex}.lists.${packageIndex}.price`}
                  >
                    Price
                  </label>
                  <div className='flex items-end'>
                    <span className='rounded-l-md px-3 py-2 bg-gray-100 border border-gray-300 text-gray-500'>Rp.</span>
                    <FieldGroup
                      error={errors[`notes.${noteIndex}.lists.${packageIndex}.price`]}
                      className='flex-1 !mb-0'
                    >
                      <TextInput
                        type='text'
                        id={`notes.${noteIndex}.lists.${packageIndex}.price`}
                        name={`notes.${noteIndex}.lists.${packageIndex}.price`}
                        className='mt-1 block w-full !rounded-l-none !rounded-r-md'
                        value={packageItem.priceValue}
                        placeholder='Package Price...'
                        onChange={(e) => {
                          // Remove existing dots
                          const rawValue = e.target.value.replace(/\./g, '');
                          updateNotes((notes) => {
                            notes[noteIndex].lists[packageIndex].price = rawValue;
                            notes[noteIndex].lists[packageIndex].priceValue = addDotsCurrency(rawValue);
                            return notes;
                          });
                        }}
                        isDisabled={readOnly}
                      />
                    </FieldGroup>
                  </div>
                </div>
                
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
                  placeholder='Package Note...'
                  onChange={(e) => {
                    updateNotes((notes) => {
                      notes[noteIndex].lists[packageIndex].note = e.target.value;
                      return notes;
                    });
                  }}
                  isDisabled={readOnly}
                />
              </FieldGroup>
              
              {!readOnly && 
                <span className='btn btn--sm btn--danger py-3 mt-4 inline-block max-w-fit flex-none' onClick={() => handleRemoveLists(noteIndex, packageIndex)}>
                  <PackageMinus strokeWidth={3} size={18} className='mb-1 inline-block'/> Delete Package
                </span>
              }
            </div>
          ))}

          {!readOnly && 
            <div className='flex justify-end'>
              <span className='btn btn--sm btn--danger py-3 mt-4' onClick={() => handleRemoveNote(noteIndex)}>
                <Trash2 strokeWidth={3} size={18} className='mb-1 inline-block'/> Delete Note
              </span>
            </div>
          }
        </div>
      ))}
    </div>
  );
}