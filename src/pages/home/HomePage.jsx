import React from 'react';
import './Home.css';
import photo1 from '../../assets/photo1.jpg';
import pic1 from '../../assets/pic1.avif'
import pic14 from '../../assets/pic14.jpg'
import pic28 from '../../assets/pic28.avif'
import { FaPizzaSlice, FaCocktail, FaStar, FaLeaf, FaFish } from "react-icons/fa";

function Home() {
  return (
    <div className="home">

      <div className="description">
        <h2>Welcome to Forks🍴 and Flames🔥</h2>
        <p>We bring fiery flavors to your table with our diverse menu.</p>
      </div>
      <div className='hero'>
        <img src={photo1} alt='photo1' className='hero-img'/>
      </div>

  
      <div className="features">
        <h3>Our Specialties</h3>
        <div className="feature-icons">
          <div className="feature-item">
            <FaPizzaSlice size={50} />
            <p>Wood-Fired Pizzas</p>
          </div>
          <div className="feature-item">
            <FaCocktail size={50} />
            <p>Signature Cocktails</p>
          </div>
          <div className="feature-item">
            <FaLeaf size={50} />
            <p>Fresh & Organic</p>
          </div>
          <div className="feature-item">
            <FaFish size={50} />
            <p>Seafood Delights</p>
          </div>
        </div>
      </div>


      <div className="menu-highlight">
        <h3 style={{marginBottom:"1rem"}}>Menu Highlights</h3>
        <div className="menu-cards">
          <div className="menu-item">
            <img src={pic1} alt="dish1" height="71%" />
            <h4>Pizza Margherita</h4>
            <p>Classic wood-fired pizza with fresh ingredients.</p>
          </div>
          <div className="menu-item">
            <img src={pic14} alt="dish2" height="71%" />
            <h4>Grilled Salmon</h4>
            <p>Deliciously seasoned salmon grilled to perfection.</p>
          </div>
          <div className="menu-item">
            <img src={pic28} alt="dish3" height="71%" />
            <h4>Cheesecake</h4>
            <p>Enjoy our creamy cheesecake topped with fresh berries for a perfect treat.</p>
          </div>
        </div>
      </div>


      <div className="testimonials">
        <h3 style={{marginBottom:"1rem"}}>What Our Customers Say</h3>
        <div className="testimonial-cards">
          <div className="testimonial-item">
            <FaStar className="star-icon" size={20} color="gold" />
            <p>Amazing food and fantastic service!</p>
            <p>- Charu</p>
          </div>
          <div className="testimonial-item">
            <FaStar className="star-icon" size={20} color="gold" />
            <p>Best pizza I've had in years!</p>
            <p>- Boo</p>
          </div>
          <div className="testimonial-item">
            <FaStar className="star-icon" size={20} color="gold" />
            <p>Lovely ambiance and great refreshments!</p>
            <p>- Arun</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;






