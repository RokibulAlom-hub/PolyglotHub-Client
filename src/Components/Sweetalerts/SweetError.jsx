
import Swal from 'sweetalert2';

const SweetError = () => {
    return Swal.fire({
        title: 'Error!',
        text: 'Something Wrong Please Try Again',
        icon: 'error',
        confirmButtonText: 'Back'
      })
};

export default SweetError;