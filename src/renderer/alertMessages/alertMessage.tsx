import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { toast } from "react-toastify";

interface AlertMessageProps {
  variant: string;
  message: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ variant, message }) => {
  useEffect(() => {}, [variant, message]);

  return (
    <>
      <Alert key={variant} variant={variant}>
        {message}
      </Alert>
    </>
  );
};

export const successMessageNodify = (msg: string) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "light",
  });
};

export const errorMessageNodify = (msg: string) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    theme: "light",
  });
};

export default AlertMessage;
