import React from 'react';
import FieldGroup from '@/Components/Form/FieldGroup';
import DateTimePicker from '@/Components/Form/DateTimePicker';
import TextInput from '@/Components/Form/TextInput';
import LoadingButton from '@/Components/Button/LoadingButton';
import ConfirmDelete from '@/Components/Notification/confirmDelete';
import { Plus, Trash2 } from 'lucide-react';
import FormattedDateFlatpickr from '@/utils/DateFormatFlatpickr';

export default function FnbField({ data, setData, errors, processing, readOnly=false }) {
  // Reusable function to update `notes`
  const updateSchedule = (updateFn) => {
    const schedules = updateFn([...data.schedules]);
    setData('schedules', schedules);
  };

  const handleAddSchedule = () => {
    updateSchedule((schedules) => [...schedules, {
      date: '',
      breakfast: '',
      cb_morning: '',
      lunch: '',
      cb_evening: '',
      dinner: '',
      cb_night: '',
    }]);
  }

  const handleRemoveSchedule = async (index) => {
    const confirmed = await ConfirmDelete();
    if (confirmed) {
      updateSchedule((schedules) => schedules.filter((_, i) => i !== index));
    }
  }

  return (
    <div className='content-box mb-2 z-0'>
      {/* Section Title */}
      <div className='flex flex-row items-center justify-between gap-2 mb-3'>
        <h2 className='text--sub-heading'>Food & Beverage Schedules</h2>
        {!readOnly && 
          <span className='btn btn--sm btn--primary' onClick={handleAddSchedule}>
            <Plus strokeWidth={3} size={16} />
          </span>
        }
      </div>

      {/* Schedule */}
      {data.schedules.map((item, index) => (
        <div 
         key={index} 
         className='py-3 px-4 mb-4 shadow-md rounded-md border border-slate-200 bg-gray-50'
        >
          {/* Date */}
          <FieldGroup 
            label='Date'
            name={`schedules.${index}.date`}
            error={errors[`schedules.${index}.date`]}
            className='block w-full'
          >
            <DateTimePicker
              minDate={data.check_in}
              maxDate={data.check_out}
              name={`schedules.${index}.date`}
              value={item.date}
              onChange={(value) => {
                const dateValue = FormattedDateFlatpickr(value);
                updateSchedule((schedules) => {
                  schedules[index].date = dateValue == '1970-01-01' ? '' : dateValue;
                  return schedules;
                });
              }}
              className='mt-1 block w-full'
              placeholder='Date...'
              withTime={false}
              isDisable={readOnly}
            />
          </FieldGroup>

          <div className='flex flex-col lg:flex-row gap-2 mt-3 items-end'>
            {/* Breakfast */}
            <FieldGroup 
              label='Breakfast'
              name={`schedules.${index}.breakfast`}
              error={errors[`schedules.${index}.breakfast`]}
              maxLength='10'
              valueLength={item.breakfast.length}
              className='flex-1 w-full'
            >
              <TextInput
                name={`schedules.${index}.breakfast`}
                type='text'
                value={item.breakfast || ''}
                className='mt-1 block w-full'
                placeholder='Breakfast...'
                onChange={(e) => {
                  updateSchedule((schedules) => {
                    schedules[index].breakfast = e.target.value;
                    return schedules;
                  });
                }}
                isDisabled={readOnly}
              />
            </FieldGroup>

            {/* Morning Coffee Break */}
            <FieldGroup 
              label='Morning Coffee Break'
              name={`schedules.${index}.cb_morning`}
              error={errors[`schedules.${index}.cb_morning`]}
              maxLength='10'
              valueLength={item.cb_morning.length}
              className='flex-1 w-full'
            >
              <TextInput
                name={`schedules.${index}.cb_morning`}
                type='text'
                value={item.cb_morning || ''}
                className='mt-1 block w-full'
                placeholder='Morning Coffe Break...'
                onChange={(e) => {
                  updateSchedule((schedules) => {
                    schedules[index].cb_morning = e.target.value;
                    return schedules;
                  });
                }}
                isDisabled={readOnly}
              />
            </FieldGroup>

            {/* Lunch */}
            <FieldGroup 
              label='Lunch'
              name={`schedules.${index}.lunch`}
              error={errors[`schedules.${index}.lunch`]}
              maxLength='10'
              valueLength={item.lunch.length}
              className='flex-1 w-full'
            >
              <TextInput
                name={`schedules.${index}.lunch`}
                type='text'
                value={item.lunch || ''}
                className='mt-1 block w-full'
                placeholder='Lunch...'
                onChange={(e) => {
                  updateSchedule((schedules) => {
                    schedules[index].lunch = e.target.value;
                    return schedules;
                  });
                }}
                isDisabled={readOnly}
              />
            </FieldGroup>

            {/* Evening Coffee Break */}
            <FieldGroup 
              label='Evening Coffee Break'
              name={`schedules.${index}.cb_evening`}
              error={errors[`schedules.${index}.cb_evening`]}
              maxLength='10'
              valueLength={item.cb_evening.length}
              className='flex-1 w-full'
            >
              <TextInput
                name={`schedules.${index}.cb_evening`}
                type='text'
                value={item.cb_evening || ''}
                className='mt-1 block w-full'
                placeholder='Evening Coffee Break...'
                onChange={(e) => {
                  updateSchedule((schedules) => {
                    schedules[index].cb_evening = e.target.value;
                    return schedules;
                  });
                }}
                isDisabled={readOnly}
              />
            </FieldGroup>

            {/* Dinner */}
            <FieldGroup 
              label='Dinner'
              name={`schedules.${index}.dinner`}
              error={errors[`schedules.${index}.dinner`]}
              maxLength='10'
              valueLength={item.dinner.length}
              className='flex-1 w-full'
            >
              <TextInput
                name={`schedules.${index}.dinner`}
                type='text'
                value={item.dinner || ''}
                className='mt-1 block w-full'
                placeholder='Dinner...'
                onChange={(e) => {
                  updateSchedule((schedules) => {
                    schedules[index].dinner = e.target.value;
                    return schedules;
                  });
                }}
                isDisabled={readOnly}
              />
            </FieldGroup>

            {/* Night Coffee Break */}
            <FieldGroup 
              label='Night Coffee Break'
              name={`schedules.${index}.cb_night`}
              error={errors[`schedules.${index}.cb_night`]}
              maxLength='10'
              valueLength={item.cb_night.length}
              className='flex-1 w-full'
            >
              <TextInput
                name={`schedules.${index}.cb_night`}
                type='text'
                value={item.cb_night || ''}
                className='mt-1 block w-full'
                placeholder='Night Coffee Break...'
                onChange={(e) => {
                  updateSchedule((schedules) => {
                    schedules[index].cb_night = e.target.value;
                    return schedules;
                  });
                }}
                isDisabled={readOnly}
              />
            </FieldGroup>
          </div>

          {!readOnly && 
            <div className='flex justify-end'>
              <span className='btn btn--sm btn--danger py-3' onClick={() => handleRemoveSchedule(index)}>
                <Trash2 className='inline-block mb-1' strokeWidth={3} size={18}/> Delete Schedule
              </span>
            </div>
          }
        </div>
      ))}

      {!readOnly && 
        <LoadingButton disabled={processing}>
          Submit
        </LoadingButton>
      }
    </div>
  );
}