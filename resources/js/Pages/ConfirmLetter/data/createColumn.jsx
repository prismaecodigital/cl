import { usePage, Link } from "@inertiajs/react";
import { Pencil } from "lucide-react";
import DeleteConfirmation from "@/Components/Notification/DeleteConfirmation";
import formatToIDR from "@/utils/formatToIDR";

const createColumn = () => {
  const { permissions } = usePage().props.auth;
  const permissionEdit = permissions.includes('letter_edit');
  const permissionDelete = permissions.includes('letter_delete');

  const columns = [
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

  const action = {
    key: 'actions',
    label: 'Action',
    classHead: 'table--action',
    classBody: 'table--action',
    render: item => (
      <>
        {permissionEdit &&
          <Link href={route('confirm-letter.edit', item.id)} className='text-warning'>
            <Pencil className='inline-block mb-1' size={14} /> Edit
          </Link>
        }
        {(permissionDelete && item.canDelete) &&
          <DeleteConfirmation id={item.id} routeName='confirm-letter.destroy' />
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