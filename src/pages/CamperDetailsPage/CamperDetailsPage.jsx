import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./CamperDetailsPage.module.css";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import { selectCamper } from "../../redux/campersSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campersOps";
import CamperFeatureBadges from "../../components/CamperFeatureBadges/CamperFeatureBadges";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import BookForm from "../../components/BookForm/BookForm";
import clsx from "clsx";

const CamperDetailsPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);

  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [camperId, dispatch]);

  return (
    <div>
      {camper && (
        <article>
          <CamperDetails camper={camper} />
          <ul className={style.tabsList}>
            <li>
              <button
                type="button"
                className={clsx(
                  style.tabsButton,
                  activeTab === "features" && style.tabsButtonActive,
                  "font-h3"
                )}
                onClick={() => setActiveTab("features")}
              >
                Features
              </button>
            </li>
            <li>
              <button
                type="button"
                className={clsx(
                  style.tabsButton,
                  activeTab === "reviews" && style.tabsButtonActive,
                  "font-h3"
                )}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </li>
          </ul>
          <div className={style.tabsContent}>
            {activeTab === "features" && <CamperFeatures camper={camper} />}
            {activeTab === "reviews" && <CamperReviews camper={camper} />}
            <div>
              <BookForm camper={camper} />
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default CamperDetailsPage;
