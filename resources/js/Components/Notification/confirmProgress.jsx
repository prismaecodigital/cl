import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'sweetalert2/dist/sweetalert2.min.css';

export default async function ConfirmProgess(currentStatus) {
  const MySwal = withReactContent(Swal);

  try {
    const result = await MySwal.fire({
      title: 'Update Progress?',
      text: 'Decide whether this letter is a win or a lost!',
      icon: 'question',
      showCloseButton: true,
      showCancelButton: false,
      showDenyButton: true,
      confirmButtonText: 'Won',
      denyButtonText: 'Lost',
      confirmButtonColor: '#f97316',
      denyButtonColor: '#9f1239',
    });

    if (result.isConfirmed && currentStatus != 'won') {
      return 'won'; // Return "won" if confirmed
    }

    if (result.isDenied && currentStatus != 'lost') {
      return 'lost'; // Return "loss" if denied
    } 
    
    return null; // Return null if canceled
  } catch (error) {
    console.error('SweetAlert error:', error);
    return false; // Return false if there is an error
  }
}
