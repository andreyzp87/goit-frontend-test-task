const CamperReviews = (camper) => {
  return (
    <>
      {!camper.reviews && camper.reviews.length > 0 && (
        <ul>
          {camper.reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}

      {camper.reviews && camper.reviews.length === 0 && <p>No reviews</p>}
    </>
  );
};

export default CamperReviews;
