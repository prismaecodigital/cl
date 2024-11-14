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
      key: 'permissions',
      label: 'Permission',
      classBody: 'break-word',
      render: item => item.permissions.map(list => (
        <span className='label label--secondary group-hover:bg-ole-lighter' key={list}> {list} </span>
      ))
    },
  ];
}

export default createColumn;