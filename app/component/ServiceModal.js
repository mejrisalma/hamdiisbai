import React from 'react';
import { Modal } from '@mui/material';

const ServiceModal = ({ open, onClose, service }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="flex items-center justify-center"
    >
      <div className="relative rounded-lg shadow-lg max-w-4xl w-full mx-4 md:mx-0 bg-[#D9D9D9] border-inherit">
        <div className='relative'>
          {service.imageSrc && (
            <img 
              src={service.imageSrc} 
              alt={service.title} 
              className="w-full h-72 object-cover rounded-t-lg" 
            />
          )}
          <div className="p-6 border-b border-gray-200">
            <h2 id="modal-title" className="text-center text-2xl font-semibold text-[#D2973B]">
              {service.title}
            </h2>
          </div>
          <div className="p-6">
            <p id="modal-description" className="text-black text-lg font-bold text-center">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModal;
