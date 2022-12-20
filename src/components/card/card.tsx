import React from "react";
import "./card.css"

function Card(Props: any) {
  const { anime } = Props;
  return (
    <div className="card">
      <div className="">
        <img className="card-img" src={anime.images.jpg.image_url} alt={anime.title}/>
      </div>
      <div className="card-title">
        {
          anime.title
        }
      </div>

    </div>
  );
}

export default Card;
