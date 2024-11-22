import React from 'react';
import FieldGroup from '@/Components/Form/FieldGroup';
import DateTimePicker from '@/Components/Form/DateTimePicker';
import TextInput from '@/Components/Form/TextInput';
import LoadingButton from '@/Components/Button/LoadingButton';
import { Plus, Trash2 } from 'lucide-react';

export default function FnbField({ data, setData, errors, processing }) {
  // Reusable function to update `notes`
  const updateSchedule = (updateFn) => {
    const schedules = updateFn([...data.schedules]);
    setData('schedules', schedules);
  };

  return (
    <div className='content-box mb-2 z-0'>
      {/* Section Title */}
      <div className='flex flex-row items-center justify-between gap-2 mb-3'>
        <h2 className='text--sub-heading'>Food & Beverage Schedules</h2>
        <span className='btn btn--sm btn--primary'>
          <Plus strokeWidth={3} size={16} />
        </span>
      </div>

      {/* Schedule */}
      {data.schedule.map((item, index) => (
        <div 
         key={index} 
         className='flex flex-column gap-2 py-3 px-4 mb-4 shadow-md rounded-md border border-slate-200 bg-gray-50'
        >
          <div className='flex flex-row gap-2'>
            {/* Date */}
            <FieldGroup 
              label='Date'
              name={`schedules.${index}.date`}
              error={errors[`schedules.${index}.date`]}
              className='!mb-0'
            >
              <DateTimePicker
                minDate='today'
                name={`schedules.${index}.date`}
                value={item.date}
                onChange={(value) => {
                  updateSchedule((schedules) => {
                    schedules[index].date = value;
                    return notes;
                  });
                }}
                className='mt-1 block w-full'
                placeholder='Date...'
                withTime={false}
              />
            </FieldGroup>
            <span className='btn btn--sm btn--success py-3'>
              <Trash2 strokeWidth={3} size={18}/>
            </span>
          </div>
        </div>
      ))}

      <LoadingButton disabled={processing}>
        Submit
      </LoadingButton>
    </div>
  );
}