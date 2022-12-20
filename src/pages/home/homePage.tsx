import React, { useEffect } from 'react';
import getTopAnime from "../../services/jikan-service";
import Anime from "../../models/anime";
import CardListing from "../../components/card-list/card-listing";

function HomePage() {
  let animes: Anime[] = [];

  const getTopRankAnime = async () => {
    const res = await getTopAnime();
    animes.push(...res.data);
  };
  useEffect(() => {
    getTopRankAnime();
  }, []);
  return(
    <div className="container">
      <div>
        <CardListing animes={animes}/>
      </div>
    </div>
  )
}

export default HomePage;
