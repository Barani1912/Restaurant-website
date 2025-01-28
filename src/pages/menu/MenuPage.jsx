import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';
import './Menu.css';
//import toast from 'react-hot-toast';

const MenuPage = () => {
  const [quantities, setQuantities] = useState({});
  const [popupMessage, setPopupMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const dispatch = useDispatch();

  const menuItems = [
    { id: 12190001, name: 'Pizza Margherita', price: 299, image: 'https://img.freepik.com/premium-photo/top-view-pizza-margherita-traditional-italian-cuisine-black-background-concept-food-photography-pizza-margherita-italian-cuisine-top-view-black-background_864588-43880.jpg' },
    { id: 12190002, name: 'Spaghetti Carbonara', price: 399, image: 'https://www.recipetineats.com/tachyon/2023/01/Carbonara_6a.jpg?resize=900%2C1125&zoom=1' },
    { id: 12190003, name: 'Cheeseburger', price: 249, image: 'https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg' },
    { id: 12190004, name: ' Caesar Salad', price: 199, image: 'https://img.pikbest.com/ai/illus_our/20230414/d774bc3118ba269eb7250d9b375fd7d1.jpg!sw800' },
    { id: 12190005, name: 'Tacos', price: 349, image: 'https://img.freepik.com/premium-photo/traditional-mexican-taco-dish-black-background-tasty-dish-ai-generated_894218-4144.jpg' },
    { id: 12190006, name: 'Fish and Chips', price: 449, image: 'https://img.pikbest.com/wp/202344/appetizer-deliciously-appetizing-savory-fried-fish-and-chips-served-on-a-richly-textured-dark-table_9935192.jpg!w700wp' },
    { id: 12190007, name: 'Vegetarian Lasagna', price: 399, image: 'https://t3.ftcdn.net/jpg/05/98/52/56/360_F_598525663_ez9cj6mINly3fEg720Ue6xZsiD1LYZzb.jpg' },
    { id: 12190008, name: 'BBQ Ribs', price: 499, image: 'https://img.freepik.com/premium-photo/bbq-smoked-ribs-with-black-background_1040322-4432.jpg' },
    { id: 12190009, name: 'Fried Chicken', price: 299, image: 'https://static.vecteezy.com/system/resources/previews/027/671/371/non_2x/crispy-fried-chicken-on-the-wooden-board-with-dark-lighting-and-black-background-food-and-delivery-concept-generative-ai-free-photo.jpg' },
    { id: 12190010, name: 'Steak', price: 649, image: 'https://www.shutterstock.com/image-photo/fresh-juicy-delicious-beef-steak-600nw-1898765446.jpg' },
    { id: 12190011, name: 'Sushi', price: 449, image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3D%2522sushi%2Bblack%2Bbackground%2522&psig=AOvVaw36r7WFW5RP2YvUlC8jeKKN&ust=1738139051001000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiJjOT-l4sDFQAAAAAdAAAAABAE' },
    { id: 12190012, name: 'Pad Thai', price: 349, image: 'https://img.freepik.com/premium-photo/pad-thai-stirfried-noodles-with-chicken-peanuts-herbs-black-background_766625-10640.jpg' },
    { id: 12190013, name: 'Pasta Bolognese', price: 379, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65Amo51B1Fu8H2T60cZuDu8uPh029668ZFw&s' },
    { id: 12190014, name: 'Grilled Salmon', price: 599, image: 'https://t3.ftcdn.net/jpg/06/18/61/84/360_F_618618402_D4nCkRznRalepGIcuvXIzT8uLdzFBYuF.jpg' },
    { id: 12190015, name: 'Beef Tacos', price: 349, image: 'https://img.freepik.com/premium-photo/mexican-tacos-with-beef-corn-vegetables-black-background_627050-13091.jpg' },
    { id: 12190016, name: 'Chicken Wings', price: 199, image: 'https://png.pngtree.com/background/20230519/original/pngtree-japanese-asian-style-wings-with-sauce-in-black-plate-picture-image_2651564.jpg' },
    { id: 12190017, name: 'Veggie Burger', price: 249, image: 'https://img.freepik.com/premium-photo/fresh-juicy-burger-black-background_287187-46.jpg' },
    { id: 12190018, name: 'Shrimp Fried Rice', price: 399, image: 'https://img.freepik.com/premium-photo/rice-with-shrimps-vegetables-black-background-rice-with-vegetables-shrimps-black-background-top-view-ai-generated_585735-5501.jpg' },
    { id: 12190019, name: 'Chicken Alfredo', price: 499, image: 'https://img.freepik.com/premium-photo/chicken-alfredo-pasta-black-background_960396-123971.jpg' },
    { id: 12190020, name: 'Beef Stroganoff', price: 529, image: 'https://img.freepik.com/premium-photo/beef-stroganoff-hearty-black-background_960396-123253.jpg' },
    { id: 12190021, name: 'Ramen', price: 349, image: 'https://png.pngtree.com/background/20230616/original/pngtree-bowl-of-ramen-in-a-black-bowl-with-chopsticks-picture-image_3639748.jpg' },
    { id: 12190022, name: 'Falafel Wrap', price: 199, image: 'https://img.freepik.com/premium-photo/vegetarian-falafel-wraps-with-salad-tomato-black-background_1103944-797.jpg' },
    { id: 12190023, name: 'Peking Duck', price: 599, image: 'https://img.freepik.com/premium-photo/top-view-delicious-peking-duck-food-plate-isolated-black-background_162279-5790.jpg' },
    { id: 12190024, name: 'Lobster Roll', price: 699, image: 'https://img.freepik.com/premium-photo/captures-lobster-roll-from-unique-angle-showcasing-juicy-lobster-chunks-overflowing-from-bun-complemented-by-light-drizzle-savory-creamy-mayo_216520-2963.jpg' },
    { id: 12190025, name: 'Chocolate Cake', price: 199, image: 'https://st5.depositphotos.com/78198210/65337/i/450/depositphotos_653375452-stock-photo-slice-chocolate-cake-professional-color.jpg' },
    { id: 12190026, name: 'Creme Brulee', price: 249, image: 'https://img.freepik.com/premium-photo/creme-brule-plate-black-background-illustration-generative-ai_850810-1839.jpg' },
    { id: 12190027, name: 'Apple Pie', price: 149, image: 'https://img.freepik.com/premium-photo/photo-apple-pie-black-background-food-photography_131346-1445.jpg' },
    { id: 12190028, name: 'Cheesecake', price: 249, image: 'https://img.freepik.com/premium-photo/piece-cheesecake-with-mint-black-background-closeup_602166-1898.jpg' },
    { id: 12190029, name: 'Chocolate Mousse', price: 199, image: 'https://media.istockphoto.com/id/975039490/photo/piece-of-chocolate-cake-chocolate-mousse-cake-slice-on-a-black-board-black-background.jpg?s=612x612&w=0&k=20&c=K0pMxvj1CG71gHPC2unqUm6AWZXjThw6VqCVf7uW6_4=' },
    { id: 12190030, name: 'Ice Cream Sundae', price: 129, image: 'https://img.freepik.com/premium-photo/ice-cream-sundae-classic-black-background_960396-123247.jpg' }
  ];

  const handleQuantityChange = (id, change) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + change),
      //Math.max(0, ...)-->ensures the quantity never goes below 0...
    }));
  };
  

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 0;
    if (quantity > 0) {
      dispatch(addToCart({ item, quantity }));
      setQuantities(prev => ({ ...prev, [item.id]: 0 }));
      // reset the quantity of added items back to 0.... 
      // toast.success(`${quantity} items added to cart`)
      setPopupMessage(`${quantity} items added to cart`);
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 1500);
    }
  };



  return (
    <div>
      <div className='title'>
        <h1>Our Menu</h1>
      </div>
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <h3 style={{fontSize:"23px"}}>{item.name}</h3>
            <p>₹{item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span>{quantities[item.id] || 0}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
            <button className='add-to-cart-btn' onClick={() => handleAddToCart(item)}>
              ADD
            </button>
          </div>
        ))}
      </div>
      {popupVisible && (
        <div className="added-to-cart-popup">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default MenuPage;





