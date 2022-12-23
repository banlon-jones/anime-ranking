import React from "react";
import "./card-listing.css";
import Anime from "../../models/anime";
import Card from "../card/card";
import uuid from "react-uuid";
import "./card-listing.css"


function CardListing(Props: any) {
  const { animes } = Props;
  return(
    <div>
      <div className="cardlisting">
        {
          animes.map((anime: Anime) => {
            return (
              <Card key={uuid()} anime={anime} />
            )
          })
        }
      </div>
    </div>
  );
}

export default CardListing;
