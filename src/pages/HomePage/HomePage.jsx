import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <article>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <p>
          <Link to="/catalog">View now</Link>
        </p>
      </article>
    </div>
  );
};

export default HomePage;
