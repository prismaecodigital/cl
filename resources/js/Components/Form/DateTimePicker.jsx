import React, { useRef } from 'react';
import Flatpickr from 'react-flatpickr';
import { Indonesian } from 'flatpickr/dist/l10n/id.js';
import 'flatpickr/dist/themes/airbnb.css'; // Import a Flatpickr theme
import 'flatpickr/dist/flatpickr.css'; // Import Flatpickr base CSS
import { Trash2 } from 'lucide-react';

export default function DateTimePicker({
  value,
  onChange,
  className = '',
  minDate = '',
  maxDate = '',
  currentDate = '',
  withTime = true,
  isDisable = false, // Add a read-only prop
  ...props
}) {
  const flatpickrRef = useRef(null);

  const handleClear = () => {
    if (flatpickrRef.current) {
      flatpickrRef.current.flatpickr.clear();
    }
  };

  return (
    <div className="relative">
      <Flatpickr
        {...props}
        data-enable-time
        options={{
          altInput: true,
          time_24hr: true,
          enableTime: withTime,
          locale: Indonesian,
          dateFormat: withTime ? 'Y-m-d H:i:S' : 'Y-m-d',
          altFormat: withTime ? 'j F Y H:i:S' : 'j F Y',
          minDate: minDate,
          maxDate: maxDate,
          defaultDate: currentDate,
          defaultHour: 10,
          clickOpens: !isDisable
        }}
        value={value}
        onChange={([selectedDate]) => onChange(selectedDate)} // Prevent onChange if disabled or read-only
        ref={flatpickrRef}
        className={`${
          isDisable
            ? 'border-gray-300 bg-gray-100 text-gray-500 focus:border-gray-300 focus:ring-gray-300'
            : 'border-gray-300 focus:border-ole focus:ring-ole'
        } rounded-md shadow-sm ${className}`}
        
      />

      {/* Add a button to clear the input */}
      {!isDisable && (
        <button
          type="button"
          onClick={handleClear}
          className="ml-2 px-3 py-1 text-gray-400 absolute top-1 right-1"
        >
          <Trash2 />
        </button>
      )}
    </div>
  );
}
