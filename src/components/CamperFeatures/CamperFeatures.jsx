import style from "./CamperFeatures.module.css";

const CamperFeatures = ({ camper }) => {
  if (!camper) {
    return null;
  }

  return (
    <div className={style.CamperFeatures}>
      <div>
        
      </div>
      <div>
        <h3>Vehice details</h3>
        <table>
          <tbody>
            <tr>
              <td>Form</td>
              <td>Panel truck</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>5.4m</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CamperFeatures;
