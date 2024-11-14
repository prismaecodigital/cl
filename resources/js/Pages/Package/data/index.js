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
      key: 'name',
      label: 'Name',
    },
    {
      key: 'unit',
      label: 'Unit',
      classHead: 'text-center',
      classBody: 'text-center',
    },
  ];
}

export default createColumn;