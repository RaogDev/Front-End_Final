// ReservationModal.js

import React from 'react';

const ReservationModal = ({ onClose }) => {
  return (
    <div className="reservation-modal">
      <div className="modal-content">
        <h2>Reservation Successful!</h2>
        <p>Thank you for booking with us. Your reservation is confirmed.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ReservationModal;
