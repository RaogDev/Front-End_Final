// ReservationPage.js

import React, { useState } from 'react';
import ReservationModal from './ReservationModal';
import BookingForm from './BookingForm';

const ReservationPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);

  const handleReservation = (details) => {
    console.log('Detalles de la reserva:', details);
    setReservationDetails(details);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="reservation-page">
      <h1>Reservation Page</h1>
      <BookingForm onReservation={handleReservation} />
      {isModalOpen && (
        <ReservationModal
          reservationDetails={reservationDetails}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ReservationPage;
