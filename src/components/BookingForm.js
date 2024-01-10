import React, { useState } from 'react';

const BookingForm = ({ onReservation }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({
    date: '',
    time: '',
    guests: '',
  });

  const handleReservation = () => {
    if (validateForm()) {
      onReservation({ date, time, guests, occasion });
    } else {
      console.error('Invalid form. Please correct the errors.');
    }
  };

  const generateTimeOptions = () => {
    const startTime = 17; 
    const endTime = 22;  
    const options = [];

    for (let hour = startTime; hour <= endTime; hour++) {
      options.push(`${hour}:00`);
    }

    return options;
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { date: '', time: '', guests: '' };

    if (!date) {
      newErrors.date = 'Select a date.';
      valid = false;
    }

    if (!time) {
      newErrors.time = 'Select a time.';
      valid = false;
    }

    if (!guests || isNaN(guests) || parseInt(guests) <= 0) {
      newErrors.guests = 'Enter a valid number of guests.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <form>
      <div>
        <label htmlFor="date" aria-label="Date:">
          Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <span style={{ color: 'red' }}>{errors.date}</span>
      </div>
      <div>
        <label htmlFor="time" aria-label="Time:">
          Time:
        </label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select a Time</option>
          {generateTimeOptions().map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span style={{ color: 'red' }}>{errors.time}</span>
      </div>
      <div>
        <label htmlFor="guests" aria-label="Number of Guests:">
          Number of Guests:
        </label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <span style={{ color: 'red' }}>{errors.guests}</span>
      </div>
      <div>
        <label htmlFor="occasion" aria-label="Occasion:">
          Occasion:
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select an Occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="celebration">Celebration</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="button" onClick={handleReservation}>
        Make Reservation
      </button>
    </form>
  );
};

export default BookingForm;
