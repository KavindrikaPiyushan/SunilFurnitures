import React from "react";
import Topbar from "../components/Topbar";
import "./css/home.css";
import ProductCard from "../components/ProductCard.jsx";
import CustomerReviewCard from '../../src/components/customerReviewCard.jsx';
import PromiseCard from '../../src/components/promiseCard.jsx';
import { FaAward } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="text-red-500 bg-gray-900 box-border w-[100%] overflow-x-clip ">
    <Topbar />
    
        <div className="container  ">
            
        <div className ="slider h-[100px] ">
        
        <div className = "slide h-4 ">
        <div className="darklayer"></div>
        <h1 className="title">Quality Furniture, Affordable Prices, Happy Customers</h1>
        <p className="slideContent">Get the luxury look without the luxury price. Our furniture offers elegance, comfort, and durability, all at a price that won’t break the bank. Your satisfaction is our promise.</p>
        
        </div>
        <div className = "slide">
        <div className="darklayer"></div>
        <h1 className="title">Transform Your Space with Luxury</h1>
        <p className="slideContent">Indulge in the ultimate luxury for your home with our exquisite collection of high-end furniture. Every piece is a masterpiece, crafted with precision and designed to transform your space into a sanctuary of style and comfort.</p>
        </div>
        <div className = "slide">
        <div className="darklayer"></div>
          <h1 className="title">Custom Creations for Your Unique Space</h1>
          <p className="slideContent">Elevate your interiors with furniture made to your specifications. Our custom design service offers endless possibilities, allowing you to create pieces that perfectly align with your vision and taste.</p>
        </div>
        <div className = "slide">
        <div className="darklayer"></div>
          <h1 className="title"> Low Prices, High Satisfaction</h1>
          <p className="slideContent">Experience the best of both worlds with our luxurious yet affordable furniture. Our mission is to provide high-quality pieces at prices you’ll love, all while ensuring your complete satisfaction.</p>
        </div>

        <div className = "slide">
        <div className="darklayer"></div>
        <h1 className="title">Elevate Your Living with Timeless Luxury</h1>
        <p className="slideContent">Discover timeless elegance and unparalleled craftsmanship at our luxury furniture shop. Our curated collection features bespoke pieces designed to elevate your living spaces, blending modern sophistication with classic charm. Experience the art of fine living with furniture that reflects your unique style and brings comfort, beauty, and exclusivity to your home.</p>
        </div>
        </div>

        

        </div>
        <div>
        <section className="products text-center bg-gray-900 p-[1rem]">
        <h2 className=" text-[30px]">Our Products</h2>
        <div className="all-products">
        <ProductCard imgsrc="../../images/miniSofa.jpg" price={23} product={"Mini Sofa"}></ProductCard>
        <ProductCard imgsrc="../../images/cupboard.jpeg" price={53} product={"cupboard"}></ProductCard>
        <ProductCard imgsrc="../../images/table.jpg" price={23} product={"Table"}></ProductCard>
        <ProductCard imgsrc="../../images/miniSofa.jpg" price={23} product={"Mini Sofa"}></ProductCard>


        </div>
        </section>
        </div>
        <div className="">
<h2 className=" text-[30px] text-center pb-4  ">Customer Reviews</h2>
        <div className="customerReview  ">
        
        <CustomerReviewCard></CustomerReviewCard>
        <CustomerReviewCard></CustomerReviewCard>
        <CustomerReviewCard></CustomerReviewCard>
        </div>
        </div>
    
    <div className="ourPromise">
        <div className="promiseCover">
        <PromiseCard title={"Quality"}  description={"Here at Gandhara we never compromise on quality; whether it be the workmanship or the raw materials that make our products, everything we do is to the best possible standard."}  Icon={FaAward}/>
        <FaAward/>
        </div>
    </div>


    </div>
  )
}