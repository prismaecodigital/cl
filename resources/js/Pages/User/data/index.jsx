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
      key: 'username',
      label: 'Username',
    },
    {
      key: 'fullname',
      label: 'Full Name',
    },
    {
      key: 'role',
      label: 'Role',
      classBody: 'break-word',
      render: item => item.role.map(list => (
        <span className='label label--secondary group-hover:bg-ole-lighter' key={list}> {list} </span>
      ))
    },
    {
      key: 'phone',
      label: 'Phone',
    },
    {
      key: 'email',
      label: 'Email',
    },
  ];
}

export default createColumn;