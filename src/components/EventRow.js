import EventRowCard from "./EventRowCard"
import "../css/MainPage.css";
import { useState, useCallback } from "react";

const card1 = {
    cardId: 1,
    carouselImgName: ["https://img.cgv.co.kr/WebApp/contents/eventV4/34681/16546637226960.jpg", "https://img.cgv.co.kr/WebApp/contents/eventV4/34680/16546636291360.jpg"],

  };
  const card2 = {
    cardId: 2,
    carouselImgName: ["https://img.cgv.co.kr/WebApp/contents/eventV4/34680/16546636291360.jpg", "https://img.cgv.co.kr/WebApp/contents/eventV4/34641/16541443521240.jpg"],
  };
  
  const card3 = {
    cardId: 3,
    carouselImgName: ["https://img.cgv.co.kr/WebApp/contents/eventV4/34641/16541443521240.jpg", "https://img.cgv.co.kr/WebApp/contents/eventV4/34501/16521431715560.jpg"],
  };

  const cardArr = [card1, card2, card3]

const  EventRow = () => {
    const [clicked] = useState();

    return(
        <div className = "eventRow">
            <table>
              <td><EventRowCard card = {cardArr} click = {clicked}/></td>  
              <td><EventRowCard card = {cardArr} click = {clicked}/></td>  
              <td><EventRowCard card = {cardArr} click = {clicked}/></td>  
            </table>
    
        </div>
    );
}
export default EventRow;