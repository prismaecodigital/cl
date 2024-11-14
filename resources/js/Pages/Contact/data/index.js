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
      key: 'organization',
      label: 'Organization',
    },
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'phone',
      label: 'Phone',
    },
  ];
}

export default createColumn;