import { usePage, Link } from "@inertiajs/react";
import { Pencil } from "lucide-react";
import ButtonDelete from "@/Components/Button/ButtonDelete";

const createColumn = () => {
  const { permissions } = usePage().props.auth;
  const permissionEdit = permissions.includes('pic_edit');
  const permissionDelete = permissions.includes('pic_delete');

  const columns =[
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

  const action = {
    key: 'actions',
    label: 'Action',
    classHead: 'table--action',
    classBody: 'table--action',
    render: item => (
      <>
        {permissionEdit &&
          <Link href={route('contacts.edit', item.id)} className='text-warning'>
            <Pencil className='inline-block mb-1' size={14} /> Edit
          </Link>
        }
        {(permissionDelete && item.canDelete) &&
          <ButtonDelete id={item.id} name={item.name} routeName='contacts.destroy' />
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