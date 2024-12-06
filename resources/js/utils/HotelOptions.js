export default function HotelOptions() {
  const hotels = ['Ole Suites Hotel', 'Ole Suites Cottage', 'Ole Suites Hotel & Cottage', 'RUKUN'];

  return hotels.map(hotel => ({
    value: hotel,
    label: hotel,
  }));
}