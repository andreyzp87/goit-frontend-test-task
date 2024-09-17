import { Link } from "react-router-dom";
import style from "./HomePage.module.css";
import clsx from "clsx";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Camperts of your dreams - TravelTrucks";
  }, []);

  return (
    <div className={style.homePage}>
      <article>
        <div className={style.titles}>
          <h1 className={clsx(style.title, "font-h1")}>
            Campers of your dreams
          </h1>
          <h2 className="font-h2">
            You can find everything you want in our catalog
          </h2>
        </div>
        <p>
          <Link className="button button-action" to="/catalog">
            View now
          </Link>
        </p>
      </article>
    </div>
  );
};

export default HomePage;
