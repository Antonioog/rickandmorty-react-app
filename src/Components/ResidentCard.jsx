import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Components/styles.css/ResidentCard.css";

const ResidentCard = ({ resident }) => {
  const [residentInfo, setResidentInfo] = useState();

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="residentCard">
      <div>
        <img className="residentCard__img" src={residentInfo?.image} alt="" />
      </div>
      <div className="residentCard__status">
        <div
          className={`residentCard__status-circle ${residentInfo?.status}`}
        ></div>
        <h4 className="residentCard__status-name">{residentInfo?.status}</h4>
      </div>
      <section className="residentCard__info">
        <h3 className="residentCard__name">{residentInfo?.name}</h3>
        <ul className="residentCard__list">
          <li className="residentCard__item">
            <span>Species:</span>
            {residentInfo?.species}
          </li>
          <li className="residentCard__item">
            <span>Origin:</span>
            {residentInfo?.origin.name}
          </li>
          <li className="residentCard__item">
            <span>Episodes where appears:</span>
            {residentInfo?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
