import React from 'react';
import { Toast } from 'flowbite-react';
import { HiCheck, HiX, HiExclamation } from 'react-icons/hi';

export const typeToast = {
  success: 'success',
  error: 'error',
  warning: 'warning',
};

export default function CustomToast({ message, type }) {
  const { success, error, warning } = typeToast;
  let icon = null;
  let toastBgClass = '';

  if (type === success) {
    icon = <HiCheck className="h-5 w-5 text-green-500" />;
    toastBgClass = 'bg-green';
  } else if (type === error) {
    icon = <HiX className="h-5 w-5 text-red-500" />;
    toastBgClass = 'bg-red';
  } else if (type === warning) {
    icon = <HiExclamation className="h-5 w-5 text-yellow-500" />;
    toastBgClass = 'bg-yellow';
  }

  return (
    <Toast className={`${toastBgClass}-400`}>
      <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${toastBgClass}-100`}>
        {icon}
      </div>
      <div className="ml-3 text-sm font-normal text-white">
        {message}
      </div>
      <Toast.Toggle className={`${toastBgClass} text-white`} />
    </Toast>
  );
}