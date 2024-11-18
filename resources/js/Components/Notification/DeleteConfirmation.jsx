import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { router } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';

const MySwal = withReactContent(Swal);

const DeleteConfirmation = ({ id, routeName }) => {
  const handleDelete = () => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        router.delete(route(routeName, id));
      }
    });
  };

  return (
    <button className='text-red-600 ml-2' onClick={handleDelete}>
      <Trash2 className='inline-block mb-1' size={14} /> Delete
    </button>
  );
};

export default DeleteConfirmation;
