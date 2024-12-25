import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const SweetSuccess = () => {
  useEffect(() => {
    Swal.fire({
      title: "Good job!",
      text: "Your Work is Done",
      icon: "success"
    });
  }, []);

  return (
    <div>
      {/* The SweetAlert will be shown on component mount */}
    </div>
  );
};

export default SweetSuccess;
