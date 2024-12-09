import { usePage, Link } from "@inertiajs/react";
import { Pencil } from "lucide-react";
import ButtonDelete from "@/Components/Button/ButtonDelete";

const createColumn = () => {
  const { permissions } = usePage().props.auth;
  const permissionEdit = permissions.includes('role_edit');
  const permissionDelete = permissions.includes('role_delete');

  const columns = [
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

  const action = {
    key: 'actions',
    label: 'Action',
    classHead: 'table--action',
    classBody: 'table--action',
    render: item => (
      <>
        {permissionEdit &&
          <Link href={route('roles.edit', item.id)} className='text-warning'>
            <Pencil className='inline-block mb-1' size={14} /> Edit
          </Link>
        }
        {(permissionDelete && item.canDelete) &&
          <ButtonDelete id={item.id} name={item.name} routeName='roles.destroy' />
        }
      </>
    ),
  };

  if (permissionEdit || permissionDelete) {
    columns.push(action);
  }

  return columns;
}

export default createColumn;