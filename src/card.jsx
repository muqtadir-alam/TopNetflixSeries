import React from 'react';
import style from './index.css'




function Card(props) {
    return (
      <>
        
        

      <div className="cards">
        <div className="card">
            <img src={props.img}
              alt="this is img" className="card_img" />
          <div className="card_info">
            <span className="card_category">
            {props.title}
            </span>
            <h2 className="card_title">{props.name} </h2>
              <a href={props.link}
                target="blank"> <button className="button">watch now</button></a>
           
       </div>
       
        </div>
      </div>
      
  
      </>
    );
  }
  
  export default Card;