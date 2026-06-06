function ResultCard({ title, value }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      {typeof value === "string"
        ? <p>{value}</p>
        : value}
    </div>
  );
}

export default ResultCard;