import "./CardSkeleton.css";
const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => <div className="card-skeleton" key={i}></div>);
};

export default CardSkeleton;
