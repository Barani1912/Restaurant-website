import React from 'react'; 
import './AboutUs.css';
import ambianceImage from '../../assets/restaurant-pic.jpeg';
import foodImage from '../../assets/foodImage.avif';

const chefImage = 'https://www.greavesindia.co.uk/wp-content/uploads/2016/11/chefdamu.jpg';

function AboutUs() {
  return (
    <div className="about-container">
      <h1>About Forks and Flames</h1>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to <strong>Forks and Flames</strong>, where we take pride in offering a delightful dining experience! Our focus is on delivering fresh, flavorful, and artfully crafted dishes that leave a lasting impression.
          </p>
          <p>
            From sourcing the finest ingredients to creating an inviting atmosphere, every detail is meticulously curated. Our passion is not just in the food but in the memories we create for our guests.
          </p>
        </div>

        <div className="about-image">
          <img src={ambianceImage} alt="Restaurant ambiance" />
        </div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={chefImage} alt="Chef at work" />
        </div>

        <div className="about-text">
          <h3>Meet Our Chef</h3>
          <p>
            Our head chef <b>Damu</b> brings over 20 years of culinary expertise to your table. With a passion for blending traditional flavors with modern techniques, our menu is a masterpiece in every bite.
          </p>
          <p>
            Whether you're in the mood for something classic or experimental, our chef ensures each dish is prepared with precision and heart.
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Our Specialty</h3>
          <p>
            Forks and Flames specializes in a variety of cuisines, from sizzling steaks to mouth-watering pastas. Our signature dishes include the flame-grilled burgers and the chef’s special pasta with a secret sauce you won't forget.
          </p>
        </div>

        <div className="about-image">
          <img src={foodImage} alt="Delicious food" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

