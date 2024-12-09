import { usePage, Link, router } from '@inertiajs/react';
import ButtonDelete from '@/Components/Button/ButtonDelete';
import formatToIDR from '@/utils/formatToIDR';
import { Pencil, FileText, Eye, Loader, PartyPopper, HeartCrack } from 'lucide-react';
import ConfirmProgess from '@/Components/Notification/confirmProgress';

const createColumn = () => {
  const { permissions } = usePage().props.auth;
  const permissionShow = permissions.includes('letter_show');
  const permissionEdit = permissions.includes('letter_edit');
  const permissionExport = permissions.includes('letter_export');
  const permissionDelete = permissions.includes('letter_delete');

  const statusConfig = {
    progress: {
      color: 'bg-slate-500',
      icon: <Loader className="inline-block mb-[3px]" strokeWidth={3} size={18} />,
    },
    won: {
      color: 'bg-orange-500',
      icon: <PartyPopper className="inline-block mb-[3px]" strokeWidth={3} size={18} />,
    },
    lost: {
      color: 'bg-rose-800',
      icon: <HeartCrack className="inline-block mb-[3px]" strokeWidth={3} size={18} />,
    },
  };

  const handleProgress = async ({ code, status, letter }) => {
    const confirmed = await ConfirmProgess({ code, status });

    if (confirmed) {
      const url = route('confirm-letter.progress', { letter }) + `?status=${confirmed}`;
      router.patch(url);
    }
  };

  const columns = [
    {
      key: 'id',
      label: 'No.',
      classHead: 'table--number',
      classBody: 'text-center',
      render: (_, index) => index + 1,
    },
    {
      key: 'status',
      label: '',
      render: item => {
        const { color, icon } = statusConfig[item.status];
  
        return (
          <span
            className={`p-2 rounded text-white cursor-pointer ${color}`}
            onClick={permissionEdit ? () => handleProgress({
              code: item.code, 
              status: item.status,
              letter: item
            }) : null} 
            style={{ cursor: permissionEdit ? 'pointer' : 'not-allowed' }}
          >
            {icon}
          </span>
        );
      },
    },
    {
      key: 'code',
      label: 'Code',
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
          <ButtonDelete 
            id={item.id}
            name={item.code}
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