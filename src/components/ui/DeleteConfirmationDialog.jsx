import React from 'react';
import Button from './Button';

const DeleteConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-[60]">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-red-500 mx-auto mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.035 3.377 1.705 3.377h13.79c1.67 0 2.571-1.876 1.704-3.376L13.89 4.254a1.87 1.87 0 00-3.78 0z" />
        </svg>
        <h3 className="text-xl font-bold font-serif mb-2">Are you sure?</h3>
        <p className="text-gray-600 mb-6">This action cannot be undone.</p>
        <div className="flex justify-center space-x-4">
          <button onClick={onClose} className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-6 py-3 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors">
            Delete Order
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default DeleteConfirmationDialog;