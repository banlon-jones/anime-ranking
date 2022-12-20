import React from "react";
import "./card-listing.css";
import Anime from "../../models/anime";
import Card from "../card/card";
import "./card-listing.css"

function CardListing(Props: any) {
  const { animes } = Props;
  return(
    <>
      <div className="cardlisting">
        {
          animes.map((anime: Anime) => {
            return (
              <Card anime={anime}/>
            )
          })
        }
      </div>
    </>
  );
}

export default CardListing;
