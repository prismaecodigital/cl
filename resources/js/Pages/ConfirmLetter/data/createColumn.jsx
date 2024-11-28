import { usePage, Link } from '@inertiajs/react';
import { Pencil, FileText, Eye } from 'lucide-react';
import DeleteConfirmation from '@/Components/Notification/DeleteConfirmation';
import formatToIDR from '@/utils/formatToIDR';

const createColumn = () => {
  const { permissions } = usePage().props.auth;
  const permissionShow = permissions.includes('letter_show');
  const permissionEdit = permissions.includes('letter_edit');
  const permissionExport = permissions.includes('letter_export');
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
      <div className='flex flex-row gap-2 items-center'>
        {permissionShow &&
          <Link 
            href={route('confirm-letter.show', item.id)}
            className='py-2 px-3 rounded-md bg-success text-white'
          >
            <Eye className='inline-block mb-1' strokeWidth={3} size={16} />
          </Link>
        }
        {permissionExport && 
          <a
            target='_blank'
            href={route('confirm-letter.export', item.id)}
            className='py-2 px-3 rounded-md bg-sky-500 text-white'
          >
            <FileText className='inline-block mb-1' strokeWidth={3} size={16} />
          </a>
        }
        
        {permissionEdit &&
          <Link 
            href={route('confirm-letter.edit', item.id)}
            className='py-2 px-3 rounded-md bg-warning text-white'
          >
            <Pencil className='inline-block mb-1' strokeWidth={3} size={16} />
          </Link>
        }
        {(permissionDelete && item.canDelete) &&
          <DeleteConfirmation 
            id={item.id} 
            routeName='confirm-letter.destroy'
            className='!bg-danger !ml-0 text-white py-2 px-3 rounded-md'
            withText={false}
          />
        }
      </div>
    ),
  };

  if (permissionEdit || permissionDelete) {
    columns.push(action);
  }

  return columns;
}

export default createColumn;