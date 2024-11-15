import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const toastConfig = {
  theme: 'colored',
  position: 'bottom-right',
  autoClose: 5000,
  draggable: true,
  closeOnClick: true,
  pauseOnHover: false,
  progress: undefined,
  hideProgressBar: true,
};

const ToastContent = {
  success: (message) => {
    toast.success(message, toastConfig);
  },
  error: (message) => {
    toast.success(message, toastConfig);
  }
}

const ToastWrapper = () => {
  return <ToastContainer />
};

export { ToastContent, ToastWrapper };