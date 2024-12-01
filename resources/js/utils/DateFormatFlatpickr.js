import flatpickr from 'flatpickr';

export default function FormattedDateFlatpickr(selectedDate) {
  const dateObject = new Date(selectedDate);
  const formattedDate = flatpickr.formatDate(dateObject, 'Y-m-d');

  return formattedDate;
}