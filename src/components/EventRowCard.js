import React from "react";
import "../css/MainPage.css";
import { Link } from "react-router-dom";
import { useState} from "react";


const EventRowCard = ({card, clicked}) => {
    const [carouselIndex, setCarouselIndex] = useState(1);
    
    setTimeout(() => {
        setCarouselIndex((carouselIndex + 1) % 2);
      }, 3000);


    return ( 

        <div className = "eventRowCard">
            <div className = "carousel">      
             {carouselIndex === 1 ? (
            <div>
              <Link to = ""> 
                <img className = "EventCardImage" src = {"https://img.cgv.co.kr/WebApp/contents/eventV4/34681/16546637226960.jpg"}/>
                </Link>
            </div>
          ) : (
            <div>
                 <Link to = ""> 
              <img className = "EventCardImage" src = {"https://img.cgv.co.kr/WebApp/contents/eventV4/34680/16546636291360.jpg"}/>
              </Link>
            </div>
            )}       
            </div>
        </div>
        
        
        
    )
}

export default EventRowCard;