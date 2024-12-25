import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SweetSuccess = () => {

    return Swal.fire({
      title: "Good job!",
      text: "Your Work is Done ",
      icon: "success"
    });
 

   
};

export default SweetSuccess;
