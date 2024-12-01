export default function addDotsCurrency(value) {
  if (!value) return '';
  // Convert to string to handle integers
  const str = value.toString();
  let result = '';
  let counter = 0;

  // Iterate the string backward
  for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result;
    counter++;
    // Add a dot after every 3 characters (except the last group)
    if (counter % 3 === 0 && i !== 0) {
      result = '.' + result;
    }
  }

  return result;
}