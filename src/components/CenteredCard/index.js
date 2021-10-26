import "./styles.css";

function CenteredCard({ children }) {
  return (
    <div className="container">
      <span>{children}</span>
    </div>
  );
}

export default CenteredCard;
