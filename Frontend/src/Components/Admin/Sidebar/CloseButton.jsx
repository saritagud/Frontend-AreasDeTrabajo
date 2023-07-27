import React from 'react'
import { FiX } from 'react-icons/fi';

export default function CloseButton({ handleClose }) {
  return (
    <button
      onClick={handleClose}
      className="flex items-center justify-center w-8 h-8 text-gray-600 transition duration-150 ease-in-out rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
    >
      <FiX className="w-6 h-6" />
    </button>
  )
}