import React from "react";
import "./card.css";

function Card(Props: any) {
  const { anime } = Props;
  const holdClick = (e: any) => {
    e.currentTarget.childNodes[1].classList.remove('card');
    e.currentTarget.childNodes[1].classList.add('card-expand');
    e.currentTarget.childNodes[1].childNodes[3].classList.remove('hidden');
    e.currentTarget.childNodes[1].childNodes[3].classList.add('show');
  };
  const releaseClick = (e: any) => {
    e.currentTarget.childNodes[1].classList.add('card');
    e.currentTarget.childNodes[1].classList.remove('card-expand');
    e.currentTarget.childNodes[1].childNodes[3].classList.remove('show');
    e.currentTarget.childNodes[1].childNodes[3].classList.add('hidden');
  };
  const dateConverter = (dateString: string) => {
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let date = new Date(dateString);
    return `${weekday[date.getDay()]} ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
  };
  return (
    <div className="card-container" onMouseDown={holdClick} onMouseUp={releaseClick}>
      <div></div>
      <div className="card">
        <div className="tag">
          { anime.rank }
        </div>
        <div>
          <img className="card-img" src={anime.images.jpg.image_url} alt={anime.title}/>
        </div>
        <div className="card-title">
          {
            anime.title
          }
        </div>
        <div className="hidden">
          <p> <strong> Release </strong>: {dateConverter(anime.aired.from)} </p>
          <p> <strong> Lastest </strong>: {(anime.airing || anime.aired.to === undefined || anime.aired.to === null) ? 'now' :  dateConverter(anime.aired.to) } </p>
          <p> <strong> Rating </strong>: {anime.rating} </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
