import React from "react";
import "./styles.css/ResidentForm.css"

const ResidentForm = ({ handleSubmit }) => {
  return (
    <div className="formCard__background">
    <form className="formCard__formulario" onSubmit={handleSubmit} action="">
      <input type="text" id="idLocation" placeholder="Type a location id" />
      <button className="formCard__buton">Serch</button>
    </form>
    </div>
  );
};

export default ResidentForm;
