import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import { selectData } from "../../redux/camperSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campersOps";

const CamperDetailsPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [camperId, dispatch]);

  return (
    <div>
      {camper && (
        <article>
          <CamperDetails camper={camper} />
          <div>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
            </ul>
          </div>
        </article>
      )}
    </div>
  );
};

export default CamperDetailsPage;
