import style from "./CamperDetails.module.css";

const CamperDetails = ({ camper }) => {
  if (!camper) {
    return null;
  }

  return (
    <div className={style.camperDetails}>
      <div></div>
      CAMPER
    </div>
  );
};

export default CamperDetails;
