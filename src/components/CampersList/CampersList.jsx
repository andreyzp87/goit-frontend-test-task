import Camper from "../Camper/Camper";
import style from "./CampersList.module.css";

const CampersList = ({ campers }) => {
  return (
    <ul className={style.campersList}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <Camper camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
