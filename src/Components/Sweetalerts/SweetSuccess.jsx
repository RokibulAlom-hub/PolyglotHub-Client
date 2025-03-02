import Swal from "sweetalert2";

const SweetSuccess = ({ titletxt, subtxt, icon }) => {
  return Swal.fire({
    title: titletxt,
    text: subtxt,
    icon: icon,
  });
};

export default SweetSuccess;
