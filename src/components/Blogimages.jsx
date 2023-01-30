import React from "react";
import "./Blogimages.css";

const Blogimages = () => {
  return (
    <>
      <div className="grid-container" onClick={event =>  window.location.href='https://ithinklogistics.com/blog/what-products-are-banned-and-restricted-in-international-shipping/'}>
      <div className="grid-item item1"><img className="item1-image" src="/big.jpg" /></div>
      <div className="grid-item item2 smaller-blog"><img className="smaller-image" src="/smaller1.jpeg" /> <p> iThink Logistics - Jan 11,2023</p> </div>
      <div className="grid-item item3 smaller-blog"><img className="smaller-image" src="/smaller2.jpeg" /><p> iThink Logistics - Jan 1,2023</p></div>  
      <div className="grid-item item4 smaller-blog"><img className="smaller-image" src="/smaller4.jpg" /><p> iThink Logistics - Dec 25,2022</p></div>
      <div className="grid-item item5 smaller-blog"><img className="smaller-image" src="/smaller6.png" /><p> iThink Logistics - Dec 10,2022</p></div>
    </div>
    </>
  );
};

export default Blogimages;
