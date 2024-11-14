import formatToIDR from "@/utils/formatToIDR";

const createColumn = () => {
  return [
    {
      key: 'id',
      label: 'No.',
      classHead: 'table--number',
      classBody: 'text-center',
      render: (_, index) => index + 1,
    },
    {
      key: 'check_in',
      label: 'Check In',
    },
    {
      key: 'organization',
      label: 'Organization',
    },
    {
      key: 'pic',
      label: 'PIC',
    },
    {
      key: 'event',
      label: 'Event',
    },
    {
      key: 'sales',
      label: 'Sales',
    },
    {
      key: 'amount',
      label: 'Amount',
      render: item => formatToIDR(item.amount),
    },
  ];
}

export default createColumn;