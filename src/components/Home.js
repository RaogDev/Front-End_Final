import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="banner" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("paella.png")' }}>
      <h1 style={{ color: 'white' }}>Welcome to Our Restaurant</h1>
        <p style={{ color: 'white' }}>Discover a world of flavors with our exquisite dishes.</p>
        <Link to="/reservation">
          <button aria-label="Make a Reservation">Make a Reservation</button>
        </Link>
      </section>

      <section>
        <h2>Special Dish of the Day</h2>
        <p>Today's featured dish: Grilled Salmon with Lemon Herb Sauce</p>
        <p>Available for a limited time. Don't miss out!</p>
      </section>

      <section>
        <h2>Featured Dishes</h2>
        <div className="dish-cards">
          <div className="dish-card">
            <img src="paella.png" alt="Paella" />
            <h3>Paella</h3>
            <p>Traditional Spanish rice dish with a mix of seafood and meat.</p>
          </div>
          <div className="dish-card">
            <img src="ratatouille.png" alt="Ratatouille" />
            <h3>Ratatouille</h3>
            <p>A French Provençal stewed vegetable dish, originating in Nice.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>User Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"The food was amazing! I'll definitely be back."</p>
            <p>- Jane Doe</p>
          </div>
          <div className="testimonial-card">
            <p>"Great service and delicious dishes. Highly recommend!"</p>
            <p>- John Smith</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
