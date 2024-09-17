import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./CamperDetailsPage.module.css";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import { selectCamper } from "../../redux/campersSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campersOps";
import CamperFeatures from "../../components/CamperFeatures/CamperFeatures";
import CamperReviews from "../../components/CamperReviews/CamperReviews";
import BookForm from "../../components/BookForm/BookForm";
import clsx from "clsx";
import Container from "../../components/Container/Container";
import { selectBooked } from "../../redux/bookingsSlice";

const CamperDetailsPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const booking = useSelector((state) => selectBooked(state, camperId));

  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    dispatch(fetchCamperById(camperId));
  }, [camperId, dispatch]);

  return (
    <Container>
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
            {booking && (
              <p>You have booked this camper for {booking.payload.date}</p>
            )}
            {!booking && <BookForm camper={camper} />}
          </div>
        </article>
      )}
    </Container>
  );
};

export default CamperDetailsPage;
