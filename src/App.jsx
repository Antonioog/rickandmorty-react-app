import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { getRandomNumber } from "./utils/handleRandom";
import LocationInfo from "./Components/LocationInfo";
import Pagination from "./Components/Pagination";
import ResidentList from "./Components/ResidentList";
import ResidentForm from "./Components/RsidentForm";


const RESIDENT_PERPAGE = 12;

function App() {
  //Estado que almacena la informacion de la location.
  const [location, setLocation] = useState();
  //Estado que almacena el valor del input no controlado.
  const [nameLocation, setNameLocation] = useState("");
  //Estado de paginacion.
  const [page, setPage] = useState(1);

  //Funcion que se ejecuta en el submit del formulario.
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameLocation(e.target.idLocation.value);
  };

  //Funcion de la paginacion.
  const pagination = () => {
    const maxLimit = page * RESIDENT_PERPAGE;
    const minLimit = maxLimit - RESIDENT_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents;
  };

  

  //Effecto que se ejecuta en el primer render y cuando cambia el nameLocation.
  useEffect(() => {
    setPage(1);
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation;
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, [nameLocation]);

  return (
    <div className="App">

      <ResidentForm
        handleSubmit={ handleSubmit }
      />
      <LocationInfo location={location} />
      <Pagination 
          
          setPage={setPage}
          location={ location }
          RESIDENT_PERPAGE={ RESIDENT_PERPAGE }
          />
      <ResidentList pagination={pagination} />
      <Pagination 
          
          setPage={setPage} 
          location={ location }
          RESIDENT_PERPAGE={ RESIDENT_PERPAGE }
          />

    </div>
  );
}

export default App;
