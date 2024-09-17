import { useEffect } from "react";
import Container from "../../components/Container/Container";
import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page not found - TravelTrucks";
  }, []);
  return (
    <Container>
      <article className={style.notFoundPage}>
        <h1 className="font-h1">Page not found</h1>
        <p>Sorry, but the page you were looking for doesn't exist.</p>
      </article>
    </Container>
  );
};
export default NotFoundPage;
