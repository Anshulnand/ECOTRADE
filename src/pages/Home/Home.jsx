import React, { useContext, useState } from "react";
import "./Home.css"
import { StoreContext } from "../../Context/StoreContext";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import BestFeatures from "../../components/BestFeatures/BestFeatures";
import ServiceImages from "../../components/ServiceImages/ServiceImages";
import { ShoppingCart } from "lucide-react";

const Home = () => {
  const { getTotalCartAmount, currency } = useContext(StoreContext);
 
  const handleAmazonClick = () => {
    window.open("https://www.amazon.in/s?k=khara+agrotech&i=grocery&crid=KJ5E826HWM9B&sprefix=khara+agrotech%2Cgrocery%2C269&ref=nb_sb_noss", "_blank");
  };
  const [category, setCategory] = useState("All");
   const totalAmount = getTotalCartAmount();
  return (
    <>
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      <FoodDisplay category={category} />                          
      {/* <AppDownload/> */}
      <BestFeatures />
      
      {totalAmount > 0 && (
        <div className="floating-cart-total">
          <ShoppingCart className="cart-icon" />
          <span>Total: {currency}{totalAmount}</span>
        </div>
      )}
      
      <div className="AmazonPage-container">
        <header className="AmazonPage-header">
          <h1 className="AmazonPage-title">Welcome to Khara Agrotech</h1>
          <p className="AmazonPage-subtitle">
            Quality Agricultural Products Available on Amazon
          </p>                                                               
          <button
            onClick={handleAmazonClick}
            className="AmazonPage-amazon-button"
          >
            <ShoppingCart className="AmazonPage-button-icon" />
            Shop on Amazon
          </button>
          
        </header>
      </div>

      
      <ServiceImages />
      
      
    </>
  );
};  export default Home;
