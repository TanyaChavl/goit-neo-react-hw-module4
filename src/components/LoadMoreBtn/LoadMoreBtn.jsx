import "./LoadMoreBtn.css";
import PropTypes from "prop-types";

const LoadMoreBtn = ({ onClick }) => (
  <button onClick={onClick} className="load-more-btn">
    Load more
  </button>
);

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;